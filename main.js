  const carousel = document.querySelector('.testimonial-carousel');
  const nextBtn = document.getElementById('nextBtn');
  const prevBtn = document.getElementById('prevBtn');

  const card = document.querySelector('.testimonial-card');
  const gap = 16; // 1rem gap
  const cardWidth = card.offsetWidth + gap;

  nextBtn.addEventListener('click', () => {
    carousel.scrollBy({ left: cardWidth, behavior: 'smooth' });
  });

  prevBtn.addEventListener('click', () => {
    carousel.scrollBy({ left: -cardWidth, behavior: 'smooth' });
  });