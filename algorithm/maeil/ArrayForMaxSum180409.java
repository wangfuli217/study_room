/*
 * 정수 배열(int array)가 주어지면 가장 큰 이어지는 원소들의 합을 구하시오. 단, 시간복잡도는 O(n).
 */

public class ArrayForMaxSum180409 {

    private static Integer maxVal = Integer.MIN_VALUE;

    public static int solve_recur(int[] arr, int s, int e) {
        if(s == e)
        {
            maxVal = arr[s];
            return arr[s];
        }

        int m = Math.max( solve_recur(arr,s,e-1)+arr[e], arr[e] );
        maxVal = Math.max(maxVal,m);
        return m;
    }

    public static void solve(int[] arr) {

        int curMax = arr[0];
        for(int i=1; i<arr.length; i++) {
            arr[i] = Math.max(arr[i-1]+arr[i], arr[i]);
            curMax = Math.max(curMax, arr[i]);
        }
        System.out.println(curMax);
    }

    public static void main(String[] args) {
        int[] arr = {-1, 3, -1, 5};
        solve_recur(arr,0,arr.length-1);
        System.out.println(maxVal);
        solve(arr);

        int[] arr1 = {-5, -3, -1};
        solve_recur(arr1,0,arr1.length-1);
        System.out.println(maxVal);
        solve(arr1);

        int[] arr2 = {2, 4, -2, -3, 8};
        solve_recur(arr2,0,arr2.length-1);
        System.out.println(maxVal);
        solve(arr2);

        int[] arr3 = {2};
        solve_recur(arr3,0,arr3.length-1);
        System.out.println(maxVal);
        solve(arr3);

        int[] arr4 = {2,-2};
        solve_recur(arr4,0,arr4.length-1);
        System.out.println(maxVal);
        solve(arr4);
    }
}
