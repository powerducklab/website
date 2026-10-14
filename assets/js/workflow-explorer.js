/* Progressive enhancement: without JavaScript all workflows remain readable. */
(function () {
  "use strict";
  document
    .querySelectorAll("[data-workflow-explorer]")
    .forEach(function (root) {
      var tabs = Array.from(root.querySelectorAll("[data-workflow-tab]"));
      var panels = Array.from(root.querySelectorAll("[data-workflow-panel]"));
      var list = root.querySelector("[data-workflow-choices]");
      if (!list || tabs.length !== panels.length || !tabs.length) return;
      list.setAttribute("role", "tablist");
      list.setAttribute("aria-labelledby", "workflow-selector-title");
      list.removeAttribute("aria-label");
      function select(index, focus) {
        tabs.forEach(function (tab, i) {
          tab.setAttribute("aria-selected", String(i === index));
          tab.tabIndex = i === index ? 0 : -1;
          panels[i].hidden = i !== index;
        });
        if (focus) tabs[index].focus();
      }
      tabs.forEach(function (tab, index) {
        tab.setAttribute("role", "tab");
        tab.setAttribute("aria-controls", panels[index].id);
        panels[index].setAttribute("role", "tabpanel");
        panels[index].setAttribute("aria-labelledby", tab.id);
        panels[index].tabIndex = 0;
        tab.addEventListener("click", function () {
          select(index, false);
        });
        tab.addEventListener("keydown", function (event) {
          var next;
          if (event.key === "ArrowRight" || event.key === "ArrowDown")
            next = (index + 1) % tabs.length;
          else if (event.key === "ArrowLeft" || event.key === "ArrowUp")
            next = (index + tabs.length - 1) % tabs.length;
          else if (event.key === "Home") next = 0;
          else if (event.key === "End") next = tabs.length - 1;
          else return;
          event.preventDefault();
          select(next, true);
        });
      });
      root.classList.add("is-interactive");
      select(0, false);
    });
})();
