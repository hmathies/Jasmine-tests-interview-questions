describe("Testing the funcationality, this is the function", () => {
  it("should have a function called capitalize", () => {
    expect(typeof capitalize).toEqual("function");
  });

  it("should capitalize the first letter of every word in a sentence", () => {
    expect(capitalize("hi there, how is it going?")).toEqual(
      "Hi There, How Is It Going?"
    );
  });
  it("should capitalize the first letter", () => {
    expect(capitalize("i love breakfast at bill miller bbq")).toEqual(
      "I Love Breakfast At Bill Miller Bbq"
    );
  });
});
