import java.util.*;
class Solution {
    public String[] solution(String[] players, String[] callings) {
       
        HashMap<String, Integer> map = new HashMap<>();
        
        for(int i=0; i<players.length; i++){
            map.put(players[i],i);
        }
        for(String call : callings){
            int index = map.get(call);
            if(index > 0){
                String tmp = players[index-1];
                players[index-1] = players[index];
                players[index] = tmp;
                
                map.put(players[index],index);
                map.put(players[index-1],index-1);
            }
        }
        
        return players;
    }
}