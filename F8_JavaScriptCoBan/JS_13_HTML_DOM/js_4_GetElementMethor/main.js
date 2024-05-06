/* ==========<<<<< HTML DOM  >>>>>========== */
// 1)  Elements
//     1.1) get Id
//    -- Trả về 1 Object
var getId = document.getElementById("getId");
console.log(getId);
//     1.2) get ClassName
//    -- Trả về HTML collection tính chất Dạng mảng
var getClassName = document.getElementsByClassName("getClass");
console.log(getClassName);
//     1.3) get tag name <h1>,<h2>,<h3>,..
//    -- Trả về HTML collection tính chất Dạng mảng
var getTagName = document.getElementsByTagName("p");
console.log(getTagName);
//     1.4) get CSS selector
//    -- Trả về HTML NodeList tính chất Dạng mảng
var querySelector = document.querySelector(".selector1");
console.log(querySelector);
var querySelectorAll1 = document.querySelectorAll(".selector");
console.log(querySelectorAll1);
//     1.5) get HTML collection
//    -- Trả về HTML tính chất Dạng mảng
console.log(document.forms);
console.log(document.forms[0]);
console.log(document.forms["form-2"]);
console.log(document.forms.form3);
console.log(document.anchors); //tất cả thẻ a có thuộc tính name
// 2)  Attributes
// 3)  Text
