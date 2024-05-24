
document.addEventListener('DOMContentLoaded', () => {

    let dataLoaded = false; // Flag to track if data is already loaded

    function getData() {
        if (dataLoaded) {
            console.log('Data is already loaded');
            return;
        }

        const xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos', true);
        xhr.onload = function () {
            if (xhr.status === 200) {
                const data = JSON.parse(xhr.responseText);
                console.log(data);
                const items = data.map((item) => {
                    return `<li>${item.title}</li>`;
                });
                let p = document.querySelector('p');
                p.innerHTML = items.join('');
                dataLoaded = true; // Set the flag to true after data is loaded
            }
        };
        xhr.send();
    }

    let btn = document.querySelector('button');
    btn.addEventListener('click', () => {
        getData();
    });

});
