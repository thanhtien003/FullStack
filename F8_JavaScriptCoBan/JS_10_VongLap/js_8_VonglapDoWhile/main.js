/* ==========<<<<< Vòng Lặp Do While  >>>>>========== */
var i = 0;
var isSucceeded = false;
do {
  i++;
  console.log("Nạp thẻ lần " + i);
  if (true) {
    isSucceeded = true;
    console.log("Nạp thẻ thành công");
  } 
} while (!isSucceeded && i <= 3);
