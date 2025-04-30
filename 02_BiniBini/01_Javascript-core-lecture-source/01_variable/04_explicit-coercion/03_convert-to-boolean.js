// [JavaScript - 논리(Boolean) 타입으로 명시적 변환 (모든 케이스 총정리)]

// 명시적 변환: 직접 true/false로 바꾸는 것
// 방법 1: Boolean() 생성자 함수 사용
// 방법 2: !!(값) 이중 부정 논리 연산자 사용

// 1. 기본 케이스
console.log(Boolean(true));           // true
console.log(Boolean(false));          // false

console.log(!!true);                  // true
console.log(!!false);                 // false

// 2. 숫자(Number)
console.log(Boolean(0));              // false (0은 Falsy)
console.log(Boolean(-0));             // false (-0도 Falsy)
console.log(Boolean(NaN));            // false (NaN도 Falsy)
console.log(Boolean(1));              // true (1은 Truthy)
console.log(Boolean(-1));             // true (-1도 Truthy)
console.log(Boolean(Infinity));       // true (Infinity도 Truthy)
console.log(Boolean(-Infinity));      // true (-Infinity도 Truthy)

console.log(!!0);                     // false
console.log(!!1);                     // true
console.log(!!NaN);                   // false
console.log(!!Infinity);              // true

// 3. 문자열(String)
console.log(Boolean(''));             // false (빈 문자열은 Falsy)
console.log(Boolean(' '));            // true (공백 문자열은 Truthy)
console.log(Boolean('a'));            // true (비어있지 않은 문자열은 Truthy)
console.log(Boolean('0'));            // true ('0' 문자열도 Truthy)
console.log(Boolean('false'));        // true ('false' 문자열도 Truthy)

console.log(!!'');                    // false
console.log(!!' ');                   // true
console.log(!!'a');                   // true

// 4. null, undefined
console.log(Boolean(null));           // false (null은 Falsy)
console.log(Boolean(undefined));      // false (undefined도 Falsy)

console.log(!!null);                  // false
console.log(!!undefined);             // false

// 5. 객체(Object)
console.log(Boolean({}));             // true (빈 객체도 Truthy)
console.log(Boolean({name: 'JS'}));   // true (내용 있는 객체도 Truthy)

console.log(!!{});                    // true
console.log(!!{name: 'JS'});           // true

// 6. 배열(Array)
console.log(Boolean([]));             // true (빈 배열도 Truthy)
console.log(Boolean([1, 2, 3]));       // true (요소가 있는 배열도 Truthy)

console.log(!![]);                    // true
console.log(!![1, 2, 3]);              // true

// 7. 함수(Function)
console.log(Boolean(function(){}));   // true (함수도 Truthy)
console.log(!!function(){});           // true

// 8. 심볼(Symbol)
console.log(Boolean(Symbol()));       // true (Symbol도 Truthy)
console.log(!!Symbol());              // true

// 9. 특이 케이스
console.log(Boolean(document.all));   // false
// document.all은 브라우저에서 "undefined처럼 동작하지만" false로 평가된다
// (매우 특수한 예외 케이스, 일반 개발에서는 잘 안 씀)

// 10. 기타
console.log(Boolean(new Date()));     // true (날짜 객체는 Truthy)
console.log(Boolean(new Error()));    // true (에러 객체도 Truthy)

console.log(!!new Date());             // true
console.log(!!new Error());             // true
