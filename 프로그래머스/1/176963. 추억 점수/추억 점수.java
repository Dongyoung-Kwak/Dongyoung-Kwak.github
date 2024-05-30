import java.util.*;
class Solution {
    public int[] solution(String[] name, int[] yearning, String[][] photo) {
        int[] answer = new int[photo.length];
        HashMap<String, Integer> score = new HashMap<>();
		for(int i=0; i< name.length; i++) {
			score.put(name[i], yearning[i]);
		}
		Set<String> keys = score.keySet();
		int count = 0;
		for(int i=0; i< photo.length; i++) {
			for(int j=0 ; j<photo[i].length; j++) {
				for(String key : keys) {					
					if(photo[i][j].equals(key)) {
						count += score.get(key);
					}
				}
			}
			answer[i] = count;
			count =0;
		}
        return answer;
    }
}