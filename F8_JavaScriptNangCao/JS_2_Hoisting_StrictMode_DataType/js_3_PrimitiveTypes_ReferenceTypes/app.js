// Primitive Types & Reference Types
function createCar(obj){
    obj = JSON.parse(JSON.stringify(obj));
    obj.name ="Hoda"
    return obj;
}
const car = {
    name: "Toyota",
}
const newCar = createCar(car)
console.log(car);

console.log(newCar);

// 5. This keyword
// 6. Bind methods
// 7. Call methods
// 8. Apply methods
// 9. Catching methods, thowing errors (Xử lý lỗi)
// 10. Promise
// 11. Async Function, await