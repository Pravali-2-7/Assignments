//q1
console.log(`^ prime prime 5 + 7 = ${5 + 7} ^ prime prime`);
const multiLine = `This is line one
This is line two
This is line three`;
console.log(multiLine);
const firstName = "John";
const lastName = "Doe";
console.log(`Full Name: ${firstName} ${lastName}`);

//q2
const square = (n) => n * n;
console.log(square(5));
const obj = {
  value: 50,
  test: () => console.log(this.value)
};
obj.test();
const obj2 = {
  value: 50,
  test: function () {
    console.log(this.value);
  }
};
obj2.test();

//q3
const product = { name: "Pen", price: 10 };
const productCopy = { ...product };
console.log(productCopy);
const a1 = { x: 1 };
const b1 = { y: 2 };
const mergedObj = { ...a1, ...b1 };
console.log(mergedObj);
const maxValue = (...nums) => Math.max(...nums);
console.log(maxValue(3, 7, 1, 9, 2));

//q4
const arr = [10, 20, 30];
const [a, b] = arr;
console.log(a, b);
const laptop = { brand: "Dell", ram: "8GB" };
const { brand } = laptop;
console.log(brand);
const info = {};
console.log(info?.user?.name);

//q5
for (var i = 0; i < 3; i++) {}
console.log(i);
try {
  for (let j = 0; j < 3; j++) {}
  console.log(j);
} catch (error) {
  console.log("j is not defined because let has block scope");
}
const pi = 3.14;
console.log("const is used to prevent reassignment");

//q6
let kmph = 70;
let speed = kmph > 60 ? "Fast" : "Normal";
console.log(speed);
let age = 20;
console.log(age >= 18 ? "Adult" : "Minor");
let num = 0;
let result =
  num > 0 ? "Positive" :
  num === 0 ? "Zero" :
  "Negative";
console.log(result);

//q7
const nums = [1, 2, 3];
const newNums = [...nums, 4, 5];
console.log(newNums);
const arrA = ["x", "y"];
const arrB = ["z"];
const combined = [...arrA, ...arrB];
console.log(combined);
const printNames = (...names) => names;
console.log(printNames("A", "B", "C"));

//q8
const user1 = { id: 101, status: "active" };
const { id, status } = user1;
console.log(id, status);
const id2 = 101;
const role = "admin";
const user2 = { id2, role };
console.log(user2);
const username = "Mark";
const age2 = 25;
const person = {
  username,
  age2,
  greet() {
    console.log("Hello from object method");
  }
};
person.greet();

//q9
console.log(`Today is ${new Date().toDateString()}`);
let NAME = "Sam";
let SCORE = 88;
console.log(`Hello ${NAME}, your score is ${SCORE}/100`);

//q10
const add = (a, b) => a + b;
console.log(add(4, 5));
const isAdult = (age) => age >= 18;
console.log(isAdult(21));
const double = (n) => n * 2;
console.log(double(10));

// q11
const array1 = [1, 2, 3];
const cloneArray = [...array1];
console.log(cloneArray);
const addedAtStart = [100, ...array1];
console.log(addedAtStart);
const objA = { x: 1, y: 2 };
const objB = { y: 50, z: 3 };
const merged = { ...objA, ...objB };
console.log(merged);

// q12
const user = {
  name: "Alex",
  address: {
    city: "Bangalore"
  }
};

console.log(user?.address?.city);
console.log(user?.job?.title);

const student = {};
console.log(student?.details?.marks);
