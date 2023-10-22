"use strict";
/* 
1. if else : 조건문으로 특정 조건을 만족할 시 프로그램 연산을 실행합니다
2. 점수가 90 보다 크거나 같은 경우 A 학점 / 점수가 80 보다 크거나 같은 경우 B 학점을 출력합니다    	
*/

/* 이벤트 함수 정의 */

/* 초기 변수 선언 실시 */
let num_value = 85;
document.write("점수 : " + num_value);

/* 연산 수행 실시 */
if (num_value >= 90) {
  //90보다 큰 경우
  document.write("학점 : " + "A");
} else if (num_value >= 80) {
  //80보다 큰경우
  document.write("학점 : " + "B");
} else if (num_value >= 70) {
  //70보다 큰 경우
  document.write("학점 : " + "C");
} else {
  document.write("학점 : " + "D");
}
