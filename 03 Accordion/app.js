let accButtons = document.querySelectorAll('.accordion');

accButtons.forEach((button) => {
    button.addEventListener('click', () => {
        let panel = button.nextElementSibling;

        if (panel.style.display === 'block') {
            panel.style.display = 'none';
        } else {
            panel.style.display = 'block';
        }

        button.classList.toggle('active');

        accButtons.forEach((otherButton) => {
            if (otherButton !== button) {
                otherButton.classList.remove('active');
                otherButton.nextElementSibling.style.display = 'none';
            }
        });
    });
});
