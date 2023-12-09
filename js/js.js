
function calculateCircleCircumference(radius) {
    return 2 * Math.PI * radius;
}
function calculateAndDisplayCircumference() {
    let inputElement = document.getElementById('input');
    let resultElement = document.getElementById('result');

    let radius = parseFloat(inputElement.value);

    if (!isNaN(radius)) {
        let circumference = calculateCircleCircumference(radius);
        resultElement.textContent = circumference.toFixed(2);
    } else {
        resultElement.textContent = 'กรุณากรอกค่าที่ถูกต้อง';
    }
}




function calculateHypotenuse(base, height) {
    let result = Math.sqrt(base ** 2 + height ** 2);
    document.getElementById('show').innerHTML = result.toFixed(3);
}




  function number() {
    let number = prompt('What is your number');
    let grade;

    if (number > 80) {
      grade = 'A';
    } else if (number < 80 && number >= 70) {
      grade = 'B';
    } else if (number < 70 && number >= 60) {
      grade = 'C';
    } else if (number < 60 && number >= 50) {
      grade = 'D';
    } else {
      grade = 'F';
    }
    document.getElementById('number').innerHTML = `คะแนนเกรดของคุณ : ${grade}`;
  }



  function แปลงอุณหภูมิ() {
    const temperatureInput = document.getElementById('temperatureInput').value;
    if (!isNaN(temperatureInput)) {
      const temperatureFahrenheit = (temperatureInput * 9/5) + 32;
      document.getElementById('temperature').innerHTML = `อุณหภูมิในหน่วยฟาเรนไฮต์: ${temperatureFahrenheit.toFixed(2)} °F`;
    } else {
      document.getElementById('temperature').innerHTML = 'กรุณาป้อนอุณหภูมิที่ถูกต้อง';
    }
  }



    function displayDateTime() {
      const thaiOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: false, timeZoneName: 'short' };
      const thaiDateTime = new Date().toLocaleString('th-TH', thaiOptions);
      document.getElementById('dateTime').innerText = `วันและเวลาปัจจุบัน: ${thaiDateTime}`;
    }
    setInterval(displayDateTime, 1000);
    displayDateTime();
