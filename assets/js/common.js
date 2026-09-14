/**
 * Powerduck — Shared Site Scripts
 * Theme toggle, navigation dropdown, and common utilities.
 * Used by all pages across the site.
 */

(function () {
  "use strict";

  /* ------------------------------------------------------------------
   * Theme Toggle
   * ------------------------------------------------------------------ */

  function getStoredTheme() {
    try {
      return localStorage.getItem("powerduck-theme");
    } catch (e) {
      return null;
    }
  }

  function setTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    try {
      localStorage.setItem("powerduck-theme", theme);
    } catch (e) {
      /* storage unavailable — ignore */
    }
  }

  function initTheme() {
    var stored = getStoredTheme();
    if (stored === "light" || stored === "dark") {
      setTheme(stored);
    } else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }

  function toggleTheme() {
    var current = document.documentElement.getAttribute("data-theme");
    setTheme(current === "dark" ? "light" : "dark");
  }

  /* ------------------------------------------------------------------
   * Navigation Dropdown (hover + click for touch)
   * ------------------------------------------------------------------ */

  function initDropdowns() {
    var dropdowns = document.querySelectorAll(".nav-dropdown");

    dropdowns.forEach(function (dd) {
      var trigger = dd.querySelector(".nav-dropdown-trigger");
      if (!trigger) return;

      // Click support for touch devices
      trigger.addEventListener("click", function (e) {
        e.preventDefault();
        var isOpen = dd.classList.contains("open");
        // Close all other dropdowns
        dropdowns.forEach(function (other) {
          other.classList.remove("open");
        });
        if (!isOpen) {
          dd.classList.add("open");
        }
      });
    });

    // Close dropdown when clicking outside
    document.addEventListener("click", function (e) {
      if (!e.target.closest(".nav-dropdown")) {
        dropdowns.forEach(function (dd) {
          dd.classList.remove("open");
        });
      }
    });

    // Close on Escape
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") {
        dropdowns.forEach(function (dd) {
          dd.classList.remove("open");
        });
      }
    });
  }

  /* ------------------------------------------------------------------
   * Copy to Clipboard (generic)
   * ------------------------------------------------------------------ */

  function copyText(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      return navigator.clipboard.writeText(text);
    }
    // Fallback for older browsers
    return new Promise(function (resolve, reject) {
      try {
        var ta = document.createElement("textarea");
        ta.value = text;
        ta.style.position = "fixed";
        ta.style.opacity = "0";
        document.body.appendChild(ta);
        ta.select();
        document.execCommand("copy");
        document.body.removeChild(ta);
        resolve();
      } catch (err) {
        reject(err);
      }
    });
  }

  /* ------------------------------------------------------------------
   * Smooth scroll for anchor links
   * ------------------------------------------------------------------ */

  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function (link) {
      link.addEventListener("click", function (e) {
        var href = link.getAttribute("href");
        if (href === "#" || href.length < 2) return;
        var target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      });
    });
  }

  /* ------------------------------------------------------------------
   * Initialize
   * ------------------------------------------------------------------ */

  function init() {
    initTheme();
    initDropdowns();
    initSmoothScroll();

    // Attach theme toggle to all buttons with data-theme-toggle
    document.querySelectorAll("[data-theme-toggle]").forEach(function (btn) {
      btn.addEventListener("click", toggleTheme);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

  // Expose copyText for page-specific use
  window.Powerduck = window.Powerduck || {};
  window.Powerduck.copyText = copyText;
  window.Powerduck.toggleTheme = toggleTheme;
})();
