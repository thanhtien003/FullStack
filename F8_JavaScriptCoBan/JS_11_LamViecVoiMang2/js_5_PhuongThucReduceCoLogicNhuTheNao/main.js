/* ==========<<<<< Làm Việc Với Mảng Phần 2  >>>>>========== */

// Định nghĩa reduce2
Array.prototype.reduce2 = function (callback, results) {
  let i = 0;
  if (arguments.length < 2) {
    i = 1;
    results = this[0];
  }
  for (; i < this.length; i++) {
    results = callback(results, this[i], i, this);
  }
  return results;
};
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = numbers.reduce2((a, b) => a + b,10);
console.log(result);




 
// Expected results:
var arr = [
    ['name', 'Sơn Đặng'],
    ['age', 18],
];

function arrToObj(arr){
    var ob= arr.reduce(function(a,b){
        a[b[0]]=b[1]
        return a
    },{})
    return ob
}
console.log(arrToObj(arr)); // { name: 'Sơn Đặng', age: 18 }
