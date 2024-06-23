class Solution {
    public String solution(int[] numbers, String hand) {
        StringBuilder answer = new StringBuilder();
        int leftIndex = 10;
        int rightIndex = 12;
        int leftDistance =0;
        int rightDistance =0;
        for(int number : numbers ){
            switch(number){
                case 1,4,7 :
                    answer.append("L");
                    leftIndex = number;
                    break;
                case 3,6,9 :
                    answer.append("R");
                    rightIndex = number;
                    break;
                case 2,5,8,0 :
                    if(number == 0){
                        number = 11;
                    }
                    leftDistance = Math.abs(leftIndex - number) / 3  + Math.abs(leftIndex - number) %3;
                    rightDistance = Math.abs(rightIndex - number) / 3  + Math.abs(rightIndex - number) %3;
                    if(leftDistance > rightDistance){
                        answer.append("R");
                        rightIndex = number;
                    } else if(leftDistance < rightDistance){
                        answer.append("L");
                        leftIndex = number;
                    } else if(leftDistance == rightDistance){
                        if(hand.equals("left")){
                            answer.append("L");
                            leftIndex = number;
                        } else {
                            answer.append("R");
                            rightIndex =number;
                        }
                    }
                
                    
            }
            
        }
        return answer.toString();
    }
}