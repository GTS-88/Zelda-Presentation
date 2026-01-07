document.querySelectorAll('.datos-card').forEach(card => {
    card.addEventListener('click', () => {
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