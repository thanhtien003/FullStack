/* ==========<<<<< Object Prototype  >>>>>========== */
// Keywords: Javascript Object Methods
// 1. Prototype là gì?
//   --  Là nguyên mẫu để tạo nên 1 đối tượng
// 2. Sử dụng khi nào?
//   --  Thêm 1 phương thức/ thuộc tính sau khi Object constructor được tạo ra

function User(fristName, lastName, avatar) {
  this.fristName = fristName;
  this.lastName = lastName;
  this.avatar = avatar;
  this.getFullName = function () {
    return this.fristName + " " + this.lastName;
  };
}
// Thêm 1 phương thức/ thuộc tính sau khi Object constructor được tạo ra
User.prototype.className = "F8";
User.prototype.getFullName = function () {
  return this.fristName + " " + this.lastName;
};

var admin = new User("Tien", "Pham", "avartAdmin");
console.log(admin, admin.className);
console.log(admin, admin.getFullName());
var author = new User("Hieu", "Le", "avatarAuthor");
console.log(author, author.className);
console.log(author, author.getFullName());
