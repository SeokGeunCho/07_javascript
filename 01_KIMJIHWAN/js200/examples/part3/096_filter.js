// 배열의 특정 조건을 기준으로 필터링하기 (filter)
// Array 객체의 filter 메소드는 인자로 대입된 callback 함수를 통해 배열 내부를 순환
// 요소 각각이 특정 조건을 만족하는지 확인
// 확인하는 방식은 callback 함수 내부에 정의된 문장들을 통해 테스트
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const filteredTwo = arr.filter(a => {
    console.log(`현재 위치의 값은 ${a} 입니다.`);
    return a % 2 == 0;
});
console.log(filteredTwo);

const filteredThree = arr.filter(a => a % 3 == 0);
console.log(filteredThree);

