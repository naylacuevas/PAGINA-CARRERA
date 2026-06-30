
  // ---- Pantalla de Carga ----

setTimeout(function () {
      var pantalla = document.getElementById('loading-screen');
      var app      = document.getElementById('app');

      pantalla.classList.add('ocultar');   // inicia fade out
      setTimeout(function () {
        pantalla.style.display = 'none';   // quita del DOM
        app.style.display = 'block';       // muestra tu página
      }, 600); // 600ms = duración del fade out
    }, 3000);

    

window.addEventListener('DOMContentLoaded', function () {

  // ---- Marcar nav link activo ----
  var pagina = window.location.pathname.split('/').pop();
  document.querySelectorAll('.navbar-nav .nav-link').forEach(function (link) {
    var href = link.getAttribute('href') || '';
    if (
      (pagina === '' || pagina === 'index.html') && (href === 'index.html' || href === '#inicio')
    ) { link.classList.add('activo'); }
    else if (href.includes(pagina) && pagina !== '' && pagina !== 'index.html') {
      link.classList.add('activo');
    }
  });

  // ---- ScrollReveal: Animación 1 — Hero texto (izquierda) ----
  if (typeof ScrollReveal !== 'undefined') {

    ScrollReveal().reveal('.hero-eyebrow, .hero-title, .hero-desc, .hero-btns', {
      origin: 'left',
      distance: '60px',
      duration: 900,
      delay: 200,
      interval: 120,
      easing: 'cubic-bezier(0.5,0,0,1)',
      reset: false
    });

    // Animación 2 — Hero imagen (derecha)
    ScrollReveal().reveal('.hero-laptop', {
      origin: 'right',
      distance: '60px',
      duration: 900,
      delay: 300,
      easing: 'cubic-bezier(0.5,0,0,1)',
      reset: false
    });

    // Animación 3 — Accesos rápidos (abajo, en cascada)
    ScrollReveal().reveal('.acceso-card', {
      origin: 'bottom',
      distance: '40px',
      duration: 700,
      delay: 80,
      interval: 100,
      easing: 'ease-out',
      reset: false
    });

    // Animación 4 — Sección carrera y malla (zoom suave)
    ScrollReveal().reveal('.mvob-tab, .semestre-card, .perfil-card', {
      scale: 0.92,
      duration: 650,
      delay: 80,
      interval: 80,
      easing: 'ease-out',
      reset: false
    });

    // Animación 5 — Galería items (abajo)
    ScrollReveal().reveal('.g-item', {
      origin: 'bottom',
      distance: '30px',
      duration: 600,
      delay: 60,
      interval: 70,
      easing: 'ease-out',
      reset: false
    });

    // Animación 6 — Footer cols
    ScrollReveal().reveal('.footer-col', {
      origin: 'bottom',
      distance: '30px',
      duration: 600,
      delay: 80,
      interval: 100,
      easing: 'ease-out',
      reset: false
    });

    // Animación 7 — Labels de sección
    ScrollReveal().reveal('.sec-label, .sec-titulo', {
      origin: 'left',
      distance: '30px',
      duration: 600,
      delay: 50,
      easing: 'ease-out',
      reset: false
    });
  }

  // ---- Tabs Misión / Visión / Objetivos ----
  document.querySelectorAll('.mvob-tab').forEach(function (tab) {
    tab.addEventListener('click', function () {
      var yaAbierto = this.classList.contains('abierto');
      document.querySelectorAll('.mvob-tab').forEach(function (t) {
        t.classList.remove('abierto');
      });
      if (!yaAbierto) this.classList.add('abierto');
    });
  });

  // Abrir el primero por defecto
  var primerTab = document.querySelector('.mvob-tab');
  if (primerTab) primerTab.classList.add('abierto');

  // ---- Tabs Malla Curricular (por año) ----
  document.querySelectorAll('.year-tab-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var year = this.getAttribute('data-year');
      document.querySelectorAll('.year-tab-btn').forEach(function (b) { b.classList.remove('activo'); });
      document.querySelectorAll('.year-pane').forEach(function (p) { p.classList.remove('activo'); });
      this.classList.add('activo');
      var pane = document.getElementById('year-' + year);
      if (pane) pane.classList.add('activo');
    });
  });

  // ---- Galería: filtros ----
  document.querySelectorAll('.g-filtro').forEach(function (btn) {
    btn.addEventListener('click', function () {
      document.querySelectorAll('.g-filtro').forEach(function (b) { b.classList.remove('activo'); });
      this.classList.add('activo');
      var cat = this.getAttribute('data-cat');
      document.querySelectorAll('.g-item').forEach(function (item) {
        if (cat === 'todos' || item.getAttribute('data-cat') === cat) {
          item.classList.remove('oculto');
        } else {
          item.classList.add('oculto');
        }
      });
    });
  });

  // ---- Galería: lightbox ----
  var lb    = document.getElementById('lightbox');
  var lbImg = document.getElementById('lb-img');
  var lbCer = document.getElementById('lb-cerrar');

  if (lb && lbImg) {
    document.querySelectorAll('.g-item img').forEach(function (img) {
      img.addEventListener('click', function () {
        lbImg.src = this.src;
        lb.classList.add('abierto');
      });
    });
    if (lbCer) lbCer.addEventListener('click', function () { lb.classList.remove('abierto'); });
    lb.addEventListener('click', function (e) {
      if (e.target === lb) lb.classList.remove('abierto');
    });
  }

  // ---- Formulario de contacto ----
  var form = document.getElementById('form-contacto');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var valido = true;

      form.querySelectorAll('[required]').forEach(function (campo) {
        campo.classList.remove('invalido');
        if (!campo.value.trim()) {
          campo.classList.add('invalido');
          valido = false;
        }
      });

      var email = form.querySelector('#email');
      if (email && email.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
        email.classList.add('invalido');
        valido = false;
      }

      if (valido) {
        var btn = form.querySelector('.btn-enviar-form');
        var original = btn.textContent;
        btn.textContent = '✓ Mensaje enviado correctamente';
        btn.style.background = '#2e7d32';
        setTimeout(function () {
          btn.textContent = original;
          btn.style.background = '';
          form.reset();
        }, 3000);
      }
    });
  }

});

  // =============================================
  //  ✨ EFECTOS FUTURISTAS — partículas + scanner
  // =============================================

  // ---- Línea de escaneo en sección Hero ----
  var heroSection = document.getElementById('inicio');
  if (heroSection) {
    var scanLine = document.createElement('div');
    scanLine.className = 'hero-scan-line';
    heroSection.appendChild(scanLine);
  }

  // ---- Partículas flotantes en Hero ----
  if (heroSection) {
    var particleCount = 18;
    for (var i = 0; i < particleCount; i++) {
      var p = document.createElement('div');
      p.className = 'particle-dot';
      var size = Math.random() * 3 + 1.5;
      var tx   = (Math.random() - 0.5) * 120;
      var ty   = -(Math.random() * 100 + 40);
      var dur  = (Math.random() * 5 + 5).toFixed(1) + 's';
      var del  = (Math.random() * 6).toFixed(1) + 's';
      p.style.cssText = [
        'width:'  + size + 'px',
        'height:' + size + 'px',
        'left:'   + (Math.random() * 100) + '%',
        'top:'    + (Math.random() * 100) + '%',
        '--tx:'   + tx + 'px',
        '--ty:'   + ty + 'px',
        '--dur:'  + dur,
        '--delay:' + del
      ].join(';');
      heroSection.appendChild(p);
    }
  }

  // ---- Efecto de escritura en hero-eyebrow ----
  var eyebrow = document.querySelector('.hero-eyebrow');
  if (eyebrow) {
    var texto = eyebrow.textContent.trim();
    eyebrow.textContent = '';
    eyebrow.style.borderRight = '2px solid var(--cyan)';
    eyebrow.style.display = 'inline-block';
    var idx = 0;
    var typeInterval = setInterval(function () {
      eyebrow.textContent += texto[idx];
      idx++;
      if (idx >= texto.length) {
        clearInterval(typeInterval);
        setTimeout(function () { eyebrow.style.borderRight = 'none'; }, 600);
      }
    }, 65);
  }

  // ---- Glow dinámico al cursor sobre la imagen hero ----
  var heroImg = document.querySelector('.hero-laptop');
  if (heroImg) {
    heroImg.addEventListener('mousemove', function (e) {
      var rect = heroImg.getBoundingClientRect();
      var cx = e.clientX - rect.left;
      var cy = e.clientY - rect.top;
      var px = (cx / rect.width  - 0.5) * 2;
      var py = (cy / rect.height - 0.5) * 2;
      heroImg.style.transform = 'perspective(700px) rotateY(' + (px * 6) + 'deg) rotateX(' + (-py * 4) + 'deg) scale(1.02)';
    });
    heroImg.addEventListener('mouseleave', function () {
      heroImg.style.transform = '';
    });
  }

  // ---- Acceso cards: destello de entrada al hover ----
  document.querySelectorAll('.acceso-card').forEach(function (card) {
    card.addEventListener('mouseenter', function () {
      card.style.transition = 'all 0.25s cubic-bezier(0.2,0,0,1.4)';
    });
    card.addEventListener('mouseleave', function () {
      card.style.transition = 'all 0.35s ease';
    });
  });

  // ---- Contador animado para cifras (si existen elementos .fstat-num) ----
  function animarContador(el) {
    var target = parseInt(el.getAttribute('data-target'), 10);
    var duration = 1600;
    var start = null;
    function step(ts) {
      if (!start) start = ts;
      var progress = Math.min((ts - start) / duration, 1);
      var eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.floor(eased * target);
      if (progress < 1) requestAnimationFrame(step);
      else el.textContent = target;
    }
    requestAnimationFrame(step);
  }
  var statEls = document.querySelectorAll('.fstat-num');
  if (statEls.length && typeof IntersectionObserver !== 'undefined') {
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { animarContador(e.target); obs.unobserve(e.target); }
      });
    }, { threshold: 0.5 });
    statEls.forEach(function (el) { obs.observe(el); });
  }


    // Animación — Sección Video
    ScrollReveal().reveal('.video-titulo, .video-desc, .video-highlights, .video-wrapper', {
      origin: 'bottom',
      distance: '40px',
      duration: 700,
      delay: 80,
      interval: 100,
      easing: 'ease-out',
      reset: false
    });

    // Animación — Redes hero (entrada desde abajo en cascada)
    ScrollReveal().reveal('.hero-red-btn', {
      origin: 'bottom',
      distance: '20px',
      duration: 500,
      delay: 600,
      interval: 80,
      easing: 'cubic-bezier(0.2,0,0,1.4)',
      reset: false
    });

    // Animación — Título galería
    ScrollReveal().reveal('.sec-titulo-galeria', {
      origin: 'left',
      distance: '30px',
      duration: 600,
      delay: 50,
      easing: 'ease-out',
      reset: false
    });

document.querySelectorAll('.btn-nivel').forEach(function (btn) {
  btn.addEventListener('click', function () {
    var nivel = btn.getAttribute('data-nivel');

    document.querySelectorAll('.btn-nivel').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    document.querySelectorAll('.carrusel-nivel').forEach(c => c.style.display = 'none');
    document.getElementById('nivel-' + nivel).style.display = 'block';
  });
});