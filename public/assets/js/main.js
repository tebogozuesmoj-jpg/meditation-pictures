// main.js (public/assets/js/main.js)
// mobile nav toggle
document.addEventListener('DOMContentLoaded', function () {
  const navToggle = document.getElementById('navToggle');
  const mobileNav = document.getElementById('mobileNav');

  navToggle?.addEventListener('click', () => {
    mobileNav.classList.toggle('hidden');
  });

  // Smooth scroll for anchors
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // hide mobile nav once clicked
        if (!mobileNav.classList.contains('hidden')) {
          mobileNav.classList.add('hidden');
        }
      }
    });
  });
});
