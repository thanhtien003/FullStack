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
// 6. map():
//      -- Chỉnh sửa hay thay đổi 1 element của 1 array
//      -- Trả về 1 mảng mới có thể thay đổi
var newMap = courses.map(function (course, index, originArray) {
  // return { id: course.id,
  //   name: "Khóa Học: "+course.name,
  //   coin: "Giá: "+course.coin+" Coin",
  //   index:"Giá trị index là: "+ index,
  //   originArray:"Trả về Mảng Cũ Coures là: ", originArray
  // }
  //////////////////////////////////
  return `<h1>${course.name}</h1>`;
});
console.log(newMap.join(""));
// 7. reduce():
//      --
//      --
