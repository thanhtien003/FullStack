// <<<  Destructuring, Rest   >>>
// Destructuring : Phân rã
//      -- Array
var array = ['Javascript', 'PHP', 'Ruby']
var a = array[0]
var b = array[1]
var c = array[2]
console.log(a, b, c);
////////////////////////////////////
var [a, , c] = array

console.log(a, c);
//      -- Object 
var course = {
    name: 'Javascript',
    price: 1000,
    age: 30,
    children: {
        name: 'PHP',
        age: 20
    }
}
var { name: parentName, children: { name:childrentName }, ...rest1 } = course
console.log(parentName);
console.log(childrentName);
console.log(rest1);
// Rest parameter: Lấy ra những phần còn lại sử dụng khi phân rã (...rest)
//      -- Array
var [a, b, ...rest] = array

console.log(rest);
//      -- Object 
