function checkPalindrome(str) {
  const reversed = str.split("").reverse().join("");
  return str === reversed ? "String is a palindrome" : "uwu";
}

let answer = checkPalindrome("mama mia");
console.log(answer);

answer = checkPalindrome("radar");
console.log(answer);
