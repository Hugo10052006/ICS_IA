// Al hacer clic en una tarjeta, se muestra un mensaje con su descripción.
const tarjetas = document.querySelectorAll(".tarjeta");

tarjetas.forEach(function (tarjeta) {
  tarjeta.addEventListener("click", function () {
    const titulo = tarjeta.querySelector("h3").textContent;
    const descripcion = tarjeta.querySelector("p").textContent;
    alert(titulo + "\n\n" + descripcion);
  });
});