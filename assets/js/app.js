let amigos = [];

function agregarAmigo() {
    let amigoIngresado = document.getElementById("amigo").value.trim();
    if (amigoIngresado === '') {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Debes ingresar un nombre',
        });
        return;
    }
    if (amigos.includes(amigoIngresado)) {
        Swal.fire({
            icon: 'warning',
            title: 'Atención',
            text: 'Ese amigo ya fue ingresado',
        });
        return;
    }
    amigos.push(amigoIngresado);
    mostrarAmigo();
    document.getElementById("amigo").value = '';
}

function mostrarAmigo() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = '';
    amigos.forEach(amigo => {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Debes agregar al menos un amigo antes de sortear',
        });
        return;
    }
    let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    Swal.fire({
        icon: 'success',
        title: 'Resultado',
        text: `Tu amigo secreto es ${amigoSorteado}`,
    });
}