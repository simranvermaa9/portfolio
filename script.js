const revealItems = document.querySelectorAll(".reveal");

const caseStudyLinks = document.querySelectorAll(".project-open, [data-prefetch]");
const warmedCaseStudies = new Set();

function warmCaseStudy(link) {
  const url = new URL(link.href, window.location.href).href;
  if (warmedCaseStudies.has(url)) return;
  warmedCaseStudies.add(url);
  fetch(url, { credentials: "same-origin", cache: "force-cache" }).catch(() => {});
}

caseStudyLinks.forEach((link) => {
  link.addEventListener("pointerenter", () => warmCaseStudy(link), { once: true });
  link.addEventListener("focus", () => warmCaseStudy(link), { once: true });
  link.addEventListener("touchstart", () => warmCaseStudy(link), { once: true, passive: true });
});

const caseTopbar = document.querySelector(".topbar");
const caseJumpNav = document.querySelector(".jump-nav");

if (caseTopbar && caseJumpNav) {
  let lastScrollY = Math.max(0, window.scrollY);
  let accumulatedScroll = 0;
  let scrollDirection = 0;
  let scrollTicking = false;

  function updateCaseNavigation() {
    const currentScrollY = Math.max(0, window.scrollY);
    const delta = currentScrollY - lastScrollY;
    const nextDirection = Math.sign(delta);

    if (nextDirection && nextDirection !== scrollDirection) {
      accumulatedScroll = 0;
      scrollDirection = nextDirection;
    }

    accumulatedScroll += delta;

    if (currentScrollY < 80 || accumulatedScroll < -12) {
      document.body.classList.remove("case-nav-hidden");
      accumulatedScroll = 0;
    } else if (currentScrollY > 120 && accumulatedScroll > 12) {
      document.body.classList.add("case-nav-hidden");
      accumulatedScroll = 0;
    }

    lastScrollY = currentScrollY;
    scrollTicking = false;
  }

  window.addEventListener("scroll", () => {
    if (scrollTicking) return;
    scrollTicking = true;
    window.requestAnimationFrame(updateCaseNavigation);
  }, { passive: true });
}

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries, instance) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("visible");
        instance.unobserve(entry.target);
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -6%" }
  );

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("visible"));
}

const progressBar = document.querySelector(".progress span");

function updateProgress() {
  if (!progressBar) return;
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollable > 0 ? window.scrollY / scrollable : 0;
  progressBar.style.transform = `scaleX(${Math.min(1, Math.max(0, progress))})`;
}

window.addEventListener("scroll", updateProgress, { passive: true });
window.addEventListener("resize", updateProgress);
updateProgress();
