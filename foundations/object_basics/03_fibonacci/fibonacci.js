const fibonacci = function(num) {
  if (!Number.isInteger(num) || num < 0) {
    return "OOPS";
  }

  if (num === 0) {
    return 0;
  }

  let previous = 1;
  let current = 0;
  let counter = 0;
  while (counter < num) {
    let placeholder = current;
    current += previous; 
    previous = placeholder;
    counter++;
  }

  return current;
};

// Do not edit below this line
module.exports = fibonacci;/^[0-9a-zA-Z]+$/
