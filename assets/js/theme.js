/**
 * Theme (dark/light) + language (en/ar) toggle logic.
 * Persists choices in localStorage and applies them instantly with no reload.
 *
 * NOTE: the "apply on load" part of this also runs as an early inline
 * script in <head> (see index.html) so the correct theme/lang/dir are set
 * before first paint, avoiding a flash of the wrong theme/language. This
 * file re-applies on DOMContentLoaded (harmless / idempotent) and wires up
 * the toggle button click handlers + translation pass.
 */
(function () {
  "use strict";

  var THEME_KEY = "portfolio-theme"; // 'dark' | 'light'
  var LANG_KEY = "portfolio-lang"; // 'en' | 'ar'

  function getStoredTheme() {
    try {
      return localStorage.getItem(THEME_KEY);
    } catch (e) {
      return null;
    }
  }

  function getStoredLang() {
    try {
      return localStorage.getItem(LANG_KEY);
    } catch (e) {
      return null;
    }
  }

  function setStoredTheme(value) {
    try {
      localStorage.setItem(THEME_KEY, value);
    } catch (e) {
      /* localStorage unavailable (private mode, etc) — fail silently */
    }
  }

  function setStoredLang(value) {
    try {
      localStorage.setItem(LANG_KEY, value);
    } catch (e) {
      /* ignore */
    }
  }

  // Sets the circular-reveal origin point (see ::view-transition-new(root)
  // in main.css) to the center of the button that triggered the change, so
  // the whole-page wipe animation expands outward from there.
  function setTransitionOrigin(button) {
    var root = document.documentElement;
    if (button && button.getBoundingClientRect) {
      var rect = button.getBoundingClientRect();
      var x = rect.left + rect.width / 2;
      var y = rect.top + rect.height / 2;
      root.style.setProperty("--theme-origin-x", x + "px");
      root.style.setProperty("--theme-origin-y", y + "px");
    } else {
      root.style.removeProperty("--theme-origin-x");
      root.style.removeProperty("--theme-origin-y");
    }
  }

  // Runs `update` (which mutates the DOM/attributes synchronously) as a
  // single whole-page animated transition: the native View Transitions API
  // where supported (Chrome/Edge/Opera — see the circular reveal wipe in
  // main.css), or a whole-page CSS fade fallback everywhere else (Safari/
  // Firefox at the time of writing). Either way every themeable surface on
  // the page changes together as one deliberate animation, not just the
  // toggle button.
  function runAsTransition(update, originButton) {
    setTransitionOrigin(originButton);

    if (typeof document.startViewTransition === "function") {
      document.startViewTransition(update);
      return;
    }

    var root = document.documentElement;
    root.classList.add("theme-transitioning-fallback");
    update();
    window.clearTimeout(runAsTransition._t);
    runAsTransition._t = window.setTimeout(function () {
      root.classList.remove("theme-transitioning-fallback");
    }, 550);
  }

  function applyTheme(theme) {
    var root = document.documentElement;
    root.setAttribute("data-theme", theme);

    var btn = document.getElementById("themeToggleBtn");
    if (btn) {
      btn.setAttribute(
        "aria-label",
        theme === "light" ? "Switch to dark theme" : "Switch to light theme"
      );
      btn.setAttribute("title", btn.getAttribute("aria-label"));
    }
  }

  function applyLang(lang, animateButton) {
    var root = document.documentElement;
    var dir = lang === "ar" ? "rtl" : "ltr";
    root.setAttribute("lang", lang);
    root.setAttribute("dir", dir);

    var btn = document.getElementById("langToggleBtn");
    if (btn) {
      btn.setAttribute(
        "aria-label",
        lang === "ar" ? "Switch to English" : "التبديل إلى العربية"
      );
      btn.setAttribute("title", btn.getAttribute("aria-label"));

      if (animateButton) {
        btn.classList.remove("is-switching");
        // Force reflow so the animation restarts if toggled rapidly.
        void btn.offsetWidth;
        btn.classList.add("is-switching");
        window.clearTimeout(applyLang._t);
        applyLang._t = window.setTimeout(function () {
          btn.classList.remove("is-switching");
        }, 500);
      }
    }

    if (window.PortfolioI18n && typeof window.PortfolioI18n.apply === "function") {
      window.PortfolioI18n.apply(lang);
    }

    // Typed.js caches its strings at construction time from the
    // data-typed-items attribute, so it needs to be rebuilt after the
    // attribute is translated in place.
    if (typeof window.PortfolioInitTyped === "function") {
      window.PortfolioInitTyped();
    }
  }

  function currentTheme() {
    return document.documentElement.getAttribute("data-theme") === "light"
      ? "light"
      : "dark";
  }

  function currentLang() {
    return document.documentElement.getAttribute("lang") === "ar" ? "ar" : "en";
  }

  function initEarly() {
    // Defaults: dark theme, English language.
    var theme = getStoredTheme() === "light" ? "light" : "dark";
    var lang = getStoredLang() === "ar" ? "ar" : "en";
    applyThemeAttrOnly(theme);
    applyLangAttrOnly(lang);
  }

  // Lightweight versions used by the early inline <head> script (before
  // main.js/i18n.js have loaded) — just set the html attributes so there is
  // no flash of the wrong theme/direction. Exposed on window so the inline
  // <head> script can call them directly without duplicating logic.
  function applyThemeAttrOnly(theme) {
    document.documentElement.setAttribute("data-theme", theme);
  }

  function applyLangAttrOnly(lang) {
    document.documentElement.setAttribute("lang", lang);
    document.documentElement.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
  }

  window.PortfolioTheme = {
    init: initEarly,
    applyThemeAttrOnly: applyThemeAttrOnly,
    applyLangAttrOnly: applyLangAttrOnly,
    getStoredTheme: getStoredTheme,
    getStoredLang: getStoredLang
  };

  function toggleTheme() {
    var next = currentTheme() === "light" ? "dark" : "light";
    var btn = document.getElementById("themeToggleBtn");
    runAsTransition(function () {
      applyTheme(next);
    }, btn);
    setStoredTheme(next);
  }

  function toggleLang() {
    var next = currentLang() === "ar" ? "en" : "ar";
    var btn = document.getElementById("langToggleBtn");
    runAsTransition(function () {
      applyLang(next, true);
    }, btn);
    setStoredLang(next);
  }

  function wireUp() {
    // Re-apply in full (including translations + button UI). Safe to call
    // once the DOM is parsed — this script tag sits at the end of <body>,
    // so elements already exist by the time this file runs; it also
    // re-registers on DOMContentLoaded in case this script is ever moved
    // into <head> or loaded with `defer`. No transition animation on initial
    // load — only on explicit user toggles.
    applyTheme(currentTheme());
    applyLang(currentLang(), false);

    var themeBtn = document.getElementById("themeToggleBtn");
    if (themeBtn) {
      themeBtn.addEventListener("click", toggleTheme);
    }

    var langBtn = document.getElementById("langToggleBtn");
    if (langBtn) {
      langBtn.addEventListener("click", toggleLang);
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", wireUp);
  } else {
    wireUp();
  }
})();
