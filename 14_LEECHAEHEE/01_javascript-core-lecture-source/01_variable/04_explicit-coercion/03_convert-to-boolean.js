// 논리 타입으로 명시적 변환

// 1. Boolean 생성자 함수를 new 연산자 없이 호출
console.log(Boolean('JavaScript'));  // true
console.log(Boolean(''));            // false
console.log(Boolean(1));            // true
console.log(Boolean(0));            // false
console.log(Boolean(NaN));          // false
console.log(Boolean(Infinity));     // true
console.log(Boolean(null));         // flase
console.log(Boolean(undefined));    // false
console.log(Boolean({}));           // true
console.log(Boolean([]));           // true
console.log(`-----------------------------------------`);

// 2. !부정 논리 연산자를 두번 사용하는 방법
console.log(!!'JavaScript');
console.log(!!'');
console.log(!!1);
console.log(!!0);            // false
console.log(!!NaN);          // false
console.log(!!Infinity);     // true
console.log(!!null);         // flase
console.log(!!undefined);    // false
console.log(!!{});           // true
console.log(!![]);           // true