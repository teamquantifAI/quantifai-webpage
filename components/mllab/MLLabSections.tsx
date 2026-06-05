'use client'

import React, { useEffect } from 'react'

const LOGIN_URL = 'https://app.quantifai.co/login'

/* ── Inline icons (verbatim paths from the reference) ── */
const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
)
const DownloadIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v12" /><path d="m8 11 4 4 4-4" /><path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" /></svg>
)
const TargetIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="8" /><circle cx="12" cy="12" r="3.2" /><path d="M12 2v3M12 19v3M2 12h3M19 12h3" /></svg>
)
const ChipIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" /><rect x="9" y="9" width="6" height="6" rx="1" /><path d="M9 2v2M15 2v2M9 20v2M15 20v2M2 9h2M2 15h2M20 9h2M20 15h2" /></svg>
)
const BarsIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M4 20V10M10 20V4M16 20v-6M22 20H2" /></svg>
)
const ShieldIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" /></svg>
)
const EyeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z" /><circle cx="12" cy="12" r="3" /></svg>
)
const CheckIcon = ({ w = '1.8' }: { w?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={w} strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.5 10 17.5 19 7" /></svg>
)

const LoginBtn = ({ className = 'btn btn-primary' }: { className?: string }) => (
  <a className={className} href={LOGIN_URL}>
    Login
    <ArrowIcon />
  </a>
)

const MLLabSections = () => {
  // Reveal-on-scroll — adds .in to every .reveal inside the .mllab subtree
  useEffect(() => {
    const els = Array.from(document.querySelectorAll('.mllab .reveal'))
    if (!('IntersectionObserver' in window) || els.length === 0) {
      els.forEach((el) => el.classList.add('in'))
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in')
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.14 }
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <>
      {/* ════ HERO ════ */}
      <section className="hero band-cream mllgrid" id="top">
        <div className="glow" style={{ width: '40rem', height: '40rem', background: 'rgba(255,191,0,0.16)', top: '-12rem', right: '-6rem' }} />
        <div className="glow" style={{ width: '22rem', height: '22rem', background: 'rgba(236,193,101,0.18)', top: '14rem', left: '-8rem' }} />
        <div className="wrap">
          <div className="hero-grid">
            <div>
              <span className="chip label" style={{ fontSize: '11px' }}><span className="dot" />Runs in your browser</span>
              <h1>Train models on your own data, <span className="hl">without it leaving your browser.</span></h1>
              <p className="sub">Drop a dataset, pick what to predict, and click Train Models. ML Lab does the work on your own machine and shows you the results in a few seconds.</p>
              <div className="hero-cta">
                <LoginBtn />
                <a className="btn btn-ghost" href="#how">See how it works</a>
              </div>
            </div>

            {/* Result preview card */}
            <div className="card preview lift" style={{ zIndex: 1 }}>
              <div className="win-head">
                <span className="title">ml_lab · leaderboard</span>
                <div className="dots">
                  <span style={{ background: '#ffdad6' }} />
                  <span style={{ background: 'var(--brand-fixed)' }} />
                  <span style={{ background: 'var(--slate-container)' }} />
                </div>
              </div>
              <div className="lb-row lb-best">
                <span className="rank">1</span>
                <span className="name">Gradient Boosting <span className="best-tag">best</span></span>
                <span className="bar" style={{ width: '74px' }} />
                <span className="score">0.91</span>
              </div>
              <div className="lb-row">
                <span className="rank">2</span>
                <span className="name">Random Forest</span>
                <span className="bar" style={{ width: '68px' }} />
                <span className="score">0.88</span>
              </div>
              <div className="lb-row">
                <span className="rank">3</span>
                <span className="name">Logistic Regression</span>
                <span className="bar" style={{ width: '55px' }} />
                <span className="score">0.82</span>
              </div>
              <div className="lb-row">
                <span className="rank">4</span>
                <span className="name" style={{ color: 'var(--muted)' }}>Naive baseline</span>
                <span className="bar" style={{ width: '34px', background: 'var(--slate)', opacity: 0.5 }} />
                <span className="score">0.61</span>
              </div>
              <div style={{ padding: '12px 16px', borderTop: '1px solid rgba(212,197,171,0.4)' }}>
                <div className="mono" style={{ fontSize: '11px', color: 'var(--muted)' }}>example run · held out 20% to test · best model marked</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════ HOW IT WORKS (arrows removed) ════ */}
      <section className="section-pad band-surface" id="how">
        <div className="wrap">
          <div className="section-head reveal">
            <p className="label eyebrow">How it works</p>
            <h2>Four steps from a file to a result.</h2>
            <p>There is no setup and no code to write. You stay in the browser the whole time.</p>
          </div>

          <div className="steps">
            <div className="step reveal">
              <span className="num">01</span>
              <div className="icon"><DownloadIcon /></div>
              <h3>Drop a dataset</h3>
              <p>Drag in a CSV or one of the other supported files. It is read right here, nothing is sent anywhere.</p>
            </div>
            <div className="step reveal d1">
              <span className="num">02</span>
              <div className="icon"><TargetIcon /></div>
              <h3>Pick a target</h3>
              <p>Choose the column you want to predict, or let ML Lab choose. It also suggests which columns to keep.</p>
            </div>
            <div className="step reveal d2">
              <span className="num">03</span>
              <div className="icon"><ChipIcon /></div>
              <h3>Train models</h3>
              <p>One click. ML Lab works out the task type, trains a small set of models, and holds back part of the data to test them.</p>
            </div>
            <div className="step reveal d3">
              <span className="num">04</span>
              <div className="icon"><BarsIcon /></div>
              <h3>Read the results</h3>
              <p>See which model did best, how it compares to a naive baseline, the plots, the top features, and a plain read.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ════ PRIVACY ════ */}
      <section className="section-pad band-cream" id="privacy">
        <div className="wrap">
          <div className="privacy-grid">
            <div className="reveal">
              <p className="label eyebrow">Privacy</p>
              <h2 style={{ fontSize: 'clamp(30px,4vw,42px)', lineHeight: 1.1 }}>Your data never leaves the device.</h2>
              <p style={{ marginTop: '18px', fontSize: '18px', color: 'var(--ink-soft)' }}>The file you drop in is read and trained on inside the browser. It is not uploaded, and nothing about its contents reaches a server. There is no copy on our side because there is no transfer in the first place.</p>

              <div className="privacy-points">
                <div className="ppoint">
                  <span className="pi"><ShieldIcon /></span>
                  <div>
                    <h4>It stays on your machine</h4>
                    <p>Reading the file, picking columns, and training all happen locally. The data is gone from memory when you close the tab.</p>
                  </div>
                </div>
                <div className="ppoint">
                  <span className="pi"><EyeIcon /></span>
                  <div>
                    <h4>You can check it yourself</h4>
                    <p>Open the browser network tab and start a training run. You will see no requests go out. That is the proof, not a promise.</p>
                  </div>
                </div>
                <div className="ppoint">
                  <span className="pi"><CheckIcon /></span>
                  <div>
                    <h4>No account to try it</h4>
                    <p>You can run on your own data without signing in. Nothing is logged about the dataset because nothing is sent.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Network panel proof */}
            <div className="card netpanel lift reveal d1">
              <div className="win-head">
                <span className="title">browser devtools</span>
                <div className="dots">
                  <span style={{ background: '#ffdad6' }} />
                  <span style={{ background: 'var(--brand-fixed)' }} />
                  <span style={{ background: 'var(--slate-container)' }} />
                </div>
              </div>
              <div className="net-tabs">
                <span className="net-tab">Elements</span>
                <span className="net-tab">Console</span>
                <span className="net-tab active">Network</span>
                <span className="net-tab">Sources</span>
              </div>
              <div className="net-cols">
                <span>Name</span><span>Status</span><span>Type</span><span>Size</span>
              </div>
              <div className="net-empty">
                <div>
                  <div className="big">0 requests during training</div>
                  <div className="small">recording network activity, the list stays empty</div>
                </div>
              </div>
              <div className="net-foot">
                <span><span className="req-count">0</span> requests · 0 B transferred</span>
                <span style={{ color: 'var(--ok)' }}>recording</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════ SPECS & LIMITS ════ */}
      <section className="section-pad band-low" id="specs">
        <div className="wrap">
          <div className="section-head reveal">
            <p className="label eyebrow">Specs and limits</p>
            <h2>What it reads, and where it stops.</h2>
            <p>ML Lab runs on the CPU in your browser, so it is built for small to mid sized datasets. Here is the honest envelope.</p>
          </div>

          <div className="specs-grid">
            <div className="card spec-card reveal">
              <h3>Supported files</h3>
              <div className="fmt-list">
                {['CSV', 'TSV', 'TXT', 'JSON', 'JSONL', 'NDJSON'].map((f) => (
                  <span className="fmt" key={f}>{f}</span>
                ))}
              </div>
              <p className="fmt-note">Drop tabular data in any of these. ML Lab reads the columns and recommends which ones to keep before you train.</p>
            </div>

            <div className="card spec-card reveal d1">
              <h3>Limits</h3>
              <div style={{ marginTop: '16px' }}>
                <div className="limit-row"><span className="k">Compute</span><span className="v">CPU only</span></div>
                <div className="limit-row"><span className="k">File size</span><span className="v">10 <small>MB</small></span></div>
                <div className="limit-row"><span className="k">Rows</span><span className="v">10,000</span></div>
                <div className="limit-row"><span className="k">Columns</span><span className="v">200</span></div>
                <div className="limit-row"><span className="k">Model features</span><span className="v">80</span></div>
              </div>
            </div>

            <div className="card spec-card reveal d2">
              <h3>What it trains</h3>
              <p className="fmt-note" style={{ marginTop: '16px' }}>ML Lab detects the task from your target column, then trains a small set of models and holds back part of the data to test them.</p>
              <div className="model-list">
                <div className="model-item"><span className="tick"><CheckIcon w="2.4" /></span><div><b style={{ fontFamily: 'var(--font-display)' }}>Classification</b> <span className="mk">predict a category</span></div></div>
                <div className="model-item"><span className="tick"><CheckIcon w="2.4" /></span><div><b style={{ fontFamily: 'var(--font-display)' }}>Regression</b> <span className="mk">predict a number</span></div></div>
                <div className="model-item"><span className="tick"><CheckIcon w="2.4" /></span><div>Every run is scored against a <b style={{ fontFamily: 'var(--font-display)' }}>naive baseline</b></div></div>
              </div>
            </div>
          </div>

          {/* Roadmap teaser — pushing the envelope above */}
          <div className="roadmap reveal">
            <span className="rm-pill"><span className="dot" />On the roadmap</span>
            <h3>More updates coming soon.</h3>
            <p>We&apos;re working on handling bigger files and more kinds of models, and making training quicker. It&apos;ll still run right in your browser.</p>
            <div className="rm-chips">
              {['GPU acceleration', 'Larger datasets', 'More model types', 'Model export', 'Shareable reports'].map((c) => (
                <span className="rm-chip" key={c}><span className="soon" />{c}</span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export const MLLabClosingCTA = () => (
  <section className="cta-band band-cream">
    <div className="wrap">
      <div className="cta-card reveal">
        <div className="glow" style={{ width: '26rem', height: '26rem', background: 'rgba(255,191,0,0.2)', top: '-8rem', left: '50%', transform: 'translateX(-50%)' }} />
        <h2>Bring a dataset. Keep it on your machine.</h2>
        <p>Drop a file, pick what to predict, and read the results in a few seconds. Nothing leaves the browser.</p>
        <div className="hero-cta" style={{ marginTop: '32px' }}>
          <LoginBtn />
        </div>
      </div>
    </div>
  </section>
)

export default MLLabSections
