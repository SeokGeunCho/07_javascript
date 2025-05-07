// 📘 String 객체
// 문자열을 다룰 수 있게 도와주는 자바스크립트 내장 객체임
// 문자열은 기본적으로 '원시 타입'이지만, 문자열 관련 기능을 사용할 때 자동으로 String 객체로 감싸짐 (wrapper 객체)
// 예: "hello".toUpperCase() → 자동으로 new String("hello")처럼 래핑됨

// ───────────────────────────────
// ✅ String 객체 생성

console.log("\n📌 new String()");
// 문자열 객체를 직접 생성할 수 있음 (실무에서는 거의 안 씀, 개념용)

const obj = new String(); // 아무 값도 안 넣으면 빈 문자열 객체가 생성됨
console.log(obj);         // [String: '']

const obj2 = new String("홍길동"); // 문자열을 넣으면 해당 문자열을 가진 객체 생성
console.log(obj2);                // [String: '홍길동']

// length는 문자열의 글자 수를 나타냄 (띄어쓰기 포함)
console.log(obj2.length); // 3

// 배열처럼 인덱스 접근 가능 (문자열이 배열처럼 다뤄짐)
console.log(obj2[0]); // '홍'

// 문자열은 불변(immutable)이라 바꿀 수 없음
obj2[0] = '김';       // 에러는 안 나지만 무시됨
console.log(obj2);    // 그대로 '홍길동'

// 숫자나 null을 넣으면 자동으로 문자열로 변환됨
const obj3 = new String(100);    // → "100"
const obj4 = new String(null);   // → "null"
console.log(obj3[0]); // '1'
console.log(obj4[0]); // 'n'

// ───────────────────────────────
// ✅ 문자열 탐색 메서드

console.log("\n📌 indexOf()");
// 문자열 내에서 특정 문자나 문자열이 **처음 등장하는 위치(인덱스)**를 반환
const str = "JavaScript";

console.log(str.indexOf('a'));      // 1 → 첫 번째 'a'의 위치
console.log(str.indexOf('b'));      // -1 → 찾는 문자가 없으면 -1 반환
console.log(str.indexOf('a', 2));   // 3 → 2번 인덱스부터 검색 시작

// 포함 여부 확인할 때 자주 사용
if (str.indexOf('a') !== -1) console.log("a가 있음");

console.log("\n📌 includes()");
// indexOf보다 간단하게 true/false로 포함 여부만 확인
console.log(str.includes('a'));     // true
console.log(str.includes('b'));     // false
console.log(str.includes('a', 2));  // true → 2번 인덱스부터 검사

console.log("\n📌 search()");
// 정규 표현식으로 검색할 수 있음 (indexOf보다 유연함)
console.log(str.search(/a/)); // 1
console.log(str.search(/b/)); // -1

console.log("\n📌 startsWith() / endsWith()");
// 문자열이 특정 문자로 **시작하는지 / 끝나는지** 검사
console.log(str.startsWith('Ja'));    // true → 'JavaScript'는 'Ja'로 시작
console.log(str.startsWith('va', 2)); // true → 2번째부터 시작하면 'va'
console.log(str.endsWith('pt'));      // true → 'JavaScript'는 'pt'로 끝남
console.log(str.endsWith('va', 4));   // true → 앞에서 4글자('Java')까지 잘라서 검사

// ───────────────────────────────
// ✅ 문자열 일부 추출

console.log("\n📌 charAt()");
// 인덱스를 기반으로 해당 위치의 문자 반환
for (let i = 0; i < str.length; i++) {
  console.log(str.charAt(i));  // 한 글자씩 출력
}

console.log("\n📌 substring(start, end)");
// 지정한 범위의 부분 문자열을 반환함 (end는 포함 안 됨)
console.log(str.substring(1, 4));  // "ava"
console.log(str.substring(1));     // "avaScript"
console.log(str.substring(4, 1));  // "ava" → 순서가 반대여도 자동 보정
console.log(str.substring(-1));    // "JavaScript" → 음수는 0으로 처리됨
console.log(str.substring(1, 20)); // 끝 인덱스가 크면 문자열 끝까지 반환됨

console.log("\n📌 slice(start, end)");
// substring이랑 비슷하지만 → 음수 인덱스 사용 가능
console.log(str.slice(1, 4));      // "ava"
console.log(str.slice(1));         // "avaScript"
console.log(str.slice(4, 1));      // "" → 순서가 반대면 빈 문자열
console.log(str.slice(-1));        // "t" → 끝에서 첫 번째 글자
console.log(str.slice(1, 20));     // "avaScript"

// ───────────────────────────────
// ✅ 문자열 변형

console.log("\n📌 toUpperCase(), toLowerCase()");
// 대문자 ↔ 소문자로 변환
console.log(str.toUpperCase());    // "JAVASCRIPT"
console.log(str.toLowerCase());    // "javascript"

console.log("\n📌 trim()");
// 앞뒤 공백 제거 (중간 공백은 제거 안 함)
const str2 = "   JavaScript   ";
console.log(str2.trim()); // "JavaScript"

console.log("\n📌 repeat(n)");
// 문자열을 n번 반복한 결과 반환
console.log(str.repeat());       // "" (undefined는 0으로 간주)
console.log(str.repeat(0));      // ""
console.log(str.repeat(1));      // "JavaScript"
console.log(str.repeat(2));      // "JavaScriptJavaScript"
console.log(str.repeat(2.5));    // 소수는 정수로 처리됨
// console.log(str.repeat(-1));  // 음수는 에러남

// ───────────────────────────────
// ✅ 문자열 치환

console.log("\n📌 replace()");
// 첫 번째 인수에 해당하는 문자를 두 번째 인수로 바꿔줌
console.log(str.replace('Java', 'Type')); // "TypeScript"
console.log(str.replace('a', 'b'));       // 첫 번째 'a'만 바뀜

// 정규식 사용 가능 → 대소문자 무시하고 바꾸기
console.log(str.replace(/j/i, 'Z')); // "ZavaScript"

// ───────────────────────────────
// ✅ 문자열 분리

console.log("\n📌 split()");
// 문자열을 구분자 기준으로 나누고 배열로 반환함

const str3 = "Hello, Everyone! Nice to see you again.";

console.log(str3.split(' '));      // 공백 기준 → 단어 단위 배열
console.log(str3.split(''));       // 글자 하나씩 쪼갬
console.log(str3.split());         // 인수 없으면 전체 문자열이 배열 하나로 들어감
console.log(str3.split(' ', 5));   // 최대 5개까지만 잘라서 반환
