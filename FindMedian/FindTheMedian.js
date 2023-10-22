"use strict";
function calculateMedian(arr) {
  // 배열을 오름차순으로 정렬
  arr.sort(function (a, b) {
    return a - b;
  });

  // 배열의 길이
  var length = arr.length;

  // 배열의 중앙 위치 계산
  var middle = Math.floor(length / 2);

  // 배열의 길이가 홀수일 경우, 중앙값은 중앙 위치의 값
  if (length % 2 === 1) {
    return arr[middle];
  } else {
    // 배열의 길이가 짝수일 경우, 중앙값은 중앙 두 값의 평균
    return (arr[middle - 1] + arr[middle]) / 2;
  }
}
var data = [7, 2, 5, 10, 8];

// 중앙값 계산
var median = calculateMedian(data);

document.write("중앙값:", median);
