/* ==========<<<<< HTML DOM  >>>>>========== */
// 3)  Text
//   -- innerText:
//    ++ lấy ra nội dung textNode, sửa đổi và thêm được nội dung textNode
//    ++ Trả về nội dung như trình duyệt
var getElement = document.querySelector(".heading")
// console.log(getElement.innerText)
getElement.innerText = `



New-Heading



`;// Sửa đổi nội dung của textNode
//   -- textContent:
//    ++ lấy ra nội dung textNode, sửa đổi và thêm được nội dung textNode
//    ++ trả về nội dung text thật trong DOM
console.log(getElement.textContent);
// console.log(getElement.textContent = "New-Heading");// Sửa đổi nội dung của textNode
// getElement.textContent = `



// New-Heading



// `;
