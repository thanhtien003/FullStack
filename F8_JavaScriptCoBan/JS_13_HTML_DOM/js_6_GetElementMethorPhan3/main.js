/* ==========<<<<< HTML DOM  >>>>>========== */
// 1)  Elements
//     1.1) getElementById(): get Id
//    -- Trả về trực tiếp Element
var getId = document.getElementById("getId");
console.log(getId);
//     1.2) getElementsByClassName(): get ClassName
//    -- Trả về HTML collection tính chất Dạng mảng
var getClassName = document.getElementsByClassName("getClass");
console.log(getClassName);
//     1.3) getElementsByTagName get tag name <h1>,<h2>,<h3>,..
//    -- Trả về HTML collection tính chất Dạng mảng
var getTagName = document.getElementsByTagName("p");
console.log(getTagName);
//     1.4) querySelector(): get CSS selector
//    -- Trả về trực tiếp Element
var querySelector = document.querySelector(".selector1");
console.log(querySelector);
//    -- querySelectorAll(): Trả về trực tiếp Nodelist
var querySelectorAll1 = document.querySelectorAll(".selector");
console.log(querySelectorAll1);
//     1.5) get HTML collection
//    -- Trả về HTML collection tính chất Dạng mảng
console.log(document.forms);
console.log(document.forms[0]);
console.log(document.forms["form-2"]);
console.log(document.forms.form3);
console.log(document.anchors); //tất cả thẻ a có thuộc tính name
// 2)  Attributes
// 3)  Text
