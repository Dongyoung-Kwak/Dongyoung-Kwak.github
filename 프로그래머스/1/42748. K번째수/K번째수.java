import java.util.*;
class Solution {
    public int[] solution(int[] array, int[][] commands) {
        int[] answer = new int[commands.length];
      
		for(int i=0; i< commands.length; i++) {
			int length = commands[i][1]-commands[i][0]+1;
			int[] temp = new int[length];
			for(int j=0; j<length; j++) {
				temp[j] = array[commands[i][0]-1+j];
			}
			
			Arrays.sort(temp);
			answer[i] = temp[commands[i][2]-1];
		}
		
        
        return answer;
    }
}