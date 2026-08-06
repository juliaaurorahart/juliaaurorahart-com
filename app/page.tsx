import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Julia Aurora Hart",
  description: "A home for work, ideas, and experiments by Julia Aurora Hart.",
};

export default function Home() {
  return (
    <main>
      <nav className="nav" aria-label="Primary navigation">
        <a className="wordmark" href="#top">JAH</a>
        <div className="nav-links">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="mailto:hello@juliaaurorahart.com">Contact</a>
        </div>
      </nav>

      <section className="hero" id="top">
        <p className="eyebrow">JULIA AURORA HART</p>
        <h1>Making room<br />for what matters.</h1>
        <div className="hero-foot">
          <p>A personal home for work, ideas, experiments, and the quiet connections between them.</p>
          <a className="text-link" href="#work">Explore the work <span>↓</span></a>
        </div>
        <div className="orb orb-one" aria-hidden="true" />
        <div className="orb orb-two" aria-hidden="true" />
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
            <div className="project-mark mark-canvas" aria-hidden="true"><span /><span /><span /></div>
            <p className="project-kind">EXPERIMENT</p>
            <h2>OSO</h2>
            <p>A thinking canvas for drawings, meaningful objects, and the relationships that bring them to life.</p>
            <a href="#contact">Follow its progress <span>↗</span></a>
          </article>
          <article className="project-card">
            <div className="project-mark mark-field" aria-hidden="true" />
            <p className="project-kind">IN PROGRESS</p>
            <h2>Field notes</h2>
            <p>Observations, fragments, and ideas worth returning to.</p>
            <a href="#contact">Coming soon <span>↗</span></a>
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
