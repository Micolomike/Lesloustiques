window.onload = rotateGallery;

function rotateGallery() {
    const galleryImages = document.querySelectorAll(".gallery");
    let currentImageIndex = 0;
    setInterval(() => {
      // Masquer toutes les images de la galerie
      galleryImages.forEach(image => image.classList.remove("active"));
      // Afficher l'image suivante
      galleryImages[currentImageIndex].classList.add("active");
      // Passer à l'image suivante
      currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
    }, 10000);
  }

