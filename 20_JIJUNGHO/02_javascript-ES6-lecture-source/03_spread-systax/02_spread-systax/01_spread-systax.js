// 스프레드 문법 (전개문법)
// 배열이나 객체 등을 펼쳐서(전개해서) 복사하거나 합칠 때 쓰이는 ... 연산자

const arr = [10, 20, 30];
console.log(`가장 큰 값 : ${Math.max(10, 20, 30)}`);
console.log(`가장 큰 값 : ${Math.max(arr)}`); // 값이 아닌 주소값을 가져오므로 NaN

// 스프레드 문법을 사용하면, arr이 인수목록으로 확장된다.
console.log(`가장 큰 값 : ${Math.max(...arr)}`);

console.log("==============================");

const arr1 = [10, 30, 20];
const arr2 = [100, 300, 200];

// arr1, arr2의 인수 중 가장 큰 값 출력
console.log(`가장 큰 값 ${Math.max(...arr1, ...arr2)}`);
console.log(`가장 큰 값 : ${Math.max(0, ...arr1, 5, ...arr2, 555)}`);

const merged = [0, ...arr1, ...arr2];
console.log(merged);

// 문자열 한 글자씩 배열에 저장
const str = "JavaScript";
console.log([...str]);
