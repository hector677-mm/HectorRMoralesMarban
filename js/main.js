/* ============================================================
   Héctor Morales — interacciones del sitio
   - Cambio de idioma ES/EN
   - Menú móvil
   - Animaciones al hacer scroll
   ============================================================ */

(function () {
  "use strict";

  /* ---------- Diccionario de traducciones ---------- */
  const i18n = {
    es: {
      "nav.profile": "Perfil",
      "nav.expertise": "Especialización",
      "nav.banking": "Sector Bancario",
      "nav.experience": "Experiencia",
      "nav.certs": "Certificaciones",
      "nav.gallery": "Sobre mí",
      "nav.contact": "Contacto",

      "hero.eyebrow": "Infraestructura crítica · Especialista Oracle",
      "hero.role": "Administrador de Infraestructura UNIX Senior",
      "hero.lead": "Más de 15 años garantizando la continuidad de servidores core en entornos bancarios de alta criticidad. Especialista en plataformas Oracle: Exadata, Supercluster, Exalogic y OCI.",
      "hero.cta1": "Hablemos",
      "hero.cta2": "Descargar CV",

      "stats.years": "Años de experiencia",
      "stats.servers": "Servidores core gestionados",
      "stats.ha": "Alta disponibilidad",
      "stats.certs": "Certificaciones Oracle & Sun",

      "profile.kicker": "Perfil",
      "profile.title": "Continuidad operativa donde no se permite el error",
      "profile.p1": "Ingeniero en Comunicaciones y Electrónica con más de 15 años de experiencia técnica especializada en la administración de servidores core en entornos de alta criticidad. Experto en Solaris, Oracle Enterprise Linux, RHEL y HP-UX.",
      "profile.p2": "Trayectoria comprobada en la gestión de infraestructuras de gran escala (+200 servidores), alta disponibilidad, hardening de seguridad y tuning de sistema operativo para bases de datos y aplicaciones de misión crítica.",
      "profile.l1": "Planeación, instalación y configuración avanzada de SO",
      "profile.l2": "Hardening para cumplimiento normativo de seguridad",
      "profile.l3": "OS Tuning, Capacity Planning y alta disponibilidad",
      "profile.l4": "Automatización mediante Shell scripting",

      "expertise.kicker": "Especialización técnica",
      "expertise.title": "Plataformas Oracle de extremo a extremo",
      "expertise.c1.t": "Sistemas Operativos UNIX/Linux",
      "expertise.c1.d": "Solaris 5.8–11, Oracle Enterprise Linux, RHEL y HP-UX. Instalación, configuración avanzada, parchado y soporte.",
      "expertise.c2.t": "Oracle Engineered Systems",
      "expertise.c2.d": "Oracle Supercluster, Exadata, Exadata Cloud@Customer, Exalogic y OC3. Optimización para bases de datos de alto volumen.",
      "expertise.c3.t": "Cloud & OCI",
      "expertise.c3.d": "Oracle Cloud Infrastructure (OCI) certificado 2023 y 2025. Migración y operación de cargas críticas en nube híbrida.",
      "expertise.c4.t": "Hardening & Alta Disponibilidad",
      "expertise.c4.d": "Endurecimiento de seguridad para cumplimiento, planes de HA, tuning de rendimiento y capacity planning.",
      "expertise.c5.t": "Automatización & Shell Scripting",
      "expertise.c5.d": "Desarrollo de scripts para monitoreo, mantenimiento controlado y automatización de tareas operativas.",
      "expertise.c6.t": "Storage & Hardware",
      "expertise.c6.d": "Oracle Flash Storage FS1, integración con Storage y Redes, soporte y mantenimiento de hardware Oracle-Sun.",

      "banking.kicker": "Sector financiero",
      "banking.title": "Experiencia en banca de misión crítica",
      "banking.lead": "He operado y resguardado infraestructura para algunas de las instituciones financieras y proyectos más exigentes de México, donde cada segundo de disponibilidad cuenta.",
      "banking.monex": "Administración de +200 servidores core sobre plataformas Oracle (Supercluster, Exadata, Exalogic, OCI) desde 2014.",
      "banking.bbva": "Administración y soporte del aplicativo SWIFT Alliance Access sobre AIX 6 para transferencias financieras internacionales.",
      "banking.clients": "Servicio de ingeniería y soporte de hardware/SO Oracle-Sun para clientes corporativos de gran escala.",

      "exp.kicker": "Trayectoria",
      "exp.title": "Experiencia profesional",
      "exp.present": "Actualidad",
      "exp.monex.role": "Administrador de Infraestructura UNIX Senior",
      "exp.monex.l1": "Administración de +200 servidores core (Solaris, OEL, RHEL).",
      "exp.monex.l2": "Hardening de seguridad y planes de Alta Disponibilidad.",
      "exp.monex.l3": "OS Tuning, Capacity Planning y automatización con Shell.",
      "exp.monex.l4": "Plataformas: Supercluster, Exadata, Exadata C@C, Exalogic, OC3, OCI.",
      "exp.sat.role": "Administrador de Infraestructura UNIX (HP-UX)",
      "exp.sat.l1": "Operatividad de 200 servidores HP-UX y resolución de incidentes complejos.",
      "exp.sat.l2": "Integración con Storage y Redes; gestión de respaldos.",
      "exp.sat.l3": "Afinación de SO para alto volumen de datos. Plataforma: HP 9000 Superdome.",
      "exp.cfe.role": "Jefe de Oficina de Comunicaciones — Zona Zihuatanejo",
      "exp.cfe.l1": "Liderazgo de personal técnico y administración de contratos de radiotelecomunicación.",
      "exp.cfe.l2": "Gestión del Telecontrol de Subestaciones y optimización de red LAN/Wi-Fi.",
      "exp.bbva.role": "Administrador y Soporte de Aplicativo SWIFT",
      "exp.bbva.l1": "Soporte técnico para SWIFT Alliance Access y administración de SO AIX 6.",
      "exp.bbva.l2": "Desarrollo de scripts de aplicación para mantenimiento controlado.",
      "exp.gtc.role": "Ingeniero de Servicio Sun Microsystems",
      "exp.gtc.l1": "Mantenimiento preventivo/correctivo de hardware Oracle-Sun (Sun Fire, Netra, Ultra, Sparc).",
      "exp.gtc.l2": "Instalación y configuración de Solaris 5.8, 5.9 y 5.10.",
      "exp.gtc.l3": "Clientes: CFE, Telefónica, Nextel, PEMEX, SEP, Telmex, Banamex.",

      "certs.kicker": "Credenciales",
      "certs.title": "Certificaciones y formación",
      "certs.subcerts": "Certificaciones y cursos",
      "certs.subedu": "Formación académica",
      "certs.subskills": "Aptitudes",
      "certs.edu.title": "Ingeniero en Comunicaciones y Electrónica",
      "certs.edu.cedula": "Cédula Profesional",
      "certs.s1": "Resolución bajo presión",
      "certs.s2": "Relación con clientes",
      "certs.s3": "Proactividad",
      "certs.s4": "Autodidacta",

      "gallery.kicker": "Más sobre mí",
      "gallery.title": "Más allá del servidor",
      "gallery.lead": "Detrás de la infraestructura crítica hay una persona apasionada por la tecnología, el aprendizaje continuo y el equilibrio.",
      "gallery.c1": "Momento 1",
      "gallery.c2": "Momento 2",
      "gallery.c3": "Momento 3",
      "gallery.c4": "Momento 4",

      "tech.kicker": "Stack tecnológico",
      "tech.title": "Dominio técnico",
      "tech.lead": "Tecnologías que administro a diario en producción de alta criticidad.",

      "logros.kicker": "Impacto",
      "logros.title": "Logros destacados",
      "logros.l1": "Servidores core administrados simultáneamente sin comprometer la continuidad del negocio.",
      "logros.l2": "Operación de plataformas críticas con planes de Alta Disponibilidad y recuperación.",
      "logros.l3": "Soporte a transferencias financieras internacionales sobre infraestructura bancaria.",
      "logros.l4": "Migración y operación de cargas críticas hacia plataformas Oracle Cloud y Exadata C@C.",

      "tst.kicker": "Lo que dicen",
      "tst.title": "Testimonios",
      "tst.q1": "“Profesional confiable y meticuloso; resuelve incidentes críticos bajo presión manteniendo siempre la continuidad operativa.”",
      "tst.a1": "Nombre del colega/cliente",
      "tst.r1": "Cargo · Empresa",
      "tst.q2": "“Su dominio de las plataformas Oracle y su capacidad de automatización elevaron el rendimiento de nuestra infraestructura.”",
      "tst.a2": "Nombre del colega/cliente",
      "tst.r2": "Cargo · Empresa",
      "tst.q3": "“Un especialista al que confiarías sin dudar los sistemas más sensibles de la organización.”",
      "tst.a3": "Nombre del colega/cliente",
      "tst.r3": "Cargo · Empresa",

      "about.philo.t": "Mi filosofía",
      "about.philo.p": "Creo en la disciplina, la mejora continua y la responsabilidad sobre cada sistema que administro. Mi enfoque combina prevención, resistencia y resultados sostenibles, con la constancia y el aprendizaje continuo como base de todo lo que hago.",
      "about.h1.t": "Deporte & Fitness",
      "about.h1.d": "Entrenamiento constante como hábito de vida: disciplina, energía y enfoque que traslado al trabajo.",
      "about.h2.t": "Viajes",
      "about.h2.d": "Explorar nuevos lugares y culturas; cada viaje aporta perspectiva y creatividad para resolver problemas.",

      "contact.kicker": "Contacto",
      "contact.title": "Construyamos infraestructura confiable",
      "contact.lead": "Disponible para proyectos de administración, migración y optimización de infraestructura crítica. Hablemos.",
      "contact.phone": "Teléfono",
      "contact.cv": "Descargar CV completo (PDF)",

      "footer.role": "Administrador de Infraestructura UNIX Senior · Especialista Oracle"
    },

    en: {
      "nav.profile": "Profile",
      "nav.expertise": "Expertise",
      "nav.banking": "Banking Sector",
      "nav.experience": "Experience",
      "nav.certs": "Certifications",
      "nav.gallery": "About me",
      "nav.contact": "Contact",

      "hero.eyebrow": "Mission-critical infrastructure · Oracle specialist",
      "hero.role": "Senior UNIX Infrastructure Administrator",
      "hero.lead": "Over 15 years ensuring uptime of core servers in high-criticality banking environments. Oracle platform specialist: Exadata, Supercluster, Exalogic and OCI.",
      "hero.cta1": "Let's talk",
      "hero.cta2": "Download CV",

      "stats.years": "Years of experience",
      "stats.servers": "Core servers managed",
      "stats.ha": "High availability",
      "stats.certs": "Oracle & Sun certifications",

      "profile.kicker": "Profile",
      "profile.title": "Operational continuity where failure is not an option",
      "profile.p1": "Communications & Electronics Engineer with over 15 years of technical experience specialized in administering core servers in high-criticality environments. Expert in Solaris, Oracle Enterprise Linux, RHEL and HP-UX.",
      "profile.p2": "Proven track record managing large-scale infrastructure (+200 servers), high availability, security hardening and OS tuning for mission-critical databases and applications.",
      "profile.l1": "Advanced OS planning, installation and configuration",
      "profile.l2": "Hardening for security compliance",
      "profile.l3": "OS Tuning, Capacity Planning and high availability",
      "profile.l4": "Automation through Shell scripting",

      "expertise.kicker": "Technical expertise",
      "expertise.title": "End-to-end Oracle platforms",
      "expertise.c1.t": "UNIX/Linux Operating Systems",
      "expertise.c1.d": "Solaris 5.8–11, Oracle Enterprise Linux, RHEL and HP-UX. Installation, advanced configuration, patching and support.",
      "expertise.c2.t": "Oracle Engineered Systems",
      "expertise.c2.d": "Oracle Supercluster, Exadata, Exadata Cloud@Customer, Exalogic and OC3. Tuning for high-volume databases.",
      "expertise.c3.t": "Cloud & OCI",
      "expertise.c3.d": "Oracle Cloud Infrastructure (OCI) certified 2023 and 2025. Migration and operation of critical workloads in hybrid cloud.",
      "expertise.c4.t": "Hardening & High Availability",
      "expertise.c4.d": "Security hardening for compliance, HA plans, performance tuning and capacity planning.",
      "expertise.c5.t": "Automation & Shell Scripting",
      "expertise.c5.d": "Development of scripts for monitoring, controlled maintenance and automation of operational tasks.",
      "expertise.c6.t": "Storage & Hardware",
      "expertise.c6.d": "Oracle Flash Storage FS1, Storage and Network integration, Oracle-Sun hardware support and maintenance.",

      "banking.kicker": "Financial sector",
      "banking.title": "Experience in mission-critical banking",
      "banking.lead": "I have operated and safeguarded infrastructure for some of Mexico's most demanding financial institutions and projects, where every second of uptime counts.",
      "banking.monex": "Administration of +200 core servers on Oracle platforms (Supercluster, Exadata, Exalogic, OCI) since 2014.",
      "banking.bbva": "Administration and support of the SWIFT Alliance Access application on AIX 6 for international financial transfers.",
      "banking.clients": "Engineering service and Oracle-Sun hardware/OS support for large-scale corporate clients.",

      "exp.kicker": "Career",
      "exp.title": "Professional experience",
      "exp.present": "Present",
      "exp.monex.role": "Senior UNIX Infrastructure Administrator",
      "exp.monex.l1": "Administration of +200 core servers (Solaris, OEL, RHEL).",
      "exp.monex.l2": "Security hardening and High Availability plans.",
      "exp.monex.l3": "OS Tuning, Capacity Planning and Shell automation.",
      "exp.monex.l4": "Platforms: Supercluster, Exadata, Exadata C@C, Exalogic, OC3, OCI.",
      "exp.sat.role": "UNIX Infrastructure Administrator (HP-UX)",
      "exp.sat.l1": "Operation of 200 HP-UX servers and resolution of complex incidents.",
      "exp.sat.l2": "Storage and Network integration; backup management.",
      "exp.sat.l3": "OS tuning for high data volume. Platform: HP 9000 Superdome.",
      "exp.cfe.role": "Communications Office Manager — Zihuatanejo Zone",
      "exp.cfe.l1": "Leadership of technical staff and management of radio-telecom contracts.",
      "exp.cfe.l2": "Substation Telecontrol management and LAN/Wi-Fi network optimization.",
      "exp.bbva.role": "SWIFT Application Administrator & Support",
      "exp.bbva.l1": "Technical support for SWIFT Alliance Access and AIX 6 OS administration.",
      "exp.bbva.l2": "Development of application scripts for controlled maintenance.",
      "exp.gtc.role": "Sun Microsystems Service Engineer",
      "exp.gtc.l1": "Preventive/corrective maintenance of Oracle-Sun hardware (Sun Fire, Netra, Ultra, Sparc).",
      "exp.gtc.l2": "Installation and configuration of Solaris 5.8, 5.9 and 5.10.",
      "exp.gtc.l3": "Clients: CFE, Telefónica, Nextel, PEMEX, SEP, Telmex, Banamex.",

      "certs.kicker": "Credentials",
      "certs.title": "Certifications and education",
      "certs.subcerts": "Certifications and courses",
      "certs.subedu": "Academic background",
      "certs.subskills": "Soft skills",
      "certs.edu.title": "Communications & Electronics Engineer",
      "certs.edu.cedula": "Professional License",
      "certs.s1": "Problem-solving under pressure",
      "certs.s2": "Client relationship management",
      "certs.s3": "Proactivity",
      "certs.s4": "Self-taught",

      "gallery.kicker": "More about me",
      "gallery.title": "Beyond the server",
      "gallery.lead": "Behind mission-critical infrastructure there's a person passionate about technology, continuous learning and balance.",
      "gallery.c1": "Moment 1",
      "gallery.c2": "Moment 2",
      "gallery.c3": "Moment 3",
      "gallery.c4": "Moment 4",

      "tech.kicker": "Tech stack",
      "tech.title": "Technical proficiency",
      "tech.lead": "Technologies I manage daily in high-criticality production.",

      "logros.kicker": "Impact",
      "logros.title": "Key achievements",
      "logros.l1": "Core servers managed simultaneously without compromising business continuity.",
      "logros.l2": "Operation of critical platforms with High Availability and recovery plans.",
      "logros.l3": "Support for international financial transfers on banking infrastructure.",
      "logros.l4": "Migration and operation of critical workloads to Oracle Cloud and Exadata C@C.",

      "tst.kicker": "What they say",
      "tst.title": "Testimonials",
      "tst.q1": "“Reliable and meticulous professional; solves critical incidents under pressure while always maintaining operational continuity.”",
      "tst.a1": "Colleague/Client name",
      "tst.r1": "Role · Company",
      "tst.q2": "“His command of Oracle platforms and automation skills boosted the performance of our infrastructure.”",
      "tst.a2": "Colleague/Client name",
      "tst.r2": "Role · Company",
      "tst.q3": "“A specialist you would trust with the organization's most sensitive systems without hesitation.”",
      "tst.a3": "Colleague/Client name",
      "tst.r3": "Role · Company",

      "about.philo.t": "My philosophy",
      "about.philo.p": "I believe in discipline, continuous improvement and ownership of every system I manage. My approach combines prevention, endurance and sustainable results, with consistency and continuous learning at the core of everything I do.",
      "about.h1.t": "Sport & Fitness",
      "about.h1.d": "Consistent training as a way of life: discipline, energy and focus that I carry into my work.",
      "about.h2.t": "Travel",
      "about.h2.d": "Exploring new places and cultures; every trip brings perspective and creativity for solving problems.",

      "contact.kicker": "Contact",
      "contact.title": "Let's build reliable infrastructure",
      "contact.lead": "Available for infrastructure administration, migration and optimization projects. Let's talk.",
      "contact.phone": "Phone",
      "contact.cv": "Download full CV (PDF)",

      "footer.role": "Senior UNIX Infrastructure Administrator · Oracle Specialist"
    }
  };

  /* ---------- Aplicar idioma ---------- */
  function setLanguage(lang) {
    const dict = i18n[lang] || i18n.es;
    document.documentElement.lang = lang;

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      const key = el.getAttribute("data-i18n");
      if (dict[key]) el.textContent = dict[key];
    });

    document.querySelectorAll(".lang-switch__opt").forEach(function (opt) {
      opt.classList.toggle("is-active", opt.getAttribute("data-lang") === lang);
    });

    try { localStorage.setItem("hm-lang", lang); } catch (e) {}
  }

  /* ---------- Estado inicial de idioma ---------- */
  let saved = "es";
  try { saved = localStorage.getItem("hm-lang") || "es"; } catch (e) {}
  if (saved === "en") setLanguage("en");

  /* ---------- Toggle de idioma ---------- */
  const langSwitch = document.getElementById("langSwitch");
  if (langSwitch) {
    langSwitch.addEventListener("click", function () {
      const next = document.documentElement.lang === "es" ? "en" : "es";
      setLanguage(next);
    });
  }

  /* ---------- Menú móvil ---------- */
  const navToggle = document.getElementById("navToggle");
  const navMenu = document.getElementById("navMenu");
  if (navToggle && navMenu) {
    navToggle.addEventListener("click", function () {
      const open = navMenu.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", String(open));
    });
    navMenu.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        navMenu.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---------- Año en footer ---------- */
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Animaciones al hacer scroll ---------- */
  const revealEls = document.querySelectorAll(
    ".card, .tl, .stat, .ccard, .badges li, .edu, .banca__list li, .section__head, .skill, .logro, .tst__card, .hobby, .about__philo, .about__media, .imageband__fig, .section__media"
  );
  revealEls.forEach(function (el) { el.classList.add("reveal"); });

  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-in");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("is-in"); });
  }
})();
