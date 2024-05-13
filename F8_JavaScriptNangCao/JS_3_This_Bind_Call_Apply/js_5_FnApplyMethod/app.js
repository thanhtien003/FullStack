
// 8. Apply methods (Nhận đối số cho hàm dưới 1 mảng)
const teacher = {
    first: 'MInh',
    last: 'Thu'
}
function greet(greeting, message) {
    return `${greeting} ${this.first} ${this.last} ${message}`

}
let result = greet.apply(teacher, ['Em chao cô cô dạy môn gì thế ạ(Đã xem cô live stream 1 tiếng)'])
console.log(result);

// So sánh với call

result = greet.call(teacher, 'Em chao cô cô dạy môn gì thế ạ(Đã xem cô live stream 1 tiếng)',)
console.log(result);

//================================================================
//  Function Borrowing
const teacher1={
    first: 'MInh',
    last: 'TAnh ',
    isOnline: false,
    goOnline(){
        this.isOnline = true
        console.log(`${this.first} ${this.last} is online`)
    },
    goOffline(){
        this.isOnline = false
        console.log(`${this.first} ${this.last} is offline`)
    }

}
const me1 = {
    first: 'Thanh',
    last: 'Tien',
    isOnline: false,
}
console.log('teacher1', teacher1.isOnline)
teacher1.goOnline()
console.log('teacher1', teacher1.isOnline)


console.log('Student1', me1.isOnline)
teacher1.goOnline.apply(me1)
console.log('Student1', me1.isOnline)

// =================================================================
function Animal(name,weight){
    this.name = name
    this.weight = weight
}
function Parrot(){
    this.speek = function(){
        Animal.apply(this),arguments;
        console.log("Nhà có khách");
    }
}
const conVet = new Parrot('Vẹt',300)
console.log(conVet);

// 9. Catching methods, thowing errors (Xử lý lỗi)
// 10. Promise
// 11. Async Function, await