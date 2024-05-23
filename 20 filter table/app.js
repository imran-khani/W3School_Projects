let input = document.querySelector('input');

input.addEventListener('input', (e) => {
    let filter = e.target.value.toLowerCase();
    let trs = document.querySelectorAll('tr');
    let found = false;

    trs.forEach((tr) => {
        let tds = tr.querySelectorAll('td');
        let match = false;

        tds.forEach((td) => {
            if (td.textContent.toLowerCase().includes(filter)) {
                match = true;
            }
        });

        if (match) {
            tr.style.display = '';
            found = true;
        } else {
            tr.style.display = 'none';
        }
    });

    document.getElementById('errorpara').innerText = found ? '' : 'No data found...';
});
