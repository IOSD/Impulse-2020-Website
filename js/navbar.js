window.addEventListener("mousewheel", event => {
  let originalEvent = event.wheelDeltaY;

  if (event.wheelDeltaY >= 0) {
    document.getElementById("navbar").style.opacity = 1;
  } else {
    document.getElementById("navbar").style.opacity = 0;
  }
});

document.getElementById("nav-menu").addEventListener("click", () => {
  document.getElementById("navs").style.display = "block";
});

document.getElementById("navs").addEventListener("click", () => {
  const width =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;
  if (width < 720) {
    document.getElementById("navs").style.display = "none";
  }
});
