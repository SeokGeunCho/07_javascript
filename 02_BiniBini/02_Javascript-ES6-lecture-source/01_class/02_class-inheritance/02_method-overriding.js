// 📘 메서드 오버라이딩 (Method Overriding)

// 🔹 상위 클래스 (부모 클래스)
class Animal {
    constructor(name, weight) {
        this.name = name;     // 이름
        this.weight = weight; // 몸무게
    }

    // 부모 클래스의 move 메서드
    move(lostWeight) {
        // 몸무게가 감량될 만큼 남아있을 때만 실행
        if (this.weight > lostWeight) {
            this.weight -= lostWeight; // 체중 감량
            console.log(`${this.name}(은)는 움직임으로 인해 ${lostWeight}kg 감량되어 ${this.weight}kg이 되었습니다.`);
        }
    }
}

// 🔹 자식 클래스 (Tiger는 Animal을 상속받음)
class Tiger extends Animal {

    // 자식만의 고유 메서드: 공격
    attact(target) {
        console.log(`${this.name}(은)는 ${target}을 공격합니다.`);
    }

    // 🔸 부모 클래스의 move 메서드를 "오버라이딩"
    // → 같은 이름의 메서드를 다시 정의해서 다르게 동작하도록 만듦
    move(target) {
        // 기존 move(lostWeight) 대신 → move(target)으로 바꿈 (매개변수 달라짐도 가능)

        // 1. 먼저 공격 실행 (자식 클래스의 동작)
        this.attact(target);

        // 2. 그 다음, 부모 클래스의 move도 일부 실행
        //    → super 키워드를 사용하여 부모 메서드 호출 가능
        super.move(0.1); // 공격 후 체중 0.1kg 감량
    }
}

// 🔸 인스턴스 생성
let tiger = new Tiger('백두산 호랭이', 90);

// 🔸 move 메서드 호출 (자식 클래스의 move가 호출됨)
tiger.move('슬픈 눈망울의 사슴');

/*
출력:
백두산 호랭이(은)는 슬픈 눈망울의 사슴을 공격합니다.
백두산 호랭이(은)는 움직임으로 인해 0.1kg 감량되어 89.9kg이 되었습니다.
*/
