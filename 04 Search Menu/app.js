let input = document.querySelector("input");
let ulist = document.querySelector("ul");
let originalList = ulist.innerHTML;

let doSearch = () => {
  let filter = input.value.trim().toUpperCase();
  const li = ulist.getElementsByTagName("li");
  let found = false;

  for (let i = 0; i < li.length; i++) {
    let arr = li[i].getElementsByTagName("a")[0];
    let listItemText = arr.textContent || arr.innerText || ""; // Handles cross-browser text retrieval
    if (listItemText.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
      found = true;
    } else {
      li[i].style.display = "none";
    }
  }

  ulist.innerHTML = found
    ? ulist.innerHTML
    : "Not Found any related search item";

  if (input.value === "") {
    ulist.innerHTML = originalList; // Restore the original list when input is empty
  }
};

input.addEventListener("keyup", doSearch);
