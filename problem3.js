function multiplyString(str, n) {
  if (n <= 0) {
    return str;
  } else {
    return str.repeat(n);
  }
}

let answer = multiplyString("Howdy", 5);
console.log(answer);

answer = multiplyString("Romeo", 2);
console.log(answer);
