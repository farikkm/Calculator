import { Calculator } from "./modules/Calculator.js";

const numberButtons = document.getElementById("numbers").children;
const mainOperationsButtons = document.getElementById("main-operations").children;
const additionalOperationsButtons = document.getElementById("additional-operations").children;
const display = document.getElementById("display");

const buttons = [...numberButtons, ...mainOperationsButtons, ...additionalOperationsButtons];

for (const button of buttons) {
  button.addEventListener("click", (e) => {
    const value = e.target.dataset.value;

    switch (value) {
      case "=": 
        display.textContent = eval(display.textContent);
        break;
      default: 
        if (display.textContent === "0") {
          display.textContent = value;
        } else {
          display.textContent += value;
        }
        break;
    }

  })
}
