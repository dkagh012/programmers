function solution(a, b, c, d) {
    // 주사위 숫자를 배열에 저장
    const dice = [a, b, c, d];
    // 주사위 숫자를 오름차순으로 정렬
    dice.sort((x, y) => x - y);
    
    // 주사위 숫자의 빈도수 계산을 위한 객체 초기화
    const counts = {};
    for (let num of dice) {
        // 현재 숫자가 counts 객체에 이미 존재하면 빈도수 증가
        if (counts[num]) {
            counts[num]++;
        } else { // 존재하지 않으면 빈도수를 1로 설정
            counts[num] = 1;
        }
    }

    // counts 객체의 키(주사위 숫자)를 숫자 배열로 변환
    const values = Object.keys(counts).map(Number);
    // counts 객체의 값(각 숫자의 빈도수)를 배열로 변환
    const freqs = Object.values(counts);

    // 네 주사위의 숫자가 모두 같은 경우
    if (values.length === 1) {
        return 1111 * values[0];
    }
    // 세 주사위의 숫자가 같고 하나가 다른 경우
    if (values.length === 2) {
        if (freqs.includes(3)) {
            // 세 주사위 숫자가 같은 경우
            const p = values[freqs.indexOf(3)];
            // 나머지 한 주사위 숫자
            const q = values[freqs.indexOf(1)];
            return Math.pow(10 * p + q, 2);
        } else {
            // 두 주사위씩 같은 값이 나오는 경우
            const p = values[0];
            const q = values[1];
            return (p + q) * Math.abs(p - q);
        }
    }
    // 두 주사위가 같고 나머지 두 주사위가 각각 다른 경우
    if (values.length === 3) {
        // 두 주사위 숫자가 같은 경우
        const p = values[freqs.indexOf(2)];
        // 나머지 두 숫자
        const otherValues = values.filter(v => v !== p);
        const q = otherValues[0];
        const r = otherValues[1];
        return q * r;
    }
    // 네 주사위의 숫자가 모두 다른 경우
    if (values.length === 4) {
        return Math.min(...values);
    }
}

