// app.js
const tabContent = document.querySelectorAll(".tabcontent");

const londonBtn = document.getElementById("londonBtn");
const parisBtn = document.getElementById("parisBtn");
const tokyoBtn = document.getElementById("tokyoBtn");

function hideAll() {
  tabContent.forEach((item) => {
    item.style.display = "none";
  });
}

function showTab(tabId, btn) {
  hideAll();
  document.getElementById(tabId).style.display = "block";
  document
    .querySelectorAll("button")
    .forEach((button) => button.classList.remove("active"));
  btn.classList.add("active");
}

londonBtn.addEventListener("click", () => {
  showTab("London", londonBtn);
});
parisBtn.addEventListener("click", () => {
  showTab("Paris", parisBtn);
});
tokyoBtn.addEventListener("click", () => {
  showTab("Tokyo", tokyoBtn);
});
