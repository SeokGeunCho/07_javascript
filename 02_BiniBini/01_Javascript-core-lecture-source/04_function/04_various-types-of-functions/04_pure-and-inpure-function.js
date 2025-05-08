// [JavaScript - 순수 함수(Pure Function) vs 비순수 함수(Impure Function)]

// 외부 상태 변수
var cnt = 0;

// ✅ 순수 함수(Pure Function)
// - 최소 1개 이상의 인수를 받고
// - 함수 외부 상태에 의존하지 않으며
// - 동일한 인수에 대해 항상 동일한 결과를 반환함
// - 외부 상태를 변경하지 않음 (부작용 X)
function increase(n) {
    return ++n;
}

// 사용 예시
console.log(increase(5)); // 6
console.log(increase(5)); // 6 (같은 입력 -> 같은 출력)

// ✅ 비순수 함수(Impure Function)
// - 외부 상태(cnt)에 의존함
// - 외부 상태를 변경함 (cnt 값을 직접 변경)
// - 함수 호출 시마다 결과가 달라짐 → 추적이 어려움 → 테스트/디버깅 어려움
function decrease() {
    return --cnt;
}

// 사용 예시
console.log(decrease()); // -1
console.log(decrease()); // -2 (같은 입력 없어도 결과 계속 바뀜)
console.log(cnt);        // -2 (외부 상태도 함께 변경됨)

/*
💡 순수 함수는 다음 조건을 만족해야 한다:
1. 동일한 인자를 넣으면 항상 동일한 결과를 반환해야 한다.
2. 외부 상태를 참조하거나 변경하지 않아야 한다. (부작용이 없어야 함)

📌 순수 함수 장점:
- 예측 가능성 (결과가 항상 일정)
- 테스트 용이성
- 디버깅 편리
- 불변성(immutable) 유지

📌 비순수 함수 단점:
- 외부 상태 의존
- 사이드 이펙트 발생 가능
- 예측 불가 동작
*/
