function Fizzbuzz() {
  this.fizzbuzz = [];
}
Fizzbuzz.prototype.addFizzbuzz = () => {
  this.fizzbuzz.push(guess);
}

Fizzbuzz.prototype.getFizzbuzz = () => {
  return this.fizzbuzz;
}

function DomManipulation() {}

DomManipulation.prototype.init = function() {
  const form = document.createElement("form");
  const input = document.createElement("input");
  const div = document.createElement("div");

  input.id = "numInput";
  input.placeholder = "Type a number..."

  form.id = "numForm";
  form.appendChild(input);
  return {
    form,
    div
  };
};

DomManipulation.prototype.displayFizzbuzz = () => {
  const p = document.createElement("p");
  p.innerText = guess.num;
  li.appendChild(p);
  return li;
}

DomManipulation.prototype.addFizzbuzzEvent = (form,
printFizzbuzz,
div) => {
  const displayFizzbuzz = this.displayFizzbuzz;
  const id = new Date().getUTCMilliseconds();

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let input = document.querySelector("input").value;
    const printFizzbuzz = input => {

      if (!isNaN(input)){
        for (var i = 1; i <= input; i++) {
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
      } else {
      alert("must be a number")
      }
    }

    const guess = {num: input, id: id};
    div.appendChild(displayFizzbuzz(guess));

});
}
