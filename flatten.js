let flattenArray = [];
function flatten(elements) {
  for (let i = 0; i < elements.length; i++) {
    let element = elements[i];
    if (Array.isArray(element)) {
      flatten(element);
    } else {
      flattenArray.push(elements[i]);
    }
  }
  return flattenArray;
}
module.exports = flatten;
