function solution(num_list) {
    var answer = [];
    let lastNum = num_list[num_list.length - 1];
    let secondLastNum = num_list[num_list.length - 2];
    
    num_list.push(lastNum > secondLastNum ? lastNum - secondLastNum : lastNum * 2);
    
    return num_list;
}
