const photos = [
  "/fotos/01.jpg",
  "/fotos/02.jpg",
  "/fotos/03.jpg",
  "/fotos/04.jpg",
  // agrega más si quieres
];

const app = document.querySelector("#app");

app.innerHTML = `
  <div class="wrap">
    <div class="card" id="screen1">
      <div class="badge">🎓</div>
      <h1>Para ti, mi amor ❤️</h1>
      <p class="sub">Feliz graduación. Esto es solo un pedacito de todo lo orgulloso que estoy de ti.</p>
      <button id="openBtn">Abrir sorpresa</button>
      <p class="tiny">Tip: agrégalo a tu pantalla de inicio para que se vea como app.</p>
    </div>

    <div class="card hidden" id="screen2">
      <h2>Nuestros momentos ✨</h2>

      <div class="slider">
        <button class="nav" id="prev">‹</button>
        <img id="photo" alt="Foto" />
        <button class="nav" id="next">›</button>
      </div>

      <div class="dots" id="dots"></div>

      <div class="msg">
        <h3>Mi mensaje para ti</h3>
        <p>
          Hoy cierras una meta enorme, y verte lograrlo me hace admirarte más que nunca.
          Gracias por tu esfuerzo, tu corazón y todo lo que eres.  
          <br><br>
          Esto recién comienza… y yo quiero estar a tu lado en todo lo que viene. ❤️
        </p>
      </div>

      <button id="backBtn" class="secondary">Volver</button>
    </div>
  </div>
`;

const style = document.createElement("style");
style.textContent = `
  :root { color-scheme: dark; }
  body { margin:0; font-family: system-ui, -apple-system, Segoe UI, Roboto, Arial; background:#0b0b0f; color:#fff; }
  .wrap { min-height:100vh; display:flex; align-items:center; justify-content:center; padding:18px; }
  .card { width:min(520px, 100%); background:rgba(255,255,255,.06); border:1px solid rgba(255,255,255,.10);
          border-radius:18px; padding:18px; box-shadow: 0 20px 60px rgba(0,0,0,.35); }
  .hidden { display:none; }
  h1 { margin:6px 0 8px; font-size:28px; }
  h2 { margin:6px 0 14px; font-size:22px; }
  .sub { opacity:.88; line-height:1.35; margin:0 0 14px; }
  .tiny { opacity:.65; font-size:12px; margin-top:12px; }
  .badge { font-size:34px; }
  button { width:100%; border:none; border-radius:14px; padding:14px 14px; font-size:16px; font-weight:700;
           background:#ffffff; color:#111; cursor:pointer; }
  button.secondary { margin-top:12px; background:rgba(255,255,255,.12); color:#fff; border:1px solid rgba(255,255,255,.18); }
  .slider { display:flex; align-items:center; gap:10px; margin:10px 0 10px; }
  .nav { width:48px; height:48px; border-radius:14px; font-size:28px; padding:0; }
  img { width:100%; height:320px; object-fit:cover; border-radius:16px; border:1px solid rgba(255,255,255,.12); }
  .dots { display:flex; gap:6px; justify-content:center; margin:10px 0 14px; flex-wrap:wrap; }
  .dot { width:8px; height:8px; border-radius:999px; background:rgba(255,255,255,.28); }
  .dot.active { background:#fff; }
  .msg { background:rgba(0,0,0,.20); border:1px solid rgba(255,255,255,.10); border-radius:16px; padding:14px; }
  .msg h3 { margin:0 0 8px; font-size:16px; }
  .msg p { margin:0; opacity:.9; line-height:1.45; }
`;
document.head.appendChild(style);

// UI
const screen1 = document.querySelector("#screen1");
const screen2 = document.querySelector("#screen2");
document.querySelector("#openBtn").onclick = () => {
  screen1.classList.add("hidden");
  screen2.classList.remove("hidden");
  if (navigator.vibrate) navigator.vibrate([20, 30, 20]);
};

document.querySelector("#backBtn").onclick = () => {
  screen2.classList.add("hidden");
  screen1.classList.remove("hidden");
};

let idx = 0;
const photoEl = document.querySelector("#photo");
const dotsEl = document.querySelector("#dots");

function renderDots() {
  dotsEl.innerHTML = photos.map((_, i) =>
    `<div class="dot ${i === idx ? "active" : ""}"></div>`
  ).join("");
}

function show() {
  photoEl.src = photos[idx];
  renderDots();
}

document.querySelector("#prev").onclick = () => { idx = (idx - 1 + photos.length) % photos.length; show(); };
document.querySelector("#next").onclick = () => { idx = (idx + 1) % photos.length; show(); };

show();
