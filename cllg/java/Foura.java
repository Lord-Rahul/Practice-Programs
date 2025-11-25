
import java.util.Scanner;

public class Foura {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("enter first number : ");
        int a = sc.nextInt();
        System.out.print("enter Second number : ");
        int b = sc.nextInt();

        int hcf = 1;

        for (int i = 1; i <= a; i++) {
            if (a % i == 0 && b % i == 0) {
                hcf = i;
            }

        }

        int lcm = (a * b) / hcf;

        System.out.print("Hcf = " + hcf);
        System.out.print("LCM = " + lcm);

    }
}
