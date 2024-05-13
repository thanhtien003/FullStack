// 6. Bind methods ( ràng buột)
const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const root = $('#root');
const input = $('#input');
const submit = $('#submit');
const app = (() => {
    const cars = ['BMW']; // Private
    return {
        get(index) {
            return cars[index];
        },
        add(car) {
            cars.push(car);
        },
        edit(index, car) {
            cars[index] = car;
        },
        delete(index) {
            cars.splice(index, 1);
        },
        reder() {
            const html = cars.map((car, index) => `
            <li>
            ${car}
            <span class="delete" data-index="${index}">&times</span>
            </li>
            `)
                .join('');
            root.innerHTML = html;
        },
        handleDelete(e) {
            const deleteBtn = e.target.closest('.delete')
            if (deleteBtn) {
                const index = deleteBtn.dataset.index;
                this.delete(index);
                this.reder()
            }
        },
        init() {
            //  Handle DOM events
            submit.addEventListener('click', () => {
                const car = input.value;
                this.add(car);
                this.reder()

                input.value = '';
                input.focus();
            })

            root.onclick = this.handleDelete.bind(this)
                //  Handle logic
                this.reder()
        }
    }
})()
app.init();

// 7. Call methods
// 8. Apply methods
// 9. Catching methods, thowing errors (Xử lý lỗi)
// 10. Promise
// 11. Async Function, await