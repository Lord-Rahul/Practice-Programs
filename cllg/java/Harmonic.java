public class Harmonic {
    
    public static void main(String[] args){
        int n=8 ;
        double sum=0.0;
        for (int i = 1; i <= n; i++) {
            sum=sum+(1.0/i);
        }
        System.out.println("Sum of Harmonic Series upto n = " + n + " is : " + sum);
    }
}