function solution(num_list) {
    let sum = 0
    let sum2 =1
    for(let i=0 ; i<num_list.length ; i++){
     sum = sum + num_list[i]
    sum2 = sum2 * num_list[i];
    }
    if(Math.pow(sum,2)>sum2){
        return 1;
    }else{
        return 0;
    }
}

