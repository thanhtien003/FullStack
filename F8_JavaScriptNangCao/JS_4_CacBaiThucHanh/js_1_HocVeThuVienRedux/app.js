// Cách 1 tạo ra thư viện redux
// import { createStore } from 'https://cdn.skypack.dev/redux';

// Cách 2 tạo ra thư viện redux
function createStore(reducer) {
    let state = reducer(undefined,{})
    const subscribers = []

    return {
        getState() {
            return state
        },
        dispatch(action) {
            state = reducer(state, action)

            subscribers.forEach(subscriber => {
                subscriber()
            })
        },
        subscribe(subscriber) {
            subscribers.push(subscriber)
        }
    }

}





// =================================================================
//  App
// Reducer
 const initState = 0
function bankReducer(state = initState, action) {
    switch(action.type) {
        case 'DEPOSIT':
            return state + action.payload;
        case 'WITHDRAW':
            return state - action.payload;
        default:
            return state
    }
}

// Store
const store  = window.store= createStore(bankReducer);

// Actions
function actionDeposit (payload){
    return {
        type: 'DEPOSIT',
        payload
    }
}

function actionWithdraw (payload){
    return {
        type: 'WITHDRAW',
        payload
    }
}

// DOM events
const deposit = document.querySelector('#deposit')
const withdraw = document.querySelector('#withdraw')

// Event handlers
deposit.onclick = function(){
    store.dispatch(actionDeposit(10))
}

withdraw.onclick = function(){
    store.dispatch(actionWithdraw(10))
}

//Listeners
store.subscribe(() =>{
    render()
    console.log('State vừa update xong ');

})

// Render
function render (){
    const output = document.querySelector('#output')
    output.innerHTML = store.getState()
}
render()





// 9. Catching methods, thowing errors (Xử lý lỗi)
// 10. Promise
// 11. Async Function, await