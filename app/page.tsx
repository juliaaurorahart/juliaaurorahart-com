"use client"

import { useState, type CSSProperties } from "react"

const MOOD_KEY = "jah-visual-mood"

export default function Home() {
  const [mood, setMood] = useState(() => {
    if (typeof window === "undefined") return 0.42
    const savedMood = Number(localStorage.getItem(MOOD_KEY))
    return Number.isFinite(savedMood) && savedMood >= 0 && savedMood <= 1 ? savedMood : 0.42
  })

  const changeMood = (value: number) => {
    setMood(value)
    localStorage.setItem(MOOD_KEY, String(value))
  }

  const visualStyle = {
    "--bright": `${mood * 100}%`, "--site-brightness": `${1 + mood * 1.2}`, "--site-saturation": `${.72 + mood * 1.45}`,
    "--hero-height": `${730 + mood * 110}px`, "--hero-top": `${148 + mood * 28}px`,
    "--hero-title-top": `${52 + mood * 12}px`, "--hero-title-bottom": `${110 + mood * 30}px`,
    "--hero-size": `${9.7 + mood * .7}vw`, "--hero-letter": `${-.075 + mood * .018}em`, "--hero-line": `${.88 + mood * .04}`,
    "--orb-radius": `${50 - mood * 18}%`, "--orb-blur": `${6 - mood * 5}px`, "--orb-opacity": `${.25 + mood * .75}`,
    "--manifesto-gap": `${58 + mood * 45}px`, "--manifesto-pad": `${130 + mood * 42}px`,
    "--card-height": `${420 + mood * 34}px`, "--card-pad": `${23 + mood * 8}px`, "--card-radius": `${mood * 18}px`, "--card-lift": `${mood * -8}px`,
    "--closing-pad": `${115 + mood * 38}px`, "--closing-size": `${7.5 + mood * .5}vw`, "--closing-letter": `${-.07 + mood * .015}em`,
  } as CSSProperties

  return (
    <main className="site-shell" style={visualStyle}>
      <nav className="nav" aria-label="Primary navigation">
        <a className="wordmark" href="#top">JAH</a>
        <div className="nav-links">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="mailto:hello@juliaaurorahart.com">Contact</a>
        </div>
        <label className="mood-control" title="Adjust the visual mood">
          <span>Drab</span>
          <input type="range" min="0" max="1" step="0.01" value={mood} onChange={(event) => changeMood(Number(event.target.value))} aria-label="Visual mood, drab to brighter" />
          <span>Brighter</span>
        </label>
      </nav>

      <section className="hero" id="top">
        <p className="eyebrow">JULIA AURORA HART</p>
        <h1>Making room<br />for things becoming.</h1>
        <div className="hero-foot">
          <p>A warm, unruly home for work, experiments, and the quiet connections between them.</p>
          <a className="text-link" href="#work">Explore the work <span>↓</span></a>
        </div>
        <div className="orb orb-one" aria-hidden="true" />
        <div className="orb orb-two" aria-hidden="true" />
        <div className="hero-sparkles" aria-hidden="true"><span>✦</span><span>✧</span><span>✦</span><span>✧</span><span>✦</span></div>
      </section>

      <section className="manifesto" id="about">
        <p className="section-label">01 / A LITTLE ABOUT THIS PLACE</p>
        <div className="manifesto-copy">
          <p>This is a living studio: a place to gather projects, follow questions, and share work as it takes shape.</p>
          <p className="muted">Not everything needs to arrive finished. Some things deserve room to become.</p>
        </div>
      </section>

      <section className="work" id="work">
        <div className="work-heading">
          <p className="section-label">02 / SELECTED THREADS</p>
          <p>Beginning points, works in progress, and the systems underneath them.</p>
        </div>
        <div className="work-grid">
          <article className="project-card large-card">
            <div className="project-mark mark-field-notes" aria-hidden="true"><span /><span /><span /></div>
            <p className="project-kind">LIVING NOTEBOOK</p>
            <h2>The Field</h2>
            <p>Make notes, draw, gather fragments, and let ideas grow before they need structure.</p>
            <a href="https://osa.juliaaurorahart.com/?view=field">Enter The Field <span>↗</span></a>
          </article>
          <article className="project-card">
            <div className="project-mark mark-canvas" aria-hidden="true"><span /><span /><span /></div>
            <p className="project-kind">STRUCTURE VIEW</p>
            <h2>OSA</h2>
            <p>See the objects in The Field as connected trees, relationships, and future logic.</p>
            <a href="https://osa.juliaaurorahart.com/?view=osa">Open OSA <span>↗</span></a>
          </article>
          <article className="project-card pale-card">
            <div className="project-mark mark-sun" aria-hidden="true" />
            <p className="project-kind">PLACEHOLDER</p>
            <h2>Something new</h2>
            <p>This space is ready for the next project, collection, or collaboration.</p>
            <a href="#contact">Stay close <span>↗</span></a>
          </article>
        </div>
      </section>

      <section className="closing" id="contact">
        <p className="section-label">03 / KEEP IN TOUCH</p>
        <h2>Let’s make<br /><em>something real.</em></h2>
        <a className="contact-link" href="mailto:hello@juliaaurorahart.com">hello@juliaaurorahart.com <span>↗</span></a>
      </section>

      <footer>
        <span>© {new Date().getFullYear()} Julia Aurora Hart</span>
        <a href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}
