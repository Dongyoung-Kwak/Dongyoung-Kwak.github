import java.util.*;
class Solution {
    public int solution(String s) {
        
        int[] numbers = new int[]{0,1,2,3,4,5,6,7,8,9};
        String[] words = new String[]{"zero", "one", "two", "three", "four","five","six","seven","eight","nine"};
        HashMap<String, Integer> map = new HashMap<>();
        for(int i=0 ; i< numbers.length; i++){
            map.put(words[i], numbers[i]);
        }
        for(String word : words){
           s = s.replace(word, String.valueOf(map.get(word)));
        }
        
        return Integer.parseInt(s);
    }
}