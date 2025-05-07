// 정규표현식(//)으로 특정 문자의 포함 여부 확인하기
// [] 안에 매칭되는 값 확인
// +한정기호는 하나 이상 일치하는 모든 문자열

// /[0-9]+/은 대입된 문자열이 숫자 0~9중에서 하나라도 일치하는지 확인하는 표현식
const numRegExp = /[0-9]+/;
const phoneRegExp = /\d{3}-\d{3,4}-\d{4}$/;
// ()소괄호는 공백으로 단어와 단어를 구분하는 역할

// ()를 기준으로 왼쪽 정규표현식 = 영문 대소문자, 
// 숫자 그리고 필수값 아닌 기호 -_.를 허용하는 표현식

// ()를 기준으로 오른쪽 정규표현식 = 
// 숫자 그리고 3~4라인은 이메일 패턴을 확인하는 표현식
const emailRegExp = 
/^([-_.]?[0-9a-zA-Z]{6,13})+\@[0-9a-z]+)\.([a-z]{2,3})$/i;

console.log(numRegExp.test(12345));
console.log(numRegExp.test('test'));
console.log(phoneRegExp.test('010-3003-0046'));
console.log(phoneRegExp.test('02-8844-1234'));
console.log(emailRegExp.test('test123@javascript.org'));
console.log(emailRegExp.test('test-javascript'));





