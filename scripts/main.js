const numberButtons = document.getElementById("numbers").children;
const mainOperationsButtons = document.getElementById("main-operations").children;
const additionalOperationsButtons = document.getElementById("additional-operations").children;
const footerNumbers = document.getElementById("numbers-footer").children;
const display = document.getElementById("display");

const buttons = [...numberButtons, ...mainOperationsButtons, ...additionalOperationsButtons, ...footerNumbers];

let ERROR_MESSAGE = "Error!"

for (const button of buttons) {
  button.addEventListener("click", () => {
    const value = button.dataset.value;

    switch (value) {
      case "=":
        try {
          display.innerText = eval(display.innerText);
        } catch (error) {
          display.innerText = ERROR_MESSAGE;
        }
        break;
      case "eraseAll":
        display.innerText = "0";
        break;
      case "percentage":
        display.innerText = eval(display.innerText + "/100");
        break;
      case "convert":
        if (display.innerText === "0") return;

        display.innerText = parseFloat(display.innerText) * -1;
        break;
      case "0":
        if (display.innerText !== "0") display.innerText += value;
        break;
      case ".":
        let hasDot = display.innerText.split("").includes(".");
        if (!hasDot) display.innerText += value;
        break;
      case "backspace":
        if (display.innerText == "0") break;

        if (display.innerText.length <= 1) {
          display.innerText = "0"
        } else {
          display.innerText = display.innerText.slice(0, display.innerText.length - 1);
        }
        break;
      default:
        if (display.innerText === "0" || display.innerText === ERROR_MESSAGE) {
          display.innerText = value;
        } else {
          display.innerText += value;
        }
        break;
    }

  })
}
