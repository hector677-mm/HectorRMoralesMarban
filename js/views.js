/* ============================================================
   views.js — Vistas de la SPA
   Cada propiedad de window.Views es una función que devuelve
   el HTML de una ruta. El Router llama a estas funciones y
   monta el resultado en <main id="app">.

   Rutas registradas:
     /           → home       (Hero + Stats)
     /perfil     → perfil     (Perfil + Expertise + Stack)
     /banca      → banca      (Sector Bancario)
     /experiencia→ experiencia(Timeline)
     /logros     → logros     (Logros + Certificaciones)
     /sobre-mi   → sobremi    (Filosofía + Foto)
     /contacto   → contacto   (Tarjetas de contacto)
   ============================================================ */
(function () {
  'use strict';

  window.Views = {

    /* ==================== HOME ==================== */
    home: function () {
      return `
        <section class="hero">
          <div class="hero__bg" aria-hidden="true"></div>
          <div class="container hero__inner">
            <div class="hero__content">
              <p class="hero__eyebrow" data-i18n="hero.eyebrow">Infraestructura crítica · Especialista Oracle</p>
              <h1 class="hero__title">Héctor Rafael<br>Morales Marbán</h1>
              <p class="hero__role" data-i18n="hero.role">Administrador de Infraestructura UNIX Senior</p>
              <p class="hero__lead" data-i18n="hero.lead">Más de 15 años garantizando la continuidad de servidores core en entornos bancarios de alta criticidad. Especialista en plataformas Oracle: Exadata, Supercluster, Exalogic y OCI.</p>
              <div class="hero__actions">
                <a href="#/contacto" class="btn btn--primary" data-i18n="hero.cta1">Hablemos</a>
                <a href="assets/CV_Hector_Morales_2026.pdf" class="btn btn--ghost" download data-i18n="hero.cta2">Descargar CV</a>
              </div>
              <div class="hero__chips" aria-hidden="true">
                <span>Solaris</span><span>Oracle Linux</span><span>RHEL</span>
                <span>Exadata</span><span>HP-UX</span><span>OCI</span>
              </div>
            </div>
            <div class="hero__visual">
              <div class="hero__photo">
                <img src="assets/img/galeria-1.jpg" alt="Héctor Rafael Morales Marbán"
                     width="290" height="290" class="js-hero-photo" />
                <div class="hero__photo-fallback" style="display:none;">HM</div>
                <div class="hero__photo-ring" aria-hidden="true"></div>
              </div>
            </div>
          </div>
        </section>

        <section class="stats">
          <div class="container stats__grid">
            <div class="stat">
              <span class="stat__num">+15</span>
              <span class="stat__label" data-i18n="stats.years">Años de experiencia</span>
            </div>
            <div class="stat">
              <span class="stat__num">+200</span>
              <span class="stat__label" data-i18n="stats.servers">Servidores core gestionados</span>
            </div>
            <div class="stat">
              <span class="stat__num">24/7</span>
              <span class="stat__label" data-i18n="stats.ha">Alta disponibilidad</span>
            </div>
            <div class="stat">
              <span class="stat__num">8</span>
              <span class="stat__label" data-i18n="stats.certs">Certificaciones Oracle &amp; Sun</span>
            </div>
          </div>
        </section>`;
    },

    /* ==================== PERFIL ==================== */
    perfil: function () {
      return `
        <section class="section">
          <div class="container section__grid">
            <div class="section__head">
              <span class="section__kicker" data-i18n="profile.kicker">Perfil</span>
              <h2 class="section__title" data-i18n="profile.title">Continuidad operativa donde no se permite el error</h2>
              <img class="section__media" src="assets/img/galeria-2.jpg" alt="Héctor Morales en entorno profesional" loading="lazy" width="768" height="480" />
            </div>
            <div class="section__body">
              <p data-i18n="profile.p1">Ingeniero en Comunicaciones y Electrónica con más de 15 años de experiencia técnica especializada en la administración de servidores core en entornos de alta criticidad. Experto en Solaris, Oracle Enterprise Linux, RHEL y HP-UX.</p>
              <p data-i18n="profile.p2">Trayectoria comprobada en la gestión de infraestructuras de gran escala (+200 servidores), alta disponibilidad, hardening de seguridad y tuning de sistema operativo para bases de datos y aplicaciones de misión crítica.</p>
              <ul class="checklist">
                <li data-i18n="profile.l1">Planeación, instalación y configuración avanzada de SO</li>
                <li data-i18n="profile.l2">Hardening para cumplimiento normativo de seguridad</li>
                <li data-i18n="profile.l3">OS Tuning, Capacity Planning y alta disponibilidad</li>
                <li data-i18n="profile.l4">Automatización mediante Shell scripting</li>
              </ul>
            </div>
          </div>
        </section>

        <section class="section section--alt">
          <div class="container">
            <div class="section__head section__head--center">
              <span class="section__kicker" data-i18n="expertise.kicker">Especialización técnica</span>
              <h2 class="section__title" data-i18n="expertise.title">Plataformas Oracle de extremo a extremo</h2>
            </div>
            <div class="cards">
              <article class="card">
                <div class="card__icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="4" width="18" height="5" rx="1.5"/><rect x="3" y="13" width="18" height="5" rx="1.5"/><circle cx="7" cy="6.5" r="1" fill="currentColor"/><circle cx="7" cy="15.5" r="1" fill="currentColor"/></svg>
                </div>
                <h3 data-i18n="expertise.c1.t">Sistemas Operativos UNIX/Linux</h3>
                <p data-i18n="expertise.c1.d">Solaris 5.8–11, Oracle Enterprise Linux, RHEL y HP-UX. Instalación, configuración avanzada, parchado y soporte.</p>
              </article>
              <article class="card">
                <div class="card__icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M6 16a4 4 0 0 1 0-8 5 5 0 0 1 9.6-1.5A3.5 3.5 0 0 1 18 16H6z"/><path d="M9 19l1.5 2M12 19l1.5 2M15 19l1.5 2"/></svg>
                </div>
                <h3 data-i18n="expertise.c2.t">Oracle Engineered Systems</h3>
                <p data-i18n="expertise.c2.d">Oracle Supercluster, Exadata, Exadata Cloud@Customer, Exalogic y OC3. Optimización para bases de datos de alto volumen.</p>
              </article>
              <article class="card">
                <div class="card__icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M7 18a4 4 0 0 1 0-8 5 5 0 0 1 9.6-1.5A3.5 3.5 0 0 1 19 18H7z"/><path d="M12 13v6m0 0-2-2m2 2 2-2"/></svg>
                </div>
                <h3 data-i18n="expertise.c3.t">Cloud &amp; OCI</h3>
                <p data-i18n="expertise.c3.d">Oracle Cloud Infrastructure (OCI) certificado 2023 y 2025. Migración y operación de cargas críticas en nube híbrida.</p>
              </article>
              <article class="card">
                <div class="card__icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3z"/><path d="M9 12l2 2 4-4"/></svg>
                </div>
                <h3 data-i18n="expertise.c4.t">Hardening &amp; Alta Disponibilidad</h3>
                <p data-i18n="expertise.c4.d">Endurecimiento de seguridad para cumplimiento, planes de HA, tuning de rendimiento y capacity planning.</p>
              </article>
              <article class="card">
                <div class="card__icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M8 9l-3 3 3 3M16 9l3 3-3 3M13 7l-2 10"/></svg>
                </div>
                <h3 data-i18n="expertise.c5.t">Automatización &amp; Shell Scripting</h3>
                <p data-i18n="expertise.c5.d">Desarrollo de scripts para monitoreo, mantenimiento controlado y automatización de tareas operativas.</p>
              </article>
              <article class="card">
                <div class="card__icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 9h18M7 14h5"/></svg>
                </div>
                <h3 data-i18n="expertise.c6.t">Storage &amp; Hardware</h3>
                <p data-i18n="expertise.c6.d">Oracle Flash Storage FS1, integración con Storage y Redes, soporte y mantenimiento de hardware Oracle-Sun.</p>
              </article>
            </div>
          </div>
        </section>

        <section class="section">
          <div class="container">
            <div class="section__head section__head--center">
              <span class="section__kicker" data-i18n="tech.kicker">Stack tecnológico</span>
              <h2 class="section__title" data-i18n="tech.title">Dominio técnico</h2>
              <p class="gallery__lead" data-i18n="tech.lead">Tecnologías que administro a diario en producción de alta criticidad.</p>
            </div>
            <div class="skills">
              <div class="skill"><div class="skill__top"><span>Oracle Solaris</span><span>95%</span></div><div class="skill__bar"><span style="--w:95%"></span></div></div>
              <div class="skill"><div class="skill__top"><span>Oracle Linux / RHEL</span><span>92%</span></div><div class="skill__bar"><span style="--w:92%"></span></div></div>
              <div class="skill"><div class="skill__top"><span>Exadata / Supercluster</span><span>90%</span></div><div class="skill__bar"><span style="--w:90%"></span></div></div>
              <div class="skill"><div class="skill__top"><span>Hardening &amp; Alta Disponibilidad</span><span>90%</span></div><div class="skill__bar"><span style="--w:90%"></span></div></div>
              <div class="skill"><div class="skill__top"><span>Shell Scripting</span><span>88%</span></div><div class="skill__bar"><span style="--w:88%"></span></div></div>
              <div class="skill"><div class="skill__top"><span>HP-UX / AIX</span><span>85%</span></div><div class="skill__bar"><span style="--w:85%"></span></div></div>
              <div class="skill"><div class="skill__top"><span>OCI — Oracle Cloud</span><span>85%</span></div><div class="skill__bar"><span style="--w:85%"></span></div></div>
              <div class="skill"><div class="skill__top"><span>Storage (Flash FS1)</span><span>80%</span></div><div class="skill__bar"><span style="--w:80%"></span></div></div>
            </div>
          </div>
        </section>`;
    },

    /* ==================== BANCA ==================== */
    banca: function () {
      return `
        <section class="section banca">
          <div class="container banca__inner">
            <div class="banca__content">
              <span class="section__kicker section__kicker--light" data-i18n="banking.kicker">Sector financiero</span>
              <h2 class="section__title section__title--light" data-i18n="banking.title">Experiencia en banca de misión crítica</h2>
              <p class="banca__lead" data-i18n="banking.lead">He operado y resguardado infraestructura para algunas de las instituciones financieras y proyectos más exigentes de México, donde cada segundo de disponibilidad cuenta.</p>
              <ul class="banca__list">
                <li>
                  <strong>MONEX</strong>
                  <span data-i18n="banking.monex">Administración de +200 servidores core sobre plataformas Oracle (Supercluster, Exadata, Exalogic, OCI) desde 2014.</span>
                </li>
                <li>
                  <strong>BBVA Bancomer</strong>
                  <span data-i18n="banking.bbva">Administración y soporte del aplicativo SWIFT Alliance Access sobre AIX 6 para transferencias financieras internacionales.</span>
                </li>
                <li>
                  <strong>Banamex · Telmex · PEMEX · CFE</strong>
                  <span data-i18n="banking.clients">Servicio de ingeniería y soporte de hardware/SO Oracle-Sun para clientes corporativos de gran escala.</span>
                </li>
              </ul>
            </div>
            <div class="banca__visual" aria-hidden="true">
              <div class="banca__badge">SWIFT</div>
              <div class="banca__badge banca__badge--2">Oracle</div>
              <div class="banca__badge banca__badge--3">24/7</div>
              <svg class="banca__svg" viewBox="0 0 200 200" fill="none">
                <circle cx="100" cy="100" r="78" stroke="rgba(255,255,255,.25)" stroke-width="1.5"/>
                <circle cx="100" cy="100" r="56" stroke="rgba(255,255,255,.18)" stroke-width="1.5"/>
                <circle cx="100" cy="100" r="34" stroke="rgba(255,255,255,.14)" stroke-width="1.5"/>
                <path d="M100 22v156M22 100h156" stroke="rgba(255,255,255,.1)" stroke-width="1"/>
              </svg>
            </div>
          </div>
        </section>`;
    },

    /* ==================== EXPERIENCIA ==================== */
    experiencia: function () {
      return `
        <section class="section section--alt">
          <div class="container">
            <div class="section__head section__head--center">
              <span class="section__kicker" data-i18n="exp.kicker">Trayectoria</span>
              <h2 class="section__title" data-i18n="exp.title">Experiencia profesional</h2>
            </div>
            <div class="timeline">
              <div class="tl">
                <div class="tl__dot"></div>
                <div class="tl__card">
                  <span class="tl__date">Nov 2014 — <span data-i18n="exp.present">Actualidad</span></span>
                  <h3>MONEX <small>(Grupo de Tecnología Cibernética / Axtel)</small></h3>
                  <p class="tl__role" data-i18n="exp.monex.role">Administrador de Infraestructura UNIX Senior</p>
                  <ul>
                    <li data-i18n="exp.monex.l1">Administración de +200 servidores core (Solaris, OEL, RHEL).</li>
                    <li data-i18n="exp.monex.l2">Hardening de seguridad y planes de Alta Disponibilidad.</li>
                    <li data-i18n="exp.monex.l3">OS Tuning, Capacity Planning y automatización con Shell.</li>
                    <li data-i18n="exp.monex.l4">Plataformas: Supercluster, Exadata, Exadata C@C, Exalogic, OC3, OCI.</li>
                  </ul>
                </div>
              </div>
              <div class="tl">
                <div class="tl__dot"></div>
                <div class="tl__card">
                  <span class="tl__date">Abr 2013 — Nov 2014</span>
                  <h3>Sistema de Administración Tributaria <small>(Indra)</small></h3>
                  <p class="tl__role" data-i18n="exp.sat.role">Administrador de Infraestructura UNIX (HP-UX)</p>
                  <ul>
                    <li data-i18n="exp.sat.l1">Operatividad de 200 servidores HP-UX y resolución de incidentes complejos.</li>
                    <li data-i18n="exp.sat.l2">Integración con Storage y Redes; gestión de respaldos.</li>
                    <li data-i18n="exp.sat.l3">Afinación de SO para alto volumen de datos. Plataforma: HP 9000 Superdome.</li>
                  </ul>
                </div>
              </div>
              <div class="tl">
                <div class="tl__dot"></div>
                <div class="tl__card">
                  <span class="tl__date">Ene 2012 — Ene 2013</span>
                  <h3>Comisión Federal de Electricidad <small>(División Centro Sur)</small></h3>
                  <p class="tl__role" data-i18n="exp.cfe.role">Jefe de Oficina de Comunicaciones — Zona Zihuatanejo</p>
                  <ul>
                    <li data-i18n="exp.cfe.l1">Liderazgo de personal técnico y administración de contratos de radiotelecomunicación.</li>
                    <li data-i18n="exp.cfe.l2">Gestión del Telecontrol de Subestaciones y optimización de red LAN/Wi-Fi.</li>
                  </ul>
                </div>
              </div>
              <div class="tl">
                <div class="tl__dot"></div>
                <div class="tl__card">
                  <span class="tl__date">Feb 2011 — Nov 2011</span>
                  <h3>BBVA Bancomer <small>(Getronics)</small></h3>
                  <p class="tl__role" data-i18n="exp.bbva.role">Administrador y Soporte de Aplicativo SWIFT</p>
                  <ul>
                    <li data-i18n="exp.bbva.l1">Soporte técnico para SWIFT Alliance Access y administración de SO AIX 6.</li>
                    <li data-i18n="exp.bbva.l2">Desarrollo de scripts de aplicación para mantenimiento controlado.</li>
                  </ul>
                </div>
              </div>
              <div class="tl">
                <div class="tl__dot"></div>
                <div class="tl__card">
                  <span class="tl__date">Jun 2009 — Feb 2011</span>
                  <h3>Grupo de Tecnología Cibernética</h3>
                  <p class="tl__role" data-i18n="exp.gtc.role">Ingeniero de Servicio Sun Microsystems</p>
                  <ul>
                    <li data-i18n="exp.gtc.l1">Mantenimiento preventivo/correctivo de hardware Oracle-Sun (Sun Fire, Netra, Ultra, Sparc).</li>
                    <li data-i18n="exp.gtc.l2">Instalación y configuración de Solaris 5.8, 5.9 y 5.10.</li>
                    <li data-i18n="exp.gtc.l3">Clientes: CFE, Telefónica, Nextel, PEMEX, SEP, Telmex, Banamex.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>`;
    },

    /* ==================== LOGROS + CERTIFICACIONES ==================== */
    logros: function () {
      return `
        <section class="section">
          <div class="container">
            <div class="section__head section__head--center">
              <span class="section__kicker" data-i18n="logros.kicker">Impacto</span>
              <h2 class="section__title" data-i18n="logros.title">Logros destacados</h2>
            </div>
            <div class="logros">
              <article class="logro">
                <span class="logro__num">+200</span>
                <p data-i18n="logros.l1">Servidores core administrados simultáneamente sin comprometer la continuidad del negocio.</p>
              </article>
              <article class="logro">
                <span class="logro__num">24/7</span>
                <p data-i18n="logros.l2">Operación de plataformas críticas con planes de Alta Disponibilidad y recuperación.</p>
              </article>
              <article class="logro">
                <span class="logro__num">SWIFT</span>
                <p data-i18n="logros.l3">Soporte a transferencias financieras internacionales sobre infraestructura bancaria.</p>
              </article>
              <article class="logro">
                <span class="logro__num">OCI</span>
                <p data-i18n="logros.l4">Migración y operación de cargas críticas hacia plataformas Oracle Cloud y Exadata C@C.</p>
              </article>
            </div>
          </div>
        </section>

        <section class="section section--alt">
          <div class="container">
            <div class="section__head section__head--center">
              <span class="section__kicker" data-i18n="certs.kicker">Credenciales</span>
              <h2 class="section__title" data-i18n="certs.title">Certificaciones y formación</h2>
            </div>
            <div class="certs">
              <div class="certs__col">
                <h3 class="certs__h" data-i18n="certs.subcerts">Certificaciones y cursos</h3>
                <ul class="badges">
                  <li>Oracle Solaris 11 Installation &amp; Config</li>
                  <li>Oracle Linux 7: Advanced Administration</li>
                  <li>Oracle VM Server for x86: Admin</li>
                  <li>Oracle Exalogic Elastic Cloud 2.x</li>
                  <li>Oracle Flash Storage System: FS1 Admin</li>
                  <li>System Fault Analysis Workshop (Sun)</li>
                  <li>OCI 2023 Certified Foundations Associate</li>
                  <li>OCI 2025 Certified Foundations Associate</li>
                </ul>
              </div>
              <div class="certs__col">
                <h3 class="certs__h" data-i18n="certs.subedu">Formación académica</h3>
                <div class="edu">
                  <h4 data-i18n="certs.edu.title">Ingeniero en Comunicaciones y Electrónica</h4>
                  <p>Instituto Politécnico Nacional — ESIME Zacatenco</p>
                  <p class="edu__meta">2004 – 2008 · <span data-i18n="certs.edu.cedula">Cédula Profesional</span>: 7006242</p>
                </div>
                <h3 class="certs__h" data-i18n="certs.subskills">Aptitudes</h3>
                <ul class="badges badges--soft">
                  <li data-i18n="certs.s1">Resolución bajo presión</li>
                  <li data-i18n="certs.s2">Relación con clientes</li>
                  <li data-i18n="certs.s3">Proactividad</li>
                  <li data-i18n="certs.s4">Autodidacta</li>
                </ul>
              </div>
            </div>
          </div>
        </section>`;
    },

    /* ==================== SOBRE MÍ ==================== */
    sobremi: function () {
      return `
        <section class="section section--alt">
          <div class="container">
            <div class="section__head section__head--center">
              <span class="section__kicker" data-i18n="gallery.kicker">Más sobre mí</span>
              <h2 class="section__title" data-i18n="gallery.title">Más allá del servidor</h2>
              <p class="gallery__lead" data-i18n="gallery.lead">Detrás de la infraestructura crítica hay una persona apasionada por la tecnología, el aprendizaje continuo y el equilibrio.</p>
            </div>
            <div class="about">
              <div class="about__philo">
                <h3 data-i18n="about.philo.t">Mi filosofía</h3>
                <p data-i18n="about.philo.p">Creo en la disciplina, la mejora continua y la responsabilidad sobre cada sistema que administro. Mi enfoque combina prevención, resistencia y resultados sostenibles, con la constancia y el aprendizaje continuo como base de todo lo que hago.</p>
              </div>
              <figure class="about__media">
                <img src="assets/img/galeria-3.jpg" alt="Héctor Morales" loading="lazy" width="768" height="512" />
              </figure>
            </div>
          </div>
        </section>`;
    },

    /* ==================== 404 ==================== */
    notFound: function () {
      return `
        <section class="section notfound">
          <div class="container notfound__inner">
            <div class="notfound__code" aria-hidden="true">404</div>
            <h1 class="notfound__title">Página no encontrada</h1>
            <p class="notfound__msg">La ruta que intentas visitar no existe.</p>
            <a href="#/" class="btn btn--primary">Volver al inicio</a>
          </div>
        </section>`;
    },

    /* ==================== CONTACTO ==================== */
    contacto: function () {
      return `
        <section class="section contacto">
          <div class="container contacto__inner">
            <div class="contacto__head">
              <span class="section__kicker section__kicker--light" data-i18n="contact.kicker">Contacto</span>
              <h2 class="section__title section__title--light" data-i18n="contact.title">Construyamos infraestructura confiable</h2>
              <p class="contacto__lead" data-i18n="contact.lead">Disponible para proyectos de administración, migración y optimización de infraestructura crítica. Hablemos.</p>
            </div>
            <div class="contacto__grid">
              <a class="ccard" href="mailto:hector677@hotmail.com">
                <span class="ccard__icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>
                </span>
                <span class="ccard__label">Email</span>
                <span class="ccard__value">hector677@hotmail.com</span>
              </a>
              <a class="ccard" href="https://wa.me/525531185556" target="_blank" rel="noopener noreferrer">
                <span class="ccard__icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M21 11.5a8.4 8.4 0 0 1-12.3 7.4L3 21l2.2-5.6A8.4 8.4 0 1 1 21 11.5z"/><path d="M8.5 9.5c0 4 3 6.5 6 6.5.7 0 1.3-.6 1.3-1.2l-1.8-1-1 .8c-1-.5-1.8-1.3-2.3-2.3l.8-1-1-1.8c-.6 0-1.2.5-1.2 1z" fill="currentColor" stroke="none"/></svg>
                </span>
                <span class="ccard__label">WhatsApp</span>
                <span class="ccard__value">+52 55 3118 5556</span>
              </a>
              <a class="ccard" href="https://www.linkedin.com/in/hrmoralesm" target="_blank" rel="noopener noreferrer">
                <span class="ccard__icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM3 9h4v12H3zM10 9h3.8v1.7h.05c.53-1 1.83-2.05 3.76-2.05C21.4 8.65 22 11 22 14.3V21h-4v-5.9c0-1.4-.02-3.2-1.95-3.2-1.96 0-2.26 1.53-2.26 3.1V21h-4z"/></svg>
                </span>
                <span class="ccard__label">LinkedIn</span>
                <span class="ccard__value">/in/hrmoralesm</span>
              </a>
            </div>
            <div class="contacto__cv">
              <a href="assets/CV_Hector_Morales_2026.pdf" class="btn btn--light" download data-i18n="contact.cv">Descargar CV completo (PDF)</a>
            </div>
          </div>
        </section>`;
    }

  };
})();
