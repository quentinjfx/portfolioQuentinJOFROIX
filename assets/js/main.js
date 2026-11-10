/* ==========================================================================
   Portfolio de Quentin Jofroix — interactions
   1. Apparition des éléments au défilement
   2. Ombre du header au défilement
   3. Menu mobile
   ========================================================================== */

(function () {
  "use strict";

  /* 1. Apparition au défilement ------------------------------------------ */
  // Décale légèrement l'apparition des éléments d'une même liste (effet cascade)
  document.querySelectorAll("[data-stagger]").forEach(function (list) {
    Array.prototype.forEach.call(list.children, function (child, i) {
      child.setAttribute("data-reveal", "");
      child.style.setProperty("--delay", (i % 3) * 0.12 + "s");
    });
  });

  var animated = document.querySelectorAll("[data-reveal], .title");

  if ("IntersectionObserver" in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: "0px 0px -40px 0px" });
    animated.forEach(function (el) { observer.observe(el); });
  } else {
    animated.forEach(function (el) { el.classList.add("is-visible"); });
  }

  /* 2. Ombre du header ---------------------------------------------------- */
  var header = document.querySelector(".site-header");
  function onScroll() {
    if (header) header.classList.toggle("is-scrolled", window.scrollY > 8);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* 3. Menu mobile -------------------------------------------------------- */
  var toggle = document.querySelector(".nav-toggle");
  if (toggle) {
    function setOpen(open) {
      document.body.classList.toggle("nav-open", open);
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Fermer le menu" : "Ouvrir le menu");
    }
    toggle.addEventListener("click", function () {
      setOpen(!document.body.classList.contains("nav-open"));
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") setOpen(false);
    });
    document.querySelectorAll(".nav a").forEach(function (link) {
      link.addEventListener("click", function () { setOpen(false); });
    });
  }
})();
