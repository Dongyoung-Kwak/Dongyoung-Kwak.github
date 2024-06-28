import java.util.*;
class Solution {
    public String solution(String[] participant, String[] completion) {
        String answer = "";
        Arrays.sort(participant);
        String[] newCompletion = Arrays.copyOf(completion, completion.length + 1);
        newCompletion[newCompletion.length-1] = "zzz";
        Arrays.sort(newCompletion);
        
        for(int i=0; i<participant.length; i++){            
            if(!participant[i].equals(newCompletion[i])){
                System.out.println(participant[i]);
                return participant[i];
            }
        }
        return answer;
    }
}