function solution(ineq, eq, n, m) {
    let result;

    if (ineq === "<" && eq === "=") {
        result = n <= m;
    } else if (ineq === ">" && eq === "=") {
        result = n >= m;
    } else if (ineq === ">" && eq === "!") {
        result = n > m;
    } else if (ineq === "<" && eq === "!") {
        result = n < m;
    }

    return result ? 1 : 0;
}