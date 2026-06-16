/* ════════════════════════════════════════════════════════════
   Tiny, dependency-free interactions:
     1. Typing animation in the hero
     2. Scroll-reveal for .reveal elements
     3. Light/dark theme toggle (remembers your choice)
     4. Mermaid diagrams (lazy-loaded, themed to match the site)
   Everything respects prefers-reduced-motion.
   ════════════════════════════════════════════════════════════ */

(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ── 1. Typing animation ─────────────────────────────────── */
  function initTyping() {
    var el = document.getElementById("typed");
    if (!el) return;

    var phrases = window.__TYPED_PHRASES__ || ["learning in public."];
    if (!phrases.length) return;

    if (reduceMotion) {
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
        if (ci === phrase.length) {
          deleting = true;
          return setTimeout(tick, 1900);
        }
        return setTimeout(tick, 55 + Math.random() * 45);
      } else {
        ci--;
        el.textContent = phrase.slice(0, ci);
        if (ci === 0) {
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
          var delay = Math.min(i * 70, 280);
          setTimeout(function () { entry.target.classList.add("is-visible"); }, delay);
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0 });
    items.forEach(function (el) { io.observe(el); });
  }

  /* ── 4. Mermaid diagrams ─────────────────────────────────── */
  // Theme variables tuned to the warm-magazine palette (light & dark).
  function mermaidTheme(isDark) {
    return isDark
      ? { primaryColor: "#2C241D", primaryTextColor: "#F3E9DD", primaryBorderColor: "#E89A5C",
          lineColor: "#E89A5C", secondaryColor: "#241E19", tertiaryColor: "#1B1714",
          tertiaryTextColor: "#F3E9DD", noteBkgColor: "#3A2E24", noteTextColor: "#F3E9DD",
          fontFamily: "Inter, system-ui, sans-serif" }
      : { primaryColor: "#FBEEDF", primaryTextColor: "#2B2622", primaryBorderColor: "#D2783C",
          lineColor: "#B85F2A", secondaryColor: "#FFF8F0", tertiaryColor: "#FFFFFF",
          tertiaryTextColor: "#2B2622", noteBkgColor: "#FDF3E7", noteTextColor: "#2B2622",
          fontFamily: "Inter, system-ui, sans-serif" };
  }

  var mermaidNodes = null;   // cached list of .mermaid divs

  function renderMermaid() {
    if (typeof window.mermaid === "undefined" || !mermaidNodes || !mermaidNodes.length) return;
    var isDark = document.documentElement.getAttribute("data-theme") === "dark";

    mermaidNodes.forEach(function (n) {     // reset any previously-rendered diagram to its source
      n.removeAttribute("data-processed");
      n.classList.add("mermaid-pending");
      n.textContent = n.getAttribute("data-src");
    });

    window.mermaid.initialize({
      startOnLoad: false,
      securityLevel: "strict",
      theme: "base",
      themeVariables: mermaidTheme(isDark),
      flowchart: { curve: "basis", useMaxWidth: true },
      sequence: { useMaxWidth: true }
    });

    window.mermaid.run({ nodes: mermaidNodes })
      .then(function () { mermaidNodes.forEach(function (n) { n.classList.remove("mermaid-pending"); }); })
      .catch(function (e) { if (window.console) console.error("Mermaid render error:", e); });
  }

  function initMermaid() {
    var blocks = document.querySelectorAll("pre > code.language-mermaid, code.language-mermaid");
    if (!blocks.length) return;

    // Convert each ```mermaid code block into a <div class="mermaid">, keeping
    // the original source in data-src so we can re-render on theme changes.
    mermaidNodes = [];
    blocks.forEach(function (code) {
      var host = code.closest("pre") || code;
      var src = code.textContent;
      var div = document.createElement("div");
      div.className = "mermaid mermaid-pending";
      div.setAttribute("data-src", src);
      div.textContent = src;
      host.replaceWith(div);
      mermaidNodes.push(div);
    });

    // Mermaid v11 ships as an ES module — the classic bundle assigns to an
    // internal name rather than window.mermaid — so load it via dynamic
    // import() and hand its default export to our renderer.
    import("https://cdn.jsdelivr.net/npm/mermaid@11/dist/mermaid.esm.min.mjs")
      .then(function (mod) {
        window.mermaid = mod.default || mod;
        renderMermaid();
      })
      .catch(function (e) { if (window.console) console.error("Mermaid load error:", e); });
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
      renderMermaid();   // re-theme any diagrams to match
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    initTheme();
    initTyping();
    initReveal();
    initMermaid();
  });
})();
