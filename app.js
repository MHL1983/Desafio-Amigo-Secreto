let amigos = [];
const inputAmigo = document.querySelector("#amigo");
const lista = document.querySelector("#listaAmigos");
const resultado = document.querySelector("#resultado");
const btnReiniciar = document.querySelector("#reiniciar");
const btnSortear = document.querySelector(".button-draw");

function agregarAmigo() {
    const nombre = inputAmigo.value.trim();

    if (!nombre) {
        alert("Por favor, inserte un nombre.");
        return;
    }

    if (amigos.includes(nombre)) {
        alert("Este nombre ya está en la lista.");
        return;
    }

    amigos.push(nombre);
    actualizarLista();
    inputAmigo.value = "";
}

function actualizarLista() {
    lista.innerHTML = "";
    amigos.forEach(amigo => {
        const listItem = document.createElement("li");
        listItem.textContent = amigo;
        lista.appendChild(listItem);
    });
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Debe haber al menos 2 amigos en la lista.");
        return;
    }

    const amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    resultado.innerHTML = `El amigo secreto es: <strong>${amigoSorteado}</strong>`;

    btnSortear.disabled = true;
    btnReiniciar.removeAttribute("disabled");
    btnReiniciar.classList.add("activo");
}

function reiniciarJuego() {
    amigos = [];
    lista.innerHTML = "";
    resultado.innerHTML = "";
    inputAmigo.value = "";

    btnReiniciar.setAttribute("disabled", "true");
    btnReiniciar.classList.remove("activo");
    btnSortear.disabled = false;
}