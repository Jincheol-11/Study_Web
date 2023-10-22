"use strict";
var num1 = 1;
var num2 = 1;

// while문, 10을 넘지 않을 때까지 반복
// 1단이 끝나면 2단 반복 하는 형식
document.write("while을 이용한 출력", "<br>");
while (num1 < 10) {
  num2 = 1;
  while (num2 < 10) {
    document.write(num1 + " * " + num2 + " = " + num1 * num2 + "<br>");
    num2++;
  }
  document.write("<hr>");
  num1++;
}
