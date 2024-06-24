import java.util.*;
class Solution {
    public int solution(int n, int[] lost, int[] reserve) {
        int answer = 0;
        HashMap<Integer, Integer> map = new HashMap<>();
        for(int i=1; i<=n;i++){
            map.put(i,1);
        }       
        for (int i = 0; i < lost.length; i++) {
            map.put(lost[i], map.get(lost[i]) - 1);
        }        
        
        for (int i = 0; i < reserve.length; i++) {
            map.put(reserve[i], map.get(reserve[i]) + 1);
        }
       
        
        for (int i = 1; i <= n; i++) {
            if (map.get(i) == 0) {
                if (i > 1 && map.get(i - 1) == 2) {
                    map.put(i, 1);
                    map.put(i - 1, 1);
                } else if (i < n && map.get(i + 1) == 2) {
                    map.put(i, 1);
                    map.put(i + 1, 1);
                }
            }
        }
        System.out.println(map);
        for(int i=1; i<= map.size(); i++){
            if(map.get(i)>=1){
                 answer++;
            }
        }
        return answer;
    }
}