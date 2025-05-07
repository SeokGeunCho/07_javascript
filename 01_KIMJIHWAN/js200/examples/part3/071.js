// 문자열 길이 구하기(length)
const arr = ['short', 'long sentence, it is not appropriate'];

// 변수 arr에 두 개의 문자열을 요소로 갖고 있는 배열을 대입힙니다.
// arr[0]에는 'short'인 짧은 문장
arr.forEach(str => {
    if (str.length < 10) console.log(str);
});

