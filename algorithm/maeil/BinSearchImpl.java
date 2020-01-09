/*
 * 정렬된 정수 배열이 있습니다. 이 배열의 모든 원소들을 오른쪽으로 랜덤하게 Z번 이동하였습니다.
 * 예를 들면 [1, 2, 3, 4, 5] -> [3, 4, 5, 1, 2].
 * 이런 배열과 정수 K 가 주어지면, 배열안에 K가 존재하는지 찾으시오.
 * 존재한다면 배열의 인덱스, 존재하지 않다면 -1 을 리턴하시오.
 * 시간복잡도 제한 O(log N).
 */

public class BinSearchImpl {

    public static int binsearch1(int[] arr, int s, int e, int k) {

        if(s>=e) {
            if(arr[s] > k) return s+1;
            else return s;
        }

        int h = (s+e) / 2;

        if(arr[h] > k) {
            return binsearch1(arr,h+1,e,k);
        } else {
            return binsearch1(arr,s,h,k);
        }
    }

    public static int binsearch2(int[] arr, int s, int e, int k) {

        if(s>=e) {
            if(arr[s] == k) return s;
            else return -1;
        }

        int h = (s+e) / 2;

        int ret;

        ret = binsearch2(arr,s,h,k);
        if(ret >= 0) {
            return ret;
        } else {
            return binsearch2(arr,h+1,e,k);
        }
    }

    private static void test(int[] arr, int k) {
        // 이동전 원래 배열의 첫 요소 위치 찾기
        int startpos = binsearch1(arr, 0, arr.length-1, 3);

        // 첫요소 기준 좌우 배열에서 k 값 찾기
        int pos = binsearch2(arr, 0, startpos-1, k);
        if(pos < 0) {
            pos = binsearch2(arr, startpos, arr.length-1, k);
        }

        System.out.println(k + " : " + startpos + ", " + pos);
    }

    public static void main(String[] args) {
        int[] arr = {3,4,5,6,7,8,1,2};

        for(int v : arr) {
            test(arr, v);
        }
    }
}
