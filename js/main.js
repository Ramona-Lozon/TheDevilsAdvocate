//lightbox
(() => {
const lightBox = document.querySelector("#lightbox");
const lightBoxTrigger = document.querySelector("#hamburger");
const closeBtn = document.querySelectorAll('#close-button, .lightboxLink');

function openLightbox() {
  console.log('open lightbox')
  lightBox.style.display = 'flex';
}

function closeLightbox() {
  console.log('close lightbox')
  lightBox.style.display = 'none';
}

lightBoxTrigger.addEventListener('click', openLightbox);
closeBtn.forEach(Btn => {
Btn.addEventListener('click', closeLightbox);
});

})();

