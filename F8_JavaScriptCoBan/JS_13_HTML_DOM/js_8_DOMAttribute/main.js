/* ==========<<<<< HTML DOM  >>>>>========== */
// 2)  Attributes
var headingElement = document.querySelector("h2")
console.log(headingElement);
//      -- Thêm Attributes
headingElement.title = "Heading11"
headingElement.id = "Heading"
/**headingElement.className = "Heading" */
headingElement.href = "heading.html"
headingElement.setAttribute('href', 'heading1111')// đặt Attributes tự tùy biến
//      -- Lấy Value Attributes 
console.log(headingElement.getAttribute('class'));// Lấy Value Attributes 
console.log(headingElement.getAttribute('title'));// Lấy Value Attributes 
console.log(headingElement.title);// Lấy Value Attributes 

// 3)  Text
