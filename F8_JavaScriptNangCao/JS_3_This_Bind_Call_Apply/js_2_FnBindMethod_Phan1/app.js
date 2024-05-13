// 6. Bind methods ( ràng buột)
// this.first = 'Minh '
// this.last = ' Thu '

// const teacher = {
//     first: 'Nguyễn ',
//     last: ' Văn ',
//     getFullName( data1, data2){
//         console.log(data1, data2);
//         return `${this.first} ${this.last}`
//     }
// }

// // case 1
// console.log(teacher.getFullName());

// // case 2
// // const getTeacher = teacher.getFullName.bind(object muốn rang buột)
// const getTeacher = teacher.getFullName.bind(teacher)
// console.log(getTeacher('getFullName', 'getTeacher'));
// =================================================================
const teacher = {
    first: 'Nguyễn ',
    last: ' Văn ',
    getFullName() {
        console.log(`${this.first} ${this.last}`)
    }
}
const button = document.querySelector('button');
button.onclick = teacher.getFullName.bind(teacher)





// 7. Call methods
// 8. Apply methods
// 9. Catching methods, thowing errors (Xử lý lỗi)
// 10. Promise
// 11. Async Function, await