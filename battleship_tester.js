model.fire("53");
model.fire("00");

model.fire("06");
model.fire("16");
model.fire("26");

model.fire("34");
model.fire("24");
model.fire("44");

model.fire("12");
model.fire("11");
model.fire("10");

console.log(controller.parseGuess("A0"));
console.log(controller.parseGuess("B6"));
console.log(controller.parseGuess("G3"));
console.log(controller.parseGuess("H0"));
console.log(controller.parseGuess("A7"));