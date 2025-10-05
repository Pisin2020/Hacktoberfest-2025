import axios from 'axios';
import { LoginCredentials, RegisterCredentials, AuthResponse, ApiError, User } from '../types/auth';

class ApiService {
  private api: any;
  private baseURL: string;

  constructor() {
    this.baseURL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';
    
    this.api = axios.create({
      baseURL: this.baseURL,
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // Request interceptor to add auth token
    this.api.interceptors.request.use(
      (config: any) => {
        const token = localStorage.getItem('authToken');
        if (token && config.headers) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error: any) => {
        return Promise.reject(error);
      }
    );

    // Response interceptor for error handling
    this.api.interceptors.response.use(
      (response: any) => response,
      (error: any) => {
        if (error.response?.status === 401) {
          // Token expired or invalid
          localStorage.removeItem('authToken');
          localStorage.removeItem('user');
          window.location.href = '/login';
        }
        return Promise.reject(this.handleError(error));
      }
    );
  }

  private handleError(error: any): ApiError {
    if (error.response?.data) {
      return error.response.data;
    }
    
    if (error.request) {
      return {
        success: false,
        message: 'Network error. Please check your connection and try again.',
      };
    }
    
    return {
      success: false,
      message: error.message || 'An unexpected error occurred.',
    };
  }

  // Authentication endpoints
  async register(credentials: RegisterCredentials): Promise<AuthResponse> {
    const { data } = await this.api.post('/auth/register', credentials);
    return data;
  }

  async login(credentials: LoginCredentials): Promise<AuthResponse> {
    const { data } = await this.api.post('/auth/login', credentials);
    return data;
  }

  async getProfile(): Promise<{ success: boolean; data: { user: User } }> {
    const { data } = await this.api.get('/auth/me');
    return data;
  }

  async updateProfile(profileData: Partial<User>): Promise<{ success: boolean; data: { user: User } }> {
    const { data } = await this.api.put('/auth/profile', profileData);
    return data;
  }

  async changePassword(passwords: { currentPassword: string; newPassword: string }): Promise<{ success: boolean; message: string }> {
    const { data } = await this.api.put('/auth/change-password', passwords);
    return data;
  }

  async healthCheck(): Promise<{ success: boolean; message: string }> {
    const { data } = await this.api.get('/health');
    return data;
  }
}

const apiService = new ApiService();
export default apiService;