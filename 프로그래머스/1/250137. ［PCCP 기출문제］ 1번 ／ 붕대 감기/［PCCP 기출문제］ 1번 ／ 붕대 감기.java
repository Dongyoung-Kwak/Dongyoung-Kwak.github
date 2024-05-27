class Solution {
    public int solution(int[] bandage, int health, int[][] attacks) {
        int answer = 0;
        int currentHealth = health;
        int j=0;
        int sum =0;
        for(int i=1; i<attacks[attacks.length-1][0]+1;i++){
            if(currentHealth >0){
                if(i != attacks[j][0]){
                    currentHealth = currentHealth + bandage[1];
                    sum = sum +1;
                    if(sum==bandage[0]){
                        currentHealth = currentHealth + bandage[2];
                        sum = 0;
                    }
                    if(currentHealth >= health){
                        currentHealth = health;
                    }
                } else {
                    currentHealth = currentHealth - attacks[j][1];
                    j++;
                    sum = 0;
                }
            } 
        }
        if(currentHealth <=0){
            return -1;
        } else{
        answer = currentHealth;
        return answer;}
    }
}