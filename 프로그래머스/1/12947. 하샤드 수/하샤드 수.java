class Solution {
    public boolean solution(int x) {
       
        String word = String.valueOf(x);

        int sum = 0;
        
        for(int i=0; i< word.length(); i++){
            sum += Character.getNumericValue(word.charAt(i));
        }
        if( x % sum == 0){
            return true;
        }
        return false;
        
        
    }
}