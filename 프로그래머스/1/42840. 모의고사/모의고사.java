import java.util.*;
class Solution {
    public int[] solution(int[] answers) {
        int[] count = new int[3];     
       
        int[] first = new int[]{1,2,3,4,5};
        int[] second = new int[]{2,1,2,3,2,4,2,5};
        int[] third = new int[]{3,3,1,1,2,2,4,4,5,5}; 
                  
        
        for(int i=0; i<answers.length; i++){
            if(answers[i] == first[i%first.length]){
                count[0]++;
            }
            if(answers[i] == second[i%second.length]){
                count[1]++;
            }
            if(answers[i] == third[i%third.length]){
                count[2]++;
            }
        }
        
        int max = Integer.MIN_VALUE;
        
        for(int c : count){
            max = Math.max(max, c);
        }
        
        ArrayList<Integer> list = new ArrayList<>();
        
        for(int i=0; i< count.length; i++){
            if(count[i]==max){
                list.add(i+1);
            }
        }
         int[] answer = new int[list.size()];
        
        for(int i=0; i< list.size();i++){
            answer[i] = list.get(i);
        }
        
        return answer;
    }
}