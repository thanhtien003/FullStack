/* ==========<<<<< Làm Việc Với Mảng Phần 2  >>>>>========== */

var courses = [
  {
    id: 1,
    name: "JavaScript",
    coin: 300,
  },
  {
    id: 2,
    name: "PHP",
    coin: 560,
  },
  {
    id: 3,
    name: "CSS",
    coin: 0,
  },
  {
    id: 4,
    name: "PHP",
    coin: 100,
  },
  {
    id: 5,
    name: "Java",
    coin: 200,
  },
  {
    id: 6,
    name: "PHP",
    coin: 300,
  },
];

/** Tham số truyền vào là 1 hàm */
// 7. reduce():
//      -- Muốn nhận về 1 giá trị duy nhất sau khi tính toán và sử lý trên phần tử của Array
//      --
// var totalCoin = courses.reduce(function (
//                                  accumulator: <Biến lưu trữ>được gán từ <Giá trị Khởi tạo>,
//                                 currentValue: <phẩn tử trong Array>,
//                                 currentIndex: <Index>,
//                                 ogirinArray: <Mảng Góc>
//                                 ) {}, <Giá trị Khởi tạo>);
var i = 0;
var totalCoin = courses.reduce(function (
  accumulator,
  currentValue,
  currentIndex,
  ogirinArray
) {
  i++;
  console.table({
    "Lượt chạy: ": i,
    "<Giá Khóa học>: ": currentValue.coin,
    "<Biến tích Trữ>: ": accumulator,
    "Tổng của  <Giá Khóa học> và <Biến Lưu trữ >: ":
      currentValue.coin + accumulator,
    "index: ": currentIndex,
  });
  console.log("Phần tử trong Array: ", currentValue);
  console.log("Mảng Góc Array: ", ogirinArray);
  return currentValue.coin + accumulator;
},
0);
console.log("Tổng Giá trị của coin là: ", totalCoin);
////////////////////////////////////////////////////////////////
var totalCoin1 = 0;
for (const value of courses) {
  totalCoin1 += value.coin;
}
console.log(totalCoin1);
