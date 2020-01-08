/*
 * 주어진 배열의 3 원소를 합해서 k 라는 수를 만들 수 있나?
 */

import java.util.*;

public class MakeNumer190721 {

    public static boolean solve(int[] arr, int k) {
        Arrays.sort(arr);

        for(int i=0; i<arr.length-2; i++) {
            int curSum = k - arr[i];

            int l = i + 1;
            int r = arr.length - 1;

            while(l < r) {
                if(arr[l] + arr[r] == curSum) {
                    System.out.println(arr[i] + " + " + arr[l] + " + " + arr[r] + " = " + k);
                    return true;
                } else if(arr[l] + arr[r] < curSum) {
                    l++;
                } else {
                    r--;
                }
            }
        }
        return false;
    }

    public static void main(String[] args) {
        int[] arr = {3,4,2,1,-4,-5,3,5,2};
        int k = -8;

        System.out.println(solve(arr, k));
    }
}
