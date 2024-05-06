/* ==========<<<<< Promise (sync, async)  >>>>>========== */
// 2. Promise
//    (a) <Promise> (sync, async)
//          ++(sync):  Theo tư duy Đồng bộ là thằng nào viết trước chạy trước và thằng nào viết sau chạy sau
//          ++(async): Theo tư duy  bất Đồng bộ là thằng nào viết trước có thể chạy sau và thằng nào viết sau có thể chạy trước
//          ++ Chạy bắt đồng bộ như: setTimeout, setInterval, fetch, XMLHttpRequest, file reading JavaScript, Request Animation Frame
// setTimeout(() => {
//     console.log(1);
// }, 1000);
// console.log(2);
//    (b) Nỗi đau
//          ++ Callback hell
// setTimeout(() => {
//     console.log("Cong viec 1");
//     setTimeout(() => {
//         console.log("Cong viec 2");
//         setTimeout(() => {
//             console.log("Cong viec 3");
//             setTimeout(() => {
//                 console.log("Cong viec 4");
//                 setTimeout(() => {
//                     console.log("Cong viec 5");
//                 }, 1000);
//             }, 1000);
//         }, 1000);
//     }, 1000);
// }, 1000);
//          ++ Pyramid of doom
//    (c) Lý thuyết, cách hoặt động
//          ++ <Promise> truyền vào 1 func và 2 tham số truyền vào func là hàm
//          ++ <Promise> có 3 trạng thái: Pending, Fulfilled, Rejected
//          ++<Promise> sinh ra để sử lý thao tác bắt đồng bộ và trước khi có Promise thì chúng ta sử dụng Callback
// Và callback nó sẽ xẩy ra 1 vấn đề là Callback hell nó sẽ bị xâu vào rất khó nhìn, khó hiểu
//  nên promise này ra mắt trong phiên bản ES6 dể khắc phụ callback hell giúp viết code không bị sâu vào dễ đọc dễ hiểu
//          ++ Để tạo ra đc promise thì phải sử dụng từ khóa <new> với Promise và trong constructor của nó truyền vào
//  1 executor funciton và trong executor funciton nhận 2 tham số dạng hàm result và reject ;
//                -- result gọi nó khi thao tác sử lý thành công
//                -- reject gọi nó khi thao tác sử lý thất bại
//          ++ Và Khi sử dụng Promise thì đối tượng promise được tạo ra, chúng ta sẽ sử dụng qua phương thức .then \ .catch
// then và catch điều nhận 1 callback function và thực thi .then khi promise được resole,  và thực thi .catch khi promise được reject
// var promise = new Promise(
//     // Executor
//     // function (<resole>thành công, <reject>thất bại) {
//     function (resole, reject) {
//         reject("Có lỗi")
//         resole([{
//             id: 1,
//             name: "<JavaScript>"
//         }])
//     }
// );
// promise
//     // <then>: khi result được gọi thì callback của <.then> được gọi
//     .then(function (coures) {
//         console.log("Successfully ", coures);
//     })
//     // <catch> khi reject được gọi thì callback của <.catch> được gọi
//     .catch(function (error) {
//         console.log(error);
//     })
//     // <finally> khi1 trong result hoặt reject được gọi thì callback của <.finally> được gọi
//     .finally(function () {
//         console.log("Done ");
//     })
/////////////////////////////////////////////////////////////////////////////////////////////////////
// ++++++++   Promise chain   ++++++++
// var promise = new Promise(
//     // Executor
//     // function (<resole>thành công, <reject>thất bại) {
//     function (resole, reject) {
//         resole()
//         reject("Có lỗi")
//     }
// );
// promise
//     // <then>: khi result được gọi thì callback của <.then> được gọi
//     .then(function (coures) {
//         return new Promise(function (resolve, reject) {
//             setTimeout(() => {
//                 resolve([1,2,3,4,5])
//             }, 3000);
//         })
//     })
//     .then(function (data) {
//         console.log(data);
//         return 2
//     })
//     .then(function (data1) {
//         console.log(data1);
//         return 3
//     })
//     .then(function (data2) {
//         console.log(data2);
//     })
//     // <catch> khi reject được gọi thì callback của <.catch> được gọi
//     .catch(function (error) {
//         console.log(error);
//     })
//     // <finally> khi1 trong result hoặt reject được gọi thì callback của <.finally> được gọi
//     .finally(function () {
//         console.log("Done ");
//     })
/////////////////////////////////////////////////////////////////////////////////////////////////////
function sleep(ms) {
    return new Promise(function (resolve, reject) {
        setTimeout(resolve, ms);
    })
}
sleep(1000)
    .then(function () {
        console.log(1);
        return sleep(1000)
    })
    .then(function () {
        console.log(2);
        return sleep(1000)
    })
    .then(function () {
        console.log(3);
        return sleep(1000)
    })
//    (d) Thực hành
// 3. Fetch
//    (a
//    (b)
//    (c)
//    (d)
// 4. DOM location
//    (a)
//    (b)
//    (c)
//    (d)
// 5. Local storage
//    (a)
//    (b)
//    (c)
//    (d)
// 6. Session storage
//    (a)
//    (b)
//    (c)
//    (d)
// 7. Coding conversion
//    (a)
//    (b)
//    (c)
//    (d)
// 8. Best Practices
//    (a)
//    (b)
//    (c)
//    (d)
// 9. Mistakes
//    (a)
//    (b)
//    (c)
//    (d)
// 10. Performance
//    (a)
//    (b)
//    (c)
//    (d)