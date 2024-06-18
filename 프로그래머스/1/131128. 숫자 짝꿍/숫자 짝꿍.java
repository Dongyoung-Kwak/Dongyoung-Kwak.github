import java.util.*;
class Solution {
    public String solution(String X, String Y) {
        StringBuilder answer = new StringBuilder();
        
        HashMap<Character, Integer> xMap = new HashMap<>();
        HashMap<Character, Integer> yMap = new HashMap<>();
        int[] count = new int[10];
        for(char c : X.toCharArray()){
            xMap.put( c, xMap.getOrDefault(c, 0)+1);
        }
        for(char c : Y.toCharArray()){
            yMap.put( c, yMap.getOrDefault(c, 0)+1);
        }
        for(char c = '0'; c <= '9'; c++){
            if(xMap.containsKey(c) && yMap.containsKey(c)){
                int min = Math.min(xMap.get(c), yMap.get(c));                
                for(int i=0; i< min; i++){
                    answer.append(c);
                }
            }

        }
        
        if(answer.toString().isEmpty()){
            return "-1";
        } else if(answer.toString().lastIndexOf('0') == answer.toString().length()-1){
            return "0";
        }
        
        
            
        
        return answer.reverse().toString();
    }
}