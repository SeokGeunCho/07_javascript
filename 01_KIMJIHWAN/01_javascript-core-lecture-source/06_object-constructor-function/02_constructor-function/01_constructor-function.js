// 생성자함수

const student = {
    name: "유관순",
    age: 16,
    getInfo: function() {
        return `${this.name}(은)는 ${this.age}세 입니다.`
    },
};

const student2 = {
    name: "홍길동",
    age: 20,
    getInfo: function () {
        return `${this.name}(은)는 ${this.age}세 입니다.`
    },
};

// 생성자 함수 정의
function Student(name, age) {
    this.name = name;
    this.age = age;
    this.getInfo = function () {
        return `${this.name}(은)는 ${this.age}세 입니다.`;
    };
}

// 인스턴스의 생성
const student3 = new Student("장보고", 35);
console.log(student3);
console.log(student3.getInfo());
const student4 = new Student("신사임당", 40);
console.log(student4);
console.log(student4.getInfo());

