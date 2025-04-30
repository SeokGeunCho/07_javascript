// [JavaScript - for...in 반복문 (객체의 키 순회 및 동적 접근 차이 자세히 정리)]

// 1. 객체 생성
var student = {
    name: '유관순', // 문자열 프로퍼티
    age: 16,        // 숫자 프로퍼티
    getInfo() {     // 메서드 (축약형 문법)
        return `${this.name}(은)는 ${this.age}세 입니다.`;
    }
};

// 2. for...in 반복문으로 객체의 모든 "키"를 순회
for (var key in student) {
    
    // (1) 현재 순회 중인 키 출력
    console.log(`key : ${key}`);
    
    // (2) student.key 로 접근 (❌ 잘못된 접근)
    // - 항상 "key"라는 고정된 문자열 프로퍼티를 찾으려 하기 때문에 undefined가 나온다.
    console.log(`student.key : ${student.key}`);
    
    // (3) 구분선
    console.log(`======================`);
    
    // (4) student[key] 로 접근 (✅ 올바른 접근)
    // - key 변수 안에 들어 있는 실제 키 이름을 이용해서 값에 접근한다.
    console.log(`student[key] : ${student[key]}`);
}

/*
실제 출력 결과:

key : name
student.key : undefined
======================
student[key] : 유관순

key : age
student.key : undefined
======================
student[key] : 16

key : getInfo
student.key : undefined
======================
student[key] : function() { return `${this.name}(은)는 ${this.age}세 입니다.`; }
*/

// 3. 중요 포인트 정리
// - for...in은 객체의 **모든 키**를 순회한다.
// - key는 각 프로퍼티 이름(문자열 형태)을 의미한다.
// - 객체 프로퍼티에 접근할 때,
//    * student.key   ➔ "key"라는 고정된 이름의 프로퍼티를 찾음 (항상 undefined)
//    * student[key]  ➔ key 변수에 담긴 실제 키 이름을 참조해서 값을 가져옴 (올바른 접근)
// - 즉, 동적으로 키에 접근하려면 반드시 대괄호([])를 사용해야 한다!

// 4. 추가 주의사항
// - for...in은 객체 자신의 프로퍼티 뿐만 아니라 상속된 프로퍼티도 순회할 수 있다.
// - 그래서 실무에서는 보통 hasOwnProperty()로 필터링을 추가한다.

for (var key in student) {
    if (student.hasOwnProperty(key)) {
        console.log(`(자기 소유 프로퍼티) ${key} : ${student[key]}`);
    }
}

// (hasOwnProperty 필터링을 통해 상속된 키를 제외하고 자기 자신의 키만 출력함)
