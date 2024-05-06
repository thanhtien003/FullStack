// <<<  Spread   >>>
// Spread :Toán tử rãi (Truyền vào đối số)
//    -- Hợp nhất mảng
var array=['Javascript','Ruby','PHP']
var array2=['ReactJS','Dart']
var array3 = [...array2,...array]
console.log(array3);
//    -- Hợp nhất Object
var object1 = {
    name: '<JavaScript>',
}
var object2 ={
    age: 25,
    address: 'Ha Noi'
}
var object3 = {
...object1,...object2

}

console.log(object3);
