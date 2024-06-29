import java.util.*;
class Solution {
    public int solution(String dartResult) {
        int answer = 0;
        int[] result = new int[3];
        int num = 0;
        int index = 0;
        String a = "";
        for(int i=0; i< dartResult.length(); i++){
            char c = dartResult.charAt(i);
            if(c >= '0' && c <= '9'){                
                a += String.valueOf(c);
                
            } else if(c == 'T' || c== 'S' || c== 'D'){
                num = Integer.parseInt(a);
                if(c == 'T'){
                    result[index++] = (int) Math.pow(num,3);
                } else if(c== 'D'){
                    result[index++] = (int) Math.pow(num,2);
                } else if(c =='S'){
                    result[index++] = (int) Math.pow(num,1);
                }
                a = "";
            } else {
                if(c=='*'){
                    result[index-1] *= 2;
                    if(index-2 >= 0){
                        result[index-2] *=2;
                    }
                } else{
                    result[index-1] *= -1;
                }
            }
        }        
        answer = result[0] + result[1] + result[2];
        
        return answer;
    }
}