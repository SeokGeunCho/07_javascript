// 📘 클래스 상속 기본 문법 예제

// 🔹 부모 클래스(상위 클래스)
class Animal {
    constructor(name, weight) {
        this.name = name;     // 이름 설정
        this.weight = weight; // 몸무게 설정
    }

    // 공통 메서드 (모든 동물들이 먹을 수 있음)
    eat(foodWeight) {
        this.weight += foodWeight; // 몸무게 증가
        console.log(
            `${this.name}(은)는 ${foodWeight}kg의 식사를 하고 ${this.weight}kg이 되었습니다.`
        );
    }
}

// 🔹 자식 클래스(하위 클래스)
// Animal 클래스를 상속받아 Animal의 속성과 메서드를 자동으로 가짐
class Human extends Animal {
    
    // Human만의 고유 기능 추가 (부모에는 없는 기능)
    develop(language) {
        console.log(
            `${this.name}(은)는 ${language}로 개발을 합니다. 정말 즐거워유~`
        );
    }
}

// 🔸 Human 인스턴스 생성
let human = new Human("수강생", 70);

// 🔸 부모 클래스에서 물려받은 eat() 사용 가능!
human.eat(1); // 출력: 수강생(은)는 1kg의 식사를 하고 71kg이 되었습니다.

// 🔸 자식 클래스에서 추가한 develop() 메서드 호출
human.develop("JavaScript"); // 출력: 수강생(은)는 JavaScript로 개발을 합니다. 정말 즐거워유~
