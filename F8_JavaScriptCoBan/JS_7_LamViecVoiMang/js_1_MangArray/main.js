/* ==========<<<<< Mảng trong JavaScript  >>>>>========== */
// Keywords: Javascript Array Methods

// 1. Tạo Mảng
//      -- Các cách tạo
// cách 1
var languages = [
  "javascript",
  "PHP",
  "Ruby",
  "Dart",
  null,
  undefined,
  function () {},
  {},
];
// cách 2
// var newArray = new Array("javascript",
// "PHP",
// "Ruby",
// "Dart",
// null,
// undefined,
// function () {},
// {},);
console.log(languages);
console.log(Array.isArray(languages)); // kiểm tra Arrays
//      -- Dùng cách nào? Tại sao
//      -- Kiểm tra data type: typeof của Arrays là object
// 2. Truy xuất Mảng
//      -- Độ dài mảng .length
console.log(languages, languages.length + " Ký tự");
//      -- Lấy phần tử theo index
console.log(languages, languages[1]);// lấy values qua index

