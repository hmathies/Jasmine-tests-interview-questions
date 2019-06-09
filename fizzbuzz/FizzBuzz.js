function fizzbuzz(n) {
  for (var i = 1; i <= n; i++) {
    //Is the number a multiple of 3 and 5
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("fizzbuzz");
    } else if (i % 5 === 0) {
      //Is the number only a multiple of 5
      console.log("buzz");
    } else if (i % 3 === 0) {
      //Is the number a multiple of 3
      console.log("fizz");
    } else {
      //If the number isn't a multiple
      console.log(i);
    }
  }
}
