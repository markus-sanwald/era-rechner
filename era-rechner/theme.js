"use strict";

// ---------------------------------------------------------------------------
// Theme toggle (Dark Mode) – shared across all pages
// ---------------------------------------------------------------------------

(function () {
  const root = document.documentElement;
  const saved = localStorage.getItem('theme');
  if (saved === 'dark' || saved === 'light') {
    root.setAttribute('data-theme', saved);
  }

  function isDark() {
    const t = root.getAttribute('data-theme');
    if (t === 'dark') return true;
    if (t === 'light') return false;
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  function applyTheme(dark) {
    root.setAttribute('data-theme', dark ? 'dark' : 'light');
    localStorage.setItem('theme', dark ? 'dark' : 'light');
    document.getElementById('theme-icon-moon').style.display = dark ? 'none' : '';
    document.getElementById('theme-icon-sun').style.display = dark ? '' : 'none';
  }

  document.addEventListener('DOMContentLoaded', function () {
    applyTheme(isDark());
    document.getElementById('theme-toggle').addEventListener('click', function () {
      applyTheme(!isDark());
    });
  });
})();
