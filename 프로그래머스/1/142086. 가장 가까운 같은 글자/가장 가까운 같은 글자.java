class Solution {
    public int[] solution(String s) {
        int[] answer = new int[s.length()];
        int index = -1;
		for(int i=0; i< s.length(); i++) {
			if(i!=0) {
				index = s.substring(0,i).lastIndexOf(s.charAt(i));
				if(index != -1 ) {
					index = i-index;
				}
			}
			answer[i] = index;
		}
		
        return answer;
    }
}