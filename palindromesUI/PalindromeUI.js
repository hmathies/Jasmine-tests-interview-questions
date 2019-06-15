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
  input.placeholder = "Type a guess..."

  form.id = "addGuessForm";
  form.appendChild(input);
  return {
    form,
    ul
  };
};

DomManipulation.prototype.displayGuess = function(guess) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.classList.add("badge", "badge-secondary", "badge-pill", "ml-4");
  span.innerText = guess.isPalindrome;
  li.innerText = guess.title;

  li.appendChild(span);

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
    let input = document.querySelector("input").value;
    const isItAPalindrome = input => {
      const userInputStripped1 = input.replace(/[^\w\s]|_/g, "").toLowerCase();
      const userInput = userInputStripped1.replace(/\s+/g, "");

      let reversed = "";

      for (let character of userInput) {
        reversed = character + reversed;
      }
      if (reversed == userInput) {
        return true;
      } else {
        return false;
      }
    };

    let palindromeChecker = isItAPalindrome(input);
    const guess = { isPalindrome: palindromeChecker, id: id, title: input };

    checkIfPalindrome(guess);

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
