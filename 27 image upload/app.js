let input = document.querySelector("input");

input.addEventListener("change", function () {
  let img = document.querySelector("img");
  let file = input.files[0];
    img.src = URL.createObjectURL(file);
    let link = document.createElement('span')
    link.innerHTML = `<a href="${img.src}" download>Download</a>`
    document.body.appendChild(link)
});
