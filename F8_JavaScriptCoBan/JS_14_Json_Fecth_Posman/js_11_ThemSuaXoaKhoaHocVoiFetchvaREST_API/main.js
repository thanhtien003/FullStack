/* ==========<<<<< PostMan  >>>>>========== */

var courseAPI = 'http://localhost:3000/courses'
function start() {
    getCourses(renderCourses);
    handleCreateForm();
}
start()

// Functions
function getCourses(callback) {
    fetch(courseAPI)
        .then(function (response) {
            return response.json()
        })
        .then(callback);
}
function createCourse(data, callback) {
    var options = {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    }
    fetch(courseAPI, options)
        .then(function (response) {
            return response.json()
        })
        .then(callback)
}

function handleDeleteCourse(id) {
    var options = {
        method: "DELETE", // *GET, POST, PUT, DELETE, etc.
        headers: {
            "Content-Type": "application/json",
        },
    }
    fetch(courseAPI + '/' + id, options)
        .then(function (response) {
            return response.json()
        })
        .then(function () {
            var courseItem = document.querySelector('.course-item-' + id)
            if (courseItem) {
                courseItem.remove();
            }
        })
}

function handleUpdateCourse(id, data) {
    var options = {
        method: "PUT", // *GET, POST, PUT, DELETE, etc.
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    }
    fetch(courseAPI + '/' + id, options)
        .then(function (response) {
            return response.json()
        })
        .then(function () {
            getCourses(renderCourses);
        })
}

function renderCourses(courses) {
    var listCourseBlock = document.querySelector('#list-courses')
    var htmls = courses.map(function (course) {
        return `
        <li class = "course-item-${course.id}">
            <h4>${course.name}</h4>
            <p>${course.description}</p>
            <button onclick ="handleDeleteCourse('${course.id}')" >Xóa</button>
            <button onclick ="handleUpdateCourse('${course.id}',handleUpdateForm())" >Cập Nhập</button>
        </li>`
    })
    listCourseBlock.innerHTML = htmls.join('')
}

function handleCreateForm() {
    var createBtn = document.querySelector('#create')
    createBtn.onclick = function () {
        var name = document.querySelector('input[name="name"]').value;
        var description = document.querySelector('input[name="description"]').value;
        // Gửi yêu cầu đi với phương thức POST
        var formData = {
            name: name,
            description: description,
        }
        createCourse(formData, function () {
            getCourses(renderCourses);

        })
    }
}


function handleUpdateForm() {
    var name = document.querySelector('input[name="name"]').value;
    var description = document.querySelector('input[name="description"]').value;
    return formData = {
        name: name,
        description: description,
    }
}
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