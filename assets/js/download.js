(function () {
  "use strict";
  // Translate metadata/accessibility labels and route guides to the selected
  // documentation locale without rebuilding the platform controls.
  var docsLocales = { en: "", "zh-CN": "zh-CN", ja: "ja-JP", de: "de-DE", fr: "fr-FR", es: "es-ES" };
  var guideLinks = Array.from(document.querySelectorAll('a[href^="/docs/"], a[href^="docs/"]')).map(function (link) {
    return { link: link, path: link.getAttribute("href").replace(/^\/?docs\//, "") };
  });
  function localizeExtras() {
    if (!window.Powerduck) return;
    document.querySelectorAll("[data-dl-attr]").forEach(function (element) {
      element.setAttribute(element.dataset.dlAttr, window.Powerduck.t(element.dataset.dlKey));
    });
    var locale = docsLocales[document.documentElement.lang] || "";
    guideLinks.forEach(function (guide) {
      guide.link.setAttribute("href", "/docs/" + (locale ? locale + "/" : "") + guide.path);
    });
  }
  new MutationObserver(localizeExtras).observe(document.documentElement, { attributes: true, attributeFilter: ["lang"] });
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", localizeExtras);
  else localizeExtras();

  var controls = document.querySelector(".dl-platforms");
  if (!controls) return;
  var buttons = Array.from(controls.querySelectorAll("[data-platform]"));
  var panels = Array.from(document.querySelectorAll("[data-package]"));
  function select(platform) {
    buttons.forEach(function (button) {
      button.setAttribute("aria-pressed", String(button.dataset.platform === platform));
    });
    panels.forEach(function (panel) { panel.hidden = panel.dataset.package !== platform; });
  }
  buttons.forEach(function (button, index) {
    button.addEventListener("click", function () { select(button.dataset.platform); });
    button.addEventListener("keydown", function (event) {
      var next;
      if (event.key === "ArrowRight") next = (index + 1) % buttons.length;
      if (event.key === "ArrowLeft") next = (index + buttons.length - 1) % buttons.length;
      if (event.key === "Home") next = 0;
      if (event.key === "End") next = buttons.length - 1;
      if (next === undefined) return;
      event.preventDefault();
      buttons[next].focus();
      select(buttons[next].dataset.platform);
    });
  });
  var ua = navigator.userAgent || "";
  var platform = navigator.platform || "";
  // iPadOS may identify itself as a Mac; Android may identify as Linux.
  var mobile = /Android|iPhone|iPad|iPod/i.test(ua) || (/Mac/i.test(platform) && navigator.maxTouchPoints > 1);
  var selected = mobile ? "mac" : /Win/i.test(platform + ua) ? "windows" : /Linux/i.test(platform + ua) ? "linux" : "mac";
  var unknown = !/Mac|Win|Linux/i.test(platform + ua);
  document.querySelector("[data-device-note]").hidden = !(mobile || unknown);
  controls.hidden = false;
  select(selected);
})();
