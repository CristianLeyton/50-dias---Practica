let imagenes = document.querySelectorAll(".imagen");

imagenes.forEach((imagen) => {
    imagen.addEventListener("click", () => {
        removeActive();
        imagen.classList.toggle('active');
    })
})

function removeActive() {
    imagenes.forEach((imagen) => {
        imagen.classList.remove('active');
    })
}
