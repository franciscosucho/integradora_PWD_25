let result = document.getElementById('result'); // Obtiene el elemento input con id 'result'
var key_sound = new Audio('key.mp3');

function calculate(value) {
    key_sound.play();
    if (value === 'clear') {
        result.value = ''; // Limpia el valor del input
    } 
    else if (value === 'calculate') {
        try {
            result.value = eval(result.value); 
        } catch (error) {
            result.value = 'Error: ' + error.message; 
        }
    } 
    else if (value === '%') {
        try {
            result.value = eval(result.value + "/100"); // Calcula el porcentaje dividiendo por 100
        } catch (error) {
            result.value = 'Error: ' + error.message; // Maneja errores
        }
    } 
    //calcula raiz
    else if (value === 'Math.sqrt') {
        try {
            result.value = Math.sqrt(eval(result.value)); 
        } catch (error) {
            result.value = 'Error';
        }
    } 
     //calcula sin
    else if (value === 'Math.sin') {
        try {
            result.value = Math.sin(eval(result.value)); 
        } catch (error) {
            result.value = 'Error';
        }
    }
     //calcula cos
    else if (value === 'Math.cos') {
        try {
            result.value = Math.cos(eval(result.value)); 
        } catch (error) {
            result.value = 'Error';
        }
    }
     //calcula y
    else if (value === 'Math.tan') {
        try {
            result.value = Math.tan(eval(result.value)); 
        } catch (error) {
            result.value = 'Error';
        }
    }
    else if (value === 'Math.log') {
        try {
            result.value = Math.log(eval(result.value)); 
        } catch (error) {
            result.value = 'Error';
        }
    }
    else if (value === '**2') {
        try {
            result.value = eval(result.value + "**2"); // Evalúa el valor actual elevado a la potencia de 2
        } catch (error) {
            result.value = 'Error: ' + error.message; // Maneja errores
        }
    } 
    else if (value === '**3') {
        try {
            result.value = eval(result.value + "**3"); // Evalúa el valor actual elevado a la potencia de 3
        } catch (error) {
            result.value = 'Error: ' + error.message; // Maneja errores
        }
    } 
    else {
        result.value += value; // Añade el valor del botón al input
    }
}


