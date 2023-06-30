function solution(str) {
  let reverseString = str.split("");
  let array = reverseString.reverse();
  let joinArray = array.join("");

  return joinArray;
}
