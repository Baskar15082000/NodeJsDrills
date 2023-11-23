const reduce = require("../reduce");
const elements = require("../data");
function cb(element, startingValue) {
  return element + startingValue;
}
let sum = reduce(elements, cb, 0);
console.log(sum);
