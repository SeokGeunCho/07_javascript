// 📘 Math 객체 정리

// ───────────────────────────────
// ✅ 수학 상수 (π)
console.log("\n📌 Math.PI");
console.log(Math.PI); // 3.141592653589793

// ───────────────────────────────
// ✅ 절대값 - Math.abs()
console.log("\n📌 Math.abs()");
console.log(Math.abs(-10));       // 10
console.log(Math.abs("−10"));     // 10
console.log(Math.abs(""));        // 0
console.log(Math.abs([]));        // 0
console.log(Math.abs(null));      // 0
console.log(Math.abs(undefined)); // NaN
console.log(Math.abs({}));        // NaN
console.log(Math.abs("math"));    // NaN
console.log(Math.abs());          // NaN

// ───────────────────────────────
// ✅ 반올림 - Math.round()
console.log("\n📌 Math.round()");
console.log(Math.round(10.1));   // 10
console.log(Math.round(10.9));   // 11
console.log(Math.round(-10.1));  // -10
console.log(Math.round(-10.9));  // -11
console.log(Math.round(10));     // 10
console.log(Math.round());       // NaN

// ───────────────────────────────
// ✅ 올림 - Math.ceil()
console.log("\n📌 Math.ceil()");
console.log(Math.ceil(10.1));    // 11
console.log(Math.ceil(10.9));    // 11
console.log(Math.ceil(-10.1));   // -10
console.log(Math.ceil(-10.9));   // -10
console.log(Math.ceil(10));      // 10
console.log(Math.ceil());        // NaN

// ───────────────────────────────
// ✅ 내림 - Math.floor()
console.log("\n📌 Math.floor()");
console.log(Math.floor(10.1));   // 10
console.log(Math.floor(10.9));   // 10
console.log(Math.floor(-10.1));  // -11
console.log(Math.floor(-10.9));  // -11
console.log(Math.floor(10));     // 10
console.log(Math.floor());       // NaN

// ───────────────────────────────
// ✅ 제곱근 - Math.sqrt()
console.log("\n📌 Math.sqrt()");
console.log(Math.sqrt(4));   // 2
console.log(Math.sqrt(2));   // 1.41...
console.log(Math.sqrt(1));   // 1
console.log(Math.sqrt(0));   // 0
console.log(Math.sqrt(-4));  // NaN
console.log(Math.sqrt());    // NaN

// ───────────────────────────────
// ✅ 난수 - Math.random()
console.log("\n📌 Math.random()");
console.log(Math.random()); // 0 이상 1 미만의 랜덤 실수

// 1~100 사이 정수 랜덤
const rand = Math.floor(Math.random() * 100) + 1;
console.log("1~100 랜덤 정수:", rand);

// ───────────────────────────────
// ✅ 거듭제곱 - Math.pow(), **
console.log("\n📌 Math.pow()");
console.log(Math.pow(2, 2));   // 4
console.log(Math.pow(2, -2));  // 0.25
console.log(Math.pow(2));      // NaN

// ES7 지수 연산자 (**)
console.log("2 ** 2 =", 2 ** 2);     // 4
console.log("2 ** -2 =", 2 ** -2);   // 0.25

// ───────────────────────────────
// ✅ 최댓값 - Math.max()
console.log("\n📌 Math.max()");
console.log(Math.max(10));             // 10
console.log(Math.max(10, 20));         // 20
console.log(Math.max(10, 20, 30));     // 30
console.log(Math.max());               // -Infinity

// ───────────────────────────────
// ✅ 최솟값 - Math.min()
console.log("\n📌 Math.min()");
console.log(Math.min(10));             // 10
console.log(Math.min(10, 20));         // 10
console.log(Math.min(10, 20, 30));     // 10
console.log(Math.min());               // Infinity
