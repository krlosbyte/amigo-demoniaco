let amigos = [];
console.log(amigos);

function agregarAmigo() {
    let obtenerNombre = document.getElementById('amigo').value;
    if (obtenerNombre == '') {
        alert("Por favor, inserte un nombre.")
    } else{
        amigos.push(obtenerNombre);
        limpiarForm();
        mostrarNombre();
    }
}

function limpiarForm() {
    document.getElementById('amigo').value = ''; 
}

//En esta funcion use IA para orientarme
function mostrarNombre() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    for (let i = 0; i < amigos.length; i++) {
      let nuevoAmigo = document.createElement("li");
      nuevoAmigo.textContent = amigos[i];
      lista.appendChild(nuevoAmigo);
    }
  }

  function seleccionarAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos agregados");
    } else{
        let elegirAmigo = Math.floor(Math.random() * amigos.length);
        let random = document.getElementById("resultado");
        random.innerHTML = `<li>${amigos[elegirAmigo]}</li>`;
    }
  }