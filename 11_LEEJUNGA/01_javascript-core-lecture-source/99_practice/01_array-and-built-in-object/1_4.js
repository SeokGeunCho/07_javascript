/* 
### 1-4. Student 생성자 함수를 통해 생성 된 3명의 학생 객체를 studentList 배열에 담았다. 
해당 배열을 전달하여 score 내림차순 기준으로 정렬해주는 sortFromScore(arr) 함수, 해당 배열을 전달하여 
lastName과 firstName을 합성하여 name 속성으로 만들어 반환하는 makeFullName 함수를 작성한다.

- 힌트 : sort, map
*/

function Student(firstName, lastName, score) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.score = score;
}

const studentList = [
  new Student("길동", "홍", 60),
  new Student("보고", "장", 70),
  new Student("관순", "유", 80),
];

sortFromScore(studentList);
console.log(studentList);
console.log(makeFullName(studentList));

function sortFromScore(arr) {
  // 코드 작성
  arr.sort((a, b) => b.score - a.score);
}

function makeFullName(arr) {
  // 코드 작성
  return arr.map((student) => {
      return {
          name: student.lastName + student.firstName,
          score: student.score
      };
  });
}
