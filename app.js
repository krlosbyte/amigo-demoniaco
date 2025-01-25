let amigos = [];
console.log(amigos);

function agregarAmigo() {
    let obtenerNombre = document.getElementById('amigo').value;
    if (obtenerNombre == '') {
        alert("Por favor, inserte un nombre.")
    } else{
        amigos.push(obtenerNombre);
        return limpiarForm();
    }
}

function limpiarForm() {
    document.getElementById('amigo').value = '';
}