"use strict";

/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
  - `npm run test-calculator`
*/

class Calculator {
  #allowedChars = ["+", "-", "*", "/", "(", ")", "."];
  #operators = ["/", "*", "+", "-"];
  #operationObj = {
    "+": "add",
    "-": "subtract",
    "*": "multiply",
    "/": "divide",
  };

  constructor() {
    this.result = 0;
  }

  add(n) {
    this.result += n;
    return this.result;
  }

  subtract(n) {
    this.result -= n;
    return this.result;
  }

  multiply(n) {
    this.result *= n;
    return this.result;
  }

  divide(n) {
    if (n === 0) {
      throw new Error("Cannot divide by zero");
    }
    this.result /= n;

    return this.result;
  }

  clear() {
    this.result = 0;
  }

  getResult() {
    // console.log(this.result);
    return this.result;
  }

  calculate(str) {
    const length = str.length;
    let modStr = "";
    for (let i = 0; i < length; i++) {
      if (str[i] === " ") continue;
      modStr += str[i];
    }
    console.log(modStr);
    let arr2 = [];
    this.result = this.#evaluateExp(
      this.#parseString(this.#parseBrackets(modStr), arr2)
    );
    return this.result;
  }

  #parseBrackets(str) {
    if (!str.includes("(") && !str.includes(")")) return str;

    let openBrackets = [];
    let closeBrackets = [];
    const length = str.length;

    for (let i = 0; i < length; i++) {
      if (str[i] === "(") openBrackets.push(i);
      if (str[i] === ")") {
        closeBrackets.push(i);
        break;
      }
    }

    let arr = [];

    const str1 = str.slice(0, openBrackets[openBrackets.length - 1]);
    const str2 = this.#evaluateExp(
      this.#parseString(
        str.slice(openBrackets[openBrackets.length - 1] + 1, closeBrackets[0]),
        arr
      )
    );
    const str3 = str.slice(closeBrackets[0] + 1);

    const modStr = str1 + str2 + str3;
    return this.#parseBrackets(modStr);
  }

  #parseString(str, arr) {
    const length = str.length;
    for (let i = 0; i < length; i++) {
      if (this.#operators.includes(str[i])) {
        let arrNew = str.split(str[i], 1);
        arr.push(arrNew[0]);
        arr.push(str[i]);
        this.#parseString(str.slice(i + 1), arr);
        return arr;
      }
    }
    arr.push(str);
    return arr;
  }

  #evaluateExp(arr) {
    let evaluateExp = [];
    this.#operators.forEach((operator, i) => {
      if (arr.includes(operator)) {
        if (evaluateExp.length !== 0) {
          arr = evaluateExp;
          evaluateExp = [];
        }

        evaluateExp = this.#evaluate(arr, evaluateExp, operator);

        while (evaluateExp.includes(operator)) {
          arr = evaluateExp;
          evaluateExp = [];
          evaluateExp = this.#evaluate(arr, evaluateExp, operator);
        }
      }
    });
    return evaluateExp[0];
  }

  #evaluate(arr, evaluateExp, operator) {
    for (let i = arr.length - 1; i > 0; i--) {
      if (i === arr.length - 1 && arr[i - 1] !== operator) {
        evaluateExp.unshift(arr[i]);
        continue;
      }

      if (arr[i] !== operator && arr[i - 1] !== operator) {
        evaluateExp.unshift(arr[i]);
        continue;
      }

      if (arr[i] === operator) {
        evaluateExp.unshift(
          this.#calculation(arr[i - 1], arr[i + 1], operator)
        );
        for (let j = i - 2; j >= 0; j--) {
          evaluateExp.unshift(arr[j]);
        }
        break;
      }
    }
    return evaluateExp;
  }

  #calculation(a, b, operator) {
    const x = Number.parseFloat(a);
    const y = Number.parseFloat(b);

    if (isNaN(x) || isNaN(y)) {
      throw new Error("Invalid items in expression");
    }

    this.result = x;
    this[this.#operationObj[operator]](y);
    return this.result;
  }

  // #throwError() {
  //   // console.log("Invalid expression");
  // }
}

const app = new Calculator();

// console.log(app.calculate(`10 +   2 *    (   6 - (4 + 2) / 2) + 7`));

module.exports = Calculator;

// prettier-ignore
// console.log(
//   evaluateExp(["2", "+", "3", "+", "46", "-", "5", "*", "6", "/", "3", "/", "1"])
//   );
// console.log(evaluateExp(["2", "+", "3", "+", "46"]));

// console.log(parseBrackets(`10+2*(6-(4+1)/2)+7`));
