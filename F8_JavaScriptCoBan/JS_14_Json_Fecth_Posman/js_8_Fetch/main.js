/* ==========<<<<< Fetch  >>>>>========== */
// 3. Fetch: Lấy dữ liệu từ phía Back end trả về
//    (a)<Fetch> gọi lên API để lấy ra nội dung lưu trữ phía Back end 
//    (b) <API> (Application Programming Interface): giao diện lập trình ứng dụng==> là cổng giao tiếp giữa các phần mềm
//    (c) Back end ==> API ==> Fetch ==> JSON / XML ==> JSON.parse ==> JavaScript type
//    (d)
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(function (response) {
        return response.json()// JSON.parse ==> JavaScript types
    })
    .then(function (posts) {
        var htmls = posts.map(function (post) {
            return `
                    <li>
                    <h2>${post.title}</h2>
                    <p>${post.body}</p>
                    </li>`;
        })
        document.getElementById('post-block').innerHTML = htmls.join('')
    })
    .catch(function (err) {
        console.log("Có API lỗi rồi");
    })
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