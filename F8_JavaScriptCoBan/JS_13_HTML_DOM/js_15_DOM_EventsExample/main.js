/* ==========<<<<< DOM Events  >>>>>========== */

// 1. Input/Select(Lấy Value khi sử lý form)
// var inputElement = document.querySelector("input[type=text]")
// inputElement.oninput = function (e) {
//     console.log(e.target.value);
// }
// ///////////////////////////////////////////////////////////
// var inputElement1 = document.querySelector("input[type=checkbox]")
// inputElement1.onchange = function (e) {
//     console.log(e.target.checked);
// }
// ////////////////////////////////////////////////////////////////
// var inputElement = document.querySelector("select")
// inputElement.onchange = function (e) {
//     console.log(e.target.value);
// }
// 2. Key up/Key down(Sử lý khi bắm phím trên bàn phím)
// var inputElement = document.querySelector("input[type=text]")
// inputElement.onkeydown = function (e) {
//     console.log(e.target.value);
// }
var inputElement = document.querySelector("input[type=text]")
inputElement.onkeyup = function (e) {
    console.log(e.which);
    switch (e.which) {
        case 27:
            console.log("Thoat");
            break;
    
        default:
            break;
    }
}
