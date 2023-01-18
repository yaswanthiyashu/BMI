function calculatebmi() {
    let height = document.getElementById('height').value
    let weight = document.getElementById('weight').value

    let bmi = (weight/(height*height)*703)

    document.getElementById('heading').innerHTML='your BMI is:'
    document.getElementById('bmi-output').innerHTML= bmi.toFixed(1)

    if(bmi <= 24.9) {
        document.getElementById('message').innerHTML =  'You are underweight'   
    }else if (bmi >= 25 && bmi <= 29.9) {
        document.getElementById('message').innerHTML = 'You are a healthy weight'
    }else {
        document.getElementById('message').innerHTML = 'You are overweight'
    }
}