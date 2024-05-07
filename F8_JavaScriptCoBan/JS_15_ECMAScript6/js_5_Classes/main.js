/* ==========<<<<< ECMA Script 6 2015 >>>>>========== */
// 5. Classes: Thay thế function constructor
// cách 1:
// function Course(name,price) {
//     this.name = name;
//     this.price = price;
//     this.getName = function() { return this.name; };
// }
// cách 2:
class Course {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    getName() {
        return this.name;
    }
    getPrice() {
        return this.price;
    }
    run() {
        const isSuccess = true;
        // if (...) {

        // } else {

        // }
    }
}
const phpCourse = new Course('Php', 1000)
const jsCourse = new Course('JavaScript', 1200)
console.log(phpCourse);
console.log(jsCourse);
// 6. Default parameters values
//      ++
//      ++
//      ++
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
