let result = document.getElementById('result'); // Obtiene el elemento input con id 'result'
var key_sound = new Audio('key.mp3'); // Linkenado el archivo .mp3

function calculate(value) {
    key_sound.play(); //Hace sonar un .mp3 cuando se hace click en cualquier boton.
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
            result.value = 'Error'; // Maneja errores
        }
    } 
     //calcula sin
    else if (value === 'Math.sin') {
        try {
            result.value = Math.sin(eval(result.value)); //realiza la operacion de seno
        } catch (error) {
            result.value = 'Error'; // Maneja errores
        }
    }
     //calcula cos
    else if (value === 'Math.cos') {
        try {
            result.value = Math.cos(eval(result.value)); //realiza la operacion de coseno
        } catch (error) {
            result.value = 'Error'; // Maneja errores
        }
    }
     //calcula y
    else if (value === 'Math.tan') {
        try {
            result.value = Math.tan(eval(result.value)); //realiza la operacion de tangente
        } catch (error) {
            result.value = 'Error'; // Maneja errores
        }
    }
    else if (value === 'Math.log') {
        try {
            result.value = Math.log(eval(result.value)); //realiza la operacion de logaritmo
        } catch (error) {
            result.value = 'Error'; // Maneja errores
        }
    }
    else if (value === 'Math.PI') {
        try {
            result.value = Math.PI; //realiza la operacion de logaritmo
        } catch (error) {
            result.value = 'Error'; // Maneja errores
        }
    }else if (value === 'Math.E') {
        try {
            result.value = Math.E; //realiza la operacion de logaritmo
        } catch (error) {
            result.value = 'Error'; // Maneja errores
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
        result.value += value; // Añade el valor total al input
    }
}