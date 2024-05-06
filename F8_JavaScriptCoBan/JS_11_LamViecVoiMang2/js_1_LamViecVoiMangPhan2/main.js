/* ==========<<<<< Làm Việc Với Mảng Phần 2  >>>>>========== */

var courses = [
  {
    id: 1,
    name: "JavaScript",
    coin: 0,
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
// 1. for/each():
//      -- Duyệt qua từng phần tử của mảng Array
courses.forEach(function (course, index) {
  console.log(
    "phần tử của mảng courses ",
    course,
    " /n đây là index của mảng course",
    index
  );
});
// 2. every():
//      -- Lặp qua tất cả các phần tử của mảng chỉ cần có tất cả phần tử thõa mãng 1 điều kiện gì đó
//      -- Trả về kiểu Boolean
var isFree = courses.every(function (course, index) {
  console.log("Phần tử đã duyệt qua index là :" + index + " Phần tử");
  return course.coin === 0;
});
console.log("kiểm tra phần tử có tất cả khóa học miễn phí là: ", isFree);
// 3. some():
//      -- Lặp qua tất cả các phần tử của mảng chỉ cần có 1 phần tử trong tất cả phần tử thõa mãng 1 điều kiện gì đó
//      -- Trả về kiểu Boolean
var isFree1 = courses.some(function (course, index) {
  console.log("Phần tử đã duyệt qua index là :" + index + " Phần tử");
  return course.coin === 0;
});
console.log("kiểm tra phần tử có 1 khóa học miễn phí là: ", isFree1);
// 4. find():
//      -- Lặp qua tất cả các phần tử của mảng tìm kiếm Key và Value
//      -- Chỉ trả về 1 phần tử đầu tiên mà nó tìm thấy
var isFree2 = courses.find(function (course, index) {
  console.log("Phần tử đã duyệt qua index là :" + index + " Phần tử");
  return course.name === "PHP";
});
console.log("tìm kiếm 1 tên khóa học giống nhau <PHP> Là : ", isFree2);
// 5. filter():
//      -- Lặp qua tất cả các phần tử của mảng tìm kiếm Key và Value
//      -- Chỉ trả về tất cả phần tử mà nó tìm thấy trong mảng
var isFree3 = courses.filter(function (course, index) {
  console.log("Phần tử đã duyệt qua index là :" + index + " Phần tử");
  return course.name === "PHP";
});
console.log("tìm kiếm tất cả tên khóa học giống nhau <PHP> Là : ", isFree3);
// 6. map():
//      --
//      --
// 7. reduce():
//      --
//      --
