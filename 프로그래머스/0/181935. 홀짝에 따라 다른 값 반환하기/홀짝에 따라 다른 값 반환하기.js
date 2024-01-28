function solution(n) {
    var answer = 0;
    for(let i=1 ; i<=n; i++){
        if(n%2 !== 0){
            if(i%2 !==0){
        answer +=i                            
            }
        }else{
            if(i%2 ===0){
        answer +=Math.pow(i,2)
            }
        }
    }
    return answer;
}