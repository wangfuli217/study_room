/*
 * 정수(int)가 주어지면, 팰린드롬(palindrome)인지 알아내시오.
 * 팰린드롬이란, 앞에서부터 읽으나 뒤에서부터 읽으나 같은 단어를 말합니다.
 * 단, 정수를 문자열로 바꾸면 안됩니다.
 */

public class ChkPalindromInt180430 {

    public static void solve(int n) {
        String s = String.valueOf(n);
        int i;

        int h = s.length() / 2;
        for(i=0; i<h; i++) {
            if(s.charAt(i) != s.charAt(s.length()-1-i)) break;
        }
        if(i>=h) {
            System.out.println(n + " : true");
        } else {
            System.out.println(n + " : false");
        }
    }

    public static void main(String[] args) {
        int n = 12345;
        solve(n);

        n = -101;
        solve(n);

        n = 11111;
        solve(n);

        n = 12421;
        solve(n);

        n = 1;
        solve(n);

        n = 12422;
        solve(n);
    }
}
