/* ==========<<<<< ECMA Script 6 2015 >>>>>========== */

// 6. Enhanced object literals
//      ++ Định nghĩa Key : value cho object
var name = 'JavaScript'
var price = 1000
var courses = {
    // key: value,
    name: name,
    price: price
}
console.log(courses);
////////////////////////////////////////////////////
// cách 2
var name = 'JavaScript'
var price = 1000
var courses = {
    // key: value,
    name,
    price
}
console.log(courses);

//      ++ Định nghĩa methor cho Object
var name = 'JavaScript'
var price = 1000
var courses1 = {
    // key: value,
    name,
    price,
    getName() {
        return name;
    }
}
console.log(courses1.getName());

//      ++ Định nghĩa key cho object dưới dạng biến
var fieldName ='new-name'
var fieldPrice = 'Price'
const courses2= {
    [fieldName]: 'Javascript',
    [fieldPrice]: 1000
}
console.log(courses2);
//      ++

// 7. Destructuring
//      ++
//      ++
//      ++
//      ++
// 8. Rest parameters
//      ++
//      ++
//      ++
//      ++
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
