function ejecutarOpcion() {
    let opcion = document.getElementById("opcion").value;
    let resultadoDiv = document.getElementById("resultado");
    
    resultadoDiv.style.display = "block"; 
    resultadoDiv.innerHTML = ""; // Limpiar contenido previo

    switch(opcion) {
        case "1":
            resultadoDiv.innerHTML = manejarSemaforo();
            break;
        case "2":
            resultadoDiv.innerHTML = manejarDiezNumeros();
            break;
        case "3":
            resultadoDiv.innerHTML = manejarDados();
            break;
        case "4":
            resultadoDiv.innerHTML = manejarRuletaEuropea();
            break;
        default:
            resultadoDiv.innerHTML = "Opción inválida.";
    }
}

function manejarSemaforo() {
    let color = prompt("Introduce el color del semáforo (rojo, amarillo, verde)").toLowerCase();
    let mensajes = {
        "rojo": "STOP",
        "amarillo": "PRECAUCIÓN",
        "verde": "AVANZAR"
    };

    return mensajes[color] || "ERROR";
}

function manejarDiezNumeros() {
    let ascendente = [...Array(10).keys()]
                                .map(n => n + 1)
                                .join(" ");
    let descendente = [...Array(10).keys()]
                                .reverse().map(n => n + 1)
                                .join(" ");
    
    return `Ascendente: ${ascendente}<br>Descendente: ${descendente}`;
}

function manejarDados() {
    let cantidad = parseInt(prompt("¿Cuántos dados deseas tirar? (máximo 10)"));
    if (isNaN(cantidad) || cantidad < 1 || cantidad > 10) {
        return "Cantidad inválida.";
    }

    let resultados = Array.from({ length: cantidad }, () => Math.floor(Math.random() * 6) + 1);
    return `Resultados:<br>${resultados.join("<br>")}`;
}

function manejarRuletaEuropea() {
    let numeroElegido = parseInt(prompt("Ingresa un número entre 0 y 36 para comparar:"));
    if (isNaN(numeroElegido) || numeroElegido < 0 || numeroElegido > 36) return "Número inválido.";

    let resultadoRuleta = Math.floor(Math.random() * 37);
    let rojos = [1, 5, 3, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36];
    
    let colorRuleta = rojos.includes(resultadoRuleta) ? "Rojo" : resultadoRuleta === 0 ? "Verde (Cero)" : "Negro";

    return `Resultado: ${resultadoRuleta} (${colorRuleta})<br>${numeroElegido === resultadoRuleta ? "Coincide." : "No coincide."}`;
}
