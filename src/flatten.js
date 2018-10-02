export const flatten = (arr) => {
  return arr.reduce((result, value) => Array.isArray(value) ? result.concat(flatten(value)) : result.concat(value), []);
};