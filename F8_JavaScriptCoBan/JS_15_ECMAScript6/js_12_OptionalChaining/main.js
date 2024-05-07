/* ==========<<<<< ECMA Script 6 2015 >>>>>========== */

// Optional chaining
const obj = {
    name: 'John',
    cat: {
        name: 'HCM',
        cat2: {
            name: 'HCM2',
            cat3: {
                name: 'HCM3',
            }
        }
    }
}
if (
    // obj.cat.cat2.cat3
    obj?.cat?.cat2?.cat3) {
    console.log(obj.cat.cat2.cat3.name);
}
///////////////////////////////////////////////////////////
const obj2 = {
    getName(values) { console.log(values);
}}
obj2.getName?.(123)