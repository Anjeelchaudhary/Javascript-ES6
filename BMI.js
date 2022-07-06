function calc(weight, height) {
    var bmi = weight / (Math.pow(height, 2));
    return console.log("Your BMI is " + Math.round(bmi));
}

calc(65, 1.8);