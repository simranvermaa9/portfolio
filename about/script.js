const revealItems = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries, instance) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("visible");
      instance.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -6%" });

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("visible"));
}

const progressBar = document.querySelector(".progress span");
let lastScrollY = Math.max(0, window.scrollY);
let ticking = false;

function updatePageChrome() {
  const currentScrollY = Math.max(0, window.scrollY);
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollable > 0 ? currentScrollY / scrollable : 0;

  if (progressBar) progressBar.style.transform = "scaleX(" + Math.min(1, Math.max(0, progress)) + ")";

  if (currentScrollY < 90 || currentScrollY < lastScrollY - 10) {
    document.body.classList.remove("nav-hidden");
  } else if (currentScrollY > lastScrollY + 10 && currentScrollY > 150) {
    document.body.classList.add("nav-hidden");
  }

  lastScrollY = currentScrollY;
  ticking = false;
}

function scheduleChromeUpdate() {
  if (ticking) return;
  ticking = true;
  window.requestAnimationFrame(updatePageChrome);
}

window.addEventListener("scroll", scheduleChromeUpdate, { passive: true });
window.addEventListener("resize", scheduleChromeUpdate);
updatePageChrome();
