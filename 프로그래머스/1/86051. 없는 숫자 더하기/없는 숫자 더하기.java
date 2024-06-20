class Solution {
    public int solution(int[] numbers) {
        int answer = 0;
        int[] number = new int[]{0,1,2,3,4,5,6,7,8,9};
        
        for(int i=0; i< numbers.length; i++){
            for(int n : number){
                if(numbers[i] == n){
                    answer += n;
                }
            }
        }
        return 45 - answer;
    }
}