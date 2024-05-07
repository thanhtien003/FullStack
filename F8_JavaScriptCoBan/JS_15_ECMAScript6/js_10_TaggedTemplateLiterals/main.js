/* ==========<<<<< ECMA Script 6 2015 >>>>>========== */

// 11. Tagged template literals () functions gọi function
//      ++ 
function highLight([frisst,...strings],...values) {
    console.log(frisst);
    console.warn(strings);
    console.error(values);
    return values.reduce(
        (acc,curr)=>[...acc,`<span>${curr}</span>`,strings.shift()],
        [frisst]
    )
    .join('');
}
var brand = 'F8'
var course = 'Javascript'
var html = highLight` Học lập trình ${course} tại ${brand}!`
console.log(html);
//      ++
//      ++
//      ++
// 12. Module
//      ++
//      ++
//      ++
//      ++
