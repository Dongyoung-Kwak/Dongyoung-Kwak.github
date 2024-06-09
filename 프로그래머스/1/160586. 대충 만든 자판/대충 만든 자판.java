import java.util.*;
class Solution {
    public int[] solution(String[] keymap, String[] targets) {
        int[] answer = new int[targets.length];
        
        HashMap<Character,Integer> map = new HashMap<>();
		
		for(int i=0; i < keymap.length; i++) {
			for(int j=0; j<keymap[i].length(); j++) {
				char current = keymap[i].charAt(j);
				
				if(!map.containsKey(current)) {
					map.put(current, j+1);
				} else {
					int index = map.get(current);
					map.put(current, Math.min(j+1, index));
				}
			}
		}
		
		for(int i=0; i< targets.length; i++) {
			int count = 0;
			char[] word = targets[i].toCharArray();
			for(char c : word) {
				if(map.containsKey(c)) {
					count += map.get(c);
				}
                else {
					count=-1;
                    break;
				}
			}
			
			answer[i] = count;
		}
        
        return answer;
    }
}