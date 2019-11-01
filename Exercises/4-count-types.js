'use strict';

const countTypesInArray = array => {
  const types = {};
  for (const item of array) {
    const type = typeof item;
    type in types ? types[type] += 1 : types[type] = 1;
  }
  return types;
};


// const arr = [[], [{}], null, undefined];
// console.dir(countTypesInArray(arr));

module.exports = { countTypesInArray };
