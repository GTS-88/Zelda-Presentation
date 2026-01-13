document.querySelectorAll('.datos-card').forEach(card => {
    card.addEventListener('click', () => {
        playClick() 
        const id = card.getAttribute('data-card');
        if (id) {
            const modal = document.getElementById('modal-' + id);
            if (modal) modal.classList.add('active');
        }
    });
});

document.querySelectorAll('.modal-close').forEach(btn => {
    btn.addEventListener('click', () => {
        btn.closest('.intro-modal').classList.remove('active');
    });
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        document.querySelectorAll('.intro-modal').forEach(modal => {
            modal.classList.remove('active');
        });
    }
});

const sfxClick = document.getElementById("sfx-click");
function playClick() {
  if (sfxClick) {
    sfxClick.currentTime = 0;
    sfxClick.play().catch(() => {});
  }
}