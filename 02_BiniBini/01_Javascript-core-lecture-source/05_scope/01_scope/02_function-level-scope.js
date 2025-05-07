// [JavaScript - 함수 레벨 스코프 vs 블록 레벨 스코프]

// ✅ 자바스크립트에서 var 키워드는 "함수 레벨 스코프"만 따른다.
// - 즉, 함수 안에서 선언된 변수만 지역 변수로 인정된다.
// - if, for, while 같은 "블록" 안에서 선언해도 지역 스코프로 인정되지 않는다.

var i = 0;

for (var i = 0; i < 10; i++) {
    // 반복문 블록 내부
    // i는 이 블록 내부에만 있는 지역 변수가 "아님"
    // 실제로는 바깥 var i와 동일한 변수
}

console.log(i); // 10
// ❗ 반복문 끝나도 i는 그대로 존재함 (전역 스코프에 있음)


// ✅ 함수 레벨 스코프 확인
function testVarScope() {
    var x = 100;
    if (true) {
        var x = 200; // 같은 함수 안이므로 같은 스코프!
        console.log("if 블록 안 x:", x); // 200
    }
    console.log("if 블록 밖 x:", x);     // 200 (같은 변수)
}
testVarScope();

// ✅ let/const는 블록 레벨 스코프를 따른다
function testLetScope() {
    let y = 100;
    if (true) {
        let y = 200; // 별개의 블록 스코프
        console.log("if 블록 안 y:", y); // 200
    }
    console.log("if 블록 밖 y:", y);     // 100 (다른 변수)
}
testLetScope();

/*
💡 요약: var vs let/const

| 키워드 | 스코프 종류      | 중복 선언 | 재할당 | 호이스팅 |
|--------|------------------|-----------|--------|----------|
| var    | 함수 레벨 스코프 | 가능      | 가능   | O (초기화 안 됨 → undefined) |
| let    | 블록 레벨 스코프 | 불가능    | 가능   | O (TDZ로 인해 선언 전 사용 불가) |
| const  | 블록 레벨 스코프 | 불가능    | 불가능 | O (TDZ 적용) |
*/
