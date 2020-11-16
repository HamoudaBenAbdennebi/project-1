const menuIcon = document.querySelector(".hamburger-menu");
const navbar = document.querySelector(".navbar");
menuIcon.addEventListener("click", () => {
  navbar.classList.toggle("change");
});
const divToChange = document.querySelector(".contTech");
const divToChangee = document.querySelector(".autoMain");
const btnOn = document.querySelector(".btnSwitchOn");
const btnOff = document.querySelector(".btnSwitchOff");

btnOn.addEventListener("click", function () {
  divToChange.classList.add("darkMode");
});

btnOff.addEventListener("click", function () {
  divToChange.classList.remove("darkMode");
});
