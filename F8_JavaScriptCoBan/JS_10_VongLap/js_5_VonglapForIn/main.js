/* ==========<<<<< Vòng Lặp For/In  >>>>>========== */
/**Vòng Lặp For/In dùng để Lấy Tất cả Key và value  */
// Keywords:
// 3. String
var myString = "JavaScript";
for (const key in myString) {
  console.log("Đây là key của String :>> " + key); // Lấy Key chuyển sang chuỗi
  console.warn("Đây là value của String :>> " + myString[key]); // Lấy value chuyển sang chuỗi
} 

// 2. Array
var language = ["Java", "JavaScript", "Python", "PHP"];
for (const key in language) {
  console.log("Đây là key của Array :>> " + key); // Lấy Key chuyển sang chuỗi
  console.warn("Đây là value của Array :>> " + language[key]); // Lấy Key chuyển sang chuỗi
}

// 3. Object
var myInfo = {
  name: "Thanh Tien",
  age: 21,
  gender: "male",
};
for (const key in myInfo) {
  console.log("Đây là key Object :>> " + key); // Lấy Key chuyển sang chuỗi
  console.warn("Đây là value Object :>> " + myInfo[key]); // Lấy Value chuyển sang chuỗi
}
