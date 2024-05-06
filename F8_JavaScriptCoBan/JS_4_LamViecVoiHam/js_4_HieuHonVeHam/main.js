/* ==========<<<<< Một số điều cần biết về Hàm  >>>>>========== */

// 1. Khi functuion đặt trùng tên?
// function được định nghĩa sau sẽ đc gọi
function showMessage() {
  console.log("Message1");
}
function showMessage() {
  console.log("Message2");
}
showMessage();
// 2. Khai báo biến trong hàm?
// Được
// 3. Định nghĩa hàm trong hàm?
function showDialog() {
  console.log("Message1");
  function showDialog2() {
    console.log("Message2");
  }
  showDialog2();
}
showDialog();
