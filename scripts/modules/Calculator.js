export class Calculator {
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