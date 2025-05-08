// 정적 메소드
// 특정 클래스 인스턴스가 아닌 클래스 '전체'에 필요한 기능을 만들 때 사용한다.
class Student {
  constructor(name, height) {
    this.name = name;
    this.height = height;
  }
  // 클래스 선언브 안에 위치하고 static키워드를 붙이면 정적메소드가 선언된다.
  static compare(studentA, studentB) {
    return studentA.height - studentB.height;
  }
}

let students = [
  new Student("유관순", 165.5),
  new Student("홍길동", 180.6),
  new Student("선덕여왕", 159.5),
];

students.sort(Student.compare);
// 정적 메소드로 선언한 compare를 전달하여 신장 오름차순으로 배열을 정렬한다.
console.log(students);

Student.staticMethod = function () {
  console.log(
    `staticMethod는 메서드를 프로퍼티 형태로 직접 할당하는 것과 동일하다.`
  );
};

Student.staticMethod();

class User {
  constructor(id, registDate) {
    this.id = id;
    this.registDate = registDate;
  }
  // 조건에 맞는 객체를 만들어야 할 때 생성자도 사용가능하지만
  // 클래스에 정적 메소드를 만들어 팩토리 메서드를 구현할 수 있다.
  static registUser(id) {
    return new this(id, new Date());
  }
}

let user01 = User.registUser("user01");
console.log(`user01 : `, user01);
