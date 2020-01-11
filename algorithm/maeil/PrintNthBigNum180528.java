/*
 * 정수 배열(int array)이 주어지면 두번째로 큰 값을 프린트하시오.
 */
import java.util.*;
import java.util.HashSet;

public class PrintNthBigNum180528 {

    public static void solve(int[] arr, int k) {

        HashSet<Integer> h = new HashSet<>();

        for(int i=0; i<arr.length; i++) {
            if(!h.contains(arr[i])) {
                h.add(arr[i]);
            }
        }

        List<Integer> l = new ArrayList(h);
        Collections.sort(l);

        if(l.size() >= k) {
            System.out.println(l.get(l.size()-k));
        } else {
            System.out.println("none");
        }
    }

    public static void main(String[] args) {

        int[] arr = {10,5,4,3,-1};
        solve(arr,2);

        int[] arr1 = {3,3,3};
        solve(arr1,2);

        int[] arr2 = {3,3,3};
        solve(arr2,1);

        int[] arr3 = {3};
        solve(arr3,1);

        int[] arr4 = {3};
        solve(arr4,2);

        int[] arr5 = {100,99,88,77};
        solve(arr5,4);

        int[] arr6 = {100,99,88,77};
        solve(arr6,5);
    }
}
