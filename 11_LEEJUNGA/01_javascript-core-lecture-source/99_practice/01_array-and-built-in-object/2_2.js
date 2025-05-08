/*
  ## 2-2. 오늘 흐른 시간을 초 단위로 알려주는 getSecondsToday 함수와 
  오늘 남은 시간을 초단위로 알려주는 getSecondsToTomorrow 함수를 만든다.
*/

console.log(getSecondsToday());
console.log(getSecondsToTomorrow());

function getSecondsToday() {
  // 코드 작성
  let now = new Date();
  let startDate = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  let diffTime = (now.getTime() - startDate.getTime()) / 1000;
  return `${Math.round(diffTime)}초나 흘렀습니다. 시간을 소중히 씁시다^^`;
}

function getSecondsToTomorrow() {
  // 코드 작성
  let now = new Date();
  let endDate = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
  let diffTime = (endDate.getTime() - now.getTime()) / 1000;
  return `${Math.round(
    diffTime
  )}초 밖에 안 남았습니다. 다시는 오지 않는 오늘입니다^^`;
}
