const flatten = require("../flatten");
const nestedArray = [1, [2], [[3]], [[[4]]]];

const flattenArray = flatten(nestedArray);
console.log(flattenArray);
