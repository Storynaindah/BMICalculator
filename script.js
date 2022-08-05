function calculateBmi() {
  var height = document.bmiCalculator.height.value;
  var weight = document.bmiCalculator.weight.value;

  if (height > 0 && weight > 0) {
    var finalBmi = weight / ((height * height) / 10000);
    document.bmiCalculator.bmi.value = finalBmi.toFixed(1);

    if (finalBmi < 18.5) {
      document.bmiCalculator.meaning.value = "Underweight";
    }
    if (finalBmi > 18.5 && finalBmi < 25) {
      document.bmiCalculator.meaning.value = "Normalweight";
    }
    if (finalBmi > 25 && finalBmi < 30) {
      document.bmiCalculator.meaning.value = "Overweight";
    }
    if (finalBmi > 30) {
      document.bmiCalculator.meaning.value = "UObesity";
    }
  } else {
    alert("Your data incorrect. Please check!");
  }
}
