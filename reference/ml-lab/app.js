/* ============================================================
   ML Lab — interactions
   ============================================================ */

/* ---- Nav scroll state ---- */
const nav = document.getElementById('nav');
const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 20);
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

/* ---- Reveal on scroll ---- */
const io = new IntersectionObserver((entries) => {
  entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
}, { threshold: 0.14 });
document.querySelectorAll('.reveal').forEach((el) => io.observe(el));

/* ============================================================
   Sample datasets (illustrative example runs)
   ============================================================ */
const DATASETS = {
  subscriptions: {
    file: 'subscriptions.csv',
    size: '0.7 MB',
    rows: '8,400',
    task: 'Classification',
    taskNote: 'target has two categories, so ML Lab trains classification models',
    target: 'status',
    columns: [
      { name: 'customer_id', drop: true },
      { name: 'plan' },
      { name: 'monthly_spend' },
      { name: 'tickets_opened' },
      { name: 'last_login_days' },
      { name: 'tenure_months' },
      { name: 'region' },
      { name: 'status', target: true },
    ],
    summary: 'ML Lab read 8,400 rows and predicted <b>status</b>, a category with two values. <b>Gradient Boosting</b> did best on the held out test split and beat the naive baseline by a clear margin. <b>last_login_days</b> and <b>tickets_opened</b> carried most of the signal.',
    leaderboard: [
      { name: 'Gradient Boosting', score: 0.91, w: 100, best: true },
      { name: 'Random Forest', score: 0.88, w: 95 },
      { name: 'Logistic Regression', score: 0.83, w: 86 },
      { name: 'K-Nearest Neighbors', score: 0.79, w: 79 },
      { name: 'Decision Tree', score: 0.77, w: 75 },
      { name: 'Naive baseline', score: 0.61, w: 52, base: true },
    ],
    metrics: [
      { name: 'Accuracy', val: '0.91', model: 91, base: 61 },
      { name: 'F1 score', val: '0.89', model: 89, base: 54 },
    ],
    plot: {
      type: 'confusion',
      labels: ['stays', 'leaves'],
      cells: [
        { v: '742', l: 'true stays', tone: 0.9 },
        { v: '38', l: 'said leaves', tone: 0.15 },
        { v: '55', l: 'said stays', tone: 0.15 },
        { v: '845', l: 'true leaves', tone: 1.0 },
      ],
    },
    features: [
      { name: 'last_login_days', v: 100 },
      { name: 'tickets_opened', v: 81 },
      { name: 'monthly_spend', v: 64 },
      { name: 'tenure_months', v: 47 },
      { name: 'plan', v: 33 },
    ],
  },

  tickets: {
    file: 'support_tickets.csv',
    size: '1.2 MB',
    rows: '6,100',
    task: 'Classification',
    taskNote: 'target is a label, so ML Lab trains classification models',
    target: 'priority',
    columns: [
      { name: 'ticket_id', drop: true },
      { name: 'channel' },
      { name: 'message_length' },
      { name: 'account_age_days' },
      { name: 'past_tickets' },
      { name: 'product_area' },
      { name: 'priority', target: true },
    ],
    summary: 'ML Lab predicted <b>priority</b> from 6,100 support tickets. <b>Random Forest</b> came out on top on the test split, ahead of the baseline that just guesses the most common label. <b>message_length</b> and <b>past_tickets</b> were the strongest signals.',
    leaderboard: [
      { name: 'Random Forest', score: 0.86, w: 100, best: true },
      { name: 'Gradient Boosting', score: 0.84, w: 97 },
      { name: 'Logistic Regression', score: 0.78, w: 88 },
      { name: 'Decision Tree', score: 0.74, w: 82 },
      { name: 'K-Nearest Neighbors', score: 0.71, w: 78 },
      { name: 'Naive baseline', score: 0.52, w: 56, base: true },
    ],
    metrics: [
      { name: 'Accuracy', val: '0.86', model: 86, base: 52 },
      { name: 'F1 score', val: '0.84', model: 84, base: 48 },
    ],
    plot: {
      type: 'confusion',
      labels: ['low', 'high'],
      cells: [
        { v: '612', l: 'true low', tone: 0.9 },
        { v: '71', l: 'said high', tone: 0.18 },
        { v: '92', l: 'said low', tone: 0.18 },
        { v: '445', l: 'true high', tone: 1.0 },
      ],
    },
    features: [
      { name: 'message_length', v: 100 },
      { name: 'past_tickets', v: 88 },
      { name: 'account_age_days', v: 59 },
      { name: 'channel', v: 41 },
      { name: 'product_area', v: 28 },
    ],
  },

  housing: {
    file: 'home_prices.csv',
    size: '0.9 MB',
    rows: '4,300',
    task: 'Regression',
    taskNote: 'target is a number, so ML Lab trains regression models',
    target: 'sale_price',
    columns: [
      { name: 'listing_id', drop: true },
      { name: 'area_sqft' },
      { name: 'bedrooms' },
      { name: 'bathrooms' },
      { name: 'year_built' },
      { name: 'distance_to_center' },
      { name: 'lot_size' },
      { name: 'sale_price', target: true },
    ],
    summary: 'ML Lab predicted <b>sale_price</b>, a number, from 4,300 listings. <b>Gradient Boosting</b> had the lowest error on the held out split and explained far more of the variance than guessing the mean. <b>area_sqft</b> and <b>distance_to_center</b> mattered most.',
    leaderboard: [
      { name: 'Gradient Boosting', score: 0.89, w: 100, best: true, fmt: 'R²' },
      { name: 'Random Forest', score: 0.86, w: 96, fmt: 'R²' },
      { name: 'Linear Regression', score: 0.74, w: 83, fmt: 'R²' },
      { name: 'Decision Tree', score: 0.70, w: 78, fmt: 'R²' },
      { name: 'K-Nearest Neighbors', score: 0.66, w: 74, fmt: 'R²' },
      { name: 'Naive baseline', score: 0.00, w: 30, base: true, fmt: 'R²' },
    ],
    metrics: [
      { name: 'R² (higher is better)', val: '0.89', model: 89, base: 8 },
      { name: 'Mean error (lower is better)', val: 'best', model: 24, base: 100, invert: true },
    ],
    plot: {
      type: 'scatter',
      note: 'predicted vs actual on the test split, closer to the line is better',
    },
    features: [
      { name: 'area_sqft', v: 100 },
      { name: 'distance_to_center', v: 79 },
      { name: 'year_built', v: 58 },
      { name: 'bathrooms', v: 44 },
      { name: 'lot_size', v: 30 },
    ],
  },
};

/* ============================================================
   State + render
   ============================================================ */
let selected = null;

const chipsEl = document.getElementById('sampleChips');
const dropTitle = document.getElementById('dropTitle');
const dropDesc = document.getElementById('dropDesc');
const dropEl = document.getElementById('drop');
const targetPick = document.getElementById('targetPick');
const colsEl = document.getElementById('cols');
const runBtn = document.getElementById('runBtn');
const resEmpty = document.getElementById('resEmpty');
const progress = document.getElementById('progress');
const progFill = document.getElementById('progFill');
const progCap = document.getElementById('progCap');
const resBody = document.getElementById('resBody');

/* build sample chips */
Object.entries(DATASETS).forEach(([key, d]) => {
  const c = document.createElement('button');
  c.className = 'sample';
  c.dataset.key = key;
  c.innerHTML = `<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14 3v4a1 1 0 0 0 1 1h4"/><path d="M5 3h9l5 5v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z"/></svg>${d.file}<span class="sz">${d.size}</span>`;
  c.addEventListener('click', () => selectDataset(key));
  chipsEl.appendChild(c);
});

function selectDataset(key) {
  selected = key;
  const d = DATASETS[key];
  document.querySelectorAll('.sample').forEach((s) => s.classList.toggle('sel', s.dataset.key === key));

  dropEl.classList.add('armed');
  dropTitle.textContent = d.file;
  dropDesc.textContent = `${d.rows} rows · read locally · ${d.task.toLowerCase()}`;

  // columns
  colsEl.innerHTML = '';
  d.columns.forEach((col) => {
    const chip = document.createElement('span');
    chip.className = 'colchip' + (col.target ? ' target' : '') + (col.drop ? ' dropped' : '');
    chip.innerHTML = col.target
      ? `${col.name}<span class="badge">target</span>`
      : col.drop
      ? `${col.name}<span class="badge">dropped</span>`
      : col.name;
    colsEl.appendChild(chip);
  });
  targetPick.style.display = 'block';

  runBtn.disabled = false;
  runBtn.style.opacity = '1';
  runBtn.style.cursor = 'pointer';

  // reset results view
  resBody.classList.add('hidden');
  resBody.classList.remove('show');
  progress.classList.add('hidden');
  resEmpty.classList.remove('hidden');
}

/* ---- training run ---- */
let running = false;
runBtn.addEventListener('click', () => {
  if (!selected || running) return;
  running = true;
  const d = DATASETS[selected];

  resEmpty.classList.add('hidden');
  resBody.classList.add('hidden');
  progress.classList.remove('hidden');
  runBtn.disabled = true;
  runBtn.style.opacity = '.5';
  runBtn.style.cursor = 'not-allowed';

  const steps = document.querySelectorAll('#progSteps .prog-step');
  steps.forEach((s) => s.classList.remove('active', 'done'));
  progFill.style.width = '0%';

  const caps = [
    'reading columns, nothing sent',
    'reserving 20% to test on',
    'fitting a small set of models',
    'comparing each to a naive baseline',
  ];
  let i = 0;
  const total = steps.length;

  function tick() {
    if (i > 0) steps[i - 1].classList.remove('active'), steps[i - 1].classList.add('done');
    if (i < total) {
      steps[i].classList.add('active');
      progCap.textContent = caps[i];
      progFill.style.width = ((i + 0.5) / total) * 100 + '%';
      i++;
      setTimeout(tick, 720);
    } else {
      progFill.style.width = '100%';
      progCap.textContent = 'done, reading the results';
      setTimeout(finish, 480);
    }
  }
  setTimeout(tick, 260);

  function finish() {
    renderResults(d);
    progress.classList.add('hidden');
    resBody.classList.remove('hidden');
    void resBody.offsetWidth;
    resBody.classList.add('show');
    running = false;
    runBtn.disabled = false;
    runBtn.style.opacity = '1';
    runBtn.style.cursor = 'pointer';
    runBtn.innerHTML = 'Train again <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5"/></svg>';

    // animate bars after layout
    requestAnimationFrame(() => requestAnimationFrame(animateBars));
  }
});

function animateBars() {
  document.querySelectorAll('#resBody [data-w]').forEach((el) => {
    el.style.width = el.dataset.w + '%';
  });
}

/* ---- results markup ---- */
function renderResults(d) {
  const plot = d.plot.type === 'confusion' ? confusionHTML(d.plot) : scatterHTML(d.plot);

  resBody.innerHTML = `
    <div class="res-summary">
      <span class="si"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v1M12 20v1M4.2 4.2l.7.7M19.1 19.1l.7.7M3 12h1M20 12h1M4.2 19.8l.7-.7M19.1 4.9l.7-.7"/><circle cx="12" cy="12" r="4"/></svg></span>
      <div>
        <div class="label" style="font-size:9.5px;color:var(--muted);margin-bottom:6px;">Plain read · ${d.task} · example run</div>
        <p>${d.summary}</p>
      </div>
    </div>

    <div class="res-cols">
      <!-- leaderboard -->
      <div class="res-block">
        <div class="blab">Leaderboard · best marked</div>
        <div class="res-card lbf">
          <div class="lbf-row lbf-head"><span></span><span>Model</span><span>Score</span><span></span></div>
          ${d.leaderboard.map((m, idx) => `
            <div class="lbf-row ${m.best ? 'best-row' : ''}">
              <span class="rk">${idx + 1}</span>
              <span class="nm">${m.name}${m.best ? ' <span class="best-tag">best</span>' : ''}</span>
              <span class="track"><i data-w="${m.w}"></i></span>
              <span class="sc">${m.score.toFixed(2)}</span>
            </div>`).join('')}
        </div>
      </div>

      <!-- metrics vs baseline -->
      <div class="res-block">
        <div class="blab">Metrics vs naive baseline</div>
        <div class="res-card">
          ${d.metrics.map((mt) => `
            <div class="metric">
              <div class="metric-top">
                <span class="metric-name">${mt.name}</span>
                <span class="metric-val">${mt.val}</span>
              </div>
              <div class="metric-bars">
                <div class="mbar-row"><span class="ml">model</span><span class="mbar model"><i data-w="${mt.model}"></i></span></div>
                <div class="mbar-row"><span class="ml">baseline</span><span class="mbar base"><i data-w="${mt.base}"></i></span></div>
              </div>
            </div>`).join('')}
        </div>
      </div>

      <!-- plot -->
      <div class="res-block">
        <div class="blab">${d.plot.type === 'confusion' ? 'Confusion matrix' : 'Predicted vs actual'}</div>
        <div class="res-card">${plot}</div>
      </div>

      <!-- feature signals -->
      <div class="res-block">
        <div class="blab">Feature signal · top drivers</div>
        <div class="res-card">
          <div class="feat">
            ${d.features.map((f) => `
              <div class="feat-row">
                <span class="fn">${f.name}</span>
                <span class="feat-bar"><i data-w="${f.v}"></i></span>
                <span class="fv">${f.v}</span>
              </div>`).join('')}
          </div>
          <div style="padding:0 14px 14px;">
            <div class="feat-list-top">
              ${d.features.slice(0, 3).map((f) => `<span class="tag">${f.name}</span>`).join('')}
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

function confusionHTML(p) {
  const tone = (t) => `background: rgba(255,191,0,${0.08 + t * 0.5}); border:1px solid rgba(212,197,171,0.4);`;
  return `
    <div class="cm">
      <div class="cm-h"></div>
      <div class="cm-h">said ${p.labels[0]}</div>
      <div class="cm-h">said ${p.labels[1]}</div>

      <div class="cm-side">is ${p.labels[0]}</div>
      <div class="cell" style="${tone(p.cells[0].tone)}">${p.cells[0].v}<span class="cl">${p.cells[0].l}</span></div>
      <div class="cell" style="${tone(p.cells[1].tone)}">${p.cells[1].v}<span class="cl">${p.cells[1].l}</span></div>

      <div class="cm-side">is ${p.labels[1]}</div>
      <div class="cell" style="${tone(p.cells[2].tone)}">${p.cells[2].v}<span class="cl">${p.cells[2].l}</span></div>
      <div class="cell" style="${tone(p.cells[3].tone)}">${p.cells[3].v}<span class="cl">${p.cells[3].l}</span></div>
    </div>`;
}

function scatterHTML(p) {
  // illustrative predicted-vs-actual cloud near the diagonal
  const pts = [
    [12, 84], [22, 74], [30, 66], [18, 79], [40, 58],
    [52, 50], [46, 52], [60, 40], [68, 34], [58, 44],
    [74, 26], [82, 20], [88, 14], [36, 60], [64, 38], [50, 48],
  ];
  const dots = pts.map(([x, y]) => {
    const jitter = (Math.random() - 0.5) * 6;
    return `<span style="position:absolute;left:${x}%;bottom:${y + jitter}%;width:7px;height:7px;border-radius:50%;background:var(--brand);transform:translate(-50%,50%);box-shadow:0 0 0 2px rgba(255,191,0,0.18);"></span>`;
  }).join('');
  return `
    <div style="padding:14px;">
      <div style="position:relative;height:168px;border-radius:8px;background:var(--surface-low);border:1px solid rgba(212,197,171,0.4);overflow:hidden;">
        <span style="position:absolute;left:6%;bottom:6%;width:120%;height:1px;background:var(--brand-deep);opacity:.45;transform-origin:left;transform:rotate(-42deg);"></span>
        ${dots}
      </div>
      <div class="mono" style="font-size:10.5px;color:var(--muted);margin-top:10px;text-align:center;">${p.note}</div>
    </div>`;
}
