console.clear()

let inputVal = document.querySelector('input')
let list = document.querySelectorAll('li')


inputVal.addEventListener('input',(e)=>{
    
    Array.from(list).forEach((item)=>{
        let links = item.getElementsByTagName('a')[0]
        item.style.display = (links.innerText.toLowerCase()).includes(e.target.value) ? 'block'  : ''
    })
})