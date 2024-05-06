/* ==========<<<<< Object Date  >>>>>========== */
// Keywords: Javascript Date Object Mozilla 

var date = new Date(); // Dạng object
console.log(date, typeof date);
console.log(date, date);
console.log(date, date.getFullYear());
console.log(date, date.getMonth() + 1);
console.log(date, date.getDate());
console.log(date, date.getDay());
console.log(date, date.getHours());
console.log(date, date.getTime());
console.log(date, date.getMinutes());
console.log(date, date.getMilliseconds());
console.log(date,` ngày ${date.getDate()} tháng ${date.getMonth()+1} năm ${date.getFullYear()}`);

var date1 = Date(); // Dạng chuỗi
console.log(date1, typeof date1);
console.log(date1, date1);
