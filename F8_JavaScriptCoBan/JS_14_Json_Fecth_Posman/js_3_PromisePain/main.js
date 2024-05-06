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
setTimeout(() => {
    console.log("Cong viec 1");
    setTimeout(() => {
        console.log("Cong viec 2");
        setTimeout(() => {
            console.log("Cong viec 3");
            setTimeout(() => {
                console.log("Cong viec 4");
                setTimeout(() => {
                    console.log("Cong viec 5");
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);
//          ++ Pyramid of doom

//    (c) Lý thuyết, cách hoặt động
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