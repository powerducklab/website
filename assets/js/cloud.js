/**
 * Powerduck marketing site -> Cloud handoff.
 *
 * The marketing site and the Cloud app are served from the same origin, so
 * navigation uses root-relative paths and the session is shared through an
 * HttpOnly cookie. This script reflects the signed-in state into the header
 * and routes the spec loader and handoff controls into the Cloud app.
 */
(function () {
  "use strict";

  // Same origin by default; set an explicit base only for a split deployment.
  var cloudBaseUrl = window.POWERDUCK_CLOUD_BASE_URL || "";

  function enc(value) {
    return encodeURIComponent(value);
  }

  function cloudUrl(path, query) {
    var url = cloudBaseUrl.replace(/\/$/, "") + path;
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

  // Reflect a shared, same-origin session into every "Sign in" control.
  function reflectSession() {
    fetch("/api/auth/me", { credentials: "same-origin" })
      .then(function (response) {
        return response.ok ? response.json() : null;
      })
      .then(function (data) {
        if (!data || !data.user) {
          return;
        }
        var consoleUrl = cloudUrl("/console");
        document
          .querySelectorAll('[data-cloud-signin="/signin"], a[href="/signin"]')
          .forEach(function (el) {
            el.setAttribute("href", consoleUrl);
            var title = el.querySelector(".dropdown-item-title");
            if (title) {
              title.textContent = "Console";
              var desc = el.querySelector(".dropdown-item-desc");
              if (desc) {
                desc.textContent = "Open your Cloud console";
              }
            } else {
              el.textContent = "Console";
            }
          });
      })
      .catch(function () {
        /* The signed-out header is the safe default. */
      });
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
          go("/cloud", "git=" + enc(value));
        } else {
          go("/cloud", "specUrl=" + enc(value));
        }
      });
    }

    var chips = document.querySelectorAll("[data-handoff]");
    Array.prototype.forEach.call(chips, function (chip) {
      chip.addEventListener("click", function () {
        var kind = chip.getAttribute("data-handoff");
        if (kind === "sample") {
          go("/cloud", "sample=" + enc(chip.getAttribute("data-sample")));
        } else if (kind === "spec") {
          go("/cloud", "specUrl=" + enc(chip.getAttribute("data-spec-url")));
        } else if (kind === "git") {
          go("/cloud", "git=" + enc(chip.getAttribute("data-git")));
        } else if (kind === "home") {
          go("/cloud", "");
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

    var buyButtons = document.querySelectorAll("[data-desktop-buy]");
    var buyHref = cloudUrl("/console/billing", "buy=desktop");
    Array.prototype.forEach.call(buyButtons, function (el) {
      el.setAttribute("href", buyHref);
    });

    var downloadButtons = document.querySelectorAll("[data-desktop-download]");
    var downloadHref = "https://github.com/powerducklab";
    Array.prototype.forEach.call(downloadButtons, function (el) {
      el.setAttribute("href", downloadHref);
      el.setAttribute("target", "_blank");
      el.setAttribute("rel", "noopener noreferrer");
    });

    // Reflect the session last so the signed-in state wins over the static
    // href rewrites above.
    reflectSession();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
