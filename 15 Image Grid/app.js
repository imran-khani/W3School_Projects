
let key = '24552340-5fcdb176bc8164ea38a8c8535'
let form = document.querySelector('form')
let searchData = document.querySelector('.searchData')
let imagesContainer = document.querySelector('.imagesContainer')

let getPhotos = async (inputVal) => {
    const req = await fetch(`https://pixabay.com/api/?key=${key}&q=${inputVal}&image_type=photo&pretty=true`);
    const data = await req.json()
    console.log(data)
    console.log(inputVal)
    return data.hits;
}



form.addEventListener('submit', async (e) => {
    e.preventDefault();
    let input = document.querySelector('input').value
    searchData.innerHTML = `you searched for: ${input}`
    const images = await getPhotos(input)
    displayImages(images)

})

const displayImages = (images) => {
    const columns = [
        document.getElementById('column1'),
        document.getElementById('column2'),
        document.getElementById('column3'),
        document.getElementById('column4')
    ];

    let columnIndex = 0;
    images.forEach((img) => {
        const photo = document.createElement('img');
        photo.src = img.webformatURL;
        photo.alt = img.tags;
        columns[columnIndex].appendChild(photo);

        columnIndex++;
        if (columnIndex === columns.length) {
            columnIndex = 0;
        }
    });
}
