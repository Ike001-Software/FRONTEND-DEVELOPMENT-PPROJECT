let age = 18;
let access = age >= 18 ? "Allowed" : "Denied";
console.log(access);

function salute(name) {
  console.log("Hello, " + name + "!");
}

salute("Ike");
salute(5);

// General Functions
function add(a, b) {
  return a + b;
}

let result = add(5, 6);
console.log("The result is: " + result);

// Arroow Functions
const greet = (name) => {
  return "Hi " + name;
}
console.log(greet("David"));

const sayHi = () => {console.log("Hi there")};

sayHi();

// Arrays
let color = ["red", "blue", "yellow"];
console.log(color);
console.log(color[2]);

color[1] = "orange";
console.log(color);
console.log(color.length);

// Methods in Arrays
color.push("brown");
console.log(color);

color.pop();
console.log(color);

color.unshift("purple");
console.log(color);

color.shift();
console.log(color);
console.log(color.indexOf("red"));

// Loops in Arrays
let scores = [90, 100, 80];
for (let i = 0; i < scores.length; i++) {
  console.log("Scores: ", scores[i]);
}

scores.forEach(score => {
  console.log(score);
});

for (let i = 0; i < scores.length; i++) {
  console.log(scores[i]);
}

{
let i = 0;
while (i < scores.length) {
  console.log(scores[i]);
  i++;
}
}

// Mapping  (Transformation of items ) in Arrays
let newScores = scores.map(score => score * 2);
console.log(newScores);

// Objects
let user = {
  name: "Ike",
  age: 20,
  isAStudent: true
};
console.log(user.name);
console.log(user["age"]);

user.country = "Nigeria";
console.log(user.country);
console.log(user.isAStudent);

user.address = {
  city: "Enugu",
  state: "Enugu"
};
console.log(user.address.state);

user.sayHi = function() {
  console.log("I'm " + this.name + ".");
}
user.sayHi();

let school = {
  name: "University Of Nigeria, Nsukka",
  address: "Nsukka",
  state: "Enugu"
};

console.log(school);
console.log(school.name);

for (let key in school) {
  console.log(key);
  console.log(school[key])
}

// Array of Objects
let churches = [
  {name: "Deeper Life", location: "Lagos"},
  {name: "Catholic", location: "Rome"}
  ];
  
  console.log(churches[0].location);
  
  // Date & Time
  const now = new Date();
  console.log(now);
  
  console.log(now.getFullYear());