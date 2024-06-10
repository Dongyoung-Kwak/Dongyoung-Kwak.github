import java.util.*;
class Solution {
    public String solution(String s, String skip, int index) {
        
        ArrayList<Character> alphabet = new ArrayList<>();
		for(int i=0; i< 26; i++) {
			alphabet.add((char) ('a'+i));
		}
		
		for(int i=0; i<skip.length(); i++) {
			alphabet.remove(Character.valueOf(skip.charAt(i)));
		}
		char[] c = new char[s.length()];
		for(int i=0; i< s.length(); i++)	{			
			int idx = alphabet.indexOf(s.charAt(i));
			if((idx+index)>=alphabet.size()) {
				c[i] = alphabet.get((idx+index)%alphabet.size());
			}else {
			c[i] = alphabet.get(idx+index);
			}
		}
		String answer = new String(c);
        return answer;
    }
}