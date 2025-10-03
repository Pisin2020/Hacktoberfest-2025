import java.util.Scanner;

// This function is useful for calcultaing a raised to the power b in the fastest time complexity

public class BinaryExponentiation {
    // Function for binary exponentiation
    static long power(long a, long b) {
        long result = 1;
        while (b > 0) {
            if ((b & 1) == 1) {   // if b is odd
                result *= a;
            }
            a *= a;   // square the base
            b >>= 1;  // divide exponent by 2
        }
        return result;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter base (a): ");
        long a = sc.nextLong();

        System.out.print("Enter exponent (b): ");
        long b = sc.nextLong();

        long ans = power(a, b);
        System.out.println(a + "^" + b + " = " + ans);

        sc.close();
    }
}
