/* ==========<<<<< Làm Việc Với Chuỗi  >>>>>========== */
var myString = "     Pham Thanh Tien la siau Nhan Tien       ";
//      Keywords: JavaScript String methods

// 1. length: kiểm tra độ dài chuỗi
console.log(myString, "\n" + myString.length + " Ký tự");
// 2. find index: tìm 1 vị trí của 1 ký tự đầu tiên trong chuỗi.
//  --  nó được đánh giá trị index từ trái sang phải
//  --  bắt đầu vị trí là 0,1,2,3,4,5...
//  --  nếu có trả về vị trí ký tự dạng số(...), nếu chuỗi không có trả về (-1)
//  --  console.log(myString, myString.indexOf("tìm kiếm",vị trí muốn tìm kiếm));
console.log(myString, "\n" + myString.indexOf(" Tien"));
console.log(myString, "\n" + myString.indexOf(" Tien", 11));
console.log(myString, "\n" + myString.lastIndexOf(" Tien")); // tìm vị trí cuối cùng
console.log(myString, "\n" + myString.search(" Tien")); // tìm kiếm theo biểu thức chính quy
// 3. cut string : Cắt chuối
// console.log(myString, myString.slice(vị trí bắt đầu cắt,vị trí cuối cắt));
console.log(myString, "\n" + myString.slice(10, 15));
// 4. Replace: Ghi đè
// console.log(myString, myString.replace("chuổi muốn sửa","chuổi khác muốn thay thế"));
console.log(myString, "\n" + myString.replace("Tien", "TienPC")); // Ghi đè vào 1 đối tượng
console.log(myString, "\n" + myString.replace(/Tien/g, "TienPC")); // Ghi đè vào tất cả
// 5. Convert to Upper Case: Chuyển đổi tất cả chữ trong chuỗi thành chữ HOA
console.log(myString, "\n" + myString.toUpperCase());
// 6. Convert to Lower Case: Chuyển đổi tất cả chữ trong chuỗi thành chữ thường
console.log(myString, "\n" + myString.toLowerCase());
// 7. Trim : Xóa khoản trắng thừa ở đầu và cuối trong chuỗi
console.log(myString, "\n" + myString.trim());
// 8. Split: Cắt 1 chuỗi thành 1 Array 
var languages = 'Java, JavaScript, PHP, Ruby';
console.log(languages, "\n" + languages.split(', ')); // cắt chuỗi có 1 điểm chung và chuyển thành 1 Array
console.log(languages, "\n" + languages.split('')); // cắt tất cả  chuỗi và chuyển thành 1 Array
// 9.Get a character by index : từ 1 index cho trước có thể lấy ra ký tự mong muốn
//  -- index không có sẽ trả về chuỗi rỗng
const myString2 ='Thanh Tien la PT dep trai nhat';
console.log(myString2, "\n" + myString2.charAt(9));
console.log(myString2, "\n" + myString2[14]);

