// 모듈을 여러 이름으로 내보내고 가져오기
export const version = 'v1.0';

// 기본값(default)과 다르게 이름이 있기 때문에 중복되지 않는 한 여러 이름있는 것들을 내보낼 수 있습니다.
export var personA = {
    name: 'a'
};

export function add(a, b) {
    return a + b;
}

export class Person {
    constructor(name) {
        this.name = name;
    }
}