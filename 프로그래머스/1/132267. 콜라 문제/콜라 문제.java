class Solution {
    public int solution(int a, int b, int n) {
        int answer = 0;
        
        int remain = n;
        while(remain >= a){
            answer+= (remain / a) * b;
            remain = (remain/a) * b + remain % a;
        }
        
        
        return answer;
    }
}