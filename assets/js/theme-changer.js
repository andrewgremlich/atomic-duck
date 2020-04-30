const lightTheme = document.querySelector(".light");
const darkTheme = document.querySelector(".dark");
const body = document.querySelector("body");
const theming = localStorage["theming"];
const allIcons = document.querySelectorAll(".icon svg");

const activateLight = () => {
  body.classList.remove("dark-theme");
  body.classList.add("light-theme");

  allIcons.forEach((element) => (element.style.stroke = "black"));
};

const activateDark = () => {
  body.classList.add("dark-theme");
  body.classList.remove("light-theme");

  allIcons.forEach((element) => (element.style.stroke = "white"));
};

lightTheme.style.display = "none";
darkTheme.style.display = "none";

if (!theming) {
  localStorage["theming"] = "dark";
  darkTheme.style.display = "block";
} else if (theming && theming === "dark") {
  darkTheme.style.display = "block";
  activateDark();
} else if (theming && theming === "light") {
  lightTheme.style.display = "block";
  activateLight();
}

darkTheme.addEventListener("click", () => {
  darkTheme.style.display = "none";
  lightTheme.style.display = "block";

  localStorage["theming"] = "light";

  activateLight();
});

lightTheme.addEventListener("click", () => {
  lightTheme.style.display = "none";
  darkTheme.style.display = "block";

  localStorage["theming"] = "dark";

  activateDark();
});
