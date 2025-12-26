const rutas = {
  1: "./html/intro.html",
  2: "./html/logica.html",
  3: "./html/visual.html",
  4: "./html/sonido.html",
  5: "./html/interaccion.html",
  6: "./html/datos.html",
  7: "./html/conclusion.html"
};

// Detectamos click en cada card
document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("click", () => {
    const section = card.dataset.section;
    const destino = rutas[section];

    if (!destino) {
      console.error(`No hay ruta definida para la sección ${section}`);
      return;
    }

    console.log(`Accediendo a sección ${section}: ${destino}`);
    window.location.href = destino;
  });
});