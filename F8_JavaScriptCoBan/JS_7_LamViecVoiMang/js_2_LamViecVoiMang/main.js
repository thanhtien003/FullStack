/* ==========<<<<< Làm Việc vói Mảng  >>>>>========== */
// Keywords: Javascript Array Methods
var languages = ["JavaScript", "PHP", "Ruby"];
var languages2 = ["Github", "Reactive", "NodeJS"];
var languages3 = ["ABC", "CDE", "EFH"];
// 1. toString: chuyển dữ liệu Array sang dạng chuỗi
console.log(languages, languages.toString());
// 2. join: chuyển dữ liệu Array sang dạng chuỗi và ghi đè ngăn cách giữa các chuỗi
console.log(languages, languages.join(" - "));
// 3. pop: xóa đi 1 phần tử cuối mảng và trả về phần tử đã xóa sang dạng chuỗi
console.log(languages, languages.pop());
console.log(languages, languages.pop());
// 4. push: thêm 1 hoặt nhiều phần tử cuối mảng và trả về độ dài mới của mảng
console.log(languages, languages.push("Dart"));
console.log(languages, languages.push("Futter", "Android"));
// 5. shift:xóa đi 1 phần tử đầu mảng và trả về phần tử đã xóa sang dạng chuỗi
console.log(languages, languages.shift());
console.log(languages, languages.shift());
// 6. unshift:thêm 1 hoặt nhiều phần tử đầu mảng và trả về độ dài mới của mảng
console.log(languages, languages.unshift("Python"));
console.log(languages, languages.unshift("C++", "C#"));
// 7. splice: xóa, cắt, chèn phần tử mới vào mảng và trả về mảng mới
//            -- Xóa
// console.log(languages,languages.splice(index, số lượng phần tử muốn xóa));
console.log(languages, languages.splice(2, 1));
//            -- Cắt mảng và trả về 1 mảng mới
// console.log(languages,languages.splice(index <vị trí cắt mảng>));
console.log(languages, languages.splice(2));
//            -- Chèn
// console.log(languages,languages.splice(index,0,"Phần tử muốn chèn"));
console.log(languages, languages.splice(2, 0, "HTML")); // không xóa và chèn thêm phần tử mới vào mảng
//            -- Cắt và chèn thêm phần tử mới vào mảng
// console.log(languages,languages.splice(index, số lượng phần tử muốn xóa,"Phần tử muốn chèn","Phần tử muốn chèn",...));
console.log(languages, languages.splice(2, 2, "TypeScript", "CSS")); // không xóa và chèn thêm phần tử mới vào mảng
// 8. concat: Nối mảng và trả về mảng mới đc hợp nhất
console.log(languages, languages.concat(languages2));
console.log(languages, languages.concat(languages2).concat(languages3));
// 9. slice: Cắt 1, nhiều hoặt toàn bộ phần tử trong mảng và trả về mảng đã cắt
// console.log(languages, languages.slice(index <vị trí bắt đầu cắt>,index <vị trí kết thúc cắt>));
console.log(languages, languages.slice(1,2));
console.log(languages, languages.slice(-2,-1));// truyền số âm để lấy phần tử cuối mảng
console.log(languages, languages.slice(0));// Copy mảng

////////////////////////////////////////////////////////
// Viết hàm tại đây
function getLastElement (arrays){
    return arrays.slice(-1)
}




// Ví dụ sử dụng
var animals = ['Monkey', 'Tiger', 'Elephant'];
var result = getLastElement(animals);

console.log(result); // Expected: "Elephant"
console.log(animals); // Expected: ['Monkey', 'Tiger', 'Elephant']