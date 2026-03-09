// Datos del Quiz (10 preguntas)
const bancoPreguntas = [
    { p: "¿Cuál es el símbolo del Hidrógeno?", o: ["H", "He", "Hi"], c: 0 },
    { p: "Valencia del Oxígeno:", o: ["1", "2", "3"], c: 1 },
    { p: "Carga del Protón:", o: ["Negativa", "Neutra", "Positiva"], c: 2 },
    { p: "¿Qué gas es vital para respirar?", o: ["Nitrógeno", "Oxígeno", "Argón"], c: 1 },
    { p: "El centro del átomo es el:", o: ["Núcleo", "Electrón", "Vacío"], c: 0 },
    { p: "Estado de oxidación del Sodio (Na):", o: ["-1", "+1", "+2"], c: 1 },
    { p: "Partícula con carga negativa:", o: ["Neutrón", "Protón", "Electrón"], c: 2 },
    { p: "¿El Helio es un gas noble?", o: ["Sí", "No", "A veces"], c: 0 },
    { p: "Símbolo del Oro:", o: ["Or", "Au", "Ag"], c: 1 },
    { p: "¿Cuántos electrones tiene el Hidrógeno?", o: ["0", "1", "2"], c: 1 }
];

let indiceActual = 0;
let puntaje = 0;

// Navegación
function irAInicio() {
    document.querySelectorAll('.pantalla').forEach(p => p.classList.add('oculto'));
    document.getElementById('vista-inicio').classList.remove('oculto');
}

function mostrarInfo(tema) {
    document.getElementById('vista-inicio').classList.add('oculto');
    const info = document.getElementById('vista-info');
    info.classList.remove('oculto');
    
    const contenido = document.getElementById('contenido-detalle');
    if(tema === 'quimica') {
        contenido.innerHTML = `<h1>Tabla Periódica</h1><p>Aprende sobre valencias...</p><img src="https://via.placeholder.com/400x200" alt="Quimica">`;
    } else {
        contenido.innerHTML = `<h1>Átomos</h1><p>La base de la materia...</p><img src="https://via.placeholder.com/400x200" alt="Fisica">`;
    }
}

function irAlQuiz() {
    document.getElementById('vista-inicio').classList.add('oculto');
    document.getElementById('vista-quiz').classList.remove('oculto');
    cargarPregunta();
}

function cargarPregunta() {
    if (indiceActual >= bancoPreguntas.length) {
        finalizarQuiz();
        return;
    }

    const data = bancoPreguntas[indiceActual];
    document.getElementById('pregunta-texto').innerText = data.p;
    document.getElementById('barra').style.width = `${(indiceActual / 10) * 100}%`;
    
    let html = "";
    data.o.forEach((opt, i) => {
        html += `<button class="opcion-btn" onclick="verificarRespuesta(${i})">${opt}</button>`;
    });
    document.getElementById('opciones-lista').innerHTML = html;
}

function verificarRespuesta(idx) {
    if(idx === bancoPreguntas[indiceActual].c) puntaje++;
    indiceActual++;
    cargarPregunta();
}

function finalizarQuiz() {
    document.getElementById('vista-quiz').innerHTML = `
        <div class="quiz-card">
            <h2>¡Completado!</h2>
            <p>Tu puntaje: ${puntaje} / 10</p>
            <button class="btn-principal" onclick="location.reload()">Reiniciar Todo</button>
        </div>
    `;
}
