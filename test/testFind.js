const find = require("../find");
const elements = require("../data");

function cb(element, target) {
  if (element === target) {
    return true;
  }
}
module.exports = cb;
let target = 5;
console.log(find(elements, cb, target));
