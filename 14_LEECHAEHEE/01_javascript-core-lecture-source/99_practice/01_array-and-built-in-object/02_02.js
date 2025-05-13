console.log(getSecondsToday());
console.log(getSecondsToTomorrow());

function getSecondsToday() {
    // 코드 작성
    const now = new Date();
    const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const diff = now - startOfDay;
    return `${Math.round(diff / 1000)}초나 흘렀습니다. 시간을 소중히 씁시다^^`;
}

function getSecondsToTomorrow() {
    // 코드 작성
    const now = new Date();
    const startOfTomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1);
    const diff = startOfTomorrow - now;
    return `${Math.round(diff / 1000)}초 밖에 안 남았습니다. 다시는 오지 않는 오늘입니다^^`;
}
