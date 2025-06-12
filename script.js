document.addEventListener('DOMContentLoaded', () => {
  const surpriseBtn = document.getElementById('surpriseBtn');
  const mainContent = document.getElementById('mainContent');
  const overlay = document.getElementById('surpriseOverlay');
  const music = document.getElementById('bgMusic');

  surpriseBtn.addEventListener('click', () => {
    // Blur background
    mainContent.classList.add('blur');

    // Show overlay
    overlay.classList.remove('hidden');
    overlay.classList.add('active');

    // Play music
    music.play();

    // Trigger firework effect
    const firework = document.querySelector('.fireworks');
    for (let i = 0; i < 3; i++) {
      setTimeout(() => {
        firework.classList.remove('fire');
        void firework.offsetWidth; // reset animation
        firework.classList.add('fire');
      }, i * 400);
    }
  });
});
