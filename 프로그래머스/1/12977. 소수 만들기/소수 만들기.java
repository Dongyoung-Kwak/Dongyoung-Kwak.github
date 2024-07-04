class Solution {
    public int solution(int[] nums) {
        int answer = 0;
        for(int i=0; i<nums.length-2; i++){
            for(int j=i+1; j< nums.length-1; j++){
                for(int k = j+1; k<nums.length; k++){
                    int number = nums[i] + nums[j] + nums[k];
                   for(int l=2; l<Math.sqrt(number); l++){                       
                        if(isPrime(number)){
                            answer ++;
                            break;
                        }               
                   }
                }
            }
                
        }
        return answer;
    }
    private boolean isPrime(int num) {
        if (num <= 1) {
            return false;
        }
        for (int i = 2; i <= Math.sqrt(num); i++) {
            if (num % i == 0) {
                return false;
            }
        }
        return true;
    }
}