/* ==========<<<<< ECMA Script 6 2015 >>>>>========== */

// 6. Default parameters values (Định nghĩa giá trị mặt định cho những tham số)
//      ++ Sử dụng khi tham số không bắt buột phải nhập
//      ++
//      ++
//      ++
function logger(log) {
    if (typeof log === 'undefined') {
        log = 'Giá trị mặt định';
    }

    console.log(log);
}
logger('Haha con gà');     
//////////////////////////////////////////////////
function logger(log,isAlert = false) {
if (isAlert) {
    return alert(log);
}
    console.log(log);
}
logger('Abc',true);
// 7. Destructuring
//      ++
//      ++
//      ++
//      ++
// 8. Rest parameters
//      ++
//      ++
//      ++
//      ++
// 9. Spread
//      ++
//      ++
//      ++
//      ++
// 10. Enhanced Object literals
//      ++
//      ++
//      ++
//      ++
// 11. Tagged template literals
//      ++
//      ++
//      ++
//      ++
// 12. Module
//      ++
//      ++
//      ++
//      ++
