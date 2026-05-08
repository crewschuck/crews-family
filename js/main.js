/* ===================================================
   Crews Family Gathering Place — Shared JavaScript
   =================================================== */

// ── Welcome Banner ──────────────────────────────────
(function () {
  'use strict';

  function initWelcomeBanner() {
    var overlay = document.getElementById('welcome-overlay');
    if (!overlay) return;

    var btn = overlay.querySelector('.btn-enter');
    if (btn) {
      btn.addEventListener('click', function () {
        overlay.classList.add('hidden');
        // Optionally store in sessionStorage so it doesn't re-show on reload
        sessionStorage.setItem('welcomed', '1');
      });
    }

    // If already welcomed this session, skip banner
    if (sessionStorage.getItem('welcomed') === '1') {
      overlay.classList.add('hidden');
    }
  }

  // ── Mobile Nav Toggle ──────────────────────────────
  function initNavToggle() {
    var toggle = document.querySelector('.nav-toggle');
    var nav    = document.getElementById('site-nav');
    if (!toggle || !nav) return;

    toggle.addEventListener('click', function () {
      nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', nav.classList.contains('open'));
    });

    // Close nav when a link is clicked (mobile)
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('open');
      });
    });
  }

  // ── Active Nav Link ────────────────────────────────
  function markActiveNav() {
    var current = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('#site-nav a').forEach(function (link) {
      var href = link.getAttribute('href').split('/').pop();
      if (href === current) link.classList.add('active');
    });
  }

  // ── Inject shared header HTML ─────────────────────
  function buildHeader() {
    var placeholder = document.getElementById('header-placeholder');
    if (!placeholder) return;

    // Determine relative path prefix (pages are one level deep)
    var isSubPage = window.location.pathname.includes('/pages/');
    var root = isSubPage ? '../' : './';

    placeholder.outerHTML = [
      '<header id="site-header">',
      '  <div class="header-inner">',
      '    <a class="site-logo" href="' + root + 'index.html">',
      '      <span class="logo-icon">🏡</span>',
      '      <span class="logo-text">Crews Family<span>Gathering Place</span></span>',
      '    </a>',
      '    <button class="nav-toggle" aria-expanded="false" aria-label="Toggle navigation">☰</button>',
      '    <nav id="site-nav" aria-label="Main navigation">',
      '      <ul>',
      '        <li><a href="' + root + 'index.html">🏠 Home</a></li>',
      '        <li><a href="' + root + 'pages/genealogy.html">🌳 Genealogy</a></li>',
      '        <li><a href="' + root + 'pages/photos.html">📷 Photos</a></li>',
      '        <li><a href="' + root + 'pages/rentals.html">🏘️ Rentals</a></li>',
      '        <li><a href="' + root + 'pages/projects.html">🔨 Projects</a></li>',
      '        <li><a href="' + root + 'pages/books.html">📚 Books</a></li>',
      '        <li><a href="' + root + 'pages/movies.html">🎬 Movies</a></li>',
      '        <li><a href="' + root + 'pages/tv.html">📺 TV</a></li>',
      '        <li><a href="' + root + 'pages/calendar.html">📅 Calendar</a></li>',
      '        <li><a href="' + root + 'pages/newsletter.html">📰 Newsletter</a></li>',
      '        <li><a href="' + root + 'pages/nerding.html">🎲 Nerding Out</a></li>',
      '        <li><a href="' + root + 'pages/sydni.html">🎨 Sydni\'s Creations</a></li>',
      '        <li><a href="' + root + 'pages/chuckles.html">📖 Hello I\'m Chuckles!</a></li>',
      '      </ul>',

      '    </nav>',
      '  </div>',
      '</header>'
    ].join('\n');
  }

  // ── Inject shared footer HTML ─────────────────────
  function buildFooter() {
    var placeholder = document.getElementById('footer-placeholder');
    if (!placeholder) return;

    placeholder.outerHTML = [
      '<footer id="site-footer">',
      '  <p>🏡 <strong>Crews Family Gathering Place</strong> &mdash; Keeping the family connected</p>',
      '  <p class="mt-1">Built with love for the Crews family &bull; Updated May 2026</p>',
      '</footer>'
    ].join('\n');
  }

  // ── Init ──────────────────────────────────────────
  document.addEventListener('DOMContentLoaded', function () {
    buildHeader();
    buildFooter();
    initNavToggle();
    markActiveNav();
  });
}());
