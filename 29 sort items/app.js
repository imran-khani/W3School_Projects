"use strict";

console.clear();

let sortBtn = document.querySelector("#sort-btn");

// sort the list items in ul
sortBtn.addEventListener("click", () => {
  let ul = document.querySelector("ul");
  let list = document.querySelectorAll("li");
  list = Array.from(list).sort((a, b) => {
    return a.textContent
      .toLowerCase()
      .localeCompare(b.textContent.toLowerCase());
  });
  list.forEach((item) => ul.appendChild(item));
});
