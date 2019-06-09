describe("fizzbuzz should be defined", () => {
  beforeEach(() => {
    spyOn(console, 'log');
  });
  afterEach(() => {
    console.log.calls.reset();
  });
  it("should define a function named fizzbuzz", () => {
    expect(fizzbuzz).toBeDefined();
  });

  it("should print out 5 statements when calling fizzbuzz with `5`", () => {
    fizzbuzz(5);
    expect(console.log.calls.count()).toBe(5);
  });

  it("should print out correct values when called with 15", () => {
    fizzbuzz(15);
    expect(console.log[0][0]).and.returnValue(1);
    expect(console.log[1][0]).and.returnValue(2);
    expect(console.log[2][0]).and.returnValue('fizz');
    expect(console.log[3][0]).and.returnValue(4);
    expect(console.log[4][0]).and.returnValue('buzz');
    expect(console.log[5][0]).and.returnValue('fizz');
    expect(console.log[6][0]).and.returnValue(7);
    expect(console.log[7][0]).and.returnValue(8);
    expect(console.log[8][0]).and.returnValue('fizz');
    expect(console.log[9][0]).and.returnValue('buzz');
    expect(console.log[10][0]).and.returnValue(11);
    expect(console.log[11][0]).and.returnValue('fizz');
    expect(console.log[12][0]).and.returnValue(13);
    expect(console.log[13][0]).and.returnValue(14);
    expect(console.log[14][0]).and.returnValue('fizzbuzz');
  })

});
