// 048. 객체지향 프로그래밍 이해하기 (OOP)
const teacherJay = {
    name: '제이',
    age: 30,
    teachJavascript: function(student) {
        student.gainExp();
    }
}

const studentBbo = {
    name: '뽀',
    age: 20,
    exp: 0,
    gainExp: function() {
        this.exp++;
    }
}
console.log(studentBbo.exp);
teacherJay.teachJavascript(studentBbo);
console.log(studentBbo.exp);


// 048-1 클래스 선언하기 (Class DecLaration)
// ES6에서 추가된 기능으로, 객체지향 프로그래밍을 지원하기 위해 클래스 문법을
// 제공합니다.
const studentProto = {
    gainExp: function () {
        this.exp++;
    }
}

const harin = {
    name: '하린',
    age: 10,
    exp: 0,
    __proto__: studentProto
};

const bbo = {
    name : '뽀',
    age: 20,
    exp: 10,
    __proto__: studentProto
};

bbo.gainExp();
harin.gainExp();
harin.gainExp();
console.log(harin);
console.log(bbo);
