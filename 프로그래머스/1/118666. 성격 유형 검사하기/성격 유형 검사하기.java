import java.util.*;
class Solution {
    public String solution(String[] survey, int[] choices) {
        HashMap<String, Integer> map = new HashMap<>();
        String[] types = {"R", "T", "C", "F", "J", "M", "A", "N"};
        StringBuilder result = new StringBuilder();
        for(String type : types){
            map.put(type,0);
        }
        
        for(int i=0; i< survey.length; i++){            
            String[] check = cal(choices[i],survey[i]);
                
            map.replace(check[0], map.get(check[0]) + Integer.parseInt(check[1]));
        }
        result.append(map.get("R")>=map.get("T") ? "R" : "T");
        result.append(map.get("C")>=map.get("F") ? "C" : "F");
        result.append(map.get("J")>=map.get("M") ? "J" : "M");
        result.append(map.get("A")>=map.get("N") ? "A" : "N");
        return result.toString();
    }
    
    public String[] cal(int choice,String survey){        
        switch(choice){
            case 1 : 
                return new String[]{String.valueOf(survey.charAt(0)), "3"}; 
            case 2 :
                return new String[]{String.valueOf(survey.charAt(0)), "2"}; 
            case 3 :
                return new String[]{String.valueOf(survey.charAt(0)), "1"}; 
            case 4 :
                return new String[]{String.valueOf(survey.charAt(0)), "0"}; 
            case 5 :
                return new String[]{String.valueOf(survey.charAt(1)), "1"}; 
            case 6 :
                return new String[]{String.valueOf(survey.charAt(1)), "2"}; 
            case 7 :
                return new String[]{String.valueOf(survey.charAt(1)), "3"};   
            default :
                return null;
        }
    }
}