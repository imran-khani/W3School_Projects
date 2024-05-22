console.clear()

let input = document.querySelector('input')


const searchFilter = (e) => {
    let li = document.querySelectorAll('li')

    li.forEach((item) => {
        let text = item.getElementsByTagName('a')[0].textContent || item.getElementsByTagName('a')[0].innerText;
        item.style.display = text.toLowerCase().includes(e.target.value) ? '' : 'none';
    })
}

input.addEventListener('keyup', searchFilter)