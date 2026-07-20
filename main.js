// Scroll-triggered reveal for sections
const io = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach((el) => io.observe(el));

// Mobile nav toggle
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
if (burger && navLinks) {
  burger.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    burger.setAttribute('aria-expanded', String(isOpen));
  });
  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => navLinks.classList.remove('open'));
  });
}

// Contact form — GitHub Pages hosts static files only, so there is no
// server to receive a normal POST. This opens the visitor's email client
// with the message pre-filled. Swap this out for Formspree / Web3Forms /
// your own backend if you want messages to land without opening Mail —
// see README.md for the two-line change that involves.
const form = document.getElementById('contact-form');
const status = document.getElementById('form-status');

if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name || !emailPattern.test(email) || !message) {
      status.textContent = 'Please fill in your name, a valid email, and a short message.';
      status.dataset.state = 'error';
      return;
    }

    const subject = encodeURIComponent(`Project enquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:hello@flowworks.pl?subject=${subject}&body=${body}`;

    status.textContent = 'Opening your email client — send the message to reach us.';
    status.dataset.state = 'ok';
    form.reset();
  });
}
