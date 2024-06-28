import java.util.*;
class Solution {
    public int[] solution(int[] sequence, int k) {
        int sum =0;
        int left = 0;
        int right = 0;
        int[] answer = new int[2];
        int minLength = Integer.MAX_VALUE;
        
         while (right < sequence.length) {
            sum += sequence[right];            
            while (sum > k && left <= right) {
                sum -= sequence[left];
                left++;
            }
            
            if (sum == k) {
                if (right - left < minLength) {
                    minLength = right - left;
                    answer[0] = left;
                    answer[1] = right;
                }
            }
            
            right++;
        }
       return answer;
    }
  
}