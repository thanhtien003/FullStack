/* ==========<<<<< Object Contructor  >>>>>========== */
// Keywords: Javascript Object Methods

function User(fristName, lastName, avatar) {
  this.fristName = fristName;
  this.lastName = lastName;
  this.avatar = avatar;
  this.getFullName = function () {
    return this.fristName + " " + this.lastName;
  };
}

var admin = new User("Tien", "Pham", "avartAdmin");
// 1. Thêm thuộc tính/ phương thức mới riêng biệt cho nó
admin.title = "Chào Bạn đến với khóa học";
console.log(admin, admin.constructor); // xem lại bảng thiết kế của đối tượng
console.log(admin, admin.constructor === User); //Kiểm tra lại bảng thiết kế của đối tượng
console.log(admin, admin.avatar);
console.log(admin, admin.getFullName());
var author = new User("Hieu", "Le", "avatarAuthor");
// 1. Thêm thuộc tính/ phương thức mới  riêng biệt cho nó
author.massage = "Cái này mình học sau vậy anh";
console.log(author, author.avatar);
console.log(author, author.getFullName());
