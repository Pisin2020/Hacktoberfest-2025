import React from 'react';
import { useLocation } from 'react-router-dom';
import { Search } from 'lucide-react';
import Navbar from './Navbar'; 
import Footer from './Footer'; 

const ALL_COURSES = [
  { id: 1, title: 'Full Stack Web Development', description: 'Master React, Node, and SQL for robust applications.', keywords: ['full stack', 'web', 'react', 'node', 'sql'] },
  { id: 2, title: 'Advanced JavaScript', description: 'Deep dive into async/await, promises, and modern ES features.', keywords: ['javascript', 'js', 'async', 'promises', 'advanced'] },
  { id: 3, title: 'Data Science with Python', description: 'Learn pandas, machine learning, and data visualization.', keywords: ['python', 'data science', 'ml', 'pandas'] },
  { id: 4, title: 'UI/UX Design Fundamentals', description: 'Basics of Figma and user-centered design principles.', keywords: ['design', 'ui', 'ux', 'figma'] },
  { id: 5, title: 'Introduction to Cloud Computing', description: 'Explore AWS, Azure, and Google Cloud basics.', keywords: ['cloud', 'aws', 'azure', 'google cloud'] },
  { id: 6, title: 'React Performance Optimization', description: 'Techniques for speeding up React applications.', keywords: ['react', 'performance', 'optimization'] },
];


const SearchResults: React.FC = () => {
  const location = useLocation();
  
  const query = new URLSearchParams(location.search).get('q');
  
  
  const normalizedQuery = query ? query.toLowerCase().trim() : '';

  // 2. FILTERING LOGIC
  const filteredCourses = ALL_COURSES.filter(course => {
    if (!normalizedQuery) return false; // Don't show results if query is empty

    const matchesTitle = course.title.toLowerCase().includes(normalizedQuery);
    const matchesDescription = course.description.toLowerCase().includes(normalizedQuery);
    const matchesKeywords = course.keywords.some(keyword => keyword.includes(normalizedQuery));

    return matchesTitle || matchesDescription || matchesKeywords;
  });

  // 3. RENDER LOGIC
  const renderResults = () => {
    if (!normalizedQuery) {
      return <p className="text-xl text-gray-600">Please enter a search term in the navigation bar.</p>;
    }
    
    if (filteredCourses.length === 0) {
      return (
        <div className="text-center py-16 bg-gray-50 rounded-xl">
          <Search className="w-12 h-12 mx-auto text-red-500 mb-4" />
          <h2 className="text-2xl font-semibold text-gray-800">No results found for "{query}"</h2>
          <p className="text-gray-500">Try adjusting your keywords or browsing our featured courses.</p>
        </div>
      );
    }

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredCourses.map(course => (
          <div key={course.id} className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-bold text-primary-600 mb-2">{course.title}</h3>
            <p className="text-gray-600 mb-4">{course.description}</p>
            <div className="flex flex-wrap gap-2">
              {course.keywords.map(keyword => (
                <span key={keyword} className="text-xs bg-gray-200 text-gray-700 px-3 py-1 rounded-full font-medium">
                  #{keyword}
                </span>
              ))}
            </div>
            <button className="mt-4 w-full btn-primary text-sm">View Course</button>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Note: Navbar usage here assumes it can render without parent state */}
      <Navbar isMenuOpen={false} setIsMenuOpen={() => {}} /> 
      
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-2">Search Results</h1>
        
        <p className="text-lg text-gray-500 mb-10">
          {filteredCourses.length > 0 ? 
            `Found ${filteredCourses.length} results for:` : 
            'Searching for:'
          } <span className="font-semibold text-gray-700">"{query}"</span>
        </p>

        {renderResults()}
      </main>
      
      <Footer />
    </div>
  );
};

export default SearchResults;