/* ==========<<<<<  Đệ Qui   >>>>>========== */
/**LÀ Hàm Tự Gọi chính nó gọi là Đệ Qui */
// 1. Xác định điểm dừng
// 2. Login handle => Tạo ra điểm dừng

var array = ["a", "b", "c", "d", "e", "a", "b", "c", "d", "e"];
console.log(array);

console.log(new Set(array));
console.log([...new Set(array)]);
////////////////////////////////////////////////////////////////////
// function deQuy(number) {
//   if (number < 0) {

//     return ;
//   }
//   deQuy()
// }

// deQuy(10);
////////////////////////////////////////////////////////////////////
function countDown(number) {
  if (number > 0) {
    console.log(number);
    return countDown(number - 1);
  }
  return number;
}

countDown(10);
////////////////////////////////////////////////////////////////////
var languages = ["English", "George", "Listered"];
function loop(start, end, callback) {
  if (start < end) {
    callback(start);
    return loop(start + 1, end, callback);
  }
}

loop(0, languages.length, function (index) {
  console.log("Lặp ở đây: " + index, languages[index]);
});
///////////////////////////////////////////////////////////////////
function giaiThua(number) {
  var output = 1;
  for (var i = number; i > 0; i--) {
    output *= i;
  }
  return output;
}

console.log(giaiThua(4));
/////////////////////////////////////////////////////////////////
function giaiThua1(number) {
  if (number > 0) {
    return number * giaiThua(number - 1); //
  }
  return 1;
}

console.log(giaiThua1(4));
