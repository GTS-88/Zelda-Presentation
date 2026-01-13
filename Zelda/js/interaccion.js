const cards = document.querySelectorAll(".logic-card");
const closeBtns = document.querySelectorAll(".modal-close");

cards.forEach(card => {
  card.addEventListener("click", () => {
    playClick() 
    const id = card.dataset.card;
    const modal = document.getElementById(`modal-${id}`);
    if (modal) modal.classList.add("active");
  });
});

closeBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    btn.closest(".logic-modal").classList.remove("active");
  });
});

window.addEventListener("click", (e) => {
  if (e.target.classList.contains("logic-modal")) {
    e.target.classList.remove("active");
  }
});

document.addEventListener("keydown", e => {
  if (e.key === "Escape") {
    const activeModal = document.querySelector(".logic-modal.active");
    if (activeModal) activeModal.classList.remove("active");
  }
});

const sfxClick = document.getElementById("sfx-click");
function playClick() {
  if (sfxClick) {
    sfxClick.currentTime = 0;
    sfxClick.play().catch(() => {});
  }
}