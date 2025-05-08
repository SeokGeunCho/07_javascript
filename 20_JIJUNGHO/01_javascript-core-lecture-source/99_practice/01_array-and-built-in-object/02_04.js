// 앞으로 읽어도 거꾸로 읽어도 똑같은 문자인지 판별하는 palindrom 함수를 만든다.

const list = ["기러기", "토마토", "스위스", "인도인", "별똥별", "우별림"];

list.forEach((item) => console.log(palindrom(item)));

function palindrom(str) {
  // 코드 작성
  // str문자열을 문자 하나씩 잘라서 배열에 저장
  // reverse()으로 배열을 거꾸로 뒤집음
  // join()으로 다시 배열로 만든 문자열이 원래 문자열과 같으면 true 다르면 false

  return str === str.split("").reverse().join("");
}
