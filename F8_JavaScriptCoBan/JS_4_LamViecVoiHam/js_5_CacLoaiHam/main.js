/* ==========<<<<< Các Laoij Hàm  >>>>>========== */
// 1. Declaration function : có thể gọi trước và sau khi định nghĩa
function showMessage() {
  console.log("Declaration function");
}
showMessage()
// 2. Expression function: chỉ đc gọi sau khi định nghĩa
var showExpression = function  () {
  console.log("Expression function");
};
showExpression()
//////////////////////////////
setTimeout(function testName () {});
/////////////////////////////
var myObj ={
  myFunction: function (){

  }
}
// 3.Arrow function
