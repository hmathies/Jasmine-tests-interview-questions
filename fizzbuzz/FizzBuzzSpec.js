describe("Testing DOM manipulation", function() {
  let Dom, guess, fizzbuzz;
  beforeEach(function(){
    fizzbuzz = new Fizzbuzz();
    Dom = new DomManipulation();
    guess = {
      num: 15,
      isNum: true
    }
  });

  it("should initialize HTML", () => {
    const form = document.createElement("form");
    const input = document.createElement("input");
    const div = document.createElement('div');

    input.id = "numInput";
    input.placeholder = "Type a number...";
    form.id = "numForm";
    form.appendChild(input);

    expect(Dom.init().form).toEqual(form);
    expect(Dom.init().div).toEqual(div);
  });

  it("should trigger form and display the result", () => {
    const form = document.createElement("form");
    form.innerHTML = `<input value=15 placeholder="Type a number..." /><button type="submit" />`;
    document.body.appendChild(form);
    const div = document.createElement("div");
    Dom.addFizzbuzzEvent(form, fizzbuzz.addFizzbuzz.bind(fizzbuzz), div);
    form.getElementsByTagName("button")[0].click();
    document.body.removeChild(form);
    expect(fizzbuzz.fizzbuzz[0].num).toEqual(15);
  });
});

describe("Testing DOM manipulation", () => {
  let fizzbuzz, test1, test2;
  beforeEach(() => {
    fizzbuzz = new Fizzbuzz();
    test1 = {
      id: 1,
      num: 5
    };
    test2 = {
      id: 2,
      num: 10
    };
  });
  it("should add the user num to the dom", () => {
    fizzbuzz.addFizzbuzz(test1);
    fizzbuzz.num(15);
    expect(fizzbuzz.getFizzbuzz().find(fizzbuzz => fizzbuzz.num == 15).num).toBe(15);
  });
});
