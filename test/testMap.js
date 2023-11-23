const map = require("../map");
const elements = require("../data");

function cb(element) {
  return element * 2;
}

const doubleArray = map(elements, cb);
console.log(doubleArray);
