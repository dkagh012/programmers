function solution(n, control) {
    var answer = n;
    for(let i=0 ; i<control.length; i++ ){
        if(control[i] === "w"){
            answer = answer + 1
        }else if(control[i] === "s"){
            answer = answer - 1            
        }else if(control[i] === "d"){
            answer = answer + 10            
        }else{
             answer = answer - 10    
        }
    }
    return answer
}