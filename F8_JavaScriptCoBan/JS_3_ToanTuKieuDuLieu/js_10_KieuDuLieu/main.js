/* ==========<<<<< Keeir Dữ Liệu Trong JavaScript  >>>>>========== */

// 1.Kiểu dữ liệu nguyên thủy -Primitive Data
// - Number():
var a = 1;
// - String():
var fullName = "Pham 'Thanh Tien";
// - Boolean ():
var isSuccess = true || false; // on hay of|| dúng hay sai
// - undefined ():Biến không gán giá trị
var age;
// - null(): Đối tượng không có gì
var isNull = null;
// - Symbol(): Tính duy nhất
var id = Symbol("id"); // unique();

// 2.Kiểu Dữ liệu phức tạp - Complex Data
// - function ():Dữ liệu dạng Hàm Thực thi khi được gọi
var myFunction = function () {
  console.log("myFunction");
};
// - Object(): Dữ Liệu đối tượng ở dạng KEY và Value
var myObject = {
  name: "Phạm",
  age: 21,
  address: {
    city: "Hà Nội",
    state: "Đà Nẵng",
  },
};
// - Array: Định nghĩa dạng danh sách không cần Key
var myArray =["JavaScript","PHP","Ruby"];

// Result 

console.log("a", a);
console.log("fullName", fullName);
console.log("isSuccess", isSuccess);
console.log("age", age);
console.log("isNull", isNull);
console.log(id);
myFunction();
console.log("myObject", myObject);
console.log("myArray",myArray);
