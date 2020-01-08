/*
"Look and say" sequence (보고 말하는 수열)은 다음과 같습니다.
1 - 1개의 1
11 - 2개의 1
21 - 1개의 2, 1개의 1
1211 - 1개의 1, 1개의 2, 2개의 1
111221 - ...

위와 같이 수열의 N 번째 수는 N-1번째 수의 조합을 풀어놓은 수 입니다.
정수 N이 주어졌을때, "Look and say" 수열의 N번째 수까지 프린트 하시오.
*/

public class LookAndSaySequence190624 {

    public static String solve(String a) {

        StringBuffer sb = new StringBuffer();

        int cnt = 1;
        int i = 1;

        for(i=1; i<a.length(); i++) {
            if(a.charAt(i) != a.charAt(i-1)) {
                sb.append(String.valueOf(cnt));
                sb.append(a.charAt(i-1));
                cnt = 1;
            } else {
                cnt++;
            }
        }

        sb.append(String.valueOf(cnt));
        sb.append(a.charAt(i-1));

        //System.out.println(sb.toString());

        return sb.toString();
    }

    public static void main(String[] args) {
        String s;
        int n = 5;

        s = "1";
        for(int i=0; i<n; i++) {
            s = solve(s);
        }

        System.out.println(s);
    }
}
