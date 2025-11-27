const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question("Enter number of seconds: ", (input) => {
  let seconds = Number(input);
  const timer = setInterval(() => {
    console.log(seconds);
    seconds--;
    if (seconds < 0) {
      clearInterval(timer);
      console.log("Countdown Complete!");
      rl.close();
    }
  }, 1000);
  setTimeout(() => {
    process.stdin.on("data", (key) => {
      if (key.toString().trim().toLowerCase() === "s") {
        clearInterval(timer);
        console.log("Countdown Stopped by User!");
        rl.close();
        process.exit();
      }
    });
  }, 500);
});
