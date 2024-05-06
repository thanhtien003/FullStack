/* ==========<<<<< DOM Events  >>>>>========== */
// 1. Attributes Events(Hành Vi người dùng)
//      ++ Dịnh nghĩa thẳng vào Element bên index.html luôn
//      ++
// 2. Asign events using the Element Node(gán sự kiên bằng element Node)
//      ++
//      ++
//      ++
var h1Element = document.querySelectorAll("h1");
console.log(h1Element);
h1Element.forEach(function (item) {
    return item.onclick = function (e) {
        console.log(e.target);
    }
})
