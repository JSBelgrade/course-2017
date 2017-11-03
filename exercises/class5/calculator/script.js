class Calculator {
  constructor() { // Setup calculator
    this.reset();
  }
  
  addNumber(n) { // Add number or digit
    if (typeof n !== 'number' || isNaN(n)) {
      throw new TypeError('You can add only numbers');
    }

    if (this.operator && this.operationStack.length > 0) {
      console.log(this.operationStack)
      console.log(this.operator)
      this.operationStack.push(this.operator);
      this.operator = null;
      console.log(this.operationStack)
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
      console.log(this.operationStack)
      console.log(this.currentNumber)

      this.operationStack.push(this.currentNumber);
      if (this.operator) {
        this.currentNumber = 0;
      }
    }
    
    let operandsArray = this.operationStack.slice(0);

    
    let total = operandsArray.shift();

    for (let i = 0; i < operandsArray.length; i += 2) {
      if (typeof operandsArray[i] === 'string') {
        total = this._executeOperation(total, operandsArray[i], operandsArray[i + 1]);
      }
    }
    
    this.currentNumber = total;
    var totalElem = document.getElementById('total-value');
    totalElem.innerHTML = total;
  }
  
  _executeOperation(left, operator, right) {
    console.log('execute');
    console.log(left);
    console.log(operator);
    console.log(right);
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
  calculator.addNumber(Number(event.target.value));
})

function buttonHandler(){
     calculator.addNumber(Number(event.target.value));
     calculator.equals();
}