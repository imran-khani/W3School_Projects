// Listen for scroll events and run the scrollIndicator function
window.addEventListener("scroll", scrollIndicator);

function scrollIndicator() {
  // Get the current scroll position
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop;

  // Calculate the total scrollable height
  let height =
    document.body.scrollHeight - document.documentElement.clientHeight;

  // Calculate the percentage of the page scrolled
  let scrolled = (winScroll / height) * 100;

  // Update the progress bar width
  document.querySelector(".bar").style.width = `${scrolled}%`;
}
