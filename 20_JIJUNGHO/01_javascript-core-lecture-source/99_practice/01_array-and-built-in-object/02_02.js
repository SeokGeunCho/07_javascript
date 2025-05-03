/* 오늘 흐른 시간을 초 단위로 알려주는 getSecondsToday 함수와 오늘 남은 시간을 초단위로 알려주는 getSecondsToTomorrow 함수를 만든다. */

console.log(getSecondsToday());
console.log(getSecondsToTomorrow());

// 오늘 흐른 시간을 초 단위
function getSecondsToday() {
  // 코드 작성
  const now = new Date();
  const start = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const diff = now - start;
  return `${Math.floor(diff / 1000)}초나 흘렀습니다. 시간을 소중히 씁시다 ^^`;
}

// 오늘 남은 시간을 초 단위
function getSecondsToTomorrow() {
  // 코드 작성
  const now = new Date();
  const start = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
  const diff = start - now;
  return `${Math.floor(diff / 1000)}초 밖에 안 남았습니다. 다시는 오지 않을 날입니다.`;
}
