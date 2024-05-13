// 5. This keyword
// Từ khóa This nó sẽ chỉ về đối tượng của nó
const phone7 = {
    // Thuộc tính - Property (Mô tả thông tin)
    name: 'Iphone 7',
    price: 1000,
    color: 'white',
    // Phương thức - Method ( Mô tả hành động)
    takePhoto: function () {
        console.log(this)
    }, objChil: {
        name: 'Iphone 8',
        price: 1000,
        color: 'white',
        methodChil() {
            console.log(this)
        }
    }
}
console.log(phone7.name);
console.log(phone7.takePhoto());
console.log(phone7.objChil.methodChil());
// ================================================================
function Car(name, color, weight) {
    this.name = name;
    this.color = color;
    this.weight = weight;
    this.run = function () {
        console.log('Running', this);
    }
}
const Merserdi = new Car('Merserdi', 'black', 1200)
console.log(Merserdi.run);

// ================================================================
const button = document.querySelector('button');
button.onclick = function () {
    console.dir(this.innerText);
}


// 6. Bind methods
// 7. Call methods
// 8. Apply methods
// 9. Catching methods, thowing errors (Xử lý lỗi)
// 10. Promise
// 11. Async Function, await