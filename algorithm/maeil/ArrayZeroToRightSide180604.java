/*
 * 정수 배열(int array)이 주어지면 0이 아닌 정수 순서를 유지하며 모든 0을 배열 오른쪽 끝으로 옮기시오.
 * 단, 시간복잡도는 O(n), 공간복잡도는 O(1)여야 합니다.
 * 예제>
 * Input: [0, 5, 0, 3, -1]
 * Output: [5, 3, -1, 0, 0]
 */
import java.util.*;

public class ArrayZeroToRightSide180604 {

    public static void solve(Integer[] arr) {
        int cidx = 0;

        for(int i=0; i<arr.length; i++) {
            if(arr[i] != 0) {
                arr[cidx++] = arr[i];
            }
        }

        for(int i=cidx; i<arr.length; i++) {
            arr[i] = 0;
        }

        List<Integer> l = Arrays.asList(arr);

        l.forEach(v -> { System.out.print(v + " "); });
        System.out.println();
    }

    public static void main(String[] args) {
        Integer[] arr = {0,5,0,3,-1};

        solve(arr);

        Integer[] arr1 = {3,0,3};
        solve(arr1);

        Integer[] arr2 = {3};
        solve(arr2);

        Integer[] arr3 = {0};
        solve(arr3);

        Integer[] arr4 = {0,1,2,0,9,0,0,0,-1};
        solve(arr4);
    }
}
