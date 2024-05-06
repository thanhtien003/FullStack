/* ==========<<<<< DOM Events  >>>>>========== */
// 1. PreventDefault(Loại bỏ hành vi mặt định trên thẻ HTML)
// var aElement = document.links
// for (let i = 0; i < aElement.length; i++) {
//   aElement[i].onclick = function(e){
//       if (!e.target.href.startsWith("https://f8.edu.vn")){
//             e.preventDefault();//bỏ hành vi mặt định
//       }
//   }
// }
/////////////////////////////////////////////////////////////////////////
var ulElement = document.querySelector("ul")
// ulElement.onmousedown = function (e) {
//     e.preventDefault();
// }
// ulElement.onclick = function (e) {
//     console.log(e.target);
// }
// 2. stopPropagation(Loại bỏ sự kiện nổi bọt)
document.querySelector("div").onclick = function () {
    console.log("div");
}
document.querySelector("button").onclick = function (e) {
    e.stopPropagation();// bỏ sự kiện nổi bọt
    console.log("click me");
}