let string = ""
let buttons = document.querySelectorAll('.btn');

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            string = eval(string);
            document.querySelector('input').value = string
        } else if (e.target.innerHTML == 'AC') {
            string = ""
            document.querySelector('input').value = string
        } else {
            string = string + e.target.innerHTML
            document.querySelector('input').value = string
        }
    })
})
































// let button = document.querySelector('#mybutton')
// let inputField = document.querySelector('#inputfield')

// button.addEventListener('click', () => {
//     inputField.value = button.innerHTML
// })