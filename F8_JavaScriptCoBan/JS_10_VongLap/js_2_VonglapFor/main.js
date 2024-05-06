/* ==========<<<<< Vòng Lặp For  >>>>>========== */
// Keywords:
for (let i = 1; i <= 1000; i++) {
    console.log(i+" Anh thấy dui quá ấy ơi" );
}

// Làm bài
function getRandNumbers(min, max, length) {
  var result = [];
  for (var i = 0; i < length; i++) {
    result[i] = Math.floor(Math.random() * (max - min) + min);
  }
  console.log(result);
  return result;
}

// getRandNumbers(1,10,phần tử)
getRandNumbers(2, 10, 10);
