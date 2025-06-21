import java.util.Scanner;

public class FinancialForecasting {

    
    public static double calculateFutureValue(double presentValue, double rate, int years) {
        if (years == 0) return presentValue;
        return calculateFutureValue(presentValue, rate, years - 1) * (1 + rate);
    }

    
    public static double calculateFutureValueIterative(double presentValue, double rate, int years) {
        double result = presentValue;
        for (int i = 0; i < years; i++) {
            result *= (1 + rate);
        }
        return result;
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        
        System.out.print("Enter present value (initial investment): ");
        double presentValue = scanner.nextDouble();

        System.out.print("Enter annual interest rate (in %): ");
        double ratePercent = scanner.nextDouble();
        double rate = ratePercent / 100.0;

        System.out.print("Enter number of years: ");
        int years = scanner.nextInt();

        
        double recursiveResult = calculateFutureValue(presentValue, rate, years);
        double iterativeResult = calculateFutureValueIterative(presentValue, rate, years);

        
        System.out.printf("Recursive Forecast after %d years: %.2f%n", years, recursiveResult);
        System.out.printf("Iterative Forecast after %d years: %.2f%n", years, iterativeResult);

        scanner.close();
    }
}