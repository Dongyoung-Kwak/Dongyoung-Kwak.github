import java.util.HashSet;
import java.util.Set;

class Solution {
    public int solution(int[] nums) {
        int answer = 0;
        Set<Integer> map = new HashSet<>();
		for(int i=0 ; i < nums.length; i++) {
			map.add(nums[i]);
		}
		if(nums.length/2 >= map.size()) {
			answer =  map.size();
		} else {
		   answer = nums.length/2;
		}
        return answer;
    }
}