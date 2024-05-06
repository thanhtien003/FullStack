/* ==========<<<<< CallBack  >>>>>========== */
// Key Word: Value types and refrence types
var coures = [
  {
    name: "Javascript",
    coin: 600,
    isFinished: true,
  },
  {
    name: "PHP",
    coin: 500,
    isFinished: false,
  },
  {
    name: "Java",
    coin: 400,
    isFinished: true,
  },
  {
    name: "CSS",
    coin: 300,
    isFinished: false,
  },
];
// 4.some()
Array.prototype.every2 = function (callBack) {
  for (const index in this) {
    if (this.hasOwnProperty(index)) {
      if (!callBack(this[index], index, this)) {
        return false;
      }
    }
  }
  return true;
};
var result = coures.every2(function (coure, index, array) {
  return coure.coin >= 300;
});
console.log(result);
// 5.every()
// 6.reduce()
