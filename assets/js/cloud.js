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

  function userInitial(user) {
    var source =
      user.displayName || user.username || user.email || "P";
    var trimmed = source.trim();
    return trimmed ? trimmed.charAt(0).toUpperCase() : "P";
  }

  function appendAccountLink(menu, key, href) {
    var item = document.createElement("a");
    item.className = "account-item";
    item.setAttribute("href", cloudUrl(href));
    item.setAttribute("data-i18n", key);
    item.textContent = key;
    menu.appendChild(item);
  }

  function renderAccountMenu(user) {
    var slot = document.getElementById("navAccountSlot");
    if (!slot) return;

    slot.innerHTML = "";

    var dd = document.createElement("div");
    dd.className = "nav-dropdown";

    var trigger = document.createElement("button");
    trigger.type = "button";
    trigger.className = "nav-avatar-btn nav-dropdown-trigger";
    trigger.setAttribute("aria-label", "Account menu");

    if (user.avatarUrl) {
      var img = document.createElement("img");
      img.src = user.avatarUrl;
      img.alt = "";
      img.className = "nav-avatar-img";
      trigger.appendChild(img);
    } else {
      var fallback = document.createElement("span");
      fallback.className = "nav-avatar-fallback";
      fallback.textContent = userInitial(user);
      trigger.appendChild(fallback);
    }

    var menu = document.createElement("div");
    menu.className = "nav-dropdown-menu align-right account-menu";

    var head = document.createElement("div");
    head.className = "account-head";
    var name = document.createElement("div");
    name.className = "account-name";
    name.textContent = user.displayName || user.username || "";
    var email = document.createElement("div");
    email.className = "account-email";
    email.textContent = user.email || "";
    head.appendChild(name);
    head.appendChild(email);
    menu.appendChild(head);

    appendAccountLink(menu, "account.console", "/console");
    appendAccountLink(menu, "account.settings", "/console/settings");

    var signout = document.createElement("button");
    signout.type = "button";
    signout.className = "account-item account-danger";
    signout.setAttribute("data-i18n", "account.signout");
    signout.textContent = "Sign out";
    signout.addEventListener("click", function () {
      signOut();
    });
    menu.appendChild(signout);

    dd.appendChild(trigger);
    dd.appendChild(menu);
    slot.appendChild(dd);

    if (window.Powerduck && window.Powerduck.applyTranslations) {
      window.Powerduck.applyTranslations(dd);
    }
  }

  function fetchCsrfToken() {
    return fetch("/api/auth/csrf", { credentials: "include" })
      .then(function (response) {
        return response.ok ? response.json() : null;
      })
      .then(function (data) {
        return data && data.csrfToken ? data.csrfToken : null;
      });
  }

  function signOut() {
    fetchCsrfToken()
      .then(function (token) {
        return fetch("/api/auth/logout", {
          method: "POST",
          credentials: "include",
          headers: { "x-csrf-token": token || "" }
        });
      })
      .then(function () {
        window.location.reload();
      })
      .catch(function () {
        /* Keep the current page if sign-out fails. */
      });
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
        renderAccountMenu(data.user);
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
    var DOWNLOAD_BASE = "https://cdn.neatico.com/downloads/powerduck/";

    function detectArchitecture() {
      try {
        var uaData = navigator.userAgentData
          ? navigator.userAgentData
          : null;
        if (uaData && typeof uaData.getHighEntropyValues === "function") {
          return uaData
            .getHighEntropyValues(["architecture"])
            .then(function (h) {
              return h && h.architecture;
            })
            .catch(function () {
              return null;
            });
        }
      } catch (_) {
        /* userAgentData unavailable */
      }
      return Promise.resolve(null);
    }

    function resolveDesktopDownload() {
      var platform = (navigator.platform || "").toLowerCase();
      var ua = navigator.userAgent.toLowerCase();
      var isMac = platform.indexOf("mac") > -1 || ua.indexOf("mac os x") > -1;
      var isLinux = platform.indexOf("linux") > -1 || ua.indexOf("linux") > -1;
      return detectArchitecture().then(function (architecture) {
        if (isMac) {
          return (
            DOWNLOAD_BASE +
            (architecture === "x86" ? "latest-x64.dmg" : "latest-arm64.dmg")
          );
        }
        if (isLinux) {
          return DOWNLOAD_BASE + "latest-x86_64.AppImage";
        }
        // Windows and unknown platforms land on the downloads page.
        return null;
      });
    }

    Array.prototype.forEach.call(downloadButtons, function (el) {
      el.addEventListener("click", function (event) {
        event.preventDefault();
        resolveDesktopDownload().then(function (url) {
          if (url) {
            window.location.href = url;
          } else {
            window.location.href = "/download.html";
          }
        });
      });
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
