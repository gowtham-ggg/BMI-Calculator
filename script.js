document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("button");
    button.addEventListener("click", () => {
        const height = parseFloat(document.getElementById("height").value);
        const weight = parseFloat(document.getElementById("weight").value);
        const display = document.getElementById("display");
        const text = document.getElementById("text");

        // Check for missing input values
        if (isNaN(height) && isNaN(weight)) {
            display.value = "Please enter valid height and weight";
            text.innerHTML = "";
            return;
        } else if (isNaN(height)) {
            display.value = "Please enter height";
            text.innerHTML = "";
            return;
        } else if (isNaN(weight)) {
            display.value = "Please enter weight";
            text.innerHTML = "";
            return;
        }

        const heightInMeter = height / 100;
        const bmi = (weight / (heightInMeter ** 2)).toFixed(2);

        // Display the calculated BMI
        display.value = bmi;

        // Determine weight condition based on BMI
        if (bmi < 18.5) {
            text.innerHTML = "Weight Condition: Underweight";
            text.style.color ="red";
        } else if (bmi >= 18.5 && bmi < 24.9) {
            text.innerHTML = "Weight Condition: Normal weight";
            text.style.color ="red";
        } else if (bmi >= 25 && bmi < 29.9) {
            text.innerHTML = "Weight Condition: Overweight";
            text.style.color ="red";
        } else {
            text.innerHTML = "Weight Condition: Obesity";
            text.style.color ="red";
        }
    });
});
