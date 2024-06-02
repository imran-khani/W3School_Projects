console.clear();

document.addEventListener("DOMContentLoaded", () => {
  let btns = document.querySelectorAll(".btns button");
  let tabContent = document.querySelectorAll(".tabs div");

  function showTab(idx) {
    Array.from(btns).forEach((btn, i) => {
      btn.classList.toggle("active", i === idx);
    });

    for (let i = 0; i < tabContent.length; i++) {
      tabContent[i].style.display = i === idx ? "block" : "none";
    }
  }

  btns.forEach((btn, i) => {
    btn.addEventListener("click", () => showTab(i));
  });

  showTab(0);
});
