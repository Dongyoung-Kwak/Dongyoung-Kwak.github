class Solution {
    public String solution(int[] food) {
        int[] array = new int[food.length-1];
		
		StringBuilder answer = new StringBuilder();
		
		for(int i=1; i<food.length; i++) {			
			array[i-1] = food[i]/2;
			
		}
		
		for(int i=0 ; i< array.length; i++ ) {
			for(int j=0; j<array[i];j++) {
				answer.append(i+1);
			}
			
		}
		answer.append(0);
		for(int i=array.length-1; i>=0;i-- ) {
			for(int j=0; j<array[i];j++) {
				answer.append(i+1);
			}
		}
		
        return answer.toString();
    }
}