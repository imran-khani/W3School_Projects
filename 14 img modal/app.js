let deletes = document.querySelector('.deletes')
let modal = document.querySelector('.modal')
let del = document.querySelector('.del')
let cancel = document.querySelector('.cancel')
let para = document.querySelector('.para')

deletes.addEventListener('click', () => {
    modal.style.display = 'block'
})

del.addEventListener('click', () => {
    para.innerHTML = 'Deleted Successfully';
    para.style.color = 'red';
    modal.style.display = 'none';
    setTimeout(() => {
        para.style.display = 'none';
        para.innerHTML = '';
        para.style.display = 'block'; // Show the para element again
    }, 1000);
})

cancel.addEventListener('click', () => {
    para.innerHTML = 'Cancelled Successfully';
    para.style.color = 'blue';
    modal.style.display = 'none';
    setTimeout(() => {
        para.style.display = 'none';
        para.style.display = 'block'; // Show the para element again
    }, 1000);
})
