import java.util.*;
class Solution {
    public int[] solution(int[] lottos, int[] win_nums) {
        int[] answer = new int[2];
        int count = 0;
        int countZero=0;
        for(int lotto : lottos){
            if(lotto == 0){
                countZero ++;
            }
            for(int win_num : win_nums){
                if(lotto == win_num){
                    count++;
                }
            }
        }
        answer[0] = (count == 0 && countZero == 0) ? 6 : 6 - count - countZero +1;
        answer[1] = (count == 1 || count == 0 )? 6 : 7-count;
        System.out.println(count+" "+countZero);
        
        return answer;
    }
}