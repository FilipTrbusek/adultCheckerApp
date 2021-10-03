let adultChecker = (age) => {
  if (age >= 18) {
    let result = "adult";
    return result;
  } else {
    let result = "child";
    return result;
  }
};

let value = adultChecker(25);

if (value === "adult") {
  console.log(`The age check: ${value}`);
  console.log("You are allowed to come in.");
} else {
  console.log(`The age check: ${value}`);
  console.log("You are too young. You can not get in.");
}
