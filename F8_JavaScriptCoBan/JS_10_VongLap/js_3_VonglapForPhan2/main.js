/* ==========<<<<< Vòng Lặp For  >>>>>========== */
// Keywords:
for ( let i = 1; i <= 1000; i++) {
  console.log(i + " Anh thấy dui quá ấy ơi");
}
function getTotal(arr) {
  let totle=0
  for(let i=0;i<arr.length;i++){
  totle+=arr[i]
  }
  console.log("Tổng của mảng là "+totle);
  return totle
}

// Expected results
getTotal([1, 2, 3]) // Output: 6
getTotal([4, 5, -3]) // Output: 6
getTotal([4, 5, 3, 5]) // Output: 17