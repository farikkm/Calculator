class Calculator {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }

  plus() {
    return this.a + this.b;
  }

  minus() {
    return this.a - this.b
  }

  multiple() {
    return this.a * this.b
  }

  divide() {
    return this.a / this.b
  }
}

const calcButton = document.querySelector("button");

calcButton.addEventListener("click", () => {
  const num1 = document.querySelector("input[name='a']")
  const num2 = document.querySelector("input[name='b']");

  const operation = document.querySelector("input[name='operation']").value;

  const a = parseInt(num1.value)
  const b = parseInt(num2.value)

  const calc = new Calculator(a, b);

  let result;

  switch (operation) {
    case '+':
      result = calc.plus();
      break;
    case '-':
      result = calc.minus();
      break;
    case '*':
      result = calc.multiple();
      break;
    case '/':
      result = calc.divide();
      break;
    default:
      alert("Введите правильную операцию")
      break;
  }

  console.log(result);
  

})