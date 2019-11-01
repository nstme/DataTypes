'use strict';

const countTypesInArray = array => {
  const types = {};
  for (const item of array) {
    const type = typeof item;
    type in types ? types[type] += 1 : types[type] = 1;
  }
  return types;
};

module.exports = { countTypesInArray };
