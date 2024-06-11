class Solution {
    public int solution(String s) {
        int answer = 0;
        int countX =1;
		int countY=0;
		
		char c  = s.charAt(0);
        if(s.length()==1) {
			answer=1;
		}
		for(int i=0;i<s.length()-1;i++) {
			
			 if(s.length() - (countX+countY) == 1) {
				answer++;
				break;
			} else if(c == s.charAt(i+1)) {
				countX++;
			}
			 else {
				countY++;
			}
			
			if(countX == countY) { 				
				answer++;
				c=s.charAt(countX+countY);
				
			} 
					
			
		}
        return answer;
    }
}