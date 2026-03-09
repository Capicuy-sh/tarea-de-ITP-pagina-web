// LOS 20 PÁRRAFOS DE CONTENIDO
const contenidoArticulo = `
    <h1>La Valencia y los Estados de Oxidación</h1>
    <p>1. El átomo es la unidad básica y fundamental de toda la materia que conocemos en el universo.</p>
    <p>2. Todo átomo está compuesto principalmente por tres partículas subatómicas: protones, neutrones y electrones.</p>
    <p>3. Los electrones son las partículas con carga negativa que giran alrededor del núcleo en diferentes niveles de energía u órbitas.</p>
    <p>4. El último nivel de energía de un átomo se conoce en química como la "capa de valencia".</p>
    <p>5. Los electrones que se encuentran específicamente en esta última capa reciben el nombre de "electrones de valencia".</p>
    <p>6. La valencia se define como la capacidad que tiene un átomo para combinarse con otros átomos y formar compuestos.</p>
    <p>7. En términos prácticos, la valencia representa el número de electrones que un átomo necesita ganar, perder o compartir.</p>
    <p>8. Existe un principio químico fundamental llamado la "Regla del Octeto", vital para entender las reacciones químicas.</p>
    <p>9. La regla del octeto establece que los átomos son más estables cuando logran tener exactamente 8 electrones en su capa de valencia.</p>
    <p>10. Para lograr completar este octeto, los átomos interactúan entre sí formando lo que llamamos "enlaces químicos".</p>
    <p>11. Cuando ocurre un enlace iónico, un átomo cede sus electrones de valencia y otro átomo los acepta completamente.</p>
    <p>12. Por otro lado, en un enlace covalente, los átomos deciden "compartir" sus electrones para que ambos alcancen la estabilidad.</p>
    <p>13. Existe un grupo en la tabla periódica llamado "gases nobles", los cuales ya tienen su capa de valencia completa de forma natural.</p>
    <p>14. Debido a que ya tienen su octeto completo, los gases nobles son extremadamente estables y casi no reaccionan con nada.</p>
    <p>15. El hidrógeno es una famosa excepción a la regla del octeto; él alcanza su máxima estabilidad con solo 2 electrones en su capa.</p>
    <p>16. Además de la valencia, existe el "estado de oxidación", que indica el grado de oxidación de un átomo dentro de un compuesto químico.</p>
    <p>17. La gran diferencia matemática es que el estado de oxidación siempre lleva un signo asociado (positivo + o negativo -).</p>
    <p>18. Si durante un enlace un átomo pierde electrones (que son negativos), su estado de oxidación se vuelve positivo.</p>
    <p>19. Por el contrario, si un átomo gana electrones, su estado de oxidación se vuelve negativo.</p>
    <p>20. Comprender perfectamente las valencias y los estados de oxidación es el paso más importante para poder escribir fórmulas químicas correctamente.</p>
`;

// LAS 20 PREGUNTAS (Basadas en los párrafos)
const preguntas = [
    { p: "1. ¿Cuál es la unidad básica de la materia?", o: ["La célula", "El átomo", "La molécula"], c: 1 },
    { p: "2. ¿Qué partículas componen principalmente al átomo?", o: ["Protones, neutrones y electrones", "Solo electrones", "Quarks y fotones"], c: 0 },
    { p: "3. ¿Qué carga tienen los electrones que giran alrededor del núcleo?", o: ["Positiva", "Neutra", "Negativa"], c: 2 },
    { p: "4. ¿Cómo se conoce al último nivel de energía de un átomo?", o: ["Capa de valencia", "Núcleo central", "Capa iónica"], c: 0 },
    { p: "5. ¿Cómo se llaman los electrones de la última capa?", o: ["Electrones libres", "Electrones de valencia", "Electrones nobles"], c: 1 },
    { p: "6. ¿Qué es la valencia?", o: ["El peso del átomo", "Su capacidad para combinarse", "Su color en estado puro"], c: 1 },
    { p: "7. ¿Qué representa la valencia en la práctica?", o: ["Electrones a ganar, perder o compartir", "El número de protones", "La temperatura de fusión"], c: 0 },
    { p: "8. ¿Cómo se llama la regla que explica la estabilidad de los átomos?", o: ["Regla de tres", "Regla de Oro", "Regla del Octeto"], c: 2 },
    { p: "9. Según la Regla del Octeto, ¿cuántos electrones buscan tener los átomos en su última capa?", o: ["2", "8", "10"], c: 1 },
    { p: "10. ¿Qué forman los átomos para lograr completar su octeto?", o: ["Enlaces químicos", "Rayos gamma", "Gases nobles"], c: 0 },
    { p: "11. ¿Qué ocurre con los electrones en un enlace iónico?", o: ["Se comparten", "Se destruyen", "Se ceden y se aceptan"], c: 2 },
    { p: "12. ¿Qué ocurre con los electrones en un enlace covalente?", o: ["Se comparten", "Se ceden", "Se evaporan"], c: 0 },
    { p: "13. ¿Qué grupo de elementos ya tiene su capa de valencia completa naturalmente?", o: ["Metales alcalinos", "Gases nobles", "Halógenos"], c: 1 },
    { p: "14. ¿Por qué los gases nobles casi no reaccionan con otros elementos?", o: ["Porque son muy estables", "Porque son tóxicos", "Porque no tienen electrones"], c: 0 },
    { p: "15. ¿Con cuántos electrones alcanza la estabilidad el Hidrógeno (excepción al octeto)?", o: ["8", "4", "2"], c: 2 },
    { p: "16. ¿Qué indica el estado de oxidación?", o: ["La edad del átomo", "El grado de oxidación en un compuesto", "Su nivel radiactivo"], c: 1 },
    { p: "17. ¿Qué diferencia visual tiene el estado de oxidación frente a la valencia?", o: ["Lleva un signo (+ o -)", "Se escribe en números romanos", "No tiene números"], c: 0 },
    { p: "18. Si un átomo pierde electrones, su estado de oxidación es:", o: ["Neutro", "Positivo", "Negativo"], c: 1 },
    { p: "19. Si un átomo gana electrones, su estado de oxidación se vuelve:", o: ["Positivo", "Negativo", "Cero"], c: 1 },
    { p: "20. ¿Para qué es importante comprender las valencias?", o: ["Para escribir fórmulas químicas", "Para medir la radiación", "Para pesar el átomo"], c: 0 }
];

let actual = 0;
let aciertos = 0;
let fallos = 0;

// NAVEGACIÓN
function abrirArticulo() {
    document.getElementById('inicio').classList.add('oculto');
    document.getElementById('articulo').classList.remove('oculto');
    document.getElementById('contenido-wiki').innerHTML = contenidoArticulo;
}

function volver() {
    document.getElementById('articulo').classList.add('oculto');
    document.getElementById('quiz').classList.add('oculto');
    document.getElementById('inicio').classList.remove('oculto');
    // Reiniciar quiz al volver
    actual = 0; aciertos = 0; fallos = 0;
}

// LÓGICA DEL QUIZ
function abrirQuiz() {
    document.getElementById('inicio').classList.add('oculto');
    document.getElementById('quiz').classList.remove('oculto');
    actual = 0; aciertos = 0; fallos = 0;
    mostrarPregunta();
}

function mostrarPregunta() {
    // Si ya no hay más preguntas, mostrar resultados
    if(actual >= preguntas.length) {
        document.getElementById('quiz').innerHTML = `
            <div class="quiz-box" style="text-align: center;">
                <h2>¡Quiz Terminado! 🎉</h2>
                <p style="font-size: 1.5rem; margin: 20px 0;">
                    Respuestas Correctas: <strong style="color: #10b981;">${aciertos}</strong><br>
                    Respuestas Incorrectas: <strong style="color: #ef4444;">${fallos}</strong>
                </p>
                <button class="btn-quiz" onclick="location.reload()">Volver a empezar</button>
            </div>
        `;
        return;
    }

    const q = preguntas[actual];
    document.getElementById('q-progreso').innerText = `Pregunta ${actual + 1} de 20`;
    document.getElementById('q-texto').innerText = q.p;
    
    let btnHtml = "";
    q.o.forEach((opt, i) => {
        btnHtml += `<button class="opcion-btn" id="opc-${i}" onclick="verificar(${i})">${opt}</button>`;
    });
    
    document.getElementById('q-opciones').innerHTML = btnHtml;
    
    // Ocultar feedback y botón de siguiente
    document.getElementById('q-feedback').classList.add('oculto');
    document.getElementById('btn-siguiente').classList.add('oculto');
}

function verificar(indiceElegido) {
    const q = preguntas[actual];
    const feedback = document.getElementById('q-feedback');
    const botones = document.querySelectorAll('.opcion-btn');
    
    // Deshabilitar todos los botones para que no se pueda responder dos veces
    botones.forEach(btn => btn.disabled = true);

    if(indiceElegido === q.c) {
        aciertos++;
        feedback.innerText = "¡Correcto! ✅";
        feedback.className = "feedback-correcto";
        document.getElementById(`opc-${indiceElegido}`).style.borderColor = "#10b981";
        document.getElementById(`opc-${indiceElegido}`).style.backgroundColor = "#d1fae5";
    } else {
        fallos++;
        feedback.innerText = `¡Incorrecto! ❌ La respuesta correcta era: "${q.o[q.c]}"`;
        feedback.className = "feedback-incorrecto";
        document.getElementById(`opc-${indiceElegido}`).style.borderColor = "#ef4444";
        document.getElementById(`opc-${indiceElegido}`).style.backgroundColor = "#fee2e2";
    }

    // Mostrar feedback y botón para avanzar
    feedback.classList.remove('oculto');
    document.getElementById('btn-siguiente').classList.remove('oculto');
}

function siguientePregunta() {
    actual++;
    mostrarPregunta();
}
