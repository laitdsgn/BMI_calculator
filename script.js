const button = document.getElementById("calculate");

button.addEventListener('click', function() {

    let heightCM = document.getElementById("height").value
    let weight = document.getElementById("weight").value
    const cmToMeters = 0.01;
    let heightM = heightCM * cmToMeters;
    let result = document.getElementById("result");

    let BMI =  (weight / (heightM * heightM)).toFixed(1);



    if (isNaN(BMI)) {
        result.style.display = "block";
        result.innerText = "ENTER YOUR VALUES!"
    } else if (weight <= 0 || heightCM <= 0) {
        result.style.display = "block";
        result.innerText = "VALUES CANT BE NEGATIVE!"
    } else if (BMI <= 18.4) {
        result.style.display = "block";
        result.classList.remove()
        result.classList.add("underweight");
        result.innerText = `YOUR BMI IS: ${BMI}, THAT MEANS UNDERWEIGHT`
    } else if (BMI >= 18.5 && BMI <= 24.9) {
        result.style.display = "block";
        result.classList.remove("underweight")
        result.classList.remove("overweight")
        result.classList.remove("obese")
        result.classList.add("proper");
         result.innerText = `YOUR BMI IS: ${BMI}, THAT MEANS PROPER WEIGHT`
    } else if (BMI >= 25 &&  BMI <= 29.9) {
        result.style.display = "block";
        result.classList.remove("underweight")
        result.classList.remove("proper")
        result.classList.remove("obese")
        result.classList.add("overweight");
        result.innerText = `YOUR BMI IS: ${BMI}, THAT MEANS OVERWEIGHT`
    } else if (BMI >= 30 || BMI > 40) {
        result.style.display = "block";
        result.classList.remove("underweight")
        result.classList.remove("proper")
        result.classList.remove("overweight")
        result.classList.add("obese");
        result.innerText = `YOUR BMI IS: ${BMI}, THAT MEANS OBESE`
    } else {
        result.style.display = "block";
        result.innerText = "ERROR OCCURED! INPUT PROPER VALUES!"
    }



});