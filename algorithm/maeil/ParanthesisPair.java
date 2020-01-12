/*
 * 정수 n이 주어지면, n개의 여는 괄호 "("와 n개의 닫는 괄호 ")"로 만들 수 있는 괄호 조합을 모두 구하시오.
 * (시간 복잡도 제한 없습니다).
 */

public class ParanthesisPair {

    public static void solve(String s, int n, int k, int dup) {
        if(n == k) {
            System.out.print(s + " ");
            return;
        }

        String r = "()" + s;
        if(k == dup) {
            solve(r, n, k+1, dup+1);
        } else {
            solve(r, n, k+1, dup);
        }

        r = "(" + s + ")";
        solve(r, n, k+1, dup);

        if(k > dup) {
            r = s + "()";
            solve(r, n, k+1, dup);
        }
    }

    public static int count(int n) {
        if(n == 1) {
            return 1;
        }
        
        return 3 * count(n-1) - 1;
    }

    public static void main(String[] args) {

        solve("()", 1, 1, 1);
        System.out.println();
        System.out.println(count(1));

        System.out.println("====");

        solve("()", 2, 1, 1);
        System.out.println();
        System.out.println(count(2));

        System.out.println("====");

        solve("()", 3, 1, 1);
        System.out.println();
        System.out.println(count(3));

        System.out.println("====");

        solve("()", 4, 1, 1);
        System.out.println();
        System.out.println(count(4));

        System.out.println("====");

        solve("()", 5, 1, 1);
        System.out.println();
        System.out.println(count(5));
    }
}
