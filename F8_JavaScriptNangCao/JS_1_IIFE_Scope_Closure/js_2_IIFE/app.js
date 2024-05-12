// 1. IIFE (Hàm được gọi ngay lặp tức)
let fullName = "Thanh Tien";
(function (message) {
    console.log('Message: ', message);
})("Chao Bạn nè");
//////////////////////////////////////////////////////////
const app = (function () {

    const cars = []; // Private

    return {
        get(index){
            return cars[index];
        },
        add(car) {
            cars.push(car);
        },
        edit(index, car) {
            cars[index] = car;
        },
        delete(index) {
            cars.splice(index, 1);
        }
    }
})
// 2. Closure (Hàm đóng)
// 3. Hoisting
// 4. Strict mode (Chế độ nghiêm ngặc)
// 5. This keyword
// 6. Bind methods
// 7. Call methods
// 8. Apply methods
// 9. Catching methods, thowing errors (Xử lý lỗi)
// 10. Promise
// 11. Async Function, await