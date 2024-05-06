/* ==========<<<<< DOM Events  >>>>>========== */

// 1. DOM event / Event Listener

// 1. Xử lý nhiều việc khi 1 event xẩy ra
// 2. Lắng Nghe / hủy bỏ lắng nghe
// **** DOM event****
//    ++ Cách 1
// var btn = document.querySelector("#btn")
// btn.onclick = function () {
//     console.log("Viec 1");
//     console.log("Viec 2");
//     alert("Viec 2");
// }
// setTimeout(() => {
//     btn.onclick = function () {
//     }
// }, 3000);
//////////////////////////////////////////////////////////////////////
// **** Event Listener****
//    ++ Cách 2
var btn = document.querySelector("#btn")
function viec1() {
    console.log("Viec 1");
} function viec2() {
    console.log("Viec 2");
}
// Lắng Nghe
btn.addEventListener("click", viec1);
btn.addEventListener("click", viec2);
//  hủy bỏ lắng nghe
setTimeout(() => {
    btn.removeEventListener("click",viec1);
}, 2000);