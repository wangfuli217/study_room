/*
 * 길이가 같은 두 문자열(string) A 와 B가 주어지면, A 가 B 로 1:1 암호화 가능한지 찾으시오.
 */
import java.util.*;

public class PossibleEncrypt180618 {
    public static void solve(String A, String B) {
        int i;

        Map<String,String> m = new HashMap<>();

        for(i=0; i<A.length(); i++) {
            String s = A.substring(i,i+1);
            if(m.containsKey(s)) {
                if(!m.get(s).equals(B.substring(i,i+1))) break;
            } else {
                m.put(s,B.substring(i,i+1));
            }
        }

        if(i < A.length()) {
            System.out.println("False");
        } else {
            System.out.println("True");
        }
    }

    public static void main(String[] args) {
        String A;
        String B;

        A = "EGG";
        B = "FOO";
        solve(A,B);

        A = "ABBCD";
        B = "APPLE";
        solve(A,B);

        A = "AAB";
        B = "FOO";
        solve(A,B);

        A = "AAA";
        B = "AAA";
        solve(A,B);

        A = "A";
        B = "B";
        solve(A,B);

        A = "AA";
        B = "BC";
        solve(A,B);
    }
}
