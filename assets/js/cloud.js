/**
 * Powerduck marketing site -> Cloud handoff.
 *
 * Top-level navigation only. The Cloud web app is the single authority for the
 * signed-in session; this static page never mirrors it. The Cloud origin and
 * the desktop commerce destinations live in one CONFIG block so they can be
 * changed per environment without touching the markup.
 */
(function () {
  "use strict";

  var CONFIG = {
    // Origin of the Powerduck Cloud web app.
    cloudBaseUrl:
      window.POWERDUCK_CLOUD_BASE_URL || "http://127.0.0.1:3000",
    // Set once the desktop one-time checkout and public downloads are live.
    desktopBuyUrl: window.POWERDUCK_DESKTOP_BUY_URL || "",
    desktopDownloadUrl: window.POWERDUCK_DESKTOP_DOWNLOAD_URL || "",
  };

  function enc(value) {
    return encodeURIComponent(value);
  }

  function cloudUrl(path, query) {
    var url = CONFIG.cloudBaseUrl.replace(/\/$/, "") + path;
    if (query) {
      url += "?" + query;
    }
    return url;
  }

  function go(path, query) {
    window.location.href = cloudUrl(path, query);
  }

  function isGitUrl(value) {
    return /(^|\/)github\.com\//.test(value) || /\.git($|[?#])/.test(value);
  }

  function init() {
    var form = document.getElementById("specLoaderForm");
    var input = document.getElementById("specUrlInput");
    if (form && input) {
      form.addEventListener("submit", function (event) {
        event.preventDefault();
        var value = input.value.trim();
        if (!value) {
          input.focus();
          return;
        }
        if (isGitUrl(value)) {
          go("/", "git=" + enc(value));
        } else {
          go("/", "specUrl=" + enc(value));
        }
      });
    }

    var chips = document.querySelectorAll("[data-handoff]");
    Array.prototype.forEach.call(chips, function (chip) {
      chip.addEventListener("click", function () {
        var kind = chip.getAttribute("data-handoff");
        if (kind === "sample") {
          go("/", "sample=" + enc(chip.getAttribute("data-sample")));
        } else if (kind === "spec") {
          go("/", "specUrl=" + enc(chip.getAttribute("data-spec-url")));
        } else if (kind === "git") {
          go("/", "git=" + enc(chip.getAttribute("data-git")));
        } else if (kind === "home") {
          go("/", "");
        }
      });
    });

    var signin = document.querySelectorAll("[data-cloud-signin]");
    Array.prototype.forEach.call(signin, function (el) {
      el.setAttribute(
        "href",
        cloudUrl(el.getAttribute("data-cloud-signin") || "/signin"),
      );
    });

    var cloudCta = document.querySelectorAll("[data-cloud-pricing]");
    Array.prototype.forEach.call(cloudCta, function (el) {
      el.setAttribute("href", cloudUrl("/pricing"));
    });

    var buy = document.querySelector("[data-desktop-buy]");
    if (buy && CONFIG.desktopBuyUrl) {
      buy.setAttribute("href", CONFIG.desktopBuyUrl);
    }
    var download = document.querySelector("[data-desktop-download]");
    if (download && CONFIG.desktopDownloadUrl) {
      download.setAttribute("href", CONFIG.desktopDownloadUrl);
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
