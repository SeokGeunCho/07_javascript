const str = '사과,바나나,당근,김밥,치즈,떡볶이,햄버거,환타,사이다,콜라,고양이,강아지';

console.log(findWord(str, '고양이'));
console.log(findWord(str, '샌드위치'));
console.log(findWord(str));

function findWord(str, word) {
    if (!str || !word) {
        return "결과를 확인할 수 없습니다.";
    }

    const wordArr = str.split(",");
    const index = wordArr.indexOf(word);

    if (index === -1) {
        return `${word}는 배열에 존재하지 않습니다.`;
    }

    return `${word}는 배열 index ${index}번째에 있습니다.`;
}