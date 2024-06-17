class Solution {
    public int solution(String[] babbling) {
        int answer = 0;
        String[] can = { "aya", "ye", "woo", "ma" };
            String[] repeats = new String[can.length];
		for(int i=0 ; i<can.length;i++) {
			repeats[i] = can[i] + can[i];
		}				

		for (int i = 0; i < babbling.length; i++) {
			
			for(int j=0; j< repeats.length; j++) {
				babbling[i] = babbling[i].replace(repeats[j], "-");
			}
			
			for (int j = 0; j < can.length; j++) {
				babbling[i] = babbling[i].replace(can[j], " ");

			}
babbling[i] = babbling[i].replace(" ", "");
			if (babbling[i].equals("")) {
				answer++;
			}
		}
        return answer;
    }
}