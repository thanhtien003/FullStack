/* ==========<<<<< ECMA Script 6 2015 >>>>>========== */
// 8. Rest parameters (lấy ra những phần còn lại ) <Tham số>
// Object
function logger({ name, age, ...rest }) {
    console.log(name);
    console.log(age);
    console.log(rest);

}
logger({
    name: 'John',
    age: 30,
    address: {
        city: 'New York',
        state: 'NY',
        zip: 10001
    }
})
////////////////////////////////////////////
// array
function logger1([a, b, ...rest]) {
    console.log(a);
    console.log(b);
    console.log(rest);

}
logger1([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
// 9. Spread (Toán tử dãy)<Đối số>
//      ++ Array
//      ++ Dùng để nối mảng 
var array1 = ['javaScript', 'PHP', 'Ruby',]
var array2 = ['Dart', 'RestJS']
var array3 = [...array2, ...array1]// nối mảng = toán tử dãy
console.log(array3);

//      ++Object
//      ++ Hợp nhất 2 Object lại với nhau
var object1 = {
    name: 'John',
    age: 30,

}
var object2 = {
    haha: 'Jane',
    ees: 20,

}
var object3 = { ...object2, ...object1 }
console.log(object3);
//////////////////////////////////////////////////////
// function
var array5 = ['Javascript', 'PHP', 'Ruby', 'Reactive', 'Java', 'Node']

function logger5(...rest5) {
    for (var i = 0; i < rest5.length; i++) {
        console.log(rest5[i]);
    }

}
logger5(...array5);
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
