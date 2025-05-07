// 배열 앞에 요소 추가하기(unshift)
// Array 내장객체의 unshift 메소드는 배열 맨 앞에 요소를 추가하는 함수
const festa = ['mang'];
festa.unshift('chimmy');
festa.unshift('tata');
festa.unshift('cooky');
festa.unshift('shooky');
festa.unshift('koya');
festa.unshift('rj');

festa.forEach(name => {
    console.log(name);
})
