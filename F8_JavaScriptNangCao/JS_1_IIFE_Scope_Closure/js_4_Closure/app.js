// <<<<< Closure >>>>>
// 2. Closure (Hàm đóng)

function createCounter() {
    let counter = 0
    function increase() {
        return ++counter
    }
    return increase
}
const counter1 = createCounter()
console.log(counter1());
console.log(counter1());
console.log(counter1());

const counter2 = createCounter()
console.log(counter2());
console.log(counter2());
console.log(counter2());
/////////////////////////////////////////////////////
function createLogger(namespace) {
    function logger(message) {
        console.log(`[${namespace}] ${message}`);
    }
    return logger
}
// =========================App================================================
// Home.js
const infoLogger = createLogger('Info')
infoLogger('Bat dau gui mai')
infoLogger('Gui mai loi, thu lai')
infoLogger('Gui mail thanh conge')


const errorLogger = createLogger('Error')
errorLogger('Bat dau gui mai')
errorLogger('Gui mai loi, thu lai')
errorLogger('Gui mail thanh conge')
////////////////////////////////////////////////////////////////////////
function createStorege(key){
    const store = JSON.parse(localStorage.getItem
        (key)) ?? {}

    const save = () => {
        localStorage.setItem(key, JSON.stringify(store));
    }

    const storage = {
        get(key){
            return store[key]
        },
        set(key, value){
            store[key] = value
            save()
        },
        remode(key){
            delete store[key]
            save()
        },
    }
    return storage
}

// Profile.js
const profileSetting = createStorege('profile-settings')
console.log(profileSetting.get('full-name'));
profileSetting.set('full-name', 'thanh tien')






// 3. Hoisting
// 4. Strict mode (Chế độ nghiêm ngặc)
// 5. This keyword
// 6. Bind methods
// 7. Call methods
// 8. Apply methods
// 9. Catching methods, thowing errors (Xử lý lỗi)
// 10. Promise
// 11. Async Function, await