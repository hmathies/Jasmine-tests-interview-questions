describe("Testing the functionality, this is the palindrome function", () => {
  it("should define a function named palindrome", () => {
    expect(typeof palindrome).toEqual("function");
  });

  it('"aba" is a palindrome', () => {
    expect(palindrome("aba")).toBeTruthy();
  });

  it('" aba" is not a palindrome', () => {
    expect(palindrome(" aba")).toBeFalsy();
  });

  it('"aba " is not a palindrome', () => {
    expect(palindrome("aba ")).toBeFalsy();
  });

  it('"greetings" is not a palindrome', () => {
    expect(palindrome("greetings")).toBeFalsy();
  });
  it('"1000000001" a palindrome', () => {
    expect(palindrome("1000000001")).toBeTruthy();
  });

  it('"Fish hsif" is not a palindrome', () => {
    expect(palindrome("Fish hsif")).toBeFalsy();
  });

  it('"pennep" a palindrome', () => {
    expect(palindrome("pennep")).toBeTruthy();
  });
});
