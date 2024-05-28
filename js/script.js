//toggle class active
const navbarNav = document.querySelector(".navbar-nav");

//humburger menu active
document.querySelector("#humburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

//Action diluar sidebar menghilangkan navbar
const humburger = document.querySelector("#humburger-menu");

document.addEventListener("click", function (e) {
  if (!humburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
