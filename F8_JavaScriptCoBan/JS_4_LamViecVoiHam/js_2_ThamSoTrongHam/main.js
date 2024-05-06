/* ==========<<<<< Tham Số trong Hàm  >>>>>========== */

// 1. Tham số ?
// - Định nghĩa : giá trị truyền vào khi gọi tới 1 function
// - Kiểu dữ liệu :
// - tính private
// - 1tham số
// - nhiều tham số
// 2. Truyền Tham số
// - 1 tham số
// - nhiều tham sô
// 3. Arguments
// - Đối tượng Argument: trả về tham số trong hàm dạng mảng
// - Giới thiệu vòng for of

// function writeLog(tham số) {
//   console.log(tham số);
// }
// function writeLog(message) {
//   console.log(message);
//   console.log(message2);
// }
// // writeLog("đối số");
// writeLog("đay là 1 dòng log", "log nè");

function writeLog2() {
  //   console.log(arguments);
  var myString = "";
  for (var param of arguments) {
    myString += `${param} -`;
    console.log(myString);
  }
}
writeLog2("đay là 1 dòng log", "log nè","log9829482");
