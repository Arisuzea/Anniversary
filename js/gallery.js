document.addEventListener('DOMContentLoaded', () => {
  const polaroids = document.querySelectorAll('.polaroid');
  const placed = [];
  const polaroidWidth = 250;
  const polaroidHeight = 300;
  const padding = 20;
  const maxRetries = 100;

  polaroids.forEach((polaroid, index) => {
    let x, y, tries = 0, overlaps;

    do {
      overlaps = false;

      // Limit the x/y range a little so they don’t go off-screen
      x = Math.floor(Math.random() * (window.innerWidth - polaroidWidth - padding * 2)) + padding;
      y = Math.floor(Math.random() * (window.innerHeight - polaroidHeight - 150)) + padding;

      for (const pos of placed) {
        const dx = Math.abs(x - pos.x);
        const dy = Math.abs(y - pos.y);

        // Consider overlap if too close in both axes
        if (dx < polaroidWidth * 0.7 && dy < polaroidHeight * 0.7) {
          overlaps = true;
          break;
        }
      }

      tries++;
    } while (overlaps && tries < maxRetries);

    placed.push({ x, y });

    const angle = Math.floor(Math.random() * 30 - 15); // -15 to +15 deg
    polaroid.style.left = `${x}px`;
    polaroid.style.top = `${y}px`;
    polaroid.style.setProperty('--angle', `${angle}deg`);
    polaroid.style.animationDelay = `${index * 0.15}s`;
  });
});




const lightbox = document.querySelector('.lightbox');
const zoomImg = document.querySelector('.zoom-polaroid img');
const zoomCaption = document.querySelector('.zoom-polaroid .caption');
const closeBtn = document.querySelector('.close-btn');

document.querySelectorAll('.polaroid').forEach(polaroid => {
  polaroid.addEventListener('click', () => {
    const imgSrc = polaroid.querySelector('img').src;
    const captionText = polaroid.querySelector('.caption').textContent;

    zoomImg.src = imgSrc;
    zoomCaption.textContent = captionText;
    lightbox.classList.remove('hidden');
  });
});

closeBtn.addEventListener('click', () => {
  lightbox.classList.add('hidden');
});
