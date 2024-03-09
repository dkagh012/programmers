function solution(arr, queries) {
  const result = [];
  
  for (let i = 0; i < queries.length; i++) {
    const [s, e, k] = queries[i];
    const subArray = arr.slice(s, e + 1);
      //filter() 함수는
// 배열의 요소를 순회하면서 콜백 함수를 사용하여 원하는 조건에 따라 필터링하는 함수입니다.
// 필터링된 배열을 반환합니다.
    const filteredArray = subArray.filter(num => num > k);
    
    if (filteredArray.length === 0) {
      result.push(-1);
    } else {
      const minVal = Math.min(...filteredArray);
      result.push(minVal);
    }
  }
  
  return result;
}