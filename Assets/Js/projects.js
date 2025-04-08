// Modal interaction
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', () => {
      const projectId = card.dataset.project;
      const modal = document.getElementById(`${projectId}-modal`);
      if (modal) modal.classList.add('active');
    });
  });
  
  document.querySelectorAll('.close').forEach(button => {
    button.addEventListener('click', () => {
      button.closest('.project-modal').classList.remove('active');
    });
  });
  
  document.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
      document.querySelectorAll('.project-modal.active').forEach(modal => {
        modal.classList.remove('active');
      });
    }
  });
  