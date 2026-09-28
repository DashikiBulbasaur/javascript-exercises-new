const findTheOldest = function(arr_of_people) {
  let oldest = arr_of_people.sort((a, b) => {
    let current_date = new Date().getFullYear();

    if (!Object.hasOwn(a, "yearOfDeath")) {
      a.yearOfDeath = current_date;
    }

    if (!Object.hasOwn(b, "yearOfDeath")) {
      b.yearOfDeath = current_date;
    }

    return (b.yearOfDeath - b.yearOfBirth) - (a.yearOfDeath - a.yearOfBirth);

  }).shift();

  return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
