/* ==========<<<<< CallBack  >>>>>========== */
/**
 * Là hàm được truyền qua đối số
 * Khi gọi Hàm khác
 */
// 1: Là hàm
// 2: Được truyền qua đối số

function myFunc (callBack){
  console.log(callBack(123));

}
myFunc(function myCallBack(value) {
console.log("Value: " + value);
})
