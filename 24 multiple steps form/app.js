let currentTab = 0;
let tabs = document.querySelectorAll(".tab");
let prevBtn = document.querySelector("#prevBtn");
let nextBtn = document.querySelector("#nextBtn");

const showTab = (idx) => {
  // display current tab
  tabs[currentTab].style.display = "block";

  console.log(idx);
  // Toggle previous button based on index
  idx === 0
    ? (prevBtn.style.display = "none")
    : (prevBtn.style.display = "inline");

  // Toggle next button based on index
  idx === tabs.length - 1
    ? (nextBtn.innerHTML = "Finish")
    : (nextBtn.innerHTML = "Next");
};
if (currentTab >= tabs.length) {
  document.querySelector("#regForm").submit();
  alert("Form submitted");
}

// function to toggle next/prev tabs
const nextPrev = (idx) => {
  let valid = true;
  if (idx > 0) {
    // get current tab inputs
    let inputs = tabs[currentTab].querySelectorAll("input");

    // basic validation
    for (let i of inputs) {
      if (i.value === "") {
        valid = false;
      }
    }

    if (!valid) {
      alert("Please fill the required fields");
      return;
    }
  }
  // hide current tab to display next or prev
  tabs[currentTab].style.display = "none";

  // show next tab if valid;
  if (valid) currentTab = currentTab + idx;

  showTab(currentTab);
};

// call the showTab function at the end if using arrow function.
showTab(currentTab);
