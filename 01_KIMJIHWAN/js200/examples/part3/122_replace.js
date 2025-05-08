// 정규표현식으로 문자열 치환하기(replace)
// String객체의 replace 메소드는 정규표현식으로 특정 문자열을 검색한 뒤,
// 원하는 문자열로 대체

// 문자열.replace(교체 대상 문자열 또는 정규식, 대체될 문자열 또는 함수)
console.log('2018-08-03 07-23-14'.replace('-', ':'));
console.log('2018-08-03 07-23-14'.replace(/-/g, ':'));
console.log('2018-08-03 07-23-14'.replace(/\d/g, '9'));

const littleWomen = 'Meg March, Jo March, Beth March, Amy March';
console.log(littleWomen.replace(/\w+ March/ig, 'Mrs.$&'));
console.log(littleWomen.replace(/\w+ march/ig, (str, d1, d2, d3, d4, offset, s)
=> {
    let tag = '';
    if(/Meg/.test(str)) tag = '첫째'
    else if (/Jo/.test(str)) tag = '둘째'
    else if (/Beth/.test(str)) tag = '셋째'
    else if (/Amy/.test(str)) tag = '넷째'

    console.log(`원작 "작은 아씨들"에서 주인공 ${str}은 ${tag}입니다.`);
    return tag;
}));

const name = 'March Amy'
console.log(name.replace(/(March) (Amy)/, '$2 $1'));
console.log(name.replace(/(March) (Amy)/, (str, first, second, offset, s)
=> {
    console.log(`${second} is name, ${first} is first name.`);
    return `${second} ${first}`
}));
