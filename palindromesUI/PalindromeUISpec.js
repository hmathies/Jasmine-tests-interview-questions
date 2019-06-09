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
  it("should add a palindrome guess as true", () => {
    const isPalindrome = palindrome.addPalindrome(test1);
    expect(palindrome.getPalindrome().length).toBe(1);
  });
  // it("should add an invalid palindrome as false", () => {
  //   const isNotPalindrome = palindrome.addIsNotPalindrome(test2);
  //   expect(palindrome.getIsNotPalindrome().length).toBe(1);
  // });

  it("should mark a user guess as true or false", () => {
    palindrome.addPalindrome(test1);

    palindrome.isPalindrome(1);
    expect(
      palindrome.getPalindrome().find(palindrome => palindrome.id == 1)
        .isPalindrome
    ).toBe(true);
  });
});

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
    form.id = "addGuessForm";
    form.appendChild(input);
    expect(Dom.init().form).toEqual(form);
    expect(Dom.init().ul).toEqual(ul);
  });

  it("should create guess", function() {
    const element = Dom.displayGuess(guess);
    const result = document.createElement("li");
    result.innerText = guess.title;
    expect(element).toEqual(result);
  });

  it("should display palindrome", function() {
    const element = Dom.displayGuess(guess);
    const result = document.createElement("li");
    result.innerText = guess.title;
    expect(element).toEqual(result);
  });

  it("should trigger form and add palindrome to palindrome array", function() {
    const form = document.createElement("form");
    form.innerHTML = `<input value="mommy" />
      <button type="submit" />`;
    document.body.appendChild(form);
    const ul = document.createElement("ul");
    Dom.addPalindromeEvent(
      form,
      palindrome.addPalindrome.bind(palindrome),
      // palindrome.addIsNotPalindrome.bind(palindrome),
      ul
    );
    form.getElementsByTagName("button")[0].click();
    document.body.removeChild(form);
    expect(palindrome.palindrome[0].title).toEqual("mommy");
  });
});

// describe("Testing the functionality, this is the palindrome function", () => {
//   it("should define a function named palindrome", () => {
//     expect(typeof palindrome).toEqual("function");
//   });

//   it('"aba" is a palindrome', () => {
//     expect(palindrome("aba")).toBeTruthy();
//   });

//   it('" aba" is not a palindrome', () => {
//     expect(palindrome(" aba")).toBeFalsy();
//   });

//   it('"aba " is not a palindrome', () => {
//     expect(palindrome("aba ")).toBeFalsy();
//   });

//   it('"greetings" is not a palindrome', () => {
//     expect(palindrome("greetings")).toBeFalsy();
//   });
//   it('"1000000001" a palindrome', () => {
//     expect(palindrome("1000000001")).toBeTruthy();
//   });

//   it('"Fish hsif" is not a palindrome', () => {
//     expect(palindrome("Fish hsif")).toBeFalsy();
//   });

//   it('"pennep" a palindrome', () => {
//     expect(palindrome("pennep")).toBeTruthy();
//   });
// });
