// ===== MODALES =====
document.querySelectorAll(".intro-card").forEach(card => {
  const id = card.dataset.card;
  const modal = document.getElementById(`modal-${id}`);
  if (!modal) return;

  card.addEventListener("click", () => {
    modal.classList.add("active");
  });
});

document.querySelectorAll(".modal-close").forEach(btn => {
  btn.addEventListener("click", () => {
    const modal = btn.closest(".intro-modal");
    if (modal) modal.classList.remove("active");
  });
});

// Cerrar modal al hacer click fuera del contenido
document.querySelectorAll(".intro-modal").forEach(modal => {
  modal.addEventListener("click", e => {
    if (e.target === modal) {
      modal.classList.remove("active");
    }
  });
});

// ===== TIMELINE =====
const timelineItems = document.querySelectorAll(".timeline-item");
const infoPanel = document.querySelector(".timeline-info-panel");

timelineItems.forEach(item => {
  item.addEventListener("click", () => {
    timelineItems.forEach(i => i.classList.remove("active"));
    item.classList.add("active");
    if (infoPanel) {
      infoPanel.textContent = item.dataset.info || "";
    }
  });
});
