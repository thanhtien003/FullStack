/* ==========<<<<< Vòng Lặp For  >>>>>========== */
// Keywords:
var myArray = ["Javascript", "PHP", "Ruby", "Dart"];
var arrayLength = myArray.length;
for (let i = 0; i < arrayLength; i++) {
  console.log(myArray[i]);
}
/////////////////////
var orders = [
  {
    name: "Khóa học HTML - CSS Pro",
    price: 3000000,
  },
  {
    name: "Khóa học Javascript Pro",
    price: 2500000,
  },
  {
    name: "Khóa học React Pro",
    price: 3200000,
  },
];
function getTotal(arr) {
  var results = 0;
  var arLength = arr.length;
  for (var i = 0; i < arLength; i++) {
    results += arr[i].price;
  }
  console.log(results);
  return results;
}

// Expected results:
getTotal(orders); // Output: 8700000
