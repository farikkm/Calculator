import { Calculator } from "./modules/Calculator.js";

// const calcButton = document.querySelector("button");

// calcButton.addEventListener("click", () => {
//   const num1 = document.querySelector("input[name='a']")
//   const num2 = document.querySelector("input[name='b']");

//   const operation = document.querySelector("input[name='operation']").value;

//   const a = parseInt(num1.value)
//   const b = parseInt(num2.value)

//   const calc = new Calculator(a, b);

//   let result;

//   switch (operation) {
//     case '+':
//       result = calc.plus();
//       break;
//     case '-':
//       result = calc.minus();
//       break;
//     case '*':
//       result = calc.multiple();
//       break;
//     case '/':
//       result = calc.divide();
//       break;
//     default:
//       alert("Введите правильную операцию")
//       break;
//   }

//   console.log(result);
// })

const buttons = document.getElementById("numbers").childNodes;
const mainOperationsButtons = document.getElementById("main-operations").childNodes;
const additionalOperationsButtons = document.getElementById("additional-operations").childNodes
const operationFieldEl = document.getElementById("operation-field");
const operationResultEl = document.getElementById("operation-result");

operationFieldEl.innerHTML = "0";
operationResultEl.innerHTML = "0";

let field = "";
let result = "";

buttons.forEach(button => {
  button.addEventListener("click", (e) => {
    const value = e.target.dataset.value;

    if (field.length < 7) field += value;

    operationResultEl.innerHTML = field;
  })
})

additionalOperationsButtons.forEach(button => {
  button.addEventListener("click", (e) => {
    const value = e.target.dataset.value;

    switch (value) {
      case "eraseAll":
        field = "";
        result = "";

        operationFieldEl.innerHTML = "0";
        operationResultEl.innerHTML = "0";
        break;
      default:
        break;
    }
  })
})

let operation;
let num1, num2;

const operations = {
  plus: (a, b) => a + b,
  minus: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => a / b,
}

mainOperationsButtons.forEach(button => {
  button.addEventListener("click", (e) => {
    operation = e.target.dataset.value;
    
    if (operation != "result") {
      num1 = parseInt(field);
      field = "";
      operationResultEl.innerHTML = '0';      
    } else {
      num2 = parseInt(field);
    }

    if (num1 && num2) {
      console.log(operation);
      
      let selectedOperation = operations[operation];
      console.log(selectedOperation);
      

      result = selectedOperation(num1, num2)
  
      console.log(result);
    }

    
    
  })
})