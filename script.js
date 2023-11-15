
function som() {
    var num1 = parseFloat(document.getElementById('txtn1').value);
    var num2 = parseFloat(document.getElementById('txtn2').value);
    
    if (!isNaN(num1) && !isNaN(num2)) {
        document.getElementById('res').value = num1 + num2;
    } else {
        alert('Por favor, insira números válidos.');
    }
}

function sub() {
    var num1 = parseFloat(document.getElementById('txtn1').value);
    var num2 = parseFloat(document.getElementById('txtn2').value);
    
    if (!isNaN(num1) && !isNaN(num2)) {
        document.getElementById('res').value = num1 - num2;
    } else {
        alert('Por favor, insira números válidos.');
    }
}

function mul() {
    var num1 = parseFloat(document.getElementById('txtn1').value);
    var num2 = parseFloat(document.getElementById('txtn2').value);
    
    if (!isNaN(num1) && !isNaN(num2)) {
        document.getElementById('res').value = num1 * num2;
    } else {
        alert('Por favor, insira números válidos.');
    }
}

function div() {
    var num1 = parseFloat(document.getElementById('txtn1').value);
    var num2 = parseFloat(document.getElementById('txtn2').value);
    
    if (!isNaN(num1) && !isNaN(num2) && num2 !== 0) {
        document.getElementById('res').value = num1 / num2;
    } else {
        alert('Por favor, insira números válidos e certifique-se de que o segundo número não seja zero.');
    }
}
