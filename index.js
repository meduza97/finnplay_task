function testMyString(text, conditions) {
  let stringLength = text.length;

  if (conditions.includes("!empty")) {
    if (stringLength > 0) return true;
    else return false;
  }

  if (conditions.includes("empty")) {
    if (stringLength === 0) return true;
    else return false;
  }

  if (conditions.includes(">=")) {
    let parts = conditions.split(">=");
    let number = parts[1];

    if (stringLength >= number) return true;
    else return false;
  }

  if (conditions.includes("<=")) {
    let parts = conditions.split("<=");
    let number = parts[1];

    if (stringLength <= number) return true;
    else return false;
  }

  if (conditions.includes("=")) {
    let parts = conditions.split("=");
    let number = parts[1];

    if (stringLength === number) return true;
    else return false;
  }

  if (conditions.includes("<")) {
    let parts = conditions.split("<");
    let number = parts[1];

    if (stringLength < number) return true;
    else return false;
  }

  if (conditions.includes(">")) {
    let parts = conditions.split(">");
    let number = parts[1];

    if (stringLength > number) return true;
    else return false;
  }
}

console.log("test nr 1 ", testMyString("some-string", "length<4"));
console.log("test nr 2 ", testMyString("some-string", "length<12"));
console.log("test nr 3 ", testMyString("some-string", "length>12"));
console.log("test nr 4 ", testMyString("some-string", "length>=11"));
console.log("test nr 5 ", testMyString("some-string", "length<=13"));
console.log("test nr 6 ", testMyString("some-string", "length=13"));
console.log("test nr 7 ", testMyString("some-string", "empty"));
console.log("test nr 8 ", testMyString("", "empty"));
console.log("test nr 9 ", testMyString("", "!empty"));
