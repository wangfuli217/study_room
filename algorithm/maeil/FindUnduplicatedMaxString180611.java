/*
 * String이 주어지면, 중복된 char가 없는 가장 긴 서브스트링 (substring)의 길이를 찾으시오. 
 */
import java.util.*;
import java.util.HashSet;

public class FindUnduplicatedMaxString180611 {

    public static void solve(String s) {
        HashSet<Integer> set = new HashSet<>();
        int mlen = 0;
        int clen = 0;

        for(int i=0; i<s.length(); i++) {
            if(set.contains((int)s.charAt(i))) {
                set.clear();
                set.add((int)s.charAt(i));
                clen = 1;
            } else {
                set.add((int)s.charAt(i));
                clen++;
            }
            if(clen > mlen) mlen = clen;
        }

        System.out.println(mlen);
    }

    public static void main(String[] args) {
        String s;

        s = "aabcbcbc";
        solve(s);

        s = "aaaaaaaa";
        solve(s);

        s = "abbbcedd";
        solve(s);

        s = "a";
        solve(s);

        s = "abcde";
        solve(s);
    }
}
