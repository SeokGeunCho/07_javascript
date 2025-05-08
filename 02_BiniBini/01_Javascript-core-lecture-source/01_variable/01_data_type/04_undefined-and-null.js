// [JavaScript - undefined와 null]

// 1. undefined
// 변수를 선언만 하고 값을 할당하지 않으면
// 자바스크립트 엔진이 자동으로 'undefined'를 넣어준다.

var undef; // 변수 선언 (값은 아직 없음)

console.log(`undef: `, undef); 
// 출력: undef: undefined
// → 변수에 값을 안 넣었기 때문에 자동으로 undefined가 들어간 것.

// 2. null
// null은 '변수에 값이 없다'는 것을 **의도적으로** 표시할 때 사용한다.

var nullVar = 'something'; // initially assigned with a string
nullVar = null;            // intentionally setting it to '없음'

console.log(`nullVar`, nullVar); 
// 출력: nullVar null
// → 이 변수는 더 이상 값을 가지고 있지 않다는 걸 명확하게 표현.
