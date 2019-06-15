
describe("Testing DOM manipulation", function() {
  let Dom, guess, palindrome;
  beforeEach(function() {
    palindrome = new Palindrome();
    Dom = new DomManipulation();
    guess = {
      isPalindrome: false,
      id: 1,
      title: "mommy"
    };
  });

  it("should initialise HTML", function() {
    const form = document.createElement("form");
    const input = document.createElement("input");
    const ul = document.createElement("ul");

    input.id = "AddGuessInput";
    input.placeholder = "Type a guess...";

    form.id = "addGuessForm";
    form.appendChild(input);
    expect(Dom.init().form).toEqual(form);
    expect(Dom.init().ul).toEqual(ul);
  });


  it("should trigger form and add user input to Dom", function() {
    const form = document.createElement("form");
    form.innerHTML = `<input value="racecar" placeholder="Type your guess.." />
      <button type="submit" />`;
    document.body.appendChild(form);
    const ul = document.createElement("ul");
    Dom.addPalindromeEvent(
      form,
      palindrome.addPalindrome.bind(palindrome),
      ul
    );
    form.getElementsByTagName("button")[0].click();
    document.body.removeChild(form);
    expect(palindrome.palindrome[0].title).toEqual("racecar");
  });

});

describe("Testing DOM manipulation", () => {
  let palindrome, test1, test2;
  beforeEach(() => {
    palindrome = new Palindrome();
    test1 = {
      id: 1,
      title: "racecar",
      isPalindrome: true
    };
    test2 = {
      id: 2,
      title: "hello",
      isPalindrome: false
    };
  });


  it("should mark a user guess as true or false", () => {
    palindrome.addPalindrome(test1);

    palindrome.isPalindrome(1);
    expect(
      palindrome.getPalindrome().find(palindrome => palindrome.id == 1)
        .isPalindrome
    ).toBe(true);
  });
});
