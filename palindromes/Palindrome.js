function palindrome(str) {
  let reversed = "";

  for (let character of str) {
    reversed = character + reversed;
  }
  if (reversed == str) {
    return true;
  } else {
    return false;
  }
}
