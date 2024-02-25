function solution(arr, queries) {
    var answer = [...arr];
    for(let i=0; i<queries.length; i++){
        const tmp = answer[queries[i][0]];
        answer[queries[i][0]]=answer[queries[i][1]];
        answer[queries[i][1]]=tmp;
// tmp에 저장을 하고 작업
    }
    return answer;
}
