/* ════════════════════════════════════════════════════════════
   Tiny, dependency-free interactions:
     1. Typing animation in the hero
     2. Scroll-reveal for .reveal elements
     3. Light/dark theme toggle (remembers your choice)
   Everything respects prefers-reduced-motion.
   ════════════════════════════════════════════════════════════ */

(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ── 1. Typing animation ─────────────────────────────────── */
  function initTyping() {
    var el = document.getElementById("typed");
    if (!el) return;

    // Phrases come from _config.yml (author.typed), injected below.
    var phrases = window.__TYPED_PHRASES__ || ["learning in public."];
    if (!phrases.length) return;

    if (reduceMotion) {            // no animation — just show the first phrase
      el.textContent = phrases[0];
      var caret = document.querySelector(".caret");
      if (caret) caret.style.display = "none";
      return;
    }

    var pi = 0, ci = 0, deleting = false;

    function tick() {
      var phrase = phrases[pi];
      if (!deleting) {
        ci++;
        el.textContent = phrase.slice(0, ci);
        if (ci === phrase.length) {        // finished typing — hold, then delete
          deleting = true;
          return setTimeout(tick, 1900);
        }
        return setTimeout(tick, 55 + Math.random() * 45);
      } else {
        ci--;
        el.textContent = phrase.slice(0, ci);
        if (ci === 0) {                    // finished deleting — next phrase
          deleting = false;
          pi = (pi + 1) % phrases.length;
          return setTimeout(tick, 350);
        }
        return setTimeout(tick, 28);
      }
    }
    tick();
  }

  /* ── 2. Scroll reveal ────────────────────────────────────── */
  function initReveal() {
    var items = document.querySelectorAll(".reveal");
    if (reduceMotion || !("IntersectionObserver" in window)) {
      items.forEach(function (el) { el.classList.add("is-visible"); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry, i) {
        if (entry.isIntersecting) {
          // gentle stagger for groups revealing together
          var delay = Math.min(i * 70, 280);
          setTimeout(function () { entry.target.classList.add("is-visible"); }, delay);
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    items.forEach(function (el) { io.observe(el); });
  }

  /* ── 3. Theme toggle ─────────────────────────────────────── */
  function initTheme() {
    var root = document.documentElement;
    var btn = document.getElementById("theme-toggle");
    var stored = null;
    try { stored = localStorage.getItem("theme"); } catch (e) {}

    if (stored) {
      root.setAttribute("data-theme", stored);
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      root.setAttribute("data-theme", "dark");
    }

    if (!btn) return;
    btn.addEventListener("click", function () {
      var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try { localStorage.setItem("theme", next); } catch (e) {}
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    initTheme();
    initTyping();
    initReveal();
  });
})();
