/*
 * String이 주어지면, 중복된 char가 없는 가장 긴 서브스트링 (substring)의 길이를 찾으시오. 
 */
import java.util.*;
import java.util.HashSet;

public class FindUnduplicatedMaxString180611 {

    public static void solve(String s) {
        HashSet<String> set = new HashSet<>();
        int mlen = 0;
        int clen = 0;

        for(int i=0; i<s.length(); i++) {
            if(set.contains(s.substring(i,i+1))) {
                set.clear();
                set.add(s.substring(i,i+1));
                clen = 1;
            } else {
                set.add(s.substring(i,i+1));
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

        StringBuffer sb = new StringBuffer();
        for(int i=0; i<10000000; i++) {
            sb.append(String.valueOf((char)(i%26 + 'a')));
        }
        s = sb.toString();
        solve(s);
    }
}
