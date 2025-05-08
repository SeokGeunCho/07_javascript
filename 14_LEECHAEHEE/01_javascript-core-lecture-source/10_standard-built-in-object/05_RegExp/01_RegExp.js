const target = "JavaScript"; // 검색 대상

// 정규 표현식 리터럴 - /pattern/플래그
let regexp = /j/i; // 패턴 : j, 플래그 : i => 대소문자 구별 없이

// RegExp 생성자 함수 - new RegExp(pattern[, flag])
regexp = new RegExp("j", "i");
regexp = new RegExp(/j/, "i");
regexp = new RegExp(/j/i); // ES6부터 가능한 표현
// test 메서드 - target 문자열에 대해 정규 표현식 regexp의 패턴을 검색하여 매칭 결과를 불리언으로 반환
console.log(regexp.test(target));
