// 7. Call methods ( Gọi 1 hàm )
function random() {
    console.log(Math.random());
}
random.call();
// =================================================================
const teachers = {
    first: 'Minh',
    last: 'Nguyen'
}
const me = {
    first: 'Thanh',
    last: 'Tien',
    showFullName() {
        console.log(`${this.first} ${this.last}`);
    }
}

me.showFullName.call(teachers)// kĩ thuật mượn hàm
// =================================================================
// Example (Extent)
function Animals(name, weight) {
    this.name = name
    this.weight = weight
}

function Chicken(name, weight, legs) {
    Animals.call(this, name, weight)
    this.legs = legs;
}

const thanhTien = new Chicken('Thanh Tien', 70, 2)
console.log(thanhTien);
// =================================================================
console.log(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
function logger() {
    const arr =Array.prototype.slice.call(arguments);
    console.log(arr,"ghjgjh");
    console.log(...arguments);
    Array.prototype.forEach.call(arguments, item => console.log(item));
    const cars = ['BMW', 'Madaz']
    cars.forEach(car => console.log(car));
}

logger(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);














// 8. Apply methods
// 9. Catching methods, thowing errors (Xử lý lỗi)
// 10. Promise
// 11. Async Function, await