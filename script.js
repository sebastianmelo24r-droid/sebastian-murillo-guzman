// EVENTO 1: CLICK

const boton = document.getElementById("boton");

boton.addEventListener("click", function() {
    alert("¡Hola! Gracias por visitar mi página.");
});


// EVENTO 2: MOUSEOVER

const titulo = document.getElementById("titulo");

titulo.addEventListener("mouseover", function() {
    titulo.style.color = "#00c2a8";
});


// EVENTO 3: MOUSEOUT

titulo.addEventListener("mouseout", function() {
    titulo.style.color = "#111827";
});


// EVENTO 4: INPUT

const nombre = document.getElementById("nombre");

nombre.addEventListener("input", function() {
    console.log("El usuario está escribiendo: " + nombre.value);
});


// EVENTO 5: SUBMIT

const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(evento) {
    evento.preventDefault();

    alert("¡Formulario enviado correctamente!");
});
