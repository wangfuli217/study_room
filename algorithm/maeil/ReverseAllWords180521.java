/*
 * 주어진 string 에 모든 단어를 거꾸로 하시오.
 */

public class ReverseAllWords180521 {

    public static void solve(String s) {
        String[] r = s.split(" ");

        for(int i=0; i<r.length; i++) {
            String cs = r[i];
            for(int j=cs.length()-1; j>=0; j--) {
                System.out.print(cs.charAt(j));
            }
            System.out.print(" ");
        }
        System.out.println();
    }

    public static void main(String[] args) {

        String s = "abc 123 apple";
        solve(s);

        s = "aa";
        solve(s);

        s = "a";
        solve(s);

        s = "a  b  c";
        solve(s);

        s = "az  zb  xc";
        solve(s);
    }
}
