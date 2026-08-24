document.getElementById('year').textContent = new Date().getFullYear();

// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('main-nav');

navToggle.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('is-open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

mainNav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// Carousel
const track = document.getElementById('carouselTrack');
const slides = Array.from(track.children);
const prevBtn = document.getElementById('carouselPrev');
const nextBtn = document.getElementById('carouselNext');
const dotsWrap = document.getElementById('carouselDots');

let current = 0;
let autoplayTimer;

slides.forEach((_, i) => {
  const dot = document.createElement('button');
  dot.setAttribute('aria-label', `Vai all'immagine ${i + 1}`);
  if (i === 0) dot.classList.add('is-active');
  dot.addEventListener('click', () => goTo(i));
  dotsWrap.appendChild(dot);
});

const dots = Array.from(dotsWrap.children);

function goTo(index) {
  current = (index + slides.length) % slides.length;
  track.style.transform = `translateX(-${current * 100}%)`;
  slides.forEach((s, i) => s.classList.toggle('is-active', i === current));
  dots.forEach((d, i) => d.classList.toggle('is-active', i === current));
}

function startAutoplay() {
  stopAutoplay();
  autoplayTimer = setInterval(() => goTo(current + 1), 5000);
}

function stopAutoplay() {
  if (autoplayTimer) clearInterval(autoplayTimer);
}

prevBtn.addEventListener('click', () => { goTo(current - 1); startAutoplay(); });
nextBtn.addEventListener('click', () => { goTo(current + 1); startAutoplay(); });

const carousel = document.getElementById('carousel');
carousel.addEventListener('mouseenter', stopAutoplay);
carousel.addEventListener('mouseleave', startAutoplay);

startAutoplay();
