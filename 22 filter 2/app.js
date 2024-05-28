
let input = document.querySelector('input')
let list = document.querySelectorAll('li')

input.addEventListener('keyup', (e) => {
    let value = e.target.value.toLowerCase();
    Array.from(list).map((item) => {
        if (value.trim() == '') {
            item.style.display = '';
            item.style.opacity = 1;
        }
        else {
            item.style.display = item.innerText.toLowerCase().includes(value) ? '' : 'none';
            // alos the opacity
            item.style.opacity = item.innerText.toLowerCase().includes(value) ? 1 : 0
        }
    })
})