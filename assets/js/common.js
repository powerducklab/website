/**
 * Powerduck — Shared Site Scripts
 * Theme toggle, internationalization, navigation dropdowns, and common
 * utilities. Used by every page across the static site.
 */

(function () {
  "use strict";

  var THEME_KEY = "pd_theme";
  var LANG_KEY = "pd_lang";
  var FALLBACK_LANG = "en";

  var i18n = window.POWERDUCK_I18N || { languages: [], messages: {} };
  var currentLang = FALLBACK_LANG;

  /* ------------------------------------------------------------------
   * Theme
   * ------------------------------------------------------------------ */

  function getStoredTheme() {
    try {
      return localStorage.getItem(THEME_KEY);
    } catch (e) {
      return null;
    }
  }

  function applyTheme(theme) {
    var root = document.documentElement;
    root.setAttribute("data-theme", theme);
    root.classList.toggle("dark", theme === "dark");
    root.classList.toggle("light", theme === "light");
    root.style.colorScheme = theme;
  }

  function setTheme(theme) {
    applyTheme(theme);
    try {
      localStorage.setItem(THEME_KEY, theme);
    } catch (e) {
      /* storage unavailable — ignore */
    }
  }

  function initTheme() {
    var saved = getStoredTheme();
    if (saved === "light" || saved === "dark") {
      applyTheme(saved);
    } else if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      applyTheme("dark");
    } else {
      applyTheme("light");
    }
  }

  function toggleTheme() {
    var isDark = document.documentElement.classList.contains("dark");
    setTheme(isDark ? "light" : "dark");
  }

  /* ------------------------------------------------------------------
   * Internationalization
   * ------------------------------------------------------------------ */

  function supportedCodes() {
    return i18n.languages
      .map(function (l) {
        return l.code;
      })
      .filter(function (code) {
        return code !== "auto";
      });
  }

  function getStoredLang() {
    try {
      return localStorage.getItem(LANG_KEY) || "auto";
    } catch (e) {
      return "auto";
    }
  }

  function detectBrowserLang() {
    var nav = navigator.language || navigator.userLanguage || FALLBACK_LANG;
    var exact = nav.toLowerCase();
    var codes = supportedCodes();

    if (codes.indexOf(exact) !== -1) return exact;

    var base = exact.split("-")[0];
    if (base === "zh") return "zh-CN";
    if (codes.indexOf(base) !== -1) return base;
    return FALLBACK_LANG;
  }

  function resolveLang() {
    var stored = getStoredLang();
    if (stored === "auto") return detectBrowserLang();
    return supportedCodes().indexOf(stored) !== -1 ? stored : FALLBACK_LANG;
  }

  function t(key) {
    var table = i18n.messages[currentLang] || {};
    var fallback = i18n.messages[FALLBACK_LANG] || {};
    if (Object.prototype.hasOwnProperty.call(table, key)) return table[key];
    if (Object.prototype.hasOwnProperty.call(fallback, key))
      return fallback[key];
    return key;
  }

  function applyTranslations(root) {
    var scope = root || document;

    scope.querySelectorAll("[data-i18n]").forEach(function (el) {
      el.textContent = t(el.getAttribute("data-i18n"));
    });

    scope.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      el.innerHTML = t(el.getAttribute("data-i18n-html"));
    });

    scope.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
      el.setAttribute(
        "placeholder",
        t(el.getAttribute("data-i18n-placeholder"))
      );
    });
  }

  function checkIcon(active) {
    var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("viewBox", "0 0 24 24");
    svg.setAttribute("width", "14");
    svg.setAttribute("height", "14");
    svg.setAttribute("aria-hidden", "true");
    if (active) {
      var path = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "path"
      );
      path.setAttribute(
        "d",
        "M20 6L9 17l-5-5"
      );
      path.setAttribute("fill", "none");
      path.setAttribute("stroke", "currentColor");
      path.setAttribute("stroke-width", "2.5");
      path.setAttribute("stroke-linecap", "round");
      path.setAttribute("stroke-linejoin", "round");
      svg.appendChild(path);
    }
    return svg;
  }

  function buildLanguageMenu() {
    var container = document.getElementById("langMenuContent");
    if (!container) return;

    container.innerHTML = "";
    var selected = getStoredLang();

    var entries = [{ code: "auto" }].concat(
      i18n.languages.filter(function (l) {
        return l.code !== "auto";
      })
    );

    entries.forEach(function (entry) {
      var active = selected === entry.code;
      var item = document.createElement("button");
      item.type = "button";
      item.className = "lang-item" + (active ? " active" : "");

      var check = document.createElement("span");
      check.className = "lang-check";
      check.appendChild(checkIcon(active));

      var label = document.createElement("span");
      label.textContent =
        entry.code === "auto"
          ? t("common.auto")
          : (i18n.languages.filter(function (l) {
              return l.code === entry.code;
            })[0] || {}).native || entry.code;

      item.appendChild(label);
      item.appendChild(check);

      item.addEventListener("click", function () {
        setLang(entry.code);
        var dd = item.closest(".nav-dropdown");
        if (dd) dd.classList.remove("open");
      });

      container.appendChild(item);
    });
  }

  function setLang(code) {
    try {
      localStorage.setItem(LANG_KEY, code);
    } catch (e) {
      /* storage unavailable — ignore */
    }
    renderI18n();
  }

  function renderI18n() {
    currentLang = resolveLang();
    document.documentElement.setAttribute("lang", currentLang);
    applyTranslations(document);
    buildLanguageMenu();
  }

  /* ------------------------------------------------------------------
   * Navigation dropdowns (delegated; supports dynamically added menus)
   * ------------------------------------------------------------------ */

  function initDropdowns() {
    document.addEventListener("click", function (e) {
      var trigger = e.target.closest(".nav-dropdown-trigger");

      if (trigger) {
        var dd = trigger.closest(".nav-dropdown");
        if (dd) {
          e.preventDefault();
          var isOpen = dd.classList.contains("open");
          document.querySelectorAll(".nav-dropdown.open").forEach(function (o) {
            if (o !== dd) o.classList.remove("open");
          });
          dd.classList.toggle("open", !isOpen);
          return;
        }
      }

      if (!e.target.closest(".nav-dropdown")) {
        document.querySelectorAll(".nav-dropdown.open").forEach(function (o) {
          o.classList.remove("open");
        });
      }
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") {
        document.querySelectorAll(".nav-dropdown.open").forEach(function (o) {
          o.classList.remove("open");
        });
      }
    });
  }

  /* ------------------------------------------------------------------
   * Copy to clipboard
   * ------------------------------------------------------------------ */

  function copyText(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      return navigator.clipboard.writeText(text);
    }
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
        if (!href || href === "#" || href.length < 2) return;
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
    renderI18n();

    document.querySelectorAll("[data-theme-toggle]").forEach(function (btn) {
      btn.addEventListener("click", toggleTheme);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

  window.Powerduck = window.Powerduck || {};
  window.Powerduck.copyText = copyText;
  window.Powerduck.toggleTheme = toggleTheme;
  window.Powerduck.t = t;
  window.Powerduck.getLang = resolveLang;
  window.Powerduck.applyTranslations = applyTranslations;
  window.Powerduck.setLang = setLang;
})();
