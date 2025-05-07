// 배열 인덱스로 특정 요소 수정하기 (splice)
// Array 객체 메소드 splice는 특정 위치의 요소를 삭제하거나 수정이 가능
const fruits = ['melon', 'lemon', 'source', 'apple', 'juice'];

// 삭제한 자리에 추가 요소 삽입
fruits.splice(4, 1) // 2번쨰 인자는 삭제하고자 하는 개수
fruits.splice(4, 0, 'grape') // 3번째 인자에는 추가될 요소들을 지정
fruits.splice(2, 1, 'mandarin', 'starwberry', 'watermelon');
console.log(fruits);
