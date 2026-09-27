const palindromes = function (word) {
  let filtered = word
                  .toLowerCase()
                  .split('')
                  .filter(item => /^[0-9a-zA-Z]+$/.test(item));

  let check = true;
  let first = 0;
  let last = filtered.length - 1;
  let bound;

  if (filtered.length % 2 === 0) {
    bound = filtered.length / 2;
  } else {
    bound = Math.floor((word.length / 2));
  }

  while (check && first < bound) {
    if (filtered[first] != filtered[last]) {
      check = false;
    }

    first++;
    last--;
  }

  return check;
};

// Do not edit below this line
module.exports = palindromes;
