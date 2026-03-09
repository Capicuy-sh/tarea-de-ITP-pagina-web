const infoWikipedia = {
    quimica: `
        <h1>Valencia (química)</h1>
        <p>La <b>valencia</b> es el número de electrones que tiene un elemento en su último nivel de energía. Estos electrones son los responsables de la formación de enlaces químicos.</p>
        <p>Desde el punto de vista histórico, la valencia se definía como el número de átomos de hidrógeno que pueden combinarse con un átomo del elemento en cuestión.</p>
        
    `,
    hidrogeno: `
        <h1>Hidrógeno</h1>
        <p>El <b>hidrógeno</b> es el elemento químico de número atómico <b>1</b>. Es el elemento más ligero de la tabla periódica y el más abundante en el universo.</p>
        <p>En condiciones normales es un gas incoloro, inodoro e insípido. Su estado de oxidación común es +1, aunque puede actuar como -1 en los hidruros metálicos.</p>
        

[Image of hydrogen atom structure]

    `
};

// --- LÓGICA DE NAVEGACIÓN ---
function abrirArticulo(tema) {
    document.getElementById('inicio').classList.add('oculto');
    document.getElementById('articulo').classList.remove('oculto');
    document.getElementById('contenido-wiki').innerHTML = infoWikipedia[tema];
}

function volver() {
    document.querySelectorAll('.seccion').forEach(s => s.classList.add('oculto'));
    document.getElementById('inicio').classList.remove('oculto');
}

// --- LÓGICA DEL QUIZ (10 PREGUNTAS) ---
const preguntas = [
    { p: "¿Símbolo del Hidrógeno?", o: ["H", "O", "N"], c: 0 },
    { p: "¿Carga del Electrón?", o: ["Positiva", "Negativa", "Neutra"], c: 1 },
    { p: "¿Valencia del Oxígeno?", o: ["1", "2", "3"], c: 1 },
    { p: "¿Dónde están los protones?", o: ["Núcleo", "Nube", "Fuera"], c: 0 },
    { p: "¿Elemento más ligero?", o: ["Helio", "Litio", "Hidrógeno"], c: 2 },
    { p: "¿Símbolo del Oro?", o: ["Ag", "Au", "Fe"], c: 1 },
    { p: "¿El Helio es metal?", o: ["Sí", "No"], c: 1 },
    { p: "¿Carga del Neutrón?", o: ["+", "-", "Cero"], c: 2 },
    { p: "¿Símbolo de la Plata?", o: ["Pl", "Ag", "Pt"], c: 1 },
    { p: "¿Número atómico del H?", o: ["1", "2", "3"], c: 0 }
];

let actual = 0;
function abrirQuiz() {
    document.getElementById('inicio').classList.add('oculto');
    document.getElementById('quiz').classList.remove('oculto');
    mostrarPregunta();
}

function mostrarPregunta() {
    if(actual >= preguntas.length) {
        document.getElementById('quiz').innerHTML = "<h2>¡Quiz terminado! 🎉</h2><button onclick='location.reload()'>Volver al inicio</button>";
        return;
    }
    let q = preguntas[actual];
    document.getElementById('q-texto').innerText = q.p;
    document.getElementById('q-progreso').innerText = `Pregunta ${actual + 1} de 10`;
    let btnHtml = "";
    q.o.forEach((opt, i) => {
        btnHtml += `<button class="opcion-btn" onclick="check(${i})">${opt}</button>`;
    });
    document.getElementById('q-opciones').innerHTML = btnHtml;
}

function check(i) {
    if(i === preguntas[actual].c) alert("¡Correcto!");
    else alert("Incorrecto ❌");
    actual++;
    mostrarPregunta();
}
