/* ==========<<<<< CallBack  >>>>>========== */
var coures = ["JavaScript", "PHP", "Ruby"];
// 1.for/each(): tự ddingj nghĩa
//      -- Duyệt qua element trong mảng và duyệt qua element trong prototype khi tự định nghĩa

Array.prototype.forEach2 = function (callback) {
  for (const index in this) {
    if (this.hasOwnProperty(index)) {// loại bỏ  element trong prototype khi tự định nghĩa
      // console.log("index", index);
      callback(this[index], index, this);
    }
    // console.log("index", index, this.hasOwnProperty(index));//không loại bỏ  element trong prototype khi tự định nghĩa
  }
};
coures.forEach2(function (coure, index, array) {
  console.log("coure "+coure+"\n","index "+ index+"\n","array ", array);
});
// console.log(coures);
// console.log(htmls);
// 2.find()
// 3.filter()
// 4.some()
// 5.every()
// 6.reduce()
