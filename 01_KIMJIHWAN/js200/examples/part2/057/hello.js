// 모듈 기본값 정의하고 가져오기

// 기본값(default)
// default 키워드 사용에 있어 중요한 점은, 한 파일에서는
// default 키워드는 하나의 모듈에서 한 번만 사용할 수 있습니다.
// export default 'hello';
// export default function hello(name) {
//     console.log('hello ' + name);
// };

// 
export default class Hello {
    constructor(greeting) {
        this.greeting = greeting;
    }
    hi(name) {
        console.log(`${this.greeting} ${name}`);
    }
}
