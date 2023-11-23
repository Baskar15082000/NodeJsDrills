function find(elements, cb, target) {
  for (let index = 0; index < elements.length; index++) {
    if (cb(elements[index], target)) {
      return elements[index];
    }
  }
  return undefined;
}
module.exports = find;
