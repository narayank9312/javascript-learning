let result = [];
function flatened(inputArray) {
  inputArray.forEach((element) => {
    if (Array.isArray(element)) {
      flatened(element);
    } else {
      result.push(element);
    }
  });
}

flatened([1, 2, 3, 4, [, 5, 6], [1, 4, 5, [3, 4]]]);
console.log(result);
