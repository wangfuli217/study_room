/*
 * 피보나치 배열은 0과 1로 시작하며, 다음 피보나치 수는 바로 앞의 두 피보나치 수의 합이 된다.
 * 정수 N이 주어지면, N보다 작은 모든 짝수 피보나치 수의 합을 구하여라.
 * 예제)
 * Input: N = 12
 * Output: 10 // 0, 1, 2, 3, 5, 8 중 짝수인 2 + 8 = 10.
 */
import java.util.*;

public class SumEvenFibonacci180416 {

    public static int sum = 0;

    public static void solve(int N) {

        if(N <= 1) return;

        List<Integer> l = new ArrayList<>();
        
        l.add(0);
        l.add(1);

        int i = 2;
        while(true) {
            int curVal = l.get(i-1) + l.get(i-2);
            if(curVal >= N) return;
            if(curVal % 2 == 0) sum += curVal;
            l.add(curVal);
            i++;
        }
    }

    public static void main(String[] args) {

        int N;

        sum = 0; N = 10;
        solve(N);
        System.out.println(sum);

        sum = 0; N = 35;
        solve(N);
        System.out.println(sum);

        sum = 0; N = 1000000000;
        solve(N);
        System.out.println(sum);
    }
}
