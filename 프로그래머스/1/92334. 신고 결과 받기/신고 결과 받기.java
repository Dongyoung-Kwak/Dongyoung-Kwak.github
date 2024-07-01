import java.util.*;
class Solution {
    public int[] solution(String[] id_list, String[] report, int k) {
        
        HashMap<String, HashSet<String>> map = new HashMap<>();
        HashMap<String, Integer> countMap = new HashMap<>();
        HashMap<String, Integer> result = new HashMap<>();
        for(String id : id_list){
            map.put(id,new HashSet<>());
            result.put(id,0);
        }
        for(String state : report){
            String[] s = state.split(" ");
            String reporter = s[0];
            String reported = s[1];
            if (map.get(reporter).add(reported)) {
                countMap.put(reported, countMap.getOrDefault(reported, 0) + 1);
            }
        }
        for(String reported : countMap.keySet()){
            if(countMap.get(reported)>=k){
                for(String reporter : map.keySet()){
                    if(map.get(reporter).contains(reported)){
                        result.put(reporter, result.get(reporter)+1);
                    }
                }
            }
        }
        int[] answer = new int[id_list.length];
        for(int i=0 ; i<id_list.length; i++){
            answer[i] = result.get(id_list[i]);
        }
        
        return answer;
    }
}