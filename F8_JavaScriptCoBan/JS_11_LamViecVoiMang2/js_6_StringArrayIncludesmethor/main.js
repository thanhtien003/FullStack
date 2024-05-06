/* ==========<<<<< Làm Việc Với Mảng Phần 2  >>>>>========== */

console.log(Array.prototype.includes);
console.log(String.prototype.includes);
// 1. String
//     -- Includes để kiểm tra value gì đó  có trong Chuỗi hoặt mảng hay không
//     -- Có trả về dạng boolean
var title = "Responsive Website Design ";
// console.log(title.includes("<Value cần tìm kiếm>",<vị trí bắt đầu tìm kiếm>));
console.log(title.includes("Website"));
console.log(title.includes("Website", 19));
// 2. Array
var coures = ["JavaScript", "PHP", "Ruby"];
console.log(coures.includes("PHP"));
console.log(coures.includes("PHP",0));