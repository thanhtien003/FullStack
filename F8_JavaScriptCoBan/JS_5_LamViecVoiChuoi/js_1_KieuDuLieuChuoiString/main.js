/* ==========<<<<< Kieu dữ liệu Chuỗi  >>>>>========== */
// 1. Tạo 1 Chuỗi
// - Các cách tạo chuỗi
// Cách 1:
var fullName = "Phạm Thanh Tiền \n \t 'là \\ Siêu Nhân'";
// Cách 2:
// var fullName = new String("Phạm Thanh Tiền")// Kiểu Object
console.log("fullName", fullName);
console.log("fullName", fullName.length + " Ký Tự");
// - Nên Dùng cách nào? Lý do?
// - Kiểm tra data type
// 2. Một số case sử dụng backslash (\)
// 3. Xem độ dài chuỗi: (.length)
// 4. Chú ý độ dài khi viết code
// 5. Template string ES6

var fristName = "Tiền";
var lastName = "Phạm";
console.log(`Tôi là ${lastName} ${fristName} nè `);
