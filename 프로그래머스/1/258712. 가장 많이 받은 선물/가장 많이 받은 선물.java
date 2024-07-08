import java.util.*;

class Solution {
    public int solution(String[] friends, String[] gifts) {
        int answer = 0;
        HashMap<String, HashMap<String, Integer>> map = new HashMap<>();
        HashMap<String, Integer> count = new HashMap<>();
        HashMap<String, Integer> next = new HashMap<>();
        for(String friend : friends){
            map.put(friend, new HashMap<>());
            count.put(friend, 0);
            next.put(friend,0);
        }
        
       
        for(String s : gifts){
            String[] array = s.split(" ");
            String give = array[0];
            String receive = array[1];
            map.get(give).put(receive, map.get(give).getOrDefault(receive, 0) + 1);
            count.put(give, count.get(give) + 1);
            count.put(receive, count.get(receive) - 1);
        }
        System.out.println(map);
        System.out.println(count);
        for(String give : friends){
            for(String receive : friends){
                if(!give.equals(receive)){
                    int left = map.get(give).getOrDefault(receive,0);
                    int right = map.get(receive).getOrDefault(give,0);
                    
                    if(left > right){
                        next.put(give, next.get(give)+1);
                    } else if(left == right && count.get(give) > count.get(receive)){
                        next.put(give, next.get(give)+1);
                    }
                }
            }
        }
        System.out.println(next);
          return Collections.max(next.values());
        }
        
      
    
}