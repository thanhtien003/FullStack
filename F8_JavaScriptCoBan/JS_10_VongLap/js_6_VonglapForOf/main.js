/* ==========<<<<< Vòng Lặp For/Of  >>>>>========== */
/**Vòng Lặp For/Of
 *  Lấy ra từng Chữ Cái của 1 chuỗi
 *  Lấy ra từng phần tử của 1 mảng
 *  Nếu sử dụng với Object thì phải sử lý*/
// Keywords:
// 3. String
var myString = "JavaScript";
for (const value of myString) {
  console.log("Đây là value của String :>> ", value); // Lấy Value chuyển sang chuỗi
}

// 2. Array
var languages = ["Java", "JavaScript", "Python", "PHP"];
for (const value of languages) {
  console.log("Đây là value của Array :>> ", value); // Lấy Value chuyển sang chuỗi
}

// 3. Object
var myInfo = {
  name: "Thanh Tien",
  age: 21,
  gender: "male",
};
console.log("Object", myInfo);
console.log(" chuyển đổi thành Key trả về 1 mảng ", Object.keys(myInfo)); // chuyển đổi thành Key trả về 1 mảng
console.log(" chuyển đổi thành Value trả về 1 mảng ", Object.values(myInfo)); // chuyển đổi thành Value trả về 1 mảng
for (const value of Object.keys(myInfo)) {
  //chuyển đổi thành Key trả về 1 mảng
  console.log("Đây là Key Object :>> ", value); // Lấy Key chuyển sang chuỗi
  console.warn("Đây là Value Object :>> ", myInfo[value]); // Lấy Value chuyển sang chuỗi
}
