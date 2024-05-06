// <<<  Enhanced object literals   >>>
var name = 'Javascript'
var price = 1000
// 1. Định nghĩa key : value Object
var course = {
    name,
    price,
    // 2. Định nghĩa method cho Object
    getName() {
        return name
    }
}

// 3. Định nghĩa key cho Object dưới dạng biến
var fieldName = 'New-Name'
var fieldPrice = 'Price'
var courses1 = {
    [fieldName]: 'Javascript',
    [fieldPrice]: 1000
}


