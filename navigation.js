const gallery = document.querySelector('.gallery');
const prevButton = gallery.querySelector('.gallery-nav-prev');
const nextButton = gallery.querySelector('.gallery-nav-next');

let scrollAmount = 0;

nextButton.addEventListener('click', function() {
  gallery.scrollTo({
    top: 0,
    left: (scrollAmount += 200),
    behavior: 'smooth'
  });
});

prevButton.addEventListener('click', function() {
  gallery.scrollTo({
    top: 0,
    left: (scrollAmount -= 200),
    behavior: 'smooth'
  });
});