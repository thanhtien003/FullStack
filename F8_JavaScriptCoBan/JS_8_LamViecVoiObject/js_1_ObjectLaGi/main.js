/* ==========<<<<< Object Là Gì  >>>>>========== */
// Keywords: Javascript Object Methods
var emailkey = "email10";
var myInfo = {
  //     --  cách 1
  name: "Thanh Tien",
  //     --  cách 2
  ["full-name"]: "Pham Thanh Tien",
  //     -- cách 3
  [emailkey]: "TienPaaa@gmail.com",
  age: 21,
  gender: "male",
  address: "Ha Noi",
  getName: function () {
    return this.name;
  },
};
var myKey = "address";
//1.  thêm key và value sau khi object được tạo
//     --  cách 1
myInfo.email = "tienpc@2003.com";
//     --  cách 2
myInfo["my-email"] = "tienpc@2003.com";
//2.  Lấy value ra ngoài
//     --  cách 1
console.log(myInfo, myInfo.name);
//     --  cách 2
console.log(myInfo, myInfo["email"]);
console.log(myInfo, myInfo["ABC"]); // key không có sẽ trả về undefined
console.log(myInfo, myInfo[myKey]); // lấy value từ gán biến
console.log(myInfo, myInfo.getName()); //trả về dạng chuỗi
//  3. Xóa Cặp key value trong Object
console.log(myInfo, delete myInfo.age);
console.log(myInfo, delete myInfo["email10"]);

