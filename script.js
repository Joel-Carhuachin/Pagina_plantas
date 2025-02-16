document.addEventListener("DOMContentLoaded", function () {
    cargarComponente("publicidad","publicidad.html");
    cargarComponente("nav", "nav.html");
    cargarComponente("footer", "footer.html");
});

function cargarComponente(idElemento, archivo) {
    fetch(archivo)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error al cargar ${archivo}: ${response.status} ${response.statusText}`);
            }
            return response.text();
        })
        .then(data => {
            document.getElementById(idElemento).innerHTML = data;
        })
        .catch(error => console.error("Fetch error:", error));
}