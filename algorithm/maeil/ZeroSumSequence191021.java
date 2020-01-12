/*
 * 정수 배열이 주어졌을 때, 부분 배열(sub-array)의 합이 0이 될 수 있는지 확인하시오.
 * 부분 배열은 배열 내의 연속된 원소들의 집합입니다.
 * Input: [3, 4, -7, 3, 1, 3, 1, -4, -2, -2]
 * Output: 부분 배열 존재
 */
import java.util.*;

public class ZeroSumSequence191021 {

    public static void solve(int sum, int[] arr) {
        List<Integer> l1 = new ArrayList<>();
        List<Integer> l2 = new ArrayList<>();

        makeSumArray(0,arr,0,arr.length/2-1,l1);
        makeSumArray(0,arr,arr.length/2,arr.length-1,l2);

        l1.forEach(v -> { System.out.print(v + " "); });
        System.out.println();

        l2.forEach(v -> { System.out.print(v + " "); });
        System.out.println();
    }

    public static void makeSumArray(int sum, int[] arr, int s, int e, List<Integer> l) {
        if(s >= e) {
            l.add(sum);
            return;
        }
        
        makeSumArray(sum, arr, s+1, e, l);
        makeSumArray(sum+arr[e], arr, s+1, e, l);
    }

    public static void main(String[] args) {
        //int[] arr = {3, 4, -7, 3, 1, 3, 1, -4, -2, -2};
        int[] arr = {4, 2, -3, -1, 0, 4};
        solve(0,arr);
    }
}
