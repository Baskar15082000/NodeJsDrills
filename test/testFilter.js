const filter = require("../filter");
const elements = require("../data");

function cb(element) {
  if (element % 2 === 0) {
    return true;
  }
}
const newArr = filter(elements, cb);
console.log(newArr);
