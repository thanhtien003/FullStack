/* ==========<<<<< HTML DOM  >>>>>========== */

var boxElement = document.querySelector(".box")
boxElement.style.width = "100px";
boxElement.style.height = "200px";
boxElement.style.backgroundColor = "red";

Object.assign(boxElement.style, {
    width: "200px",
    height: "400px",
    backgroundColor: "green",
})
console.log(boxElement.style.backgroundColor);// lấy ra giá trị của thuộc tính css inline