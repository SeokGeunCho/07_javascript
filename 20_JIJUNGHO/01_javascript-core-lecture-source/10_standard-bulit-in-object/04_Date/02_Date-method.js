// date-method

// Date.now : 1970년 1월 1일 00:00:00(UTC)을 기점으로 현재 시간까지 경과한 밀리초를 숫자로 반환한다.
const now = Date.now();
console.log(now);
console.log(new Date(now));

// Date.parse : 1970년 1월 1일 00:00:00(UTC)을 기점으로 인수로 전달된 지정 시간(new Date(dateString)의 인수와 동일한 형식)까지의
//              밀리초를 숫자로 반환한다.
console.log(Date.parse("Jan 1, 1970 09:00:00")); // 0
console.log(Date.parse("Jan 1, 1970 09:00:00 UTC")); // 32400000
console.log(Date.parse("1970/01/01/09:00:00")); // 0
console.log(Date.parse("1970/01/01/09:00:00 UTC")); // 32400000

// Date.UTC : 1970년 1월 1일 00:00:00(UTC)을 기점으로 인수로 전달 된 지정 시간까지의 밀리초를 숫자로 반환한다.
// 인수는 로컬 타임(KST)이 아닌 UTC로 인식된다.
console.log(Date.UTC(1970, 0, 1));

// 연, 월, 일, 요일, 시, 분, 초 반환
const date = new Date();
console.log(date.getFullYear()); // 년
console.log(date.getMonth() + 1); // 월
console.log(date.getDate()); // 일
console.log(date.getDay()); // 요일 (일요일부터 월요일을 0~6으로 반환)
console.log(date.getHours()); // 시
console.log(date.getMinutes()); // 분
console.log(date.getSeconds()); // 초
console.log(date.getMilliseconds()); // 밀리세컨

// 연, 월, 일, 시, 분, 초 설정
date.setFullYear(2020);
date.setMonth(0);
date.setDate(1);
date.setHours(9);
date.setMinutes(10);
date.setSeconds(10);
date.setMilliseconds(10);
console.log(date); // 2020-01-01T00:10:10.010Z

// Date.getTime : 1970년 1월 1일 00:00:00(UTC)을 기점으로 경과된 밀리초 반환
// Date.setTime : 1970년 1월 1일 00:00:00(UTC)을 기점으로 경과된 밀리초 설정
console.log(date.getTime());
date.setTime(5 * 24 * 60 * 60 * 1000);
console.log(date); // 1970-01-06T00:00:00.000Z

// Date.prototype.getTimezoneOffset : UTC와 Date 객체에 지정된 로케일 시간과의 차이를 분 단위로 반환한다.
const today = new Date();
console.log(today.getTimezoneOffset()); // -540
console.log(today.getTimezoneOffset() / 60); // -9

// Date.prototype.to___String : 사람이 읽을 수 있는 형식의 문자열로 Date 객체의 날짜 반환한다.
console.log(today.toString());
console.log(today.toDateString());
console.log(today.toTimeString());
console.log(today.toISOString());
console.log(today.toLocaleString());
console.log(today.toLocaleTimeString());
