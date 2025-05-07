// 클래스 표현식

// 1. 익명 클래스 표현식
let Tutor = class {
    teach() {
        console.log("이해하셨나요??");
    }
};

new Tutor().teach();

// 2. 기명 클래스 표현식
let Tutee = class MyTutee {
    learn() {
        console.log(`우와~~~~~ 이해했어요~`);
    }
};

new Tutee().learn();
// new MyTutee().leart();   // error

// 3. 클래스 동적 생성
function makeTutee(message){
    return class {
        feedback(){
            console.log(message);
        }
    }
}
let SecondTutee = makeTutee("10점 만점에 10점");
new SecondTutee().feedback();