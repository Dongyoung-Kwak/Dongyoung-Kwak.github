class Solution {
    public String solution(String phone_number) {
        StringBuilder sb = new StringBuilder(phone_number);
        int index = phone_number.length() - 4;
        for(int i=0; i<index; i++){
            sb.replace(i,i+1, "*");
        }
        
        return sb.toString();
    }
}