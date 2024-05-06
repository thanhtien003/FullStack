/* ==========<<<<< Math Object   >>>>>========== */
// Keywords:
// new Math: không được khởi tạo với từ khóa new

// 1. Math.PI
console.log("Số PI: " + Math.PI);
console.log("Số lớn nhất trong dãy số là: " + Math.PI);
// 2. Math.round()
console.log("làm tròn Số(12.32) : " + Math.round(12.32));
// 3. Math.abs()
console.log("Giá trị tuyệt đối (-4): " + Math.abs(-4));
// 4. Math.ceil()
console.log("làm tròn Trên Số(.0000001) : " + Math.ceil(0.0000001));
// 5. Math.floor()
console.log("làm tròn Dưới Số(10.9999999) : " + Math.floor(10.9999999));
// 6. Math.random()// trả về số ngẫu nhiên nhỏ hơn 1
console.log("quay Số ngẫu nhiên nhỏ hơn <1> : " + Math.random());
console.log("quay Số ngẫu nhiên  : " + Math.floor(Math.random() * 100));
// 7. Math.min(): lấy ra con số nhỏ nhất
console.log(
  "Số lớn nhất trong dãy số 3,100,-100,104,-150 là: " +
    Math.min(3, 100, -100, 104, -150)
);
// 8. Math.max(): lấy ra con số lớn nhất
console.log(
  "Số lớn nhất trong dãy số 3,100,-100,104,-150 là: " +
    Math.max(3, 100, -100, 104, -150)
);
