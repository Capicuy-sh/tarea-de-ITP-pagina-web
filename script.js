const preguntas = [
    {
        q: "¿Cuál es la valencia principal del Oxígeno?",
        options: ["1", "2", "4"],
        correct: 1 // Es la opción '2'
    },
    {
        q: "¿Qué elemento tiene el estado de oxidación +1 y -1?",
        options: ["Oro", "Helio", "Hidrógeno"],
        correct: 2
    },
    {
        q: "¿Dónde se encuentran los protones en un átomo?",
        options: ["En el núcleo", "En las órbitas", "Fuera del átomo"],
        correct: 0
    }
];

let preguntaActual = 0;

function cargarPregunta() {
    const p = preguntas[preguntaActual];
    document.getElementById("pregunta").innerText = p.q;
    let botonesHtml = "";
    p.options.forEach((opt, index) => {
        botonesHtml += `<button onclick="verificar(${index})" style="margin: 5px;">${opt}</button>`;
    });
    document.getElementById("opciones").innerHTML = botonesHtml;
}

function verificar(indice) {
    const res = document.getElementById("resultado");
    if (indice === preguntas[preguntaActual].correct) {
        res.innerText = "¡Correcto! 🎉";
        res.style.color = "green";
    } else {
        res.innerText = "Inténtalo de nuevo ❌";
        res.style.color = "red";
    }
    
    // Pasar a la siguiente pregunta tras 2 segundos
    setTimeout(() => {
        res.innerText = "";
        preguntaActual = (preguntaActual + 1) % preguntas.length;
        cargarPregunta();
    }, 2000);
}

// Iniciar el quiz al cargar la página
window.onload = cargarPregunta;
