/*
 * 간격(interval)로 이루어진 배열이 주어지면, 겹치는 간격 원소들을 합친 새로운 배열을 만드시오.
 * 간격은 시작과 끝으로 이루어져 있으며 시작은 끝보다 작거나 같습니다.
 */
import java.util.Stack;
import java.util.Arrays;
import java.util.Comparator;
import java.util.*;

public class FoldedNumInterval180515 {

    static class Interval {
        int start;
        int end;
        Interval(int start, int end) {
            this.start = start;
            this.end = end;
        }
    }

    public static void solve(List<Interval> l) {

        Collections.sort(l, new Comparator<Interval>() {
            public int compare(Interval a, Interval b) {
                return a.start - b.start;
            }
        });

        Stack<Interval> st = new Stack<>();

        st.push(l.get(0));

        l.forEach(v -> {
            if(v.start > st.peek().end) {
                st.push(v);
            } else {
                if(v.end > st.peek().end) {
                    st.push(new Interval(st.pop().start,v.end));
                }
            }
        });

        //st.forEach(v -> { System.out.print( "{" + v.start + "," + v.end + "} "); });
        st.stream().map(v -> "{" + v.start + "," + v.end + "} ").forEach(System.out::print);
        System.out.println();
    }

    public static void main(String[] args) {

        int[][] arr = {{2,4}, {1,5}, {7,9}};

        List<Interval> l = new ArrayList<>();
        for(int i=0; i<arr.length; i++) {
            l.add(new Interval(arr[i][0], arr[i][1]));
        }

        solve(l);

        int[][] arr1 = {{3,6}, {1,3}, {2,4}};

        l = new ArrayList<>();
        for(int i=0; i<arr1.length; i++) {
            l.add(new Interval(arr1[i][0], arr1[i][1]));
        }

        solve(l);

        int[][] arr2 = {{1,1}};

        l = new ArrayList<>();
        for(int i=0; i<arr2.length; i++) {
            l.add(new Interval(arr2[i][0], arr2[i][1]));
        }

        solve(l);

        int[][] arr3 = {{1,1},{2,2}};

        l = new ArrayList<>();
        for(int i=0; i<arr3.length; i++) {
            l.add(new Interval(arr3[i][0], arr3[i][1]));
        }

        solve(l);

        int[][] arr4 = {{1,6},{2,2}};

        l = new ArrayList<>();
        for(int i=0; i<arr4.length; i++) {
            l.add(new Interval(arr4[i][0], arr4[i][1]));
        }

        solve(l);
    }
}
