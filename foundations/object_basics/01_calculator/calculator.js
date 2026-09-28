const add = function (a, b) {
  if (Number.isNaN(a) || Number.isNaN(b)) {
    return "One of or both inputs are not numbers";
  } else {
    return a + b;
  }
};

const subtract = function (a, b) {
  if (Number.isNaN(a) || Number.isNaN(b)) {
    return "One of or both inputs are not numbers";
  } else {
    return a - b;
  }
};

const sum = function (arr) {
  return arr.reduce((accu, curr) => {
    return accu + curr;
  }, 0);
};

const multiply = function (a, b) {
  return arr.reduce((accu, curr) => {
    return accu * curr;
  }, 1);
};

const power = function (a, b) {
  if (Number.isNaN(a) || Number.isNaN(b)) {
    return "One of or both inputs are not numbers";
  }

  if (!Number.isInteger(b)) {
    return "One of or both inputs are not numbers";
  }

    return a ** b;
};

const factorial = function (a) {
  if (Number.isNaN(a)) {
    return "The number must be an integer";
  }

  let accu = 1;
  for (let i = a; i > 0; i--) {
    accu *= i;
  }

  return accu;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
