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

// Cerrar modales (Botón X)
document.querySelectorAll('.modal-close').forEach(btn => {
    btn.addEventListener('click', () => {
        btn.closest('.intro-modal').classList.remove('active');
    });
});

// Cerrar modales (Tecla ESC)
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        document.querySelectorAll('.intro-modal').forEach(modal => {
            modal.classList.remove('active');
        });
    }
});

  document.querySelectorAll('.pillar-audio-btn').forEach(btn => {
    const audioId = btn.dataset.audio;
    const audioEl = document.getElementById(audioId);

    if (!audioEl) return;

    // Play / pause SOLO de su propio audio
    btn.addEventListener('click', () => {
      if (audioEl.paused) {
        audioEl.play();
        btn.textContent = '⏸';
      } else {
        audioEl.pause();
        btn.textContent = '▶';
      }
    });

    // Cuando termine ese audio, resetea solo su botón
    audioEl.addEventListener('ended', () => {
      btn.textContent = '▶';
    });
  });

const sfxClick = document.getElementById("sfx-click");
function playClick() {
  if (sfxClick) {
    sfxClick.currentTime = 0;
    sfxClick.play().catch(() => {});
  }
}