/* ==========<<<<< CallBack  >>>>>========== */
// 1. Là Hàm
// 2. Được truyền qua đối số
// 3. Được gọi lại (trong Hàm nhân đối số)
var coures = ["Javascript", "PHP", "Ruby"];

Array.prototype.map2 = function (callBack) {
  var outPut = [];
  for (let i = 0; i < this.length; i++) {
    var resultReturnMap2CB = callBack(this[i], i);
    console.log(resultReturnMap2CB);
    outPut.concat(resultReturnMap2CB);
  }
  return outPut;
};
var htmls = coures.map2(function (c) {
  return `<h1>${c}</h1>`;
});
console.log(htmls.join(""));
