const sfxClick = document.getElementById("sfx-click");

function playClick() {
  if (!sfxClick) return;
  sfxClick.currentTime = 0;
  sfxClick.play().catch(() => {
  });
}

document.querySelectorAll(".datos-card").forEach(card => {
  const id = card.dataset.card;               
  if (!id) return;                            

  const modal = document.getElementById(`modal-${id}`);
  if (!modal) return;

  card.addEventListener("click", () => {
    modal.classList.add("active");            
    playClick();                              
  });
});

document.querySelectorAll(".modal-close").forEach(btn => {
  btn.addEventListener("click", () => {
    const modal = btn.closest(".intro-modal");
    if (modal) {
      modal.classList.remove("active");
      playClick();                           
    }
  });
});


document.querySelectorAll(".intro-modal").forEach(modal => {
  modal.addEventListener("click", e => {
    if (e.target === modal) {
      modal.classList.remove("active");
      playClick();
    }
  });
});

document.addEventListener("keydown", e => {
  if (e.key === "Escape") {
    document
      .querySelectorAll(".intro-modal.active")
      .forEach(m => m.classList.remove("active"));
    playClick();
  }
});