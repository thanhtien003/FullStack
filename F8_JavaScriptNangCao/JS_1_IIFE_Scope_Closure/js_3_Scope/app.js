// <<<<< Scope >>>>>
// Khái Niệm về phạm vi
// # Scrop - Phạm vi

// - Các loại phạm vi
//     - Global - Toàn cầu (Bất cứ ở đâu điều sử dụng đc )
var message = "Hoc ve Scrop "
function logger(message) {
    console.log(message)
}

logger(message)
//     - Code block - Khối mã: let, const(Khi khai báo chỉ được truy cập bên trong không truy cập đc bên ngoài)
{
    // Code block {},if else,for,while,...
    const age = '18'
    console.log(age)
}
//     - Local scrop - Hàm var, function (phạm vi trong 1 hàm)
function name1() {
        var fullName = 'Thanh Tien'
        console.log(fullName);
}
name1()
// - Khi gọi mỗi hàm luôn có 1 phạm vi mới được tạo ra
const phone = '123'
function fullName(first,last) {
    console.log(first,last)
    const address ='Ha noi'
    console.log(address,phone);
}

fullName('Thanh','Tien')
fullName('Pham','Thanh')
fullName('Phong','Tang')
// - Các hàm có thể truy cập các biến được khai báo trong phạm vi của nó và bên ngoài nó

// - Cách thức 1 biến được truy cập
// - Khi nào 1 biến bị xóa khỏi bộ nhớ?
//     - Biến toàn cầu? > Khi thoát trình duyệt
//     - Biến trong code block và trong hàm?
//     - Biến trong hàm được tham chiếu bởi 1 hàm?









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