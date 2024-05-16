
document.addEventListener('DOMContentLoaded', function () {

    let imgList = document.querySelectorAll('.container img');
    let currentImg = document.querySelector('.imgContainer img')


    Array.from(imgList).forEach((img) => {
        img.addEventListener('click', (e) => {
            let imgSrc = e.target.src;
            currentImg.src = imgSrc;
        })
    });
});