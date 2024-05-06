/* ==========<<<<< ECMA Script 6 2015 >>>>>========== */
// 7. Destructuring (Phân rã) Sử dụng với Object và Array
//      ++ Array
var array = ['JavaScript', 'PHP', 'Ruby',]
var a = array[0]
var b = array[1]
var c = array[2]
console.log(a, b, c);

// cách 2
var array = ['JavaScript', 'PHP', 'Ruby',]
var [a, , c] = array
console.log(a, c);

//      ++ Objects
var courses = {
    name: 'JavaScript',
    price: 1000,
    image: 'Images 1'
}
var { name, price } = courses;
console.log(name, price);
//      ++
//      ++
// 8. Rest parameters (lấy ra những phần còn lại )
//      ++ Array
var array1 = ['JavaScript', 'PHP', 'Ruby',]
var [a, ...rest] = array1
console.log(a, rest);

//      ++ Objects
var courses2 = {
    name1: 'JavaScript',
    price1: 1000,
    image1: 'Images 1',
    children: {
        name2: 'PHP',
        price2: 2000,
        image2: 'Images 2'
    }
}
var { name1, children: { name2 }, description = 'Defau description' } = courses2;
console.log(name1, name2, description);
/////////////////////////////////////////////////////
function logger(...params) {
console.log(params);
}
console.log(logger(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
// 9. Spread
//      ++
//      ++
//      ++
//      ++
// 10. Enhanced Object literals
//      ++
//      ++
//      ++
//      ++
// 11. Tagged template literals
//      ++
//      ++
//      ++
//      ++
// 12. Module
//      ++
//      ++
//      ++
//      ++
