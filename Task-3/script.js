const celsius_input = document.getElementById("Celsius");
const fahrenheit_input = document.getElementById("Fahrenheit");


function ConvertTemp() {
  
  const cv = event.target.value;

  switch (event.target.name) {
    case "Celsius":

      fahrenheit_input.value = cv * (1.8) + 32;
      break;
    case "Fahrenheit":

      celsius_input.value = (cv - 32) / (1.8);
      break;

    default:
      break;
  }
}