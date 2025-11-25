
public class Harmonic2 {

    public static void main(String[] args) {

        int n = 8;
        double sum = 0.00;
        for (int i = 1; i <= n; i++) {
            sum = sum + (1.0 / i);
        }
        System.out.println("Sum of harmonic series upto n = " + n + " is " + sum);
    }
}
