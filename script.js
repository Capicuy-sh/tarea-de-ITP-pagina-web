// CONTENIDO DEL ARTÍCULO (QUÍMICA)
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

// PREGUNTAS DEL QUIZ
const preguntas = [
    { p: "1. ¿Cuál es la unidad básica de la materia?", o: ["La célula", "El átomo", "La molécula"], c: 1 },
    { p: "2. ¿Qué partículas componen principalmente al átomo?", o: ["Protones, neutrones y electrones", "Solo electrones", "Quarks y fotones"], c: 0 },
    { p: "3. ¿Qué carga tienen los electrones?", o: ["Positiva", "Neutra", "Negativa"], c: 2 },
    { p: "4. ¿Cómo se llama el último nivel de energía de un átomo?", o: ["Capa de valencia", "Núcleo", "Capa iónica"], c: 0 },
    { p: "5. ¿Cómo se llaman los electrones de la última capa?", o: ["Electrones de valencia", "Electrones libres", "Electrones nobles"], c: 0 },
    { p: "6. ¿Qué es la valencia?", o: ["El peso", "Capacidad para combinarse", "Su color"], c: 1 },
    { p: "7. ¿Qué representa la valencia en la práctica?", o: ["Electrones a ganar/perder", "Número de protones", "Punto de fusión"], c: 0 },
    { p: "8. ¿Qué regla explica la estabilidad con 8 electrones?", o: ["Regla de tres", "Regla de Oro", "Regla del Octeto"], c: 2 },
    { p: "9. ¿Cuántos electrones buscan los átomos en su última capa?", o: ["2", "8", "10"], c: 1 },
    { p: "10. ¿Qué forman los átomos para completar su octeto?", o: ["Enlaces químicos", "Rayos X", "Ácidos"], c: 0 },
    { p: "11. ¿Qué ocurre en un enlace iónico?", o: ["Se comparten", "Se ceden y aceptan", "Se evaporan"], c: 1 },
    { p: "12. ¿Qué ocurre en un enlace covalente?", o: ["Se comparten", "Se ceden", "Se destruyen"], c: 0 },
    { p: "13. ¿Qué grupo tiene la capa de valencia completa?", o: ["Metales", "Gases nobles", "Halógenos"], c: 1 },
    { p: "14. ¿Por qué los gases nobles casi no reaccionan?", o: ["Son estables", "Son tóxicos", "No tienen masa"], c: 0 },
    { p: "15. ¿Con cuántos electrones es estable el Hidrógeno?", o: ["8", "4", "2"], c: 2 },
    { p: "16. ¿Qué indica el estado de oxidación?", o: ["Grado de oxidación", "Edad del átomo", "Nivel de brillo"], c: 0 },
    { p: "17. ¿Qué diferencia visual tiene el estado de oxidación?", o: ["Lleva un signo (+ o -)", "Es un dibujo", "No tiene números"], c: 0 },
    { p: "18. Si un átomo pierde electrones, su estado es:", o: ["Neutro", "Positivo", "Negativo"], c: 1 },
    { p: "19. Si un átomo gana electrones, su estado es:", o: ["Positivo", "Negativo", "Cero"], c: 1 },
    { p: "20. ¿Para qué sirven las valencias?", o: ["Escribir fórmulas químicas", "Medir calor", "Ver el color"], c: 0 }
];

let actual = 0, aciertos = 0, fallos = 0;

function abrirArticulo() {
    document.getElementById('inicio').classList.add('oculto');
    document.getElementById('articulo').classList.remove('oculto');
    document.getElementById('contenido-wiki').innerHTML = contenidoArticulo;
}

function abrirQuiz() {
    document.getElementById('inicio').classList.add('oculto');
    document.getElementById('quiz').classList.remove('oculto');
    actual = 0; aciertos = 0; fallos = 0;
    mostrarPregunta();
}

function abrirFuentes() {
    document.getElementById('inicio').classList.add('oculto');
    document.getElementById('fuentes').classList.remove('oculto');
}

function volver() {
    document.getElementById('articulo').classList.add('oculto');
    document.getElementById('quiz').classList.add('oculto');
    document.getElementById('fuentes').classList.add('oculto');
    document.getElementById('inicio').classList.remove('oculto');
}

function mostrarPregunta() {
    if(actual >= preguntas.length) {
        document.getElementById('quiz').innerHTML = `
            <div class="quiz-box" style="text-align: center;">
                <h2>¡Quiz Terminado! 🎉</h2>
                <p>Aciertos: <strong style="color: #10b981;">${aciertos}</strong><br>
                Fallos: <strong style="color: #ef4444;">${fallos}</strong></p>
                <button class="btn-quiz" onclick="location.reload()">Volver a empezar</button>
            </div>`;
        return;
    }
    const q = preguntas[actual];
    document.getElementById('q-progreso').innerText = `Pregunta ${actual + 1} de 20`;
    document.getElementById('q-texto').innerText = q.p;
    let btnHtml = "";
    q.o.forEach((opt, i) => { btnHtml += `<button class="opcion-btn" id="opc-${i}" onclick="verificar(${i})">${opt}</button>`; });
    document.getElementById('q-opciones').innerHTML = btnHtml;
    document.getElementById('q-feedback').classList.add('oculto');
    document.getElementById('btn-siguiente').classList.add('oculto');
}

function verificar(indice) {
    const q = preguntas[actual];
    const feedback = document.getElementById('q-feedback');
    const botones = document.querySelectorAll('.opcion-btn');
    botones.forEach(b => b.disabled = true);
    if(indice === q.c) {
        aciertos++;
        feedback.innerText = "¡Correcto! ✅";
        feedback.className = "feedback-correcto";
    } else {
        fallos++;
        feedback.innerText = `¡Incorrecto! ❌ Era: "${q.o[q.c]}"`;
        feedback.className = "feedback-incorrecto";
    }
    feedback.classList.remove('oculto');
    document.getElementById('btn-siguiente').classList.remove('oculto');
}

function siguientePregunta() {
    actual++;
    mostrarPregunta();
}
