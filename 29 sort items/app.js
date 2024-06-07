"use strict";

console.clear();

let sortBtn = document.querySelector("#sort-btn");
let sortedAssending = true;
sortBtn.addEventListener("click", () => {
  let ul = document.querySelector("ul");
  let li = Array.from(ul.children);
  let sorted = li.sort((a, b) => {
    let aText = a.textContent.toLowerCase();
    let bText = b.textContent.toLowerCase();
    // assending or Descending order
    if (sortedAssending) {
      return aText.localeCompare(bText);
    } else {
      return bText.localeCompare(aText);
    }
  });
  sorted.forEach((item) => {
    ul.appendChild(item);
  });
  sortedAssending = !sortedAssending;
});
