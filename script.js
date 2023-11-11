const number1 = document.querySelector(".number1");
const number2 = document.querySelector(".number2");
const result = document.querySelector(".result");
const topNumbers = document.querySelector(".topNumbers");

let topNubersValue;

// add two binary numbers
function addBinary(a, b) {
  let result = "";
  let carry = 0;
  let i = a.length - 1;
  let j = b.length - 1;
  while (i >= 0 || j >= 0) {
    let sum = carry;
    if (i >= 0) sum += a[i--] - "0";
    if (j >= 0) sum += b[j--] - "0";
    result = (sum % 2) + result;
    carry = Math.floor(sum / 2);
  }
  if (carry > 0) result = carry + result;
  return result;
}

// function get two string and return lenght of shorter string
function getShortestString(a, b) {
  if (a.length < b.length) return a.length;
  else return b.length;
}

function checkSumOf(a, b) {
  if ((a + b) % 2 == 0) return "1";
  else return "0";
}

function onChange() {
  topNubersValue = "#";
  let n = getShortestString(number1.value, number2.value);
  for (let i = n - 1; i > 0; i--) {
    console.log(`${i} = ${number1.value[i]}`);
    console.log(`${i} = ${number2.value[i]}`);
    topNubersValue += checkSumOf(number1.value[i], number2.value[i]);
  }
  console.log(topNubersValue);
  result.innerHTML = addBinary(number1.value, number2.value);
}

number1.addEventListener("keyup", () => {
  onChange();
});

number2.addEventListener("keyup", () => {
  onChange();
});
