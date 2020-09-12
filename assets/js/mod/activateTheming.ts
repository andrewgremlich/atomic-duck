import { body, allIcons } from "./elements";

export const activateLight = () => {
  body.classList.remove("dark-theme");
  body.classList.add("light-theme");

  allIcons.forEach((element: HTMLElement) => (element.style.stroke = "black"));
};

export const activateDark = () => {
  body.classList.add("dark-theme");
  body.classList.remove("light-theme");

  allIcons.forEach((element: HTMLElement) => (element.style.stroke = "white"));
};
