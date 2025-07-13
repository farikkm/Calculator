const themeButton = document.getElementById("theme-button");
const lightIcon = themeButton.querySelector("#light-icon")
const darkIcon = themeButton.querySelector("#dark-icon")

themeButton.addEventListener("click", () => {
  let theme = document.body.className;

  if (theme === "dark") {
    document.body.className = "light";
    lightIcon.className = "show";
    darkIcon.className = "hidden"
  } else {
    document.body.className = "dark";
    lightIcon.className = "hidden";
    darkIcon.className = "show"
  }
})