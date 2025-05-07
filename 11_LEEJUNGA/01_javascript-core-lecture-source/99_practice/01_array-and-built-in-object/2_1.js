/*
2-1. 년, 월, 일을 전달하면 해당 날짜의 요일을 '월', '화', '수', '목', '금', '토', '일' 문자열로 반환해주는 함수 getWeekDay를 만든다.
*/

console.log(getWeekDay(2022, 6, 21)); // 2022년 6월 21일
console.log(getWeekDay(2022, 12, 12)); // 2022년 12월 12일

function getWeekDay(year, month, date) {
  // 코드 작성
  let newDate = new Date(year, month - 1, date);
  switch (newDate.getDay()) {
    case 0:
      return "일";
    case 1:
      return "월";
    case 2:
      return "화";
    case 3:
      return "수";
    case 4:
      return "목";
    case 5:
      return "금";
    case 6:
      return "토";
  }
}
