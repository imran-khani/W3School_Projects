console.clear();

let btns = document.querySelectorAll('.btns-container button');
let items = document.querySelectorAll('.items div');

btns.forEach((item) => {

    item.addEventListener('click', () => {
        // remove active class from all buttons
        btns.forEach((btn) => btn.classList.remove('active'));
        item.classList.add('active')
        let category = item.getAttribute('data-category');
        if (category === 'all') {
            items.forEach((i) => {
                i.style.display = 'block';
            });
        } else {
            items.forEach((i) => {
                if (i.getAttribute('data-category').includes(category)) {
                    i.style.display = 'block';

                } else {
                    i.style.display = 'none';

                }
            });
        }
    });
});

