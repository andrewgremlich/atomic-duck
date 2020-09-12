import { activateDark, activateLight } from "./mod/activateTheming";
import { lightTheme, darkTheme, theming } from "./mod/elements";

lightTheme.style.display = "none";
darkTheme.style.display = "none";

if (!theming) {
  localStorage["theming"] = "dark";
  darkTheme.style.display = "block";
} else if (theming && localStorage["theming"] === "dark") {
  darkTheme.style.display = "block";
  activateDark();
} else if (theming && localStorage["theming"] === "light") {
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
