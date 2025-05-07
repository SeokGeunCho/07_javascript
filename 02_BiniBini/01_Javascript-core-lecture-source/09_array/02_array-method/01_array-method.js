// ✅ 1. 배열 만들기 (왕초보 설명)
const arr = []; // 배열은 이렇게 대괄호 []로 만들어요. 지금은 비어 있음.

// 📌 배열이 실제로는 어떤 식으로 만들어졌는지 확인
console.log(arr.constructor === Array); // true
// ➜ 배열은 사실 Array라는 함수로 만들어진 거예요!

console.log(Object.getPrototypeOf(arr) === Array.prototype); // true
// ➜ 배열은 Array.prototype에 있는 여러 기능(indexOf, push 등)을 사용할 수 있어요


// ✅ 2. 배열에 값 넣기: 음식 이름
const foodList = ["물회", "삼계탕", "냉면", "수박", "물회"];
console.log(foodList); // 배열에 5개의 문자열이 들어있어요


// ✅ 3. push & pop 메서드: 배열에 넣기 / 빼기
// push(): 마지막에 값 추가하기
foodList.push("갈비탕");
console.log("🍽️ push 후:", foodList); // 배열 마지막에 '갈비탕' 추가됨

// pop(): 마지막 값 꺼내기 (제거)
const removed = foodList.pop();
console.log("🍽️ pop으로 제거된 값:", removed); // '갈비탕'이 빠짐
console.log("🍽️ pop 후:", foodList); // 다시 원래대로 돌아옴


// ✅ 3-1. unshift & shift: 앞에 넣고 빼기
// unshift(): 배열 맨 앞에 추가
foodList.unshift("국밥");
console.log("🍽️ unshift 후:", foodList); // '국밥'이 맨 앞에 추가됨

// shift(): 배열 맨 앞에서 제거
const firstRemoved = foodList.shift();
console.log("🍽️ shift로 제거된 값:", firstRemoved); // '국밥' 제거됨
console.log("🍽️ shift 후:", foodList);


// ✅ 3-2. splice(): 원하는 위치에서 추가/제거
// splice(1, 0, "비빔밥") → 인덱스 1에 비빔밥 삽입, 삭제는 0개
foodList.splice(1, 0, "비빔밥");
console.log("🍽️ splice로 값 추가 (삭제 없이):", foodList);

// splice(1, 1, "비빔밥") → 인덱스 1 요소 삭제 후 비빔밥 삽입
let foodList2 = ["물회", "삼계탕", "냉면"];
foodList2.splice(1, 1, "비빔밥");
console.log("🍽️ splice 교체 (1개 삭제):", foodList2);

// splice(1, 2) → 인덱스 1부터 2개 삭제
let foodList3 = ["물회", "삼계탕", "냉면"];
foodList3.splice(1, 2);
console.log("🍽️ splice 삭제만 한 경우:", foodList3);

// 인덱스 2 요소 제거만
const spliced = foodList.splice(2, 1);
console.log("🍽️ splice 제거된 값:", spliced);
console.log("🍽️ splice 후:", foodList);


// ✅ 3-3. slice(): 배열 복사
const sliced = foodList.slice(1, 3);
console.log("🔪 slice로 잘라낸 배열:", sliced);
console.log("📦 원본 배열은 그대로:", foodList);

const originalList = ["물회", "삼계탕", "냉면", "수박"];
const slicedAgain = originalList.slice(1, 3);
console.log("🔪 slice 복사본:", slicedAgain);
console.log("📦 원본 유지:", originalList);


// ✅ sort & reverse
const fruits = ["banana", "apple", "cherry"];
fruits.sort();
console.log("🔡 정렬된 배열:", fruits);

const nums = [40, 100, 1, 5, 25];
nums.sort();
console.log("❌ 잘못된 숫자 정렬:", nums);
nums.sort((a, b) => a - b);
console.log("✅ 오름차순:", nums);
nums.sort((a, b) => b - a);
console.log("✅ 내림차순:", nums);

const reversed = [...fruits].reverse();
console.log("🔁 reverse 결과:", reversed);
const fruitsReversedSafe = [...fruits].reverse();
console.log("🔁 복사 후 reverse:", fruitsReversedSafe);


// ✅ concat & join
const moreFoods = ["떡볶이", "순대"];
const combined = foodList.concat(moreFoods);
console.log("➕ concat 결과:", combined);
const joined = foodList.join(", ");
console.log("🧩 join 결과:", joined);


// ✅ indexOf, lastIndexOf, includes
console.log(foodList.indexOf("물회"));
console.log(foodList.indexOf("물회", 1));
console.log(foodList.indexOf("삼겹살"));
console.log(foodList.lastIndexOf("물회"));
console.log(foodList.lastIndexOf("냉면"));
console.log(foodList.lastIndexOf("삼겹살"));
console.log(foodList.includes("수박"));
console.log(foodList.includes("삼겹살"));


// ✅ 실무 예제
const fileList = [
  "user.profile.jpg",
  "index.html",
  ".env",
  "readme",
  "main.min.js",
  "script.js",
  "logo.png",
  "user.profile.jpg"
];

console.log("🔍 전체 파일 목록:", fileList);

const targetFile = "index.html";
if (fileList.includes(targetFile)) {
  console.log(`✅ ${targetFile} 파일이 있어요! 위치는 ${fileList.indexOf(targetFile)}번`);
} else {
  console.log(`❌ ${targetFile} 파일은 없어요.`);
}

const extensions = fileList
  .filter(file => file.includes(".") && file.lastIndexOf(".") > 0)
  .map(file => file.substring(file.lastIndexOf(".") + 1));
console.log("🧾 확장자 목록:", extensions);

const jsFiles = fileList.filter(file => file.endsWith(".js"));
console.log("📂 JS 파일 목록:", jsFiles);

const hiddenFiles = fileList.filter(file => file.startsWith("."));
console.log("🙈 숨김 파일:", hiddenFiles);

const duplicates = fileList.filter((file, idx, arr) => arr.indexOf(file) !== arr.lastIndexOf(file));
console.log("⚠️ 중복된 파일:", [...new Set(duplicates)]);

const path = "assets/user.profile.jpg";
console.log("📁 경로 예시:", path);
// ❗ 주의: 파일명에 점이 많으면 디렉토리처럼 보일 수 있음


// ✅ 고급 메서드
const firstJs = fileList.find(file => file.endsWith(".js"));
console.log("🔍 첫 번째 JS 파일:", firstJs);

const firstJsIndex = fileList.findIndex(file => file.endsWith(".js"));
console.log("📌 첫 JS 위치:", firstJsIndex);

const hasHtml = fileList.some(file => file.endsWith(".html"));
console.log("✅ HTML 파일 있나요?:", hasHtml);

const allFilesAreJS = fileList.every(file => file.endsWith(".js"));
console.log("🧐 전부 JS 파일인가요?:", allFilesAreJS);

const extCount = extensions.reduce((acc, ext) => {
  acc[ext] = (acc[ext] || 0) + 1;
  return acc;
}, {});
console.log("📊 확장자별 개수:", extCount);

const original = "invoice.pdf";
const uniqueName = `${Date.now()}_${original}`;
console.log("🆔 고유한 파일명:", uniqueName);

const blocked = ["exe", "bat", "sh"];
const isBlocked = extensions.some(ext => blocked.includes(ext));
console.log("🚫 금지된 확장자 포함되어 있나요?:", isBlocked);
