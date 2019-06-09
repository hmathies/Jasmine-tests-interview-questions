function Palindrome() {
  this.palindrome = [];
}
Palindrome.prototype.addPalindrome = function(guess) {
  this.palindrome.push(guess);
};

Palindrome.prototype.getPalindrome = function() {
  return this.palindrome;
};

Palindrome.prototype.isPalindrome = function(id) {
  this.palindrome.find(palindrome => palindrome.id == id).isPalindrome = true;
};

function DomManipulation() {}

DomManipulation.prototype.init = function() {
  const form = document.createElement("form");
  const input = document.createElement("input");
  const ul = document.createElement("ul");
  input.id = "AddGuessInput";
  form.id = "addGuessForm";
  form.appendChild(input);
  return {
    form,
    ul
  };
};

DomManipulation.prototype.displayGuess = function(guess) {
  const li = document.createElement("li");
  li.innerText = guess.title;
  return li;
};

DomManipulation.prototype.createUniqueId = function() {};

DomManipulation.prototype.addPalindromeEvent = function(
  form,
  checkIfPalindrome,
  ul
) {
  const displayGuess = this.displayGuess;
  const id = new Date().getUTCMilliseconds();
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    const input = document.querySelector("input").value;
    const isItAPalindrome = input => {
      let reversed = "";

      for (let character of input) {
        reversed = character + reversed;
      }
      if (reversed == input) {
        return true;
      } else {
        return false;
      }
    };

    let palindromeChecker = isItAPalindrome(input);
    const guess = { isPalindrome: palindromeChecker, id: id, title: input };

    checkIfPalindrome(guess);
    console.log(guess.isPalindrome);
    ul.appendChild(displayGuess(guess));
  });
};

const dom = new DomManipulation();
document.querySelector("#app").appendChild(dom.init().form);
document.querySelector("#app").appendChild(dom.init().ul);
const palindrome = new Palindrome();
dom.addPalindromeEvent(
  document.getElementById("addGuessForm"),
  palindrome.addPalindrome.bind(palindrome),
  document.querySelector("ul")
);

// -----   below function uncommented doesn't produce any errors
// DomManipulation.prototype.addPalindromeEvent = function(
//   form,
//   createPalindrome,
//   unorderedList
// ) {
//   const displayPalindrome = this.displayPalindrome;
//   const id = new Date().getUTCMilliseconds();
//   form.addEventListener("submit", function(e) {
//     e.preventDefault();
//     const input = document.querySelector("input").value;
//     const guess = { palindrome: false, id: id, title: input };
//     createPalindrome(guess);
//     unorderedList.appendChild(displayPalindrome(guess));
//   });
// };
// function palindrome(str) {
//   let reversed = "";

//   for (let character of str) {
//     reversed = character + reversed;
//   }
//   if (reversed == str) {
//     return true;
//   } else {
//     return false;
//   }
// }
