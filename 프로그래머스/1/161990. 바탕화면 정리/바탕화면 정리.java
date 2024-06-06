class Solution {
    public int[] solution(String[] wallpaper) {
        int[] answer = new int[4];
		
		int minRow = Integer.MAX_VALUE;
		int minCol = Integer.MAX_VALUE;
		int maxRow = 0;
		int maxCol = 0;
		
		for(int i=0; i< wallpaper.length; i++) {
			if(wallpaper[i].contains("#")) {
				int start = wallpaper[i].indexOf("#");
				int finish = wallpaper[i].lastIndexOf("#");
								
				minRow = Math.min(minRow, start);
				minCol = Math.min(i, minCol);
				maxRow = Math.max(maxRow, finish);
				maxCol = Math.max(i, maxCol);
			}
		}
		
		answer[0] = minCol ;
		answer[1] = minRow;
		answer[2] = maxCol+1;
		answer[3] = maxRow+1;
        return answer;
    }
}