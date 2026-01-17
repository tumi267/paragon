const images = document.querySelectorAll('.image_left, .image_right, .image_center');

const observerOptions = {
  root: null,          // viewport
  threshold: 0.1,      // trigger when 10% of image is visible
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
          entry.target.classList.add('visible');   // fade in
        } else {
          entry.target.classList.remove('visible'); // fade out
        }
      });
}, observerOptions);

images.forEach(img => observer.observe(img));

const clientLogos = document.querySelectorAll('.clients-track img');
const observerOptions2 = { threshold: 0.1 };
const observer2 = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

clientLogos.forEach(img => observer.observe(img));

const track = document.querySelector('.clients-track');

// Clone all children and append them dynamically
const logos = Array.from(track.children);
logos.forEach(logo => {
  const clone = logo.cloneNode(true);
  track.appendChild(clone);
})
document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});
let lastScrollY = window.scrollY;
const nav = document.querySelector('.nav');

window.addEventListener('scroll', () => {
  const currentScrollY = window.scrollY;

  if (currentScrollY > lastScrollY) {
    // Scrolling down
    nav.classList.add('nav--hidden');
  } else {
    // Scrolling up
    nav.classList.remove('nav--hidden');
  }

  lastScrollY = currentScrollY;
});

const form = document.querySelector('.contact-form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const emailInput = form.email;
  const messageInput = form.message;

  // Clear previous errors
  form.querySelectorAll('.error-message').forEach(span => span.textContent = '');

  let valid = true;

  if (!emailInput.value.includes('@')) {
    emailInput.nextElementSibling.textContent = 'Please enter a valid email address';
    valid = false;
  }

  if (messageInput.value.length < 10) {
    messageInput.nextElementSibling.textContent = 'Message must be at least 10 characters';
    valid = false;
  }

  if (valid) {
    const clientEmail = 'info@client.co.za'; // ← replace
    const subject = encodeURIComponent('New website enquiry');
  const body = encodeURIComponent(
    `From: ${email}\n\nMessage:\n${message}`
  );

  window.location.href = `mailto:${clientEmail}?subject=${subject}&body=${body}`;
    // Demo submission
    messageInput.nextElementSibling.textContent = '';
    emailInput.nextElementSibling.textContent = '';
    const successMsg = document.createElement('span');
    successMsg.className = 'success-message';
    successMsg.textContent = 'This is for demo purposes only';
    form.appendChild(successMsg);
  }
});