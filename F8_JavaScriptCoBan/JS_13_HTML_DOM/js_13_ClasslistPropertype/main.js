/* ==========<<<<< Class List ProperType  >>>>>========== */
/** Thuộc tính của Element Node */
var boxElement = document.querySelector(".box")
console.log(boxElement.classList);
console.log(boxElement.classList.length);// kiểm tra 
console.log(boxElement.classList[2]);// kiểm tra 
console.log(boxElement.classList.value);// kiểm tra 
// 1. add: Thêm Class vào Element
boxElement.classList.add("red", "blue", "green", "yellow");
// 2. contains: Kiểm tra Class có nằm Trong element đó hay không 
console.log(boxElement.classList.contains("red"));
console.log(boxElement.classList.contains("red", "blue", "green", "yellow"));

// 3. remove: Xóa bỏ class khỏi Element
// setTimeout(() => {
//     boxElement.classList.remove("red");
// }, 3000);
// 4. toggle: Nếu không có class ở element thì thêm vào và ngược lại
setInterval(() => {
    boxElement.classList.toggle("red");
}, 2000);