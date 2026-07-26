document.addEventListener("DOMContentLoaded", () => {
  const overlay = document.createElement("div");
  overlay.className = "lightbox";
  overlay.innerHTML = '<img class="lightbox__image" alt="" />';
  document.body.appendChild(overlay);

  const lightboxImage = overlay.querySelector(".lightbox__image");

  const zoomableImages = document.querySelectorAll(
    ".project-gallery__image, .project-annotation__image",
  );

  zoomableImages.forEach((img) => {
    img.classList.add("zoomable-image");
    img.addEventListener("click", () => {
      lightboxImage.src = img.src;
      lightboxImage.alt = img.alt;
      overlay.classList.add("lightbox--open");
    });
  });

  lightboxImage.addEventListener("click", (event) => {
    event.stopPropagation();
  });

  overlay.addEventListener("click", () => {
    overlay.classList.remove("lightbox--open");
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      overlay.classList.remove("lightbox--open");
    }
  });
});
