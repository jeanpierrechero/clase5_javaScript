function writeInput(txt) {
    span = document.getElementById("texto");
    span.innerHTML = txt;
}

function show(Persona) {
    nombre = Persona.nombre;
    apellido = Persona.apellido;
    alert(nombre, apellido);
}
