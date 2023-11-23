const each = require("../each");
const elements = require("../data");

function cb(element, index) {
  console.log("Element at index " + index + " : " + element);
}
each(elements, cb);
