/* ============================================================
   router.js — Enrutador hash SPA
   Escucha cambios en location.hash y monta la vista correcta
   en el elemento <main id="app">.

   Uso:
     Router.register('/ruta', Views.nombreVista);
     Router.init();
   ============================================================ */
(function () {
  'use strict';

  var Router = {
    routes: {},

    /* Registra una ruta y su función de vista */
    register: function (path, viewFn) {
      this.routes[path] = viewFn;
    },

    /* Navega a una ruta cambiando el hash */
    navigate: function (path) {
      window.location.hash = '#' + path;
    },

    /* Resuelve la ruta actual y monta la vista */
    resolve: function () {
      var hash   = window.location.hash.replace('#', '') || '/';
      var viewFn = this.routes[hash] || this.routes['/404'] || this.routes['/'];
      var app    = document.getElementById('app');
      if (!app || !viewFn) return;

      /* Transición de salida */
      app.classList.add('view--exit');

      var self = this;
      setTimeout(function () {
        /* Montar nueva vista */
        app.innerHTML = viewFn();

        /* Transición de entrada */
        app.classList.remove('view--exit');
        void app.offsetWidth;          /* forzar reflow para reiniciar animación */
        app.classList.add('view--enter');
        setTimeout(function () {
          app.classList.remove('view--enter');
        }, 400);

        /* Scroll al inicio */
        window.scrollTo({ top: 0, behavior: 'instant' });

        /* Notificar a la app (i18n, reveal, nav activo, accesibilidad) */
        if (window.App) {
          window.App.applyI18n();
          window.App.initReveal();
          window.App.updateNav(hash);
          window.App.initImageFallbacks();  /* onerror seguro desde JS */
          window.App.focusMain();           /* foco para teclado/lector de pantalla */
        }
      }, 160);
    },

    /* Arranca el enrutador */
    init: function () {
      var self = this;
      window.addEventListener('hashchange', function () {
        self.resolve();
      });
      /* Resolver la ruta inicial al cargar la página */
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function () {
          self.resolve();
        });
      } else {
        self.resolve();
      }
    }
  };

  window.Router = Router;
})();
