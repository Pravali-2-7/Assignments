// a) Scoping: let vs var
if (true) {
  let x = 10;
  var y = 20;
}
console.log(y);
try {
  console.log(x);
} catch (error) {
  console.log("x is not defined because let has block scope");
}
const profile = {
  user: {
    details: {
      email: "test@mail.com"
    }
  }
};
console.log(profile?.user?.details?.email);
console.log(profile?.user?.details?.phone);
const student = {
  name: "Sam"
};

console.log(student?.address?.city);
