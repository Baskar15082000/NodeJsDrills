function map(element, cb) {
  let newArray = [];
  for (let index = 0; index < element.length; index++) {
    newArray.push(cb(element[index]));
  }
  return newArray;
}
module.exports = map;
