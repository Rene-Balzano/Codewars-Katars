function countSheeps(array1) {
  let countSheeps = 0;

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] === true) {
      countSheeps++;
    }
  }
  return countSheeps;
}
