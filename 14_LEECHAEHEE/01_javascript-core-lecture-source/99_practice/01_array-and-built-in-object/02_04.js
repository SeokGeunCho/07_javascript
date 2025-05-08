const list = ['기러기', '토마토', '스위스', '인도인', '별똥별', '우별림'];

list.forEach(item => console.log(palindrom(item)));

function palindrom(str) {
    // 코드 작성
    return str === str.split('').reverse().join('');

    // String method 활용 보다 효율을 고려한다면
/*    const chars = Array.from(str);
    const len   = chars.length;
    for (let i = 0; i < len / 2; i++) {
        if (chars[i] !== chars[len - 1 - i]) {
            return false;
        }
    }
    return true;*/
}