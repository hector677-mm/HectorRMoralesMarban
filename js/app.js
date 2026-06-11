/* ============================================================
   app.js — Bootstrap de la SPA
   Inicializa el router, el cambio de idioma, el menú móvil
   y las animaciones de scroll. Depende de:
     i18n.js   → window.I18N
     views.js  → window.Views
     router.js → window.Router
   ============================================================ */
(function () {
  'use strict';

  var App = {
    lang: 'es',

    /* ---------- Entrada principal ---------- */
    init: function () {
      /* Idioma guardado en localStorage */
      try { this.lang = localStorage.getItem('hm-lang') || 'es'; } catch (e) {}

      /* Año en el footer */
      var yr = document.getElementById('year');
      if (yr) yr.textContent = new Date().getFullYear();

      /* Botón de cambio de idioma */
      this._initLang();

      /* Menú móvil */
      this._initMobileMenu();

      /* Registrar rutas */
      Router.register('/',            Views.home);
      Router.register('/perfil',      Views.perfil);
      Router.register('/banca',       Views.banca);
      Router.register('/experiencia', Views.experiencia);
      Router.register('/logros',      Views.logros);
      Router.register('/sobre-mi',    Views.sobremi);
      Router.register('/contacto',    Views.contacto);
      Router.register('/404',         Views.notFound);

      /* Arrancar el enrutador (resuelve la ruta inicial) */
      Router.init();
    },

    /* ---------- Idioma ---------- */
    _initLang: function () {
      var self = this;
      var btn  = document.getElementById('langSwitch');
      if (!btn) return;
      btn.addEventListener('click', function () {
        self.lang = self.lang === 'es' ? 'en' : 'es';
        try { localStorage.setItem('hm-lang', self.lang); } catch (e) {}
        self.applyI18n();
      });
    },

    /* Aplica el diccionario del idioma activo a todos los [data-i18n] del DOM */
    applyI18n: function () {
      var dict = window.I18N[this.lang] || window.I18N.es;
      document.documentElement.lang = this.lang;

      document.querySelectorAll('[data-i18n]').forEach(function (el) {
        var key = el.getAttribute('data-i18n');
        if (dict[key] !== undefined) el.textContent = dict[key];
      });

      /* Actualizar indicador ES / EN */
      var self = this;
      document.querySelectorAll('.lang-switch__opt').forEach(function (opt) {
        opt.classList.toggle('is-active', opt.getAttribute('data-lang') === self.lang);
      });
    },

    /* ---------- Menú móvil ---------- */
    _initMobileMenu: function () {
      var toggle = document.getElementById('navToggle');
      var menu   = document.getElementById('navMenu');
      if (!toggle || !menu) return;

      toggle.addEventListener('click', function () {
        var open = menu.classList.toggle('is-open');
        toggle.setAttribute('aria-expanded', String(open));
      });

      /* Cerrar al hacer clic en cualquier enlace del menú */
      menu.querySelectorAll('a').forEach(function (a) {
        a.addEventListener('click', function () {
          menu.classList.remove('is-open');
          toggle.setAttribute('aria-expanded', 'false');
        });
      });
    },

    /* ---------- Nav activo ---------- */
    /* Marca con .is-active el enlace cuyo data-route coincida con la ruta actual */
    updateNav: function (route) {
      document.querySelectorAll('.nav__menu a[data-route]').forEach(function (a) {
        a.classList.toggle('is-active', a.getAttribute('data-route') === route);
      });
    },

    /* ---------- Fallback de imagen hero (onerror movido desde HTML) ---------- */
    /* Elimina el handler inline del HTML; se gestiona aquí de forma segura    */
    initImageFallbacks: function () {
      var photo = document.querySelector('.js-hero-photo');
      if (!photo) return;
      photo.addEventListener('error', function () {
        photo.style.display = 'none';
        var fallback = photo.nextElementSibling;
        if (fallback) fallback.style.display = 'flex';
      });
    },

    /* ---------- Foco programático en cambio de ruta (accesibilidad) ---------- */
    focusMain: function () {
      var app = document.getElementById('app');
      if (app) {
        app.focus();          /* tabindex="-1" permite esto sin añadir tab-stop */
      }
    },

    /* ---------- Animaciones de scroll (IntersectionObserver) ---------- */
    initReveal: function () {
      var selectores = [
        '.card', '.tl', '.stat', '.ccard',
        '.badges li', '.edu', '.banca__list li',
        '.section__head', '.skill', '.logro',
        '.about__philo', '.about__media', '.section__media'
      ].join(', ');

      var els = document.querySelectorAll(selectores);
      els.forEach(function (el) { el.classList.add('reveal'); });

      if ('IntersectionObserver' in window) {
        var io = new IntersectionObserver(function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-in');
              io.unobserve(entry.target);
            }
          });
        }, { threshold: 0.1 });

        els.forEach(function (el) { io.observe(el); });
      } else {
        /* Fallback: mostrar todo si no hay IntersectionObserver */
        els.forEach(function (el) { el.classList.add('is-in'); });
      }
    }
  };

  /* Exponer globalmente para que router.js pueda llamar a App.applyI18n(), etc. */
  window.App = App;

  /* Arrancar cuando el DOM esté listo */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () { App.init(); });
  } else {
    App.init();
  }
})();
