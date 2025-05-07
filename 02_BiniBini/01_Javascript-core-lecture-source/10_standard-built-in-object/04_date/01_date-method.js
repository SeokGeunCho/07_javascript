// 📘 Date 객체
// 날짜랑 시간 다룰 때 쓰는 내장 객체임
// 생성자 함수이기 때문에 new 키워드로 써야 함

// ───────────────────────────────
// ✅ Date 생성 방법

console.log("\n📌 new Date() → 지금 시간");
console.log(new Date()); // 현재 날짜와 시간

console.log("\n📌 new Date(milliseconds)");
console.log(new Date(0));                           // 1970-01-01T00:00:00.000Z
console.log(new Date(24 * 60 * 60 * 1000));          // 1970-01-02T00:00:00.000Z → 하루 뒤

console.log("\n📌 new Date(dateString)");
console.log(new Date('Jul 26, 2022 09:00:00'));      // 2022-07-26T00:00:00.000Z
console.log(new Date('2022/07/26/09:00:00'));        // 같은 결과

console.log("\n📌 new Date(연, 월, 일, 시, 분, 초, 밀리초)");
console.log(new Date(2022, 1));                      // 2022-01-31T15:00:00.000Z (월은 0부터 시작)
console.log(new Date(2022, 1, 1, 9, 0, 0, 0));        // 2022-02-01T00:00:00.000Z

// ───────────────────────────────
// ✅ Date 정적 메서드

console.log("\n📌 Date.now()");
console.log(Date.now()); // 지금까지 흐른 시간 (1970년 기준 밀리초)

console.log("\n📌 Date.parse()");
console.log(Date.parse('Jan 1, 1970 09:00:00'));     // 0 (KST)
console.log(Date.parse('Jan 1, 1970 09:00:00 UTC')); // 32400000

console.log("\n📌 Date.UTC()");
console.log(Date.UTC(1970, 0, 1));                   // 0

// ───────────────────────────────
// ✅ 날짜 정보 얻기 (Getter)

console.log("\n📌 날짜 정보 가져오기 (get...)");
const date = new Date();
console.log("연도:", date.getFullYear());
console.log("월(0~11):", date.getMonth());
console.log("일:", date.getDate());
console.log("요일(0=일):", date.getDay());
console.log("시:", date.getHours());
console.log("분:", date.getMinutes());
console.log("초:", date.getSeconds());
console.log("밀리초:", date.getMilliseconds());

// ───────────────────────────────
// ✅ 날짜 설정하기 (Setter)

console.log("\n📌 날짜 정보 설정 (set...)");
const setDate = new Date();
setDate.setFullYear(2020);
setDate.setMonth(0);          // 1월
setDate.setDate(1);
setDate.setHours(9);
setDate.setMinutes(10);
setDate.setSeconds(10);
setDate.setMilliseconds(10);
console.log(setDate); // 2020-01-01T00:10:10.010Z

// ───────────────────────────────
// ✅ 시간 기준 밀리초 가져오기 / 설정하기

console.log("\n📌 getTime(), setTime()");
const timeDate = new Date();
console.log("현재 시간(밀리초):", timeDate.getTime());
timeDate.setTime(5 * 24 * 60 * 60 * 1000); // 5일 후
console.log("설정된 날짜:", timeDate); // 1970-01-06

// ───────────────────────────────
// ✅ 타임존 차이 (로컬 - UTC)

console.log("\n📌 getTimezoneOffset()");
const today = new Date();
console.log("타임존 차이(분):", today.getTimezoneOffset());    // 한국 기준: -540
console.log("타임존 차이(시간):", today.getTimezoneOffset() / 60); // -9

// ───────────────────────────────
// ✅ 문자열로 변환하기

console.log("\n📌 날짜를 문자열로 변환");
console.log("toString():", today.toString());               // 일반 문자열
console.log("toDateString():", today.toDateString());       // 날짜만
console.log("toTimeString():", today.toTimeString());       // 시간만
console.log("toISOString():", today.toISOString());         // ISO 형식 (백엔드 통신에 자주 씀)
console.log("toLocaleString():", today.toLocaleString());   // 현지 언어 기반 전체
console.log("toLocaleTimeString():", today.toLocaleTimeString()); // 현지 시간만
