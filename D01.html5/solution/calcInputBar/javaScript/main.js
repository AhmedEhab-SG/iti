function performCalculation(operation) {
  const number1 = parseFloat(document.getElementById("num1").value) || 0;
  const number2 = parseFloat(document.getElementById("num2").value) || 0;
  const number3 = parseFloat(document.getElementById("num3").value) || 0;
  const number4 = parseFloat(document.getElementById("num4").value) || 0;

  let result;

  if (operation === "sum") {
    result = number1 + number2;
    document.getElementById("sumResult").textContent = result;
  } else if (operation === "multiply") {
    result = number3 * number4;
    document.getElementById("multiplyResult").textContent = result;
  }
}
