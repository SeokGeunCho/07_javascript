// 049. 생성자 함수 (Constructor Function)
// 생성자 함수는 객체를 생성하는 함수이다.
// 생성자 함수는 대문자로 시작하는 것이 관례이다.
// 생성자 함수는 this 키워드를 사용하여 객체를 생성한다.
// 생성자 함수는 new 키워드를 사용하여 호출한다.
function Teacher(name, age, subject) {
    this.name = name;
    this.age = age;
    this.subject = subject;
    this.teach = function (student) {
        console.log(student + '에게' + this.subject + '를 가르친다.');
    }
}

const jay = new Teacher('jay', 30, 'JavaScript');
console.log(jay);
jay.teach('bbo');

console.log(jay.constructor);
console.log(jay instanceof Teacher);

const jay2 = Teacher('jay', 30, 'JavaScript');
console.log(jay2);
console.log(age);