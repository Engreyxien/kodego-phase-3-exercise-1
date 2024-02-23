function checkOdd(arr) {
  return arr.every((num) => num % 2 === 0);
}

let answer = checkOdd([100, 98, 86, 44]);
console.log(answer);

answer = checkOdd([28, 113, 14, 51]);
console.log(answer);
