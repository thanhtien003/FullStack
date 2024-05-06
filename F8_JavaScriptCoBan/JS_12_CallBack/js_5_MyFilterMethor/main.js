/* ==========<<<<< CallBack  >>>>>========== */
// Key Word: Value types and refrence types
var coures = [
  {
    name: "Javascript",
    coin: 600,
  },
  {
    name: "PHP",
    coin: 500,
  },
  {
    name: "Java",
    coin: 400,
  },
  {
    name: "CSS",
    coin: 300,
  },
];
// 2.find()
// 3.filter()
Array.prototype.filter2 = function (callBack) {
  var outPut = [];
  for (const index in coures) {
    if (this.hasOwnProperty(index)) {
      var result = callBack(this[index], index, this);
      if (result) {
        outPut.push(this[index]);
      }
    }
  }
  return outPut;
};
var filterCoures = coures.filter2(function (coure, index, array) {
  // console.log("coure ", coure, "\n", "index " + index + "\n", "array", array);
  return coure.coin > 300;
});
console.log(filterCoures);
// 4.some()
// 5.every()
// 6.reduce()
