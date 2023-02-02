//page1.html
// var name = "홍길동";
// var age = 10;
// age = 30; //값 재할당가능
// var tel = "01012345678";

// var tel = "021234567"; //재선언 가능
// console.log("내 전화번호는 " + tel); //휴대폰 번호? 집번호?

// let phone = "01012345678"; //let phone = "01012345678" 에러!
// phone = "01023456789"; //재할당만 가능
// console.log("내 전화번호는 " + phone); //휴대폰 번호!!

// const PI = 3.14; //const PI = 3.14 재선언 불가능
// PI = 3.14;//재할당 불가능

//----------------------------------------------------------------
//page2
//1.입력을 받아보자
//  let name = require("이름입력");
//  //나이를 입력받아서  age변수에 넣으시오
//  let age =require("나이를 입력");

//  let name2="이름은"+name+"입니다.";

//  //2.입력한 값을 프린트 해보자
//  console.log(name2);
//  //age 변수에 들어있는 값을 프린트 해보시오
//  console.log(age);
//------------------------------------------------------------

 //page3
 let now = new Date();
 let now_year = now.getFullYear();

 //1.입력 =>태어난 연도 입력
 //let year = prompt("태어난 연도:");
 
 //2.처리=>연도로 나이 계산
 let age = 0;
 age = now_year - year;

 //3.출력 => 저의 나이는 100세 입니다 출력 
 //console.log(now_year);
//  alert("저의 나이는" + age + " 세 입니다.");
console.log("저의 나이는" + age + " 세 입니다.");




