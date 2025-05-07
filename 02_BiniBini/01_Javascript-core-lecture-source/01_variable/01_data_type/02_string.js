// [JavaScript 문자열 (String) 기본]

// 1. 변수 선언
// var 키워드를 사용해서 변수를 선언한다.
// 여기서는 변수 이름이 'string'이다.
var string;

// 2. 문자열(String) 대입하기
// 문자열은 '', "", `` 로 감싸서 작성할 수 있다.
string = 'JavaScript';   // 작은따옴표 (Single quotes)
string = "JavaScript";   // 큰따옴표 (Double quotes)
// '', "" 모두 사용 가능하며 둘 중 편한 걸 써도 된다.

string = `JavaScript`;   // 백틱(Grave accent, `) 사용
// 백틱은 특별한 기능(템플릿 리터럴)도 함께 지원한다.

console.log('string: ', string); 
// 출력: string: JavaScript

// 3. 템플릿 리터럴 (Template Literal)
// - ES6 (ECMAScript 2015)에서 새로 추가된 문법
// - 백틱(``)을 이용해 "멀티라인 문자열"과 "표현식 삽입"을 할 수 있다.

var str = `안녕하세요
반갑습니다.
제 이름은 홍길동입니다.`;
// 줄바꿈을 \n 없이 그냥 Enter만으로 표현할 수 있다.

console.log(str);
/*
출력:
안녕하세요
반갑습니다.
제 이름은 홍길동입니다.
*/

// 4. 문자열 연결 (Concatenation) vs 표현식 삽입 (Interpolation)

// 일반 문자열 연결
var lastName = '홍';
var firstName = "길동";

console.log('제 이름은' + lastName + firstName + "입니다.");
// + 연산자를 사용해서 문자열을 이어 붙인다.

// 템플릿 리터럴 사용
console.log(`제 이름은 ${lastName}${firstName}입니다`);
// ${} 안에 변수나 표현식을 넣으면 자동으로 문자열 안에 삽입된다.
