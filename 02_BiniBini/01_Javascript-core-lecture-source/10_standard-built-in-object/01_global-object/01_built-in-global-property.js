// 🌍 Global Object (전역 객체)

// ▣ 자바스크립트에서는 코드가 실행되기 전 "전역 객체"가 자동으로 생성됩니다.
// ▣ Node.js에서는 global, 브라우저에서는 window가 전역 객체입니다.
// ▣ 모든 환경에서 공통으로 사용할 수 있는 전역 객체는 globalThis입니다.
console.log(globalThis); // 어떤 환경에서든 동작함


// 🔸 전역 객체에는 다양한 전역 프로퍼티(값)와 함수가 내장되어 있어요.


// 📌 11-1. Global Property (전역 프로퍼티)

// ✅ 1) Infinity: 무한대 숫자
// 어떤 수를 0으로 나누거나, 표현할 수 없을 만큼 큰 값을 처리할 때 사용됩니다.
console.log(global.Infinity === Infinity); // true → global 생략 가능
console.log(10 / 0);        // Infinity → 수학적으로 정의할 수 없는 값 (양의 무한대)
console.log(-10 / 0);       // -Infinity → 음의 무한대
console.log(typeof Infinity); // "number" → 무한대도 숫자 취급


// ✅ 2) NaN: Not a Number (숫자가 아님)
// 수학적 계산이 실패했을 때 반환됩니다.
console.log(global.NaN);         // NaN → 숫자 타입이지만 "숫자가 아님"
console.log(Number('abc'));      // NaN → 문자열을 숫자로 바꾸려다 실패
console.log(10 * 'abcf');        // NaN → 숫자와 곱셈이 불가능한 문자열
console.log(typeof NaN);         // "number" → 의외로 숫자 타입으로 분류됨

// ❗ NaN은 자기 자신과도 같지 않음 (특이한 성질)
console.log(NaN === NaN);        // false

// ✅ 정확하게 NaN인지 검사하려면 isNaN 말고 Number.isNaN을 쓰세요!
console.log(Number.isNaN(NaN));     // true → 정확한 방법
console.log(Number.isNaN('abc'));   // false → 문자열은 숫자 아님이지만 NaN은 아님


// ✅ 3) undefined: 값이 아직 할당되지 않은 상태
// 변수를 선언했지만 값을 주지 않으면 undefined가 됩니다.
console.log(global.undefined);   // undefined → global 생략 가능

let nothing;
console.log(nothing);            // undefined → 아직 아무 값도 없음
console.log(typeof undefined);   // "undefined" → 전용 타입이 존재


// 📌 11-2. Built-in Global Functions (전역 함수)

// ✅ 1) isFinite(value): 유한한 숫자인지 검사
// 숫자이거나, 숫자로 변환 가능하면 true를 반환
console.log(isFinite(10));         // true → 정상적인 숫자
console.log(isFinite('10'));       // true → 문자열도 숫자로 변환됨
console.log(isFinite(null));       // true → null은 0으로 변환됨
console.log(isFinite(Infinity));   // false → 무한대는 유한수가 아님
console.log(isFinite(-Infinity));  // false
console.log(isFinite(NaN));        // false → 숫자 아님
console.log(isFinite('abc'));      // false → 숫자로 변환 불가


// ✅ 2) isNaN(value): NaN인지 검사
// 전달된 값이 NaN이거나, 숫자로 변환한 결과가 NaN이면 true
console.log(isNaN(NaN));           // true → 정확히 NaN
console.log(isNaN(10));            // false → 정상 숫자
console.log(isNaN('abc'));         // true → 숫자 변환 실패
console.log(isNaN('10'));          // false → 변환 가능
console.log(isNaN(''));            // false → 빈 문자열은 0으로 변환됨
console.log(isNaN(true));          // false → true는 1
console.log(isNaN(false));         // false → false는 0
console.log(isNaN(undefined));     // true → undefined는 NaN
console.log(isNaN({}));            // true → 객체는 숫자로 못 바꿈


// ✅ 3) parseFloat(value): 문자열을 실수(float)로 변환
// 숫자가 포함된 문자열에서 소수점까지 읽어서 변환해줌
console.log(parseFloat('10.01'));       // 10.01 → 정상 변환
console.log(parseFloat('10'));          // 10 → 정수도 실수로 표현됨
console.log(parseFloat('10 20 30'));    // 10 → 첫 숫자만 변환하고 나머진 무시
console.log(parseFloat('10cm'));        // 10 → 단위는 버림
console.log(parseFloat('GS25'));        // NaN → 앞부분이 숫자가 아님
console.log(parseFloat(' 1004 '));      // 1004 → 공백은 무시됨


// ✅ 4) parseInt(value): 문자열을 정수(int)로 변환
// 실수나 문자가 섞여 있어도 정수만 잘라서 반환
console.log(parseInt('10'));            // 10
console.log(parseInt('10.01'));         // 10 → 소수점 아래는 버림


// ✅ 5) encodeURI(uri)
// 인터넷 주소 전체를 인코딩해서 전송 가능한 형태로 바꿔줌
// ▸ 한글, 공백, 특수문자(예: #, %, 공백 등)를 ASCII 문자로 변환
// ▸ BUT 주소 구성 문자(: / ? & =)는 인코딩하지 않음 → URI 구조 유지

const uri = 'https://search.naver.com/search.naver?query=홍길동 학생';
const enc = encodeURI(uri);
console.log(enc);
// 출력: https://search.naver.com/search.naver?query=%ED%99%8D%EA%B8%B8%EB%8F%99%20%ED%95%99%EC%83%9D
// → "홍길동 학생"만 인코딩됨. 주소 구조(?, =, &)는 그대로 유지됨

// ✅ 실제 브라우저에서 이 주소를 열면 "홍길동 학생" 검색 결과가 나옵니다.
console.log("브라우저에서 열기 👉", enc);


// ✅ 6) decodeURI(encodedURI)
// encodeURI로 인코딩한 문자열을 원래 사람 읽을 수 있는 주소로 복원
const dec = decodeURI(enc);
console.log(dec); // https://search.naver.com/search.naver?query=홍길동 학생


// ✅ 7) encodeURIComponent(component)
// 주소의 구성 요소만 인코딩할 때 사용 (예: name=홍길동 이런 파라미터)
// ▸ =, &, ? 같은 구분자도 전부 인코딩해야 할 때 쓰임

const keyword = '홍길동 학생';
const base = 'https://search.naver.com/search.naver?query=';
const encKeyword = encodeURIComponent(keyword);
console.log(encKeyword);
// 출력: %ED%99%8D%EA%B8%B8%EB%8F%99%20%ED%95%99%EC%83%9D
// → 공백은 %20, 한글은 유니코드 기반으로 인코딩됨

const fullURL = base + encKeyword;
console.log("🔗 완성된 안전한 검색 주소:", fullURL);
// 실제 브라우저에서 열면 동일한 검색 결과 확인 가능


// ✅ 8) decodeURIComponent(encodedComponent)
// encodeURIComponent로 인코딩된 구성요소를 다시 복원
const decKeyword = decodeURIComponent(encKeyword);
console.log(decKeyword); // 홍길동 학생
