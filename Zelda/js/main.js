
const isIndex = window.location.pathname.endsWith("index.html") || 
                window.location.pathname === "/" ||
                window.location.pathname.endsWith("Zelda/");

if (isIndex) {
  const music = document.getElementById("botw-theme");

  if (music) {
    music.volume = 0.45;
    music.loop = true;

    const playMusic = () => {
      music.play().catch(() => {

        document.addEventListener("click", () => {
          music.play();
        }, { once: true });
      });
    };

    playMusic();
  }
}


const rutas = {
  1: "./html/intro.html",
  2: "./html/logica.html",
  3: "./html/visual.html",
  4: "./html/sonido.html",
  5: "./html/interaccion.html",
  6: "./html/datos.html",
  7: "./html/conclusion.html"
};

document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("click", () => {
    playClick() 
    const section = card.dataset.section;
    const destino = rutas[section];

    if (!destino) return console.error(`No hay ruta definida para sección ${section}`);
    const music = document.getElementById("botw-theme");
    if (music) music.pause();

    window.location.href = destino;
  });
});

const sfxClick = document.getElementById("sfx-click");
function playClick() {
  if (sfxClick) {
    sfxClick.currentTime = 0;
    sfxClick.play().catch(() => {});
  }
}