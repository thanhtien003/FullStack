/*
=== Giới thiệu về 1 số hàm Built-in Functions
*/

// 1. Alert

// 2. Console: Đối tượng chứa nhiều hàm bên trong > tác vụ in ra ở tap console
var fullName = "Pham Thanh Tien"
// console.warn(fullName);
// console.error(fullName);
// console.log("in ra dòng Log");

// 3. Confirm
// confirm("Xác nhận bản đủ tuổi")

// 4. Prompt
// prompt("Xác nhận bản đủ tuổi")

// 5. setTimeout
// setTimeout(function(){
//     prompt("Timeout")
//     prompt("Timeout")
//     prompt("Timeout")
// },1000)

// 6. setInterval
setInterval(function(){
    console.log("Timeout " + Math.floor(Math.random()*100));

},1000)