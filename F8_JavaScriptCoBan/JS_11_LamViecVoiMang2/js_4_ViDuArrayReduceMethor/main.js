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
/** Khi không có <Giá trị khởi tạo nó sẽ lấy phần tử đầu tiên để làm giá trị khởi tạo> */
var result = courses.reduce((a, b) => a + b.coin, 0);
console.log(result);
//////////////////////////////////////////////////////////////////////////////////////
var numbers = [300, 560, 0, 100, 200, 300];
var result1 = numbers.reduce((a, b) => a + b);
console.log(result1);
//////////////////////////////////////////////////////////////////////////////////////
var depthArray = [1, 2, [(3, 4)], 5, 6, [7, 8, 9]];
var flatArray = depthArray.reduce((a, b) => a.concat(b), []);
console.log(flatArray);
//////////////////////////////////////////////////////////////////////////////////////
var topics = [
  {
    topic: "Front-End",
    courses: [
      {
        id: 1,
        name: "JavaScript",
        coin: 250,
      },
      {
        id: 2,
        name: "HTML",
        coin: 0,
      },
    ],
  },
  {
    topic: "Back-End",
    courses: [
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
    ],
  },
];

var result2 = topics.reduce((a, b) => a.concat(b.courses), []);
console.log(result2);
var htmls = result2.map(
  (a) => `
    <div>
      <h2>${a.id}</h2>
      <h2>${a.name}</h2>
      <h2>${a.coin}</h2>
    </div>
`
);
console.log(htmls.join(""));

function calculateRating(array) {
  var filTee = array.filter((a) => a.Director === "Christopher Nolan");
  return array.reduce(
    (a, b) => ((a + (parseFloat(b.imdbRating)) / filTee.length),0)
  );
}
