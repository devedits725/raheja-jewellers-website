function scrollToCatalogue() {
  document.getElementById("catalogue").scrollIntoView({
    behavior: "smooth"
  });
}

/* Image Popup */
const popup = document.getElementById("popup");
const popupImg = document.getElementById("popupImg");
const closePopup = document.getElementById("closePopup");

document.querySelectorAll(".item img").forEach(img => {
  img.addEventListener("click", () => {
    popup.style.display = "flex";
    popupImg.src = img.src;
  });
});

closePopup.onclick = () => popup.style.display = "none";

/* Back to Top */
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  backToTop.style.display = window.scrollY > 300 ? "block" : "none";
});

backToTop.onclick = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

/* Scroll Animations */
const animatedElements = document.querySelectorAll(".animate");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.2 });

animatedElements.forEach(el => observer.observe(el));