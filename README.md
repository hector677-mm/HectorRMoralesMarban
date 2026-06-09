# Perfil corporativo — Héctor Rafael Morales Marbán

Sitio web de perfil profesional (bilingüe ES/EN, estilo tech azul/teal) para
presentación a clientes. Pensado para publicarse en **GitHub Pages**.

---

## 📁 Estructura del proyecto

```
Hi5/
├── index.html                  ← Página principal
├── css/styles.css              ← Estilos (azul/teal, responsive)
├── js/main.js                  ← Idioma ES/EN, menú móvil, animaciones
├── assets/
│   ├── favicon.svg             ← Ícono del navegador (monograma HM)
│   ├── CV_Hector_Morales_2026.pdf   ← ⚠️ AGREGA AQUÍ tu CV en PDF
│   └── img/
│       └── hector.jpg          ← ⚠️ AGREGA AQUÍ tu foto (PNG o JPG)
├── .nojekyll                   ← Evita el procesamiento Jekyll de GitHub
└── README.md
```

---

## ✅ ANTES de publicar: 2 archivos que debes agregar

1. **Tu foto** → guárdala como `assets/img/hector.jpg`
   - Formato **JPG o PNG** (la versión que adjuntaste no era legible).
   - Recomendado: cuadrada, mínimo **600×600 px**, fondo limpio.
   - Si no la agregas, la página muestra automáticamente un monograma "HM" elegante.

2. **Tu CV en PDF** → guárdalo como `assets/CV_Hector_Morales_2026.pdf`
   - Es lo que descargan los botones "Descargar CV".
   - Si usas otro nombre, actualiza los `href` en `index.html` (búscalo: hay 2).

> Los enlaces de contacto ya están configurados:
> Email `hector677@hotmail.com` · WhatsApp/Tel `+52 55 3118 5556` · LinkedIn `/in/hrmoralesm`.

---

## 🚀 Paso a paso — Publicar en GitHub Pages

> Tienes 2 caminos. El **A (web, sin terminal)** es el más sencillo.
> El **B (con Git)** es para cuando quieras actualizar cómodamente.

### Decisión previa: ¿qué URL quieres?

| Tipo de repositorio        | Nombre del repo          | URL resultante                          |
|----------------------------|--------------------------|-----------------------------------------|
| **Sitio de usuario** (recom.) | `TU_USUARIO.github.io`   | `https://TU_USUARIO.github.io`          |
| **Sitio de proyecto**      | cualquier nombre, ej. `perfil` | `https://TU_USUARIO.github.io/perfil` |

Sustituye `TU_USUARIO` por tu usuario real de GitHub en todos los pasos.

---

### 🅰️ Opción A — Solo navegador (recomendada, sin instalar nada)

1. **Inicia sesión** en https://github.com
2. Crea el repositorio:
   - Clic en **+** (arriba a la derecha) → **New repository**.
   - **Repository name:** `TU_USUARIO.github.io` (para la URL corta) o `perfil`.
   - Visibilidad: **Public** (obligatorio para Pages gratuito).
   - **NO** marques "Add a README". Clic en **Create repository**.
3. **Sube los archivos:**
   - En el repo vacío: **uploading an existing file**.
   - Arrastra **todo el contenido de la carpeta `Hi5`** (no la carpeta, sino lo de adentro):
     `index.html`, las carpetas `css/`, `js/`, `assets/`, y `.nojekyll`.
   - Asegúrate de haber agregado primero tu **foto** y tu **CV PDF** (ver arriba).
   - Escribe un mensaje (ej. "Publicación inicial") y clic en **Commit changes**.
4. **Activa GitHub Pages:**
   - Ve a **Settings** (del repo) → menú izquierdo **Pages**.
   - En **Source** selecciona **Deploy from a branch**.
   - **Branch:** `main` · **Folder:** `/ (root)` → **Save**.
5. **Espera 1–2 minutos.** Recarga la página de Pages: aparecerá
   *"Your site is live at …"*. Esa es tu URL. ✅

---

### 🅱️ Opción B — Con Git desde la terminal (Mac)

```bash
# 1) Ubícate en la carpeta del proyecto
cd "/Users/hectormorales/Desktop/Anahuac/2do Trimestre/Programación Avanzada/Hi5"

# 2) Inicializa Git
git init
git branch -M main

# 3) Agrega y confirma los archivos
git add .
git commit -m "Publicación inicial del perfil corporativo"

# 4) Conecta con tu repo de GitHub (créalo antes, vacío, en github.com)
git remote add origin https://github.com/TU_USUARIO/TU_USUARIO.github.io.git

# 5) Sube
git push -u origin main
```

Luego activa Pages igual que en el **paso 4 de la Opción A**
(Settings → Pages → Deploy from a branch → `main` / root → Save).

Para futuras actualizaciones:
```bash
git add .
git commit -m "Actualización"
git push
```

---

## 🌐 (Opcional) Dominio propio

Si más adelante quieres `www.tudominio.com` en vez de la URL `.github.io`:

1. Compra el dominio (Namecheap, GoDaddy, etc.).
2. En tu proveedor DNS agrega:
   - 4 registros **A** apuntando a: `185.199.108.153`, `185.199.109.153`,
     `185.199.110.153`, `185.199.111.153`.
   - Un registro **CNAME** `www` → `TU_USUARIO.github.io`.
3. En GitHub: **Settings → Pages → Custom domain**, escribe tu dominio y guarda.
4. Marca **Enforce HTTPS** (puede tardar unos minutos en habilitarse).

---

## 🛠️ Personalización rápida

| Quiero cambiar…            | Dónde                                                        |
|----------------------------|-------------------------------------------------------------|
| Textos (ES y EN)           | `js/main.js` (objeto `i18n`) y/o `index.html`               |
| Colores (azul/teal)        | `css/styles.css` → variables `:root` (`--blue`, `--teal`)   |
| Foto                       | Reemplaza `assets/img/hector.jpg`                           |
| Datos de contacto          | `index.html` → sección `#contacto`                          |
| Orden de secciones         | Mueve los `<section>` en `index.html`                       |

> El sitio recuerda el idioma elegido por el visitante (ES/EN) en su navegador.

---

## 👀 Ver el sitio en tu Mac antes de publicar

Abre `index.html` con doble clic, **o** levanta un servidor local:

```bash
cd "/Users/hectormorales/Desktop/Anahuac/2do Trimestre/Programación Avanzada/Hi5"
python3 -m http.server 8080
# Luego abre: http://localhost:8080
```
