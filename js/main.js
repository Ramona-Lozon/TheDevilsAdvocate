(() => {
const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

// 1. Logo eases left
tl.to("#logo", {
  x: -120,
  duration: 1
});

// 2. Text slides out from behind logo
tl.to("#welcome", {
  x: 80,
  opacity: 1,
  duration: 1
}, "-=0.6");

// 3. Pause briefly
tl.to({}, { duration: 1 });

// 4. Lens flare wipe
tl.to("#wipe", {
  scaleX: 1,
  duration: 0.8,
  ease: "power4.in"
});

// 5. Reveal site and remove intro
tl.set("#intro", { display: "none" });
tl.to("#site", { opacity: 1, duration: 0.4 });
})();

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

