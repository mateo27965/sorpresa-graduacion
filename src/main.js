const photos = [
  "public/fotos/01.jpg",
  "public/fotos/02.jpg",
  "public/fotos/03.jpg",
  "public/fotos/04.jpg",
  "public/fotos/05.jpg",
  "public/fotos/06.jpg",
  "public/fotos/07.jpg",
  "public/fotos/08.jpg",
  "public/fotos/09.jpg",
  "public/fotos/10.jpg",
  "public/fotos/11.jpg",
  "public/fotos/12.jpg",
  "public/fotos/13.jpg",
  "public/fotos/14.jpg",
];

const app = document.querySelector("#app");

app.innerHTML = `
  <div class="bg">
    <div class="noise"></div>
    <div class="transition" id="transition" aria-hidden="true">
      <div class="envelope">
        <div class="envTop"></div>
        <div class="envBody"></div>
        <div class="seal">💛</div>
      </div>
      <div class="tText">Viajando a tu carta…</div>
  </div>

    <canvas id="confetti"></canvas>
    <div class="toast" id="toast">Eres lo mejor que me ha pasado!</div>

    <main class="shell">
      <!-- SCREEN 1 -->
      <section class="view is-active" id="screen1" aria-hidden="false">
        <div class="topbar">
          <div class="brand">
            <div class="logo">⚖️</div>
            <div class="brandText">
              <div class="brandTitle">Paola Romero</div>
              <div class="brandSub">Derecho • Universidad Ricardo Palma</div>
            </div>
          </div>
          <div class="pill">25·06·2019 — ∞</div>
        </div>

        <div class="heroCard">
          <div class="heroTitle">Felicidades mi graduada! 🎓</div>

          <p class="heroLead">
            Paola, esta es una carta para ti.  
            Un pequeño viaje por nuestros momentos… y lo orgulloso que me siento de verte lograrlo. 🎓⚖️
          </p>


          <button class="cta" id="openBtn">
            Abrir carta ✉️
            <span class="ctaIcon">→</span>
          </button>

        </div>

        <footer class="footer">
          Hecho con amor por <strong>Mateo</strong> 💛
        </footer>
      </section>

      <!-- SCREEN 2 -->
      <section class="view" id="screen2" aria-hidden="true">
        <div class="panel">
          <div class="panelTop">
            <button class="iconBtn" id="backBtn" aria-label="Volver">←</button>

            <div class="panelTitle">
              <div class="panelH">Nuestros momentos</div>
              <div class="panelS">
                <span id="counter">1</span> / <span id="total">${photos.length}</span>
              </div>
            </div>

            <div class="miniPill">Paola ⚖️</div>
          </div>

          <div class="progress">
            <div class="progressFill" id="progressFill"></div>
          </div>

          <div class="carousel" id="carousel">
            <button class="navBtn" id="prev" aria-label="Anterior">‹</button>

            <div class="photoFrame">
              <img id="photo" alt="Foto de ustedes" />
              <div class="photoGlow"></div>
            </div>

            <button class="navBtn" id="next" aria-label="Siguiente">›</button>
          </div>

          <div class="dots" id="dots"></div>

          <div class="letter">
            <div class="letterHead">
              <div class="letterTitle">Para mi Abogada Paola</div>
              <div class="letterSub">Un mensaje corto, pero con todo mi corazón.</div>
            </div>

            <p class="letterText">
              Amor, hoy celebramos un logro enorme: terminaste tu carrera de Derecho en la Universidad Ricardo Palma,
              y lo hiciste a tu manera: con constancia, con fuerza y con esa disciplina tuya que tanto admiro. 🎓⚖️
              <br><br>
              Me enamora tu valentía y la forma en que nunca te rendiste, incluso en los días más pesados.
              Gracias por dejarme acompañarte desde el 25/06/2019: cada paso tuyo lo siento como una victoria de los dos.
              <br><br>
              Hoy te gradúas… y yo solo puedo decirte esto:
              <strong class="proud">me siento infinitamente orgulloso de ti.</strong>
              <br><br>
              Con todo mi amor,<br>
              Mateo ❤️
            </p>
          </div>
        </div>
      </section>
    </main>
  </div>
`;

const style = document.createElement("style");
style.textContent = `
  :root {
    --bg0: #05060a;
    --bg1: #0b0b12;
    --card: rgba(255,255,255,.08);
    --stroke: rgba(255,255,255,.12);
    --stroke2: rgba(255,255,255,.18);
    --text: rgba(255,255,255,.92);
    --muted: rgba(255,255,255,.68);
    --muted2: rgba(255,255,255,.55);
    --shadow: 0 24px 80px rgba(0,0,0,.45);
    --r: 22px;
    --inter: Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial;
    --serif: "Playfair Display", ui-serif, Georgia, serif;
  }

  * { box-sizing: border-box; }
  html, body { height: 100%; }
  body {
    margin: 0;
    font-family: var(--inter);
    color: var(--text);
    background: radial-gradient(1200px 700px at 15% 10%, rgba(255, 120, 200, .15), transparent 60%),
                radial-gradient(900px 700px at 85% 20%, rgba(120, 160, 255, .14), transparent 60%),
                linear-gradient(180deg, var(--bg0), var(--bg1));
    overflow-x: hidden;
  }

  .bg { min-height: 100vh; position: relative; }
  .noise {
    position: absolute; inset: 0; pointer-events: none; opacity: .08;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='180' height='180' filter='url(%23n)' opacity='.55'/%3E%3C/svg%3E");
    mix-blend-mode: overlay;
  }

  .shell {
    min-height: 100vh;
    display: grid;
    place-items: center;
    padding: 18px;
  }

  .view {
    width: min(620px, 100%);
    display: none;
    transform: translateY(10px);
    opacity: 0;
    transition: opacity .35s ease, transform .35s ease;
  }
  .view.is-active {
    display: block;
    opacity: 1;
    transform: translateY(0);
  }

  /* Top bar */
  .topbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    margin-bottom: 14px;
  }

  .brand { display: flex; align-items: center; gap: 12px; }
  .logo {
    width: 42px; height: 42px; border-radius: 14px;
    display: grid; place-items: center;
    background: rgba(255,255,255,.10);
    border: 1px solid var(--stroke);
    box-shadow: 0 12px 30px rgba(0,0,0,.25);
  }
  .brandTitle { font-weight: 700; letter-spacing: .2px; }
  .brandSub { font-size: 12px; color: var(--muted); }

  .pill {
    font-size: 12px;
    padding: 8px 10px;
    border-radius: 999px;
    background: rgba(255,255,255,.08);
    border: 1px solid var(--stroke);
    color: var(--muted);
    white-space: nowrap;
  }

  /* Hero card */
  .heroCard {
    background: var(--card);
    border: 1px solid var(--stroke);
    border-radius: var(--r);
    padding: 18px;
    box-shadow: var(--shadow);
    backdrop-filter: blur(14px);
  }

  .heroBadge { font-size: 34px; }
  .heroTitle {
    font-family: var(--serif);
    font-weight: 700;
    letter-spacing: .2px;
    margin: 10px 0 8px;
    font-size: 34px;
    line-height: 1.05;
  }
  .heart { display: inline-block; transform: translateY(2px); }

  .heroLead {
    margin: 0 0 14px;
    color: var(--muted);
    line-height: 1.45;
    font-size: 15px;
  }

  .chips { display: flex; flex-wrap: wrap; gap: 8px; margin: 10px 0 16px; }
  .chip {
    font-size: 12px;
    padding: 8px 10px;
    border-radius: 999px;
    background: rgba(0,0,0,.18);
    border: 1px solid var(--stroke);
    color: rgba(255,255,255,.80);
  }

  .cta {
    width: 100%;
    border: none;
    border-radius: 16px;
    padding: 14px 14px;
    font-weight: 800;
    font-size: 16px;
    cursor: pointer;
    background: linear-gradient(135deg, rgba(255,255,255,.95), rgba(255,255,255,.78));
    color: #0a0a0f;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    box-shadow: 0 16px 40px rgba(0,0,0,.35);
    transition: transform .15s ease, filter .15s ease;
  }
  .cta:hover { filter: brightness(1.02); }
  .cta:active { transform: translateY(1px) scale(.995); }
  .ctaIcon { font-weight: 900; }

  .hint {
    margin: 12px 0 0;
    font-size: 12px;
    color: var(--muted2);
    text-align: center;
  }

  .footer {
    margin-top: 14px;
    text-align: center;
    font-size: 12px;
    color: var(--muted2);
  }

  /* Screen 2 panel */
  .panel {
    background: var(--card);
    border: 1px solid var(--stroke);
    border-radius: var(--r);
    padding: 16px;
    box-shadow: var(--shadow);
    backdrop-filter: blur(14px);
  }

  .panelTop {
    display: grid;
    grid-template-columns: 44px 1fr auto;
    align-items: center;
    gap: 10px;
    margin-bottom: 10px;
  }

  .iconBtn {
    width: 44px;
    height: 44px;
    border-radius: 14px;
    background: rgba(255,255,255,.10);
    border: 1px solid var(--stroke);
    color: #fff;
    font-size: 18px;
    cursor: pointer;
  }
  .iconBtn:active { transform: translateY(1px); }

  .panelH { font-weight: 800; letter-spacing: .2px; }
  .panelS { font-size: 12px; color: var(--muted); }

  .miniPill {
    font-size: 12px;
    padding: 8px 10px;
    border-radius: 999px;
    background: rgba(0,0,0,.18);
    border: 1px solid var(--stroke);
    color: rgba(255,255,255,.82);
    white-space: nowrap;
  }

  .progress {
    height: 8px;
    border-radius: 999px;
    background: rgba(255,255,255,.08);
    border: 1px solid var(--stroke);
    overflow: hidden;
    margin-bottom: 14px;
  }
  .progressFill {
    height: 100%;
    width: 0%;
    background: linear-gradient(90deg, rgba(255,120,200,.95), rgba(120,160,255,.95));
    border-radius: 999px;
    transition: width .25s ease;
  }

  .carousel {
    display: grid;
    grid-template-columns: 52px 1fr 52px;
    align-items: center;
    gap: 10px;
    margin-bottom: 10px;
    user-select: none;
  }

  .navBtn {
    width: 52px;
    height: 52px;
    border-radius: 16px;
    background: rgba(255,255,255,.10);
    border: 1px solid var(--stroke);
    color: #fff;
    font-size: 28px;
    cursor: pointer;
  }
  .navBtn:active { transform: translateY(1px); }

  .photoFrame {
    position: relative;
    border-radius: 18px;
    overflow: hidden;
    border: 1px solid var(--stroke);
    background: rgba(0,0,0,.25);
  }
  #photo {
    width: 100%;
    height: 340px;
    object-fit: cover;
    display: block;
    transform: scale(1.01);
  }
  .photoGlow {
    position: absolute; inset: 0;
    background: radial-gradient(500px 280px at 20% 20%, rgba(255,120,200,.20), transparent 55%),
                radial-gradient(500px 280px at 80% 10%, rgba(120,160,255,.18), transparent 55%);
    pointer-events: none;
  }

  .dots {
    display: flex;
    gap: 6px;
    justify-content: center;
    flex-wrap: wrap;
    margin: 10px 0 14px;
  }
  .dot {
    width: 8px; height: 8px; border-radius: 999px;
    background: rgba(255,255,255,.28);
  }
  .dot.active { background: rgba(255,255,255,.92); }

  /* Letter */
  .letter {
    margin-top: 10px;
    background: rgba(0,0,0,.18);
    border: 1px solid var(--stroke);
    border-radius: 18px;
    padding: 14px;
  }
  .letterHead { margin-bottom: 8px; }
  .letterTitle {
    font-family: var(--serif);
    font-weight: 700;
    font-size: 18px;
    letter-spacing: .2px;
  }
  .letterSub { font-size: 12px; color: var(--muted); }

  .letterText {
    margin: 0;
    color: rgba(255,255,255,.86);
    line-height: 1.55;
    font-size: 15px;
  }
  .proud { color: rgba(255,255,255,.96); }

  /* Responsive */
  @media (max-width: 420px) {
    #photo { height: 300px; }
    .heroTitle { font-size: 30px; }
  }

  /* Confetti canvas */
#confetti{
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 50;
}

/* Toast (easter egg) */
.toast{
  position: fixed;
  left: 50%;
  bottom: 22px;
  transform: translateX(-50%) translateY(14px);
  opacity: 0;
  padding: 10px 14px;
  border-radius: 999px;
  background: rgba(0,0,0,.45);
  border: 1px solid rgba(255,255,255,.16);
  backdrop-filter: blur(12px);
  color: rgba(255,255,255,.95);
  font-size: 13px;
  box-shadow: 0 18px 50px rgba(0,0,0,.35);
  z-index: 60;
  transition: opacity .25s ease, transform .25s ease;
}
.toast.show{
  opacity: 1;
  transform: translateX(-50%) translateY(0);
}

/* Animaciones premium */
@keyframes iosIn {
  from { opacity: 0; transform: translateY(14px) scale(.985); filter: blur(6px); }
  to   { opacity: 1; transform: translateY(0) scale(1); filter: blur(0); }
}

@keyframes iosOut {
  from { opacity: 1; transform: translateY(0) scale(1); }
  to   { opacity: 0; transform: translateY(10px) scale(.992); }
}

/* cuando una vista se activa, anima */
.view.is-active .heroCard,
.view.is-active .panel,
.view.is-active .topbar,
.view.is-active .footer {
  animation: iosIn .55s cubic-bezier(.2,.9,.2,1) both;
}

/* micro-animación en botones */
.cta, .iconBtn, .navBtn {
  will-change: transform;
}

@media (prefers-reduced-motion: reduce) {
  .view.is-active .heroCard,
  .view.is-active .panel,
  .view.is-active .topbar,
  .view.is-active .footer {
    animation: none !important;
  }
}

/* Fade + zoom suave al cambiar de foto */
#photo {
  transition: opacity .22s ease, transform .38s ease;
  will-change: opacity, transform;
}

#photo.is-fading {
  opacity: 0;
  transform: scale(1.03);
}

/* ====== Responsive iPhone safe-area ====== */
.shell{
  padding: calc(18px + env(safe-area-inset-top)) 18px calc(18px + env(safe-area-inset-bottom));
}

/* Panel en iPhone: que no se “pase” y sea scrolleable */
.panel{
  max-height: calc(100vh - 36px - env(safe-area-inset-top) - env(safe-area-inset-bottom));
  overflow: auto;
  -webkit-overflow-scrolling: touch;
}

/* Foto: altura adaptable (más pro) */
#photo{
  height: clamp(250px, 42vh, 380px);
}

/* ====== Transición “viaje a la carta” ====== */
.transition{
  position: fixed;
  inset: 0;
  z-index: 999;
  display: grid;
  place-items: center;
  background: radial-gradient(900px 600px at 50% 35%, rgba(255,255,255,.10), transparent 60%),
              rgba(5,6,10,.72);
  backdrop-filter: blur(16px);
  opacity: 0;
  pointer-events: none;
  transition: opacity .25s ease;
}
.transition.show{
  opacity: 1;
  pointer-events: auto;
}

.envelope{
  width: 110px;
  height: 78px;
  position: relative;
  transform: translateY(20px) scale(.95);
  animation: flyIn .85s cubic-bezier(.2,.9,.2,1) forwards;
}
@keyframes flyIn{
  0%{ transform: translateY(26px) scale(.92); opacity: 0; }
  100%{ transform: translateY(0) scale(1); opacity: 1; }
}
.envBody{
  position: absolute; inset: 0;
  border-radius: 18px;
  background: rgba(255,255,255,.12);
  border: 1px solid rgba(255,255,255,.18);
  box-shadow: 0 24px 70px rgba(0,0,0,.35);
}
.envTop{
  position: absolute;
  left: 10px; right: 10px; top: 10px;
  height: 44px;
  border-radius: 14px;
  background: linear-gradient(180deg, rgba(255,255,255,.18), rgba(255,255,255,.08));
  clip-path: polygon(0 0, 100% 0, 50% 100%);
  border: 1px solid rgba(255,255,255,.14);
}
.seal{
  position: absolute;
  left: 50%; top: 52%;
  transform: translate(-50%, -50%);
  width: 34px; height: 34px;
  display: grid; place-items: center;
  border-radius: 999px;
  background: rgba(0,0,0,.25);
  border: 1px solid rgba(255,255,255,.18);
}

.tText{
  margin-top: 14px;
  font-size: 13px;
  color: rgba(255,255,255,.80);
  letter-spacing: .2px;
}

`;
document.head.appendChild(style);

// =========================
// CONFETTI (sin librerías)
// =========================
const confettiCanvas = document.getElementById("confetti");
const confettiCtx = confettiCanvas.getContext("2d");
let confettiParticles = [];
let confettiRunning = false;

function resizeConfetti() {
  const dpr = Math.max(1, window.devicePixelRatio || 1);
  confettiCanvas.width = Math.floor(window.innerWidth * dpr);
  confettiCanvas.height = Math.floor(window.innerHeight * dpr);
  confettiCanvas.style.width = "100%";
  confettiCanvas.style.height = "100%";
  confettiCtx.setTransform(dpr, 0, 0, dpr, 0, 0);
}
window.addEventListener("resize", resizeConfetti);
resizeConfetti();

function confettiBurst({ count = 120 } = {}) {
  const w = window.innerWidth;
  const h = window.innerHeight;

  // burst desde arriba del hero (se ve elegante)
  const originX = w * 0.5;
  const originY = h * 0.22;

  for (let i = 0; i < count; i++) {
    const angle = Math.random() * Math.PI * 2;
    const speed = 3 + Math.random() * 6;

    confettiParticles.push({
      x: originX,
      y: originY,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed - (2 + Math.random() * 3),
      g: 0.18 + Math.random() * 0.12,
      r: 3 + Math.random() * 4,
      rot: Math.random() * Math.PI,
      vr: (Math.random() - 0.5) * 0.25,
      a: 1,
      fade: 0.008 + Math.random() * 0.01,
      // colores suaves (no “fiesta infantil”)
      color: (Math.random() < 0.5)
        ? "rgba(255,120,200,0.95)"
        : "rgba(120,160,255,0.95)",
    });
  }

  if (!confettiRunning) {
    confettiRunning = true;
    requestAnimationFrame(confettiTick);
  }
}

function confettiTick() {
  confettiCtx.clearRect(0, 0, window.innerWidth, window.innerHeight);

  confettiParticles = confettiParticles.filter(p => p.a > 0.03);

  for (const p of confettiParticles) {
    p.vy += p.g;
    p.x += p.vx;
    p.y += p.vy;
    p.rot += p.vr;
    p.a -= p.fade;

    confettiCtx.save();
    confettiCtx.translate(p.x, p.y);
    confettiCtx.rotate(p.rot);
    confettiCtx.globalAlpha = Math.max(0, p.a);
    confettiCtx.fillStyle = p.color;
    confettiCtx.fillRect(-p.r, -p.r * 0.5, p.r * 2.2, p.r);
    confettiCtx.restore();
  }

  if (confettiParticles.length > 0) {
    requestAnimationFrame(confettiTick);
  } else {
    confettiRunning = false;
    confettiCtx.clearRect(0, 0, window.innerWidth, window.innerHeight);
  }
}

// =========================
// TOAST + EASTER EGG
// =========================
const toast = document.getElementById("toast");

function showToast(text = "Te amo, Paola ❤️⚖️") {
  toast.textContent = text;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 1800);
}


// --- UI Logic ---
const screen1 = document.querySelector("#screen1");
const screen2 = document.querySelector("#screen2");

const photoEl = document.querySelector("#photo");
const dotsEl = document.querySelector("#dots");
const counterEl = document.querySelector("#counter");
const progressFill = document.querySelector("#progressFill");

let idx = 0;

function renderDots() {
  dotsEl.innerHTML = photos
    .map((_, i) => `<div class="dot ${i === idx ? "active" : ""}"></div>`)
    .join("");
}

function updateProgress() {
  const pct = ((idx + 1) / photos.length) * 100;
  progressFill.style.width = `${pct}%`;
  counterEl.textContent = String(idx + 1);
}

function show() {
  // inicia fade
  photoEl.classList.add("is-fading");

  // espera un poquito, cambia src y vuelve
  setTimeout(() => {
    photoEl.src = photos[idx];

    // cuando cargue la imagen, vuelve a normal
    const done = () => {
      photoEl.classList.remove("is-fading");
      photoEl.removeEventListener("load", done);
    };
    photoEl.addEventListener("load", done);

    renderDots();
    updateProgress();
  }, 140);
}


function go(nextIdx) {
  idx = (nextIdx + photos.length) % photos.length;
  show();
  if (navigator.vibrate) navigator.vibrate(6);
}


const transition = document.getElementById("transition");

document.querySelector("#openBtn").onclick = () => {
  // muestra transición
  transition.classList.add("show");
  transition.setAttribute("aria-hidden", "false");

  if (navigator.vibrate) navigator.vibrate([12, 18, 12]);

  confettiBurst({ count: 160 });

  setTimeout(() => {
    // cambia de pantalla
    screen1.classList.remove("is-active");
    screen1.setAttribute("aria-hidden", "true");
    screen2.classList.add("is-active");
    screen2.setAttribute("aria-hidden", "false");

    // oculta transición
    transition.classList.remove("show");
    transition.setAttribute("aria-hidden", "true");

    // pequeño impacto visual en la carta (flash)
    const letter = document.querySelector(".letter");
    letter.style.transition = "transform .25s ease, box-shadow .25s ease";
    letter.style.transform = "translateY(-2px)";
    letter.style.boxShadow = "0 26px 90px rgba(0,0,0,.45)";

    document.querySelector(".letter").scrollIntoView({ behavior: "smooth", block: "start" });

    setTimeout(() => {
      letter.style.transform = "translateY(0)";
      letter.style.boxShadow = "";
    }, 260);

  }, 850);
};


document.querySelector("#backBtn").onclick = () => {
  screen2.classList.remove("is-active");
  screen2.setAttribute("aria-hidden", "true");
  screen1.classList.add("is-active");
  screen1.setAttribute("aria-hidden", "false");
};

document.querySelector("#prev").onclick = () => go(idx - 1);
document.querySelector("#next").onclick = () => go(idx + 1);

// Swipe (impacta muchísimo en iPhone)
const carousel = document.querySelector("#carousel");
let startX = 0;
let isDown = false;

carousel.addEventListener("pointerdown", (e) => {
  isDown = true;
  startX = e.clientX;
});

carousel.addEventListener("pointerup", (e) => {
  if (!isDown) return;
  isDown = false;
  const dx = e.clientX - startX;
  if (Math.abs(dx) > 35) {
    if (dx < 0) go(idx + 1);
    else go(idx - 1);
  }
});

carousel.addEventListener("pointercancel", () => { isDown = false; });

show();

// Easter egg: toca el logo 5 veces
const logo = document.querySelector(".logo");
let taps = 0;
let tapTimer = null;

logo.addEventListener("click", () => {
  taps += 1;

  // ventana de tiempo para contar taps
  clearTimeout(tapTimer);
  tapTimer = setTimeout(() => { taps = 0; }, 1500);

  if (taps >= 5) {
    taps = 0;
    showToast("Me enorgullece tu esfuerzo, mi vida! ❤️");
    confettiBurst({ count: 90 });
    if (navigator.vibrate) navigator.vibrate([15, 30, 15]);
  }
});


`;

document.head.appendChild(style);

// FIX: activar la primera pantalla
document.querySelector("#screen1").classList.add("is-active");
`;
