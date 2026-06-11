/* ============================================================
   spa-tests.js — Suite de pruebas para la SPA de Héctor Morales

   CÓMO EJECUTAR:
     1. Abre http://localhost:8080 en Chrome/Firefox
     2. Abre la consola del navegador (F12 → Console)
     3. Pega todo este archivo o escribe:
           fetch('tests/spa-tests.js').then(r=>r.text()).then(eval)
     4. Lee el resultado con ✅ (pasa) o ❌ (falla)
   ============================================================ */

(function () {
  'use strict';

  /* ---------- Utilidades de la suite ---------- */
  var passed = 0, failed = 0;

  function assert(description, condition) {
    if (condition) {
      console.log('%c✅ ' + description, 'color: #16a34a; font-weight: 500;');
      passed++;
    } else {
      console.error('❌ ' + description);
      failed++;
    }
  }

  function group(name) {
    console.group('%c' + name, 'color: #1b6ef3; font-weight: 700; font-size: 1rem;');
  }

  function endGroup() { console.groupEnd(); }

  /* ---------- Helper: navegar y esperar montaje ---------- */
  function navigateTo(route) {
    return new Promise(function (resolve) {
      window.location.hash = '#' + route;
      setTimeout(resolve, 400);   /* espera transición del router (160ms + margen) */
    });
  }

  /* ====================================================
     TEST 1 — Globals: objetos SPA expuestos
  ==================================================== */
  async function testGlobals() {
    group('1. Globals SPA');
    assert('window.I18N existe',    typeof window.I18N    === 'object');
    assert('window.Views existe',   typeof window.Views   === 'object');
    assert('window.Router existe',  typeof window.Router  === 'object');
    assert('window.App existe',     typeof window.App     === 'object');
    assert('I18N tiene clave ES',   typeof window.I18N.es === 'object');
    assert('I18N tiene clave EN',   typeof window.I18N.en === 'object');
    endGroup();
  }

  /* ====================================================
     TEST 2 — Vistas registradas
  ==================================================== */
  async function testViews() {
    group('2. Vistas registradas en Views');
    var expected = ['home', 'perfil', 'banca', 'experiencia', 'logros', 'sobremi', 'contacto', 'notFound'];
    expected.forEach(function (name) {
      assert('Views.' + name + ' es función', typeof window.Views[name] === 'function');
    });
    endGroup();
  }

  /* ====================================================
     TEST 3 — Rutas: cada ruta monta su vista
  ==================================================== */
  async function testRoutes() {
    group('3. Enrutamiento hash');
    var routes = [
      { path: '/',            text: 'Héctor Rafael' },
      { path: '/perfil',      text: 'data-i18n="profile.kicker"' },
      { path: '/banca',       text: 'MONEX' },
      { path: '/experiencia', text: 'BBVA Bancomer' },
      { path: '/logros',      text: 'logro__num' },
      { path: '/sobre-mi',    text: 'about__philo' },
      { path: '/contacto',    text: 'hector677@hotmail.com' },
    ];
    for (var i = 0; i < routes.length; i++) {
      await navigateTo(routes[i].path);
      var app     = document.getElementById('app');
      var content = app ? app.innerHTML : '';
      assert('Ruta ' + routes[i].path + ' monta contenido correcto',
             content.includes(routes[i].text));
    }
    endGroup();
  }

  /* ====================================================
     TEST 4 — Ruta 404
  ==================================================== */
  async function test404() {
    group('4. Ruta 404');
    await navigateTo('/ruta-que-no-existe');
    var app = document.getElementById('app');
    assert('Hash desconocido muestra vista 404',
           app && app.innerHTML.includes('404'));
    assert('Vista 404 tiene enlace a home',
           app && app.innerHTML.includes('href="#/"'));
    endGroup();
  }

  /* ====================================================
     TEST 5 — i18n: cambio de idioma
  ==================================================== */
  async function testI18n() {
    group('5. Cambio de idioma ES ↔ EN');
    await navigateTo('/');

    /* Estado inicial: ES */
    window.App.lang = 'es';
    window.App.applyI18n();
    var appText = document.getElementById('app').innerText;
    assert('En ES el hero dice "Años de experiencia"',
           appText.includes('Años de experiencia'));

    /* Cambiar a EN */
    window.App.lang = 'en';
    window.App.applyI18n();
    appText = document.getElementById('app').innerText;
    assert('En EN el hero dice "Years of experience"',
           appText.includes('Years of experience'));

    /* Restaurar ES */
    window.App.lang = 'es';
    window.App.applyI18n();
    assert('html[lang] se actualiza a "es"', document.documentElement.lang === 'es');
    endGroup();
  }

  /* ====================================================
     TEST 6 — Nav activo
  ==================================================== */
  async function testNavActive() {
    group('6. Enlace de nav activo');
    var rutas = ['/', '/perfil', '/banca', '/experiencia'];
    for (var i = 0; i < rutas.length; i++) {
      await navigateTo(rutas[i]);
      var active = document.querySelector('.nav__menu a.is-active');
      assert('Ruta ' + rutas[i] + ' tiene enlace activo en nav',
             active !== null && active.getAttribute('data-route') === rutas[i]);
    }
    endGroup();
  }

  /* ====================================================
     TEST 7 — Accesibilidad básica
  ==================================================== */
  async function testA11y() {
    group('7. Accesibilidad');
    await navigateTo('/');

    assert('<main> tiene tabindex="-1"',
           document.getElementById('app').getAttribute('tabindex') === '-1');
    assert('<main> tiene aria-live',
           document.getElementById('app').getAttribute('aria-live') === 'polite');
    assert('Skip-link presente',
           document.querySelector('.skip-link') !== null);
    assert('Skip-link apunta a #app',
           document.querySelector('.skip-link').getAttribute('href') === '#app');
    assert('<html lang> presente',
           !!document.documentElement.lang);

    /* Imágenes con alt */
    var imgs = document.querySelectorAll('#app img');
    var allHaveAlt = true;
    imgs.forEach(function (img) {
      if (img.getAttribute('alt') === null) allHaveAlt = false;
    });
    assert('Todas las imágenes de la vista home tienen atributo alt', allHaveAlt);
    endGroup();
  }

  /* ====================================================
     TEST 8 — Seguridad
  ==================================================== */
  async function testSecurity() {
    group('8. Seguridad');

    /* CSP meta tag */
    var csp = document.querySelector('meta[http-equiv="Content-Security-Policy"]');
    assert('Meta CSP presente', csp !== null);
    if (csp) {
      assert('CSP incluye frame-ancestors', csp.content.includes('frame-ancestors'));
      assert('CSP incluye script-src self',  csp.content.includes("script-src 'self'"));
      assert('CSP bloquea object-src',       csp.content.includes("object-src 'none'"));
    }

    /* Links externos */
    await navigateTo('/contacto');
    var externalLinks = document.querySelectorAll('#app a[target="_blank"]');
    var allSafe = true;
    externalLinks.forEach(function (a) {
      var rel = a.getAttribute('rel') || '';
      if (!rel.includes('noopener') || !rel.includes('noreferrer')) allSafe = false;
    });
    assert('Links externos tienen rel="noopener noreferrer"', allSafe);

    /* Sin onerror inline */
    await navigateTo('/');
    var imgsWithInlineOnerror = document.querySelectorAll('#app img[onerror]');
    assert('No hay atributos onerror inline en imágenes', imgsWithInlineOnerror.length === 0);

    /* noscript */
    var noscript = document.querySelector('noscript');
    assert('<noscript> fallback presente', noscript !== null);
    endGroup();
  }

  /* ====================================================
     TEST 9 — Performance / CLS
  ==================================================== */
  async function testPerformance() {
    group('9. Performance (CLS)');
    await navigateTo('/perfil');
    var imgs = document.querySelectorAll('#app img');
    var allHaveDimensions = true;
    imgs.forEach(function (img) {
      if (!img.getAttribute('width') || !img.getAttribute('height')) {
        allHaveDimensions = false;
      }
    });
    assert('Imágenes en /perfil tienen width y height (previene CLS)', allHaveDimensions);

    await navigateTo('/sobre-mi');
    var img = document.querySelector('#app img');
    assert('Imagen en /sobre-mi tiene width y height',
           img && img.getAttribute('width') && img.getAttribute('height'));
    endGroup();
  }

  /* ====================================================
     TEST 10 — Resiliencia del router
  ==================================================== */
  async function testRouterResilience() {
    group('10. Resiliencia del router');

    /* Hash vacío → home */
    window.location.hash = '';
    await new Promise(function (r) { setTimeout(r, 400); });
    var app = document.getElementById('app');
    assert('Hash vacío carga la vista home',
           app && app.innerHTML.includes('Héctor Rafael'));

    /* Hash con mayúsculas (ruta no existe) → 404 */
    await navigateTo('/PERFIL');
    assert('Ruta con mayúsculas desconocida muestra 404',
           app && app.innerHTML.includes('404'));

    /* Navegar rápido varias veces no rompe la app */
    await navigateTo('/perfil');
    await navigateTo('/banca');
    await navigateTo('/contacto');
    assert('Navegación rápida consecutiva no rompe el DOM',
           document.getElementById('app') !== null);
    endGroup();
  }

  /* ====================================================
     EJECUTAR TODAS LAS PRUEBAS
  ==================================================== */
  async function runAll() {
    console.clear();
    console.log(
      '%c🔬 SPA Test Suite — Héctor Morales Perfil Corporativo',
      'color: #1b6ef3; font-size: 1.1rem; font-weight: 800;'
    );
    console.log('%cEjecutando pruebas…', 'color: #64748b;');
    console.log('─'.repeat(55));

    await testGlobals();
    await testViews();
    await testRoutes();
    await test404();
    await testI18n();
    await testNavActive();
    await testA11y();
    await testSecurity();
    await testPerformance();
    await testRouterResilience();

    /* Restaurar a home al terminar */
    await navigateTo('/');

    console.log('─'.repeat(55));
    var total = passed + failed;
    var color = failed === 0 ? '#16a34a' : '#dc2626';
    console.log(
      '%c' + passed + '/' + total + ' pruebas pasaron' + (failed > 0 ? ' — ' + failed + ' fallaron' : ' ✅'),
      'color:' + color + '; font-weight: 800; font-size: 1rem;'
    );
    if (failed > 0) {
      console.warn('Revisa los ❌ de arriba para ver qué corregir.');
    }
  }

  runAll();
})();
