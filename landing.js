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

