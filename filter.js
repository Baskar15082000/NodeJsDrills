function filter(elements, cb, target) {
  let newArray = [];
  for (let index = 0; index < elements.length; index++) {
    if (cb(elements[index], target)) {
      newArray.push(elements[index]);
    }
  }
  return newArray;
}
module.exports = filter;
