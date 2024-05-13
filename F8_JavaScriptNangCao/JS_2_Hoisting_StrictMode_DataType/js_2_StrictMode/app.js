// 4. Strict mode (Chế độ nghiêm ngặc)
// Ra mắt ES6
// "use strict";
var fullName = 'Pham Thanh'
function test() {
    var age = 18
}
test()
console.log(fullName);
// console.log(age);
////////////////////////////////
// const students = Object.freeze({
//     fullName: 'Pham Thanh',
// });
// Cách 2
const students = {}
Object.defineProperty(students, 'fullName', {
    value: 'Pham Thanh',
    writable: false,
    enumerable: true,
    configurable: false,
}
)
students.fullName = 'Pham Thanh B';
console.log(students);







// 5. This keyword
// 6. Bind methods
// 7. Call methods
// 8. Apply methods
// 9. Catching methods, thowing errors (Xử lý lỗi)
// 10. Promise
// 11. Async Function, await