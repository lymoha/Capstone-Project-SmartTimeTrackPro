package capstoneproject.backend.controller;

public class CI_Initializer {
    public static void main(String[] args) {
      int result =  CI_Initializer.sum(12,33);
      System.out.println("The sum of a and b are: " +result);

        int resultMult =  CI_Initializer.multiply(12,3);
        System.out.println("The sum of a and b are: " +resultMult);
    }
    public static int sum(int a, int b) {
        return a + b;
    }

    public static int multiply(int a, int b) {
        return a * b;
    }

}
