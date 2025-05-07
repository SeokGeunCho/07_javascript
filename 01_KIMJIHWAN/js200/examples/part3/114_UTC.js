// UTC 기줄 날짜 출력하기 (Date.UTC)

// Date.prototype.toString 메소드가 실행되어, Date 객체로 담습니다.
const date = new Date();
const dateUTC = date.toUTCString(
    date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(),
    date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds()
);

console.log(new Date(dateUTC));

