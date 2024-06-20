class Solution {
    
    public int solution(int[][] sizes) {        
        int w = Integer.MIN_VALUE;
        int h = Integer.MIN_VALUE;
        
        for(int[] size : sizes){
            w = Math.max(Math.max(size[0],size[1]),w);
            h = Math.max(Math.min(size[0],size[1]),h);
        }
        
        return w*h;
    }    
    
}