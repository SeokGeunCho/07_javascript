// 📘 RegExp 객체 (정규 표현식)
// 문자열에서 특정 규칙(패턴)을 찾을 때 사용하는 도구임
// 예) 비밀번호에 영문+숫자 있는지, 이메일 주소 맞는지, 파일 확장자가 .jpg인지 등 확인할 때 씀

// ───────────────────────────────
// ✅ 정규표현식 만들기

console.log("\n📌 RegExp 생성 방법");

let regexp = /j/i;  
// 슬래시(/)로 감싸서 만들면 리터럴 방식이라고 부름
// 'j'라는 글자를 찾되, 대소문자 구분 없이 찾으라는 뜻 (i: ignore case)

regexp = new RegExp('j', 'i');  
// 이건 생성자 방식. 문자열로도 만들 수 있음

const target = 'JavaScript';
console.log(regexp.test(target)); // true → 대문자 'J'도 찾음

// ───────────────────────────────
// ✅ exec() - 매칭된 결과를 배열로 반환함

console.log("\n📌 exec(): 매칭 결과 정보 반환");

const str1 = 'Java JavaScript';
console.log(/va/.exec(str1)); // ["va", index: 2, input: "Java JavaScript", ...]
// 결과는 배열이고, 몇 번째(index)에서 찾았는지도 알려줌

console.log(/va/g.exec(str1)); // g 플래그 있어도 exec는 첫 결과만 반환함
console.log(/hello/.exec(str1)); // null → 못 찾으면 null 반환

// ───────────────────────────────
// ✅ test() - 패턴이 있냐 없냐만 확인 (true/false)

console.log("\n📌 test(): 패턴 있으면 true, 없으면 false");

console.log(/va/.test(str1));     // true
console.log(/hello/.test(str1));  // false

// ───────────────────────────────
// ✅ match() - 문자열 쪽에서 정규식을 받아서 매칭 결과 반환

console.log("\n📌 match(): 매칭된 값을 배열로 반환");

console.log(str1.match(/va/));     // 첫 번째만 반환
console.log(str1.match(/va/g));    // 전역 검색하면 모두 반환됨
console.log(str1.match(/hello/));  // null

// 실무에서는 match(), replace(), search()도 자주 쓰임

// ───────────────────────────────
// ✅ 플래그 (옵션)

console.log("\n📌 플래그 (g, i, m)");

const target2 = 'Java JavaScript';

console.log(target2.match(/VA/));     // null → 기본은 대소문자 구분
console.log(target2.match(/VA/i));    // ['va'] → 대소문자 무시
console.log(target2.match(/VA/ig));   // ['va', 'va'] → 전역 + 대소문자 무시

// 플래그 정리:
// i: 대소문자 구분 없이
// g: 전체에서 전부 검색
// m: 여러 줄에서 줄바꿈마다 검색

// ───────────────────────────────
// ✅ 패턴 문법 - 기본 메타문자

console.log("\n📌 . 두 글자씩 나누기");
let str3 = 'abcdefg';
console.log(str3.match(/../g));  // ['ab', 'cd', 'ef'] → 한 쌍씩 끊김

// 반복 검색 {m,n}
str3 = 'a aa aaa b bb bbb ab aab abb';
console.log("\n📌 {2,3} → 최소 2번 ~ 최대 3번 반복");
console.log(str3.match(/a{2,3}/g)); // ['aa', 'aaa', 'aa']
console.log(str3.match(/b{2}/g));   // ['bb', 'bb', 'bb']
console.log(str3.match(/b{3,}/g));  // ['bbb'] → 최소 3번 이상 반복

console.log("\n📌 + → 1번 이상 반복 (== {1,})");
console.log(str3.match(/b+/g));     // ['b', 'bb', 'bbb', 'b', 'b', 'bb']

console.log("\n📌 ? → 0번 또는 1번 (== {0,1})");
let str4 = 'soul seoul';
console.log(str4.match(/se?oul/g)); // ['soul', 'seoul']

// ───────────────────────────────
// ✅ or, 대괄호, 범위

console.log("\n📌 | 또는, [] 문자셋");
let str5 = 'aa bb cc dd 123 456 _@';

console.log(str5.match(/a|b/g));       // 각각 'a' 또는 'b'
console.log(str5.match(/a+|b+/g));     // 연속된 'a', 'b'
console.log(str5.match(/[ab]+/g));     // []는 or 역할
console.log(str5.match(/[a-z]+/g));    // 소문자 전체
console.log(str5.match(/[A-Za-z]+/g)); // 대소문자 전체
console.log(str5.match(/[0-9]+/g));    // 숫자

// ───────────────────────────────
// ✅ 특수 문자 약어

console.log("\n📌 \\d 숫자, \\D 숫자 제외");
console.log(str5.match(/\d+/g)); // ['123', '456']
console.log(str5.match(/\D+/g)); // 숫자 제외

console.log("\n📌 \\w (word 문자 = 영문, 숫자, 언더스코어)");
console.log(str5.match(/\w+/g)); 
// ['aa', 'bb', 'cc', 'dd', '123', '456', '_']

console.log("\n📌 \\W: word 문자가 아닌 것들");
console.log(str5.match(/\W+/g)); 
// 공백, 특수문자 등

console.log("\n📌 [^문자] → not 의미");
console.log(str5.match(/[^0-9]+/g)); // 숫자 제외
console.log(str5.match(/[^a-z]+/g)); // 소문자 제외

console.log("\n📌 ^시작, $끝");
const url = 'https://www.google.com';
console.log(/^https/.test(url)); // true
console.log(/com$/.test(url));   // true

// ───────────────────────────────
// ✅ 실전 예제 모음

console.log("\n📌 http 또는 https 로 시작");
console.log(/^https?:\/\//.test('https://www.google.com')); // true

console.log("\n📌 파일명 확장자 검사");
console.log(/\.js$/.test('test.js')); // true
console.log(/\.css$/.test('test.css')); // true

console.log("\n📌 숫자만 검사");
console.log(/^\d+$/.test('12345'));      // true
console.log(/^\d+$/.test('12345a'));     // false

console.log("\n📌 아이디 유효성 (영문/숫자 6~12자리)");
console.log(/^[A-Za-z0-9]{6,12}$/.test('hello123')); // true

console.log("\n📌 핸드폰 번호 형식 확인");
console.log(/^\d{3}-\d{3,4}-\d{4}$/.test('010-1234-5678')); // true

console.log("\n📌 특수문자 포함 여부");
console.log(/[^A-Za-z0-9]/.test('hello#world')); // true
console.log(/[^A-Za-z0-9]/.test('helloworld'));  // false
