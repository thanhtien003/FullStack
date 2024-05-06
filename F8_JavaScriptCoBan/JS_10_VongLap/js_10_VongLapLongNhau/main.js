/* ==========<<<<<  Vòng Lặp Lòng nhau   >>>>>========== */
/** */
var myArray = [
  ["Javascript", ["C#", "C"], "Java"],
  ["Android", "C++"],
  ["HTML", "CSS"],
];

for (var i = 0; i < myArray.length; i++) {
  console.log("Duyệt qua mảng lần 1 ", myArray[i]);
  for (var j = 0; j < myArray[i].length; j++) {
    console.log("Duyệt qua mảng lần 2 ", myArray[i][j]);
    for (var k = 0; k < myArray[i][j].length; k++) {
      console.log("Duyệt qua mảng lần 3 ", myArray[i][j][k]);
    }
  }
}
