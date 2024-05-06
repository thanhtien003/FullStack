/* ==========<<<<< Breal Và Continue trong Vòng Lặp   >>>>>========== */
/**Break và Continue có thể sử dụng trong tất cả vòng lặp */
// 1. Break:  Thoát khỏi vòng lặp
for (let i = 0; i < 10; i++) {
  if (i >= 5) {
    console.log(i);
    break; // thoát khỏi
  }
}
// 2. Continue: Bỏ qua 1 vài lần lặp của vòng lặp
for (let i = 0; i < 10; i++) {
  if (i % 2 !== 0) {
    continue;// Bỏ qua số lẻ
  }
  console.log(i);
}
