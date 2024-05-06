/* ==========<<<<< Số và làm việc Số  >>>>>========== */
// Keywords: Javascript Number Methods
// 1. Tạo giá trị Number
//      -- Các cách tạo
// cách 1: ok
var age = 21;
var agse = 21.532;
// cách 2: khởi tạo 1 đối tượng
// var orTherNumber = new Number(2) // Object
//      -- Dùng cách nào? Tại sao
//      -- Kiểm tra data type
var result = 20 / "ABC";
console.log(result); //NaN: tạo ra 1 kiểu số không hợp lệ;
// isNaN: để kiểm tra có phải tạo ra 1 kiểu số không hợp lệ hay không
// 2. Làm việc với number
//  -- toString :Chuyển đổi kiểu Number thành String
console.log(age, "\n" + `${age.toString()}`);
//      -- toFixed: Làm tròn số thập phân và chuyển về kiểu String
console.log(agse, "\n" + `${agse.toFixed(1)}`);

// cách 1
// function isNumber(value) {
//   return typeof value === "number"; // chuỗi = chuỗi
// }

// // Expected results:
// console.log(isNumber(999)); // true
// console.log(isNumber("abc")); // false
// console.log(isNumber("100")); // false
// cách 2
// function isNumber(value) {
//   return value === Number(value);
// }
// // Expected results:
// console.log(isNumber(999)); // true
// console.log(isNumber("abc")); // false
// console.log(isNumber("100")); // false

////////////////////////////////
function isNumber(value) {
    return (( value === Number(value))&&( value !== NaN));
}




// Expected results:
console.log(isNumber(999)); // true
console.log(isNumber('abc')); // false
console.log(isNumber('100')); // false

console.log(isNumber(NaN)); // false
console.log(isNumber(100 / 'abc')); // false