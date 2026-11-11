// Scales the 1440px-wide page to fit the browser window, like Figma's preview.
// Example: on a 1920px-wide window the page is zoomed to 1920 / 1440 = 1.33x.
function fitPage() {
  document.body.style.zoom = document.documentElement.clientWidth / 1440;
}

fitPage();
window.addEventListener("resize", fitPage);