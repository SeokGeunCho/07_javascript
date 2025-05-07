// 배열의 특정 요소 위치 확인하기
// Array 객체의 메소드 indexOf는 대입된 값(첫 번째 인자)을 배열 내부에서 검색
// 값이 일치하는 경우 해당 인덱스를 반환
const arr = ['spring', 'summer', 'fall', 'winter', 'is', 'down'];

console.log(`"winter" is in this index ${arr.indexOf('winter')}`);
// 두 번째 인자에 숫자형 값을 넣으면 indexOf는 해당 인덱스부터 값을 찾는다.
// 찾을 수 없으면 '-1'을 반환, 찾았다면 값('3')을 반환
console.log(`"winter" is not in here, look this value ${arr.indexOf('winter', 3)}`);

