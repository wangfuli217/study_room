/*
 * 정수로된 배열이 주어지면, 각 원소가 자신을 뺀 나머지 원소들의 곱셈이 되게하라. 
 * 단, 나누기 사용 금지, O(n) 시간복잡도
 */

public class MultiplyArrayValExceptMe180625 {
    public static void main(String[] args) {
        int[] arr = {1,2,3,4,5,6,7,8,9,10,11,12};

        int[] r1 = new int[arr.length];
        int[] r2 = new int[arr.length];
        int[] ret = new int[arr.length];

        int m1 = 1;
        int m2 = 1;
        int j;

        // O(2*n) : 자신을 뺀 양쪽의 곱누적치를 곱한다.

        for(int i=0; i<arr.length; i++) {
            m1 *= arr[i];
            r1[i] = m1;

            m2 *= arr[arr.length-1-i];
            r2[arr.length-1-i] = m2;
        }

        ret[0] = r2[1];
        for(int i=1; i<arr.length-1; i++) {
            ret[i] = r1[i-1] * r2[i+1];
        }
        ret[arr.length-1] = r1[arr.length-2];

        for(int v : ret) {
            System.out.print(v + " ");
        }
        System.out.println();
    }
}
