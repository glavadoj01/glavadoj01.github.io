function semaforo() {
    let color = prompt("¿En qué color está el semáforo? (rojo, amarillo, verde)").toLowerCase();
    switch(color) {
        case "rojo":
            alert("STOP");
            break;
        case "amarillo":
            alert("PRECAUCIÓN");
            break;
        case "verde":
            alert("AVANZAR");
            break;
        default:
            alert("ERROR");
            break;
    }
}

function diezNumeros() {
    let ascendente = "";
    let descendente = "";
    for(let i = 1; i <= 10; i++) {
        ascendente += i + " ";
    }
    for(let i = 10; i >= 1; i--) {
        descendente += i + " ";
    }
    alert("Ascendente: " + ascendente + "\nDescendente: " + descendente);
}

function dados() {
    let cantidad = parseInt(prompt("¿Cuántos dados deseas tirar? (máximo 10)"));
    if (isNaN(cantidad) || cantidad < 1 || cantidad > 10) {
        alert("Cantidad inválida");
        return;
    }
    
    let resultado = "";
    for(let i = 0; i < cantidad; i++) {
        resultado += "Dado " + (i + 1) + ": " + (Math.floor(Math.random() * 6) + 1) + "\n";
    }
    alert(resultado);
}

function ruleta() {
    alert("Bienvenido a la ruleta");
    let numero = parseInt(prompt("¿Qué número deseas jugar? (0-37)"));
    if (isNaN(numero) || numero < 0 || numero > 37) {
        alert("Número inválido");
        return;
    }
    
    let resultado = Math.floor(Math.random() * 38);
    let color;    
    switch(resultado) {
        case 1, 5, 3, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36:
            color = "Rojo";
            break;
        default:
            color = "Negro";
            break;        
    }

    if (numero === resultado) {
        alert("¡Felicidades! Ganaste el número " + resultado + " y el color " + color);
    } else {
        alert("Perdiste. El número fue " + resultado + " y el color " + color);
    }
}