import java.util.*;
class Solution {
    public int solution(int k, int m, int[] score) {
        int answer = 0;
        
		ArrayList<Integer> list = new ArrayList<>();
		for(int i=0; i< score.length; i++) {			
			list.add(score[i]);			
		}
		
		Collections.sort(list);
		Collections.reverse(list);
		ArrayList<ArrayList<Integer>> lists = new ArrayList<>();
		for(int i=0; i<score.length/m; i++) {
			lists.add(new ArrayList<>());
		}
		
		int remainder = list.size() % m;		
        if (remainder != 0) {        	
            list.subList(list.size() - remainder, list.size()).clear();
        }
		for(int i=0; i < list.size(); i++) {
			lists.get(i/m).add(list.get(i));
		}
		
		for(int i=0; i< lists.size();i++) {
			answer += Collections.min(lists.get(i))*lists.get(i).size();
		}
        return answer;
    }
}