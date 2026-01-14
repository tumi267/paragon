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