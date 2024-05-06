/* ==========<<<<< Promise (sync, async)  >>>>>========== */
//    (d) Thực hành
var users = [
    {
        id: 1,
        name: 'Thanh Tien'
    },
    {
        id: 2,
        name: 'Son Dang'
    },
    {
        id: 3,
        name: 'Hieu Le'
    }
]
var comments = [
    {
        id: 1,
        user_id: 1,
        content: 'Anh Sơn chưa ra videos '
    },
    {
        id: 2,
        user_id: 2,
        content: 'Vừa ra xong em ơi '
    },
    {
        id: 3,
        user_id: 1,
        content: 'Em chua thay len anh oi '
    },
]
// Bước 1: Lấy Comments
// Bước 2: Từ comment lấy ra user_id 
// Bước 3: Từ user_id lấy ra user tương ứng

// Fake API
function getComents() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve(comments)
        }, 1000);
    });
}
function getUsersByIds(userId) {
    return new Promise(function (resolve, reject) {
        var result = users.filter(function (user) {
            return userId.includes(user.id)
        })
        setTimeout(() => {
            resolve(result)
        }, 3000);
    })
}

getComents()
    .then(function (comments) {
        var userId = comments.map(function (comment) {
            return comment.user_id
        })
        return getUsersByIds(userId)
            .then(function (users) {
                return {
                    users: users,
                    comments: comments
                }
            })
    })
    .then(function (data) {
        var commentBlock = document.getElementById("comment-block")
        var html = '';
        data.comments.forEach(function (comment) {
            var user = data.users.find(function (user) {
                return user.id === comment.user_id
            })
            html += `
            <li>
                ${user.name}: ${comment.content}
            </li>`
        });
        commentBlock.innerHTML = html;
    })
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