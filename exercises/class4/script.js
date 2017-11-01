class Calculator {
  constructor() { // Setup calculator
    this.reset();
  }
  
  addNumber(n) { // Add number or digit
    if (typeof n !== 'number' || isNaN(n)) {
      throw new TypeError('You can add only numbers');
    }
    
    if (this.operator && this.operationStack.length > 0) {
      this.operationStack.push(this.operator);
      this.operator = null;
    }
 
    this.currentNumber = Number(`${this.currentNumber}${n}`);
  }
  
  addOperator(o) { // Add operator (+, -, * or /)
    if (typeof o !== 'string' || ['+', '-', '*', '/'].indexOf(o) < 0) {
      throw new TypeError('Operator must be +, -, * or /');
    }
    
    this.operator = o;
    this.operationStack.push(this.currentNumber);
    this.currentNumber = 0;
  }
  
  equals() { // Calculate current total
    if (typeof this.currentNumber === 'number' && !isNaN(this.currentNumber)) {
      this.operationStack.push(this.currentNumber);
      this.currentNumber = 0;
    }
    
    let result = this.operationStack.slice(0);
    
    let total = result.shift();
    for (let i = 0; i < result.length; i += 2) {
      total = this._executeOperation(total, result[i], result[i + 1]);
    }
    
    this.currentNumber = total;
    
    console.log(this.operationStack);
    console.log(total);
  }
  
  _executeOperation(left, operator, right) {
    if (operator === '+') {
      return left += right;
    } else if (operator === '-') {
      return left -= right;
    } else if (operator === '/') {
      return left /= right;
    } else if (operator === '*') {
      return left *= right;
    }
  }

  reset() { // Reset all fields
    this.currentNumber = 0;
    this.operator = null;
    this.operationStack = [];
  }
}

const calculator = new Calculator();

const button = document.getElementById('button1');
button.addEventListener('click', function (event) {
  console.log('Click');
  console.log(event.target.value);
  calculator.addNumber(Number(event.target.value));
  calculator.equals();
});
