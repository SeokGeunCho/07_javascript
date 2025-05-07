/*
  ## 2-3. arr 배열에는 숫자 뒤에 단위 문자가 붙거나 숫자 앞에 특수 문자가 1개 붙는 형태의 문자열들이 담겨있다. 
  해당 값들의 앞 또는 뒤에 위치한 문자를 제거하고 숫자로 형변환한 값들이 담긴 
  새로운 배열을 반환하는 removeChar 함수를 작성한다.
*/

let arr = ["1080px", "$100", "+200", "60kg", "6m", "-15"];
console.log(removeChar(arr));

function removeChar(arr) {
  // 코드 작성
  const newArr = arr.map((item) => {
    if (isNaN(Number(item))) {
      const matched = item.match(/\d+/); // 숫자만 추출
      return Number(matched);
    } else {
      return Number(item);
    }
  });
  return newArr;
}
