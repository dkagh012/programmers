function solution(a, d, included) {
    var answer = a;
    var result =0;
    for(let i = 0 ; i<included.length ; i++){
        if(i> 0){            
        answer += d;            
        }
        if(included[i]){
            result +=answer;
        }
    }
    return result;
}