# Perfil Corporativo — Héctor Rafael Morales Marbán

Sitio web de perfil profesional bilingüe (ES/EN) publicado en **GitHub Pages**.  
Arquitectura **Vanilla JS SPA** con enrutamiento hash (`#/ruta`), sin frameworks ni build step.

---

## Estructura del proyecto

```
Hi5/
├── index.html              ← Shell SPA (nav + footer persistentes, <main id="app">)
├── css/
│   └── styles.css          ← Estilos (azul/teal, responsive, transiciones de vista)
├── js/
│   ├── i18n.js             ← Diccionario ES/EN (window.I18N)
│   ├── views.js            ← Plantillas HTML de cada ruta (window.Views)
│   ├── router.js           ← Enrutador hash (window.Router)
│   └── app.js              ← Bootstrap: i18n, reveal, nav activo, accesibilidad
├── assets/
│   ├── favicon.svg         ← Ícono del navegador (monograma HM)
│   └── img/
│       ├── galeria-1.jpg   ← Foto principal (hero)
│       ├── galeria-2.jpg   ← Foto sección perfil
│       ├── galeria-3.jpg   ← Foto sección sobre mí
│       └── galeria-4.jpg   ← Foto adicional
├── tests/
│   └── spa-tests.js        ← Suite de pruebas (48 aserciones, consola del navegador)
├── robots.txt
├── .nojekyll               ← Evita el procesamiento Jekyll de GitHub Pages
└── .gitignore
```

---

## Rutas SPA

| Hash | Vista |
|------|-------|
| `#/` | Inicio (hero, stats, tech stack) |
| `#/perfil` | Perfil profesional y habilidades |
| `#/banca` | Experiencia en sector bancario |
| `#/experiencia` | Historial de posiciones |
| `#/logros` | Logros destacados y certificaciones |
| `#/sobre-mi` | Filosofía personal y galería |
| `#/contacto` | Email, WhatsApp, LinkedIn |

---

## Ver el sitio localmente

```bash
cd "/ruta/al/proyecto"
python3 -m http.server 8080
# Abre: http://localhost:8080
```

## Ejecutar las pruebas

Con el servidor corriendo, abre la consola del navegador (F12) y pega:

```js
fetch('http://localhost:8080/tests/spa-tests.js').then(r=>r.text()).then(eval)
```

---

## Sitio publicado

[https://hector677-mm.github.io/HectorRMoralesMarban/](https://hector677-mm.github.io/HectorRMoralesMarban/)
