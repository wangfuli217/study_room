/*
 * 문자열 배열(string array)이 주어지면, 제일 긴 공통된 접두사(prefix)의 길이를 찾으시오.
 * 예제)
 * Input: [“apple”, “apps”, “ape”]
 * Output: 2 // “ap”
 */
import java.util.*;

public class LongPrefix180709 {

    // n**2
    public static void sol1(String[] sarr) {
        int i = 0, j = 0;
        char c = 0;

        long start = System.currentTimeMillis();
        for(i=0; i<sarr.length; i++) {
            c = sarr[0].charAt(i);

            for(j=1; j<sarr.length; j++) {
                if(c != sarr[j].charAt(i)) break;
            }

            if(j < sarr.length) break;
        }
        long end = System.currentTimeMillis();

        System.out.println((i-1) + " -> " + (end-start));
    }

    // nlogn + n
    public static void sol2(String[] sarr) {
        int i = 0, j = 0;

        long start = System.currentTimeMillis();
        Arrays.sort(sarr);

        for(i=0; i<sarr.length; i++) {
            if(sarr[0].charAt(i) != sarr[sarr.length-1].charAt(i)) break;
        }
        long end = System.currentTimeMillis();

        System.out.println((i-1) + " -> " + (end-start));
    }

    public static void main(String[] args) {
        String[] sarr = new String[10000];


        for(int i=0; i<sarr.length; i++) {
            StringBuffer sb = new StringBuffer();
            for(int j=0; j<sarr.length; j++) {
                if(i==sarr.length-1 && j==sarr.length-1) {
                    sb.append((char)'X');
                } else {
                    sb.append((char)(j%26 + 'a'));
                }
            }
            sarr[i] = sb.toString();
        }

        //for(String v : sarr) {
        //    System.out.println(v);
        //}

        sol1(sarr);
        sol2(sarr);
    }
}
