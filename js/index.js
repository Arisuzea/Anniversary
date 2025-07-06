document.querySelector('.start-btn').addEventListener('click', () => {
  const book = document.querySelector('.book');

  gsap.to(book, {
    duration: 1.2,
    rotationY: 90,
    scale: 0.8,
    ease: "power2.inOut",
    opacity: 0,
    transformOrigin: "center center",
    onComplete: () => {
      window.location.href = "pages/gallery.html";
    }
  });
});
