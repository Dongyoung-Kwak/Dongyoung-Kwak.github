class Solution {
    public int[] solution(String[] park, String[] routes) {
        int[] answer = new int[2];
		int x = 0, y = 0;
		int height = park.length;
		int weight = park[0].length();

		for (int i = 0; i < park.length; i++) {
			if (park[i].indexOf("S") != -1) {
				x = park[i].indexOf("S");
				y = i;
			}
		}
		

		for (String route : routes) {
			String[] move = route.split(" ");
			String direction = move[0];
			int distance = Integer.parseInt(move[1]);
			int currentX = x;
			int currentY = y;
			boolean check = true;
			if (direction.equals("E")) {

				for (int i = 0; i < distance; i++) {
					
					currentX++;
					if (currentX >= weight) {
						check = false;
						break;
					} else if (park[y].charAt(currentX) == 'X') {
						check = false;
						break;
					}
				}
				if(check) {
					x = currentX;	
				}
				
			} else if (direction.equals("W")) {
				for (int i = 0; i < distance; i++) {
					currentX--;
					if (currentX < 0) {
						check = false;
						break;
					} else if (park[y].charAt(currentX) == 'X') {
						check = false;
						break;
					}
				}
				if(check) {
					x = currentX;	
				}
				
			} else if (direction.equals("S")) {
				for (int i = 0; i < distance; i++) {
					currentY++;
					if (currentY >= height) {
						check = false;
						break;
					} else if (park[currentY].charAt(x) == 'X') {
						check = false;
						break;
					}
				}
				if(check) {
					y = currentY;	
				}
				
			} else if (direction.equals("N")) {
				for (int i = 0; i < distance; i++) {
					currentY--;
					if (currentY < 0) {
						check = false;
						break;
					} else if (park[currentY].charAt(x) == 'X') {
						check = false;
						break;
					}
				}
				if(check)
				{
					y = currentY;
				}
			}
		}
		answer[0] = y;
		answer[1] = x;
        return answer;
    }
}