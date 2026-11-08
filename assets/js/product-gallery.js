(function () {
  'use strict';
  var tabs = Array.from(document.querySelectorAll('[data-gallery-tab]'));
  if (!tabs.length) return;
  function select(tab, focus) {
    tabs.forEach(function (item) {
      var active = item === tab;
      item.setAttribute('aria-selected', String(active));
      item.tabIndex = active ? 0 : -1;
      document.getElementById(item.getAttribute('aria-controls')).hidden = !active;
    });
    if (focus) tab.focus();
  }
  select(tabs.find(function (tab) { return tab.getAttribute("aria-selected") === "true"; }) || tabs[0], false);
  tabs.forEach(function (tab, index) {
    tab.addEventListener('click', function () { select(tab, false); });
    tab.addEventListener('keydown', function (event) {
      var direction = document.documentElement.dir === 'rtl' ? -1 : 1;
      var target = event.key === 'Home' ? 0 : event.key === 'End' ? tabs.length - 1 : event.key === 'ArrowRight' ? (index + direction + tabs.length) % tabs.length : event.key === 'ArrowLeft' ? (index - direction + tabs.length) % tabs.length : -1;
      if (target < 0) return;
      event.preventDefault();
      select(tabs[target], true);
    });
  });
})();
