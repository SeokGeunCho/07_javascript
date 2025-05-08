console.log(getWeekDay(2022, 6, 21));       // 2022년 6월 21일
console.log(getWeekDay(2022, 12, 12));      // 2022년 12월 12일

function getWeekDay(year, month, date) {
    // 코드 작성
    const when = new Date(year, month - 1, date);
    const WEEK_DAYS = ['일', '월', '화', '수', '목', '금', '토'];
    return WEEK_DAYS[when.getDay()];
}
