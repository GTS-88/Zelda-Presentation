// === lanzar modales desde tarjetas ===
document.querySelectorAll(".datos-card").forEach(card => {
  const id = card.dataset.card;
  const modal = document.getElementById(`modal-${id}`);
  if (!modal) return;
  card.addEventListener("click", () => modal.classList.add("active"));
});

// === cerrar modales ===
document.querySelectorAll(".modal-close").forEach(btn => {
  btn.addEventListener("click", () =>
    btn.closest(".intro-modal").classList.remove("active")
  );
});

// === cerrar con ESC ===
document.addEventListener("keydown", e => {
  if (e.key === "Escape")
    document.querySelectorAll(".intro-modal.active")
      .forEach(m => m.classList.remove("active"));
});
