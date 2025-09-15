const faders = document.querySelectorAll(".fade-in");

const appearOptions = {
  threshold: 0.2,
};

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("show");
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Pesan berhasil dikirim! Terima kasih sudah menghubungi saya 🙌");
  this.reset();
});
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const navOverlay = document.getElementById('nav-overlay');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  navOverlay.classList.toggle('active');
});

document.querySelectorAll('#nav-menu a').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
    navOverlay.classList.remove('active');
  });
});

navOverlay.addEventListener('click', () => {
  navMenu.classList.remove('active');
  navOverlay.classList.remove('active');
});