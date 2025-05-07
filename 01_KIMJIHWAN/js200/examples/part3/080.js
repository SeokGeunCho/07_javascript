// 문자열을 특정 구분자에 의해 배열로 나누기(split)
// String 내장객체의 메소드 split은 문자열을 배열로 변환하여 반환합니다.
// 이때 split 인자로 받은 구분자로 문자열을 분리한 후, 각각을 배열 요소에 넣는다.
const capitals = `Prague,Czech Republic
Copenhagen,Denmark
Paris,France
Madrid,Spain
Rome,Italy`;

// split 메소드를 활용하여 변수 capitals의 문자열 값을 줄바꿈으로 분리
// 배열로 변환된 값은 forEach를 통해 순환, 각 요소에 접근하고 반환 가능
capitals.split('\n').forEach(s => {
    const capital = s.split(',')[0];
    const country = s.split(',')[1];
    console.log(`${capital} is in ${country}`);    
})
