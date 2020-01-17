/*
 * 2019 년 오픈 채팅방 문제
 * 아래 코드는 그냥 개념만 코딩한 것.
 * (Map 과 List 를 떠올리면 풀 수 있는 문제. O(n))
 */

class Solution {
    public String[] solution(String[] record) {
        String[] answer = {};
        Map<String,String> m = new HashMap<>();
        List<List<String>> l = new ArrayList<>();
        
        for(String s : record) {
            String[] t = s.split(' ');
            String action = t[0];
            String userId = t[1];
            String nickName = t[2];
            
            if(action.equals("Enter")) {
                m.put(userId, nickName);
                List<String> ll = Arrays.asList(action,userId);
                l.add(ll);
            } else if(action.equals("Leave")) {
                List<String> ll = Arrays.asList(action,userId);
                l.add(ll);
            } else {
                m.put(userId, nickName);
            }
        }
        
        answer = new String[l.size()];
        int i = 0;
        for(List<String> v : l) {
            String action = v.get(0);
            String userId = v.get(1);
            String nickName = m.get(userId);
            
            String cnvAct;
            
            if(action.equals("Enter")) {
                cnvAct = "님이 들어왔습니다.";
            } else {
                cnvAct = "님이 나갔습니다.";
            }
            answer[i++] = nickName + cnvAct;
        }
        return answer;
    }
}
