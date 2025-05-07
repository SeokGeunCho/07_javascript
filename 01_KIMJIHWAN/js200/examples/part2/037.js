// 함수 기본 매개변수 처리하기 (default parameter)
// ES5에서는 기본 매개변수를 처리하기 위해서 undefined 체크를 통해서 처리했지만
// ES6에서는 기본 매개변수를 통해서 처리할 수 있음

function drawChart(width = 200, height = 400) {
    console.log(`${width} X ${height} 차트를 그립니다.`);    
}
drawChart(100);
drawChart();

function drawChart2(width = 200, height = width / 2) {
    console.log(`${width} X ${height} 차트를 그립니다.`);       
}
drawChart2(300);
drawChart2();
