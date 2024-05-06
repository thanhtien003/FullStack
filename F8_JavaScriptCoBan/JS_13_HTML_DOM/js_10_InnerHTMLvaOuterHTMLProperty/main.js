/* ==========<<<<< HTML DOM  >>>>>========== */
// 3)  Text
/** Thêm 1 elemet vào trong 1 element khi sử dụng JavaScript HTML DOM */
var boxElement = document.querySelector(".box")
// console.log(boxElement);
//    -- outerHTML
//      ++ Thêm 1 elemet vào trong 1 element
//      ++ Thêm 1 attributr vào trong 1 element 
//      ++ Thêm 1 textNode vào trong 1 element 
// boxElement.innerHTML = "<span title = 'Heading'>Haha Con Gà 1</span>" // thay đổi element có thể ghi đè element con có sẵn
// console.log(boxElement.innerHTML);//lấy nội dung bên trong của element cha, trả về dạng Chuỗi
// console.log(document.querySelector("h2").innerText);
//    -- innerHTML
//      ++
//      ++
boxElement.outerHTML = "<span title = 'Heading'>Haha Con Gà 1</span>" // thay đổi element có thể ghi đè element cha có sẵn
console.log(boxElement.innerHTML);//lấy nội dung  của element cha,và con trả về dạng Chuỗi
