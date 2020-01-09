/*
 * 배열 요소 전체의 최대 공약수 구하기
 */

public class GCDOfArray190318 {

    public static int GCD(int a, int b) {
        int r;

        while(b>0) {
            r = a % b;
            a = b;
            b = r;
        }

        return a;
    }

    public static void main(String[] args) {
        int[] arr = {3,2};

        int gcd = arr[0];
        for(int i=1; i<arr.length; i++) {
            if(gcd > arr[i]) {
                gcd = GCD(gcd,arr[i]);
            } else {
                gcd = GCD(arr[i], gcd);
            }
        }

        System.out.println(gcd);
    }
}
