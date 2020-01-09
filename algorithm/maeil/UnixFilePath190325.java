/*
 * "./"과 "../" 이 포함된 파일 경로를 "./"과 "../"이 없는 유닉스 파일 경로로 바꾸시오.
 * "./"는 현재의 위치를 뜻하고, "../"는 상위 디렉토리를 뜻합니다.
 */

import java.util.*;

public class UnixFilePath190325 {
    public static void main(String[] args) {
        //String p = "/usr/./bin/./test/../";
        String p = "/usr/bin/.././bin/local/../local";

        String[] t = p.split("/");

        Stack<String> st = new Stack<>();

        for(String v : t) {
            if(v.equals("")) continue;
            else if(v.equals(".")) continue;
            else if(v.equals("..")) {
                st.pop();
            } else {
                st.push(v);
            }
            //System.out.println(v);
        }

        StringBuffer sb = new StringBuffer();
        sb.append("/");
        for(String v : st) {
            sb.append(v);
            sb.append("/");
        }

        System.out.println(sb.toString());
    }
}
