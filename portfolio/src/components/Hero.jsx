import Cube from './Cube';
import '../styles/Hero.css';

export default function Hero() {
  return (
    <section className="hero" id="welcome">
      <div className="container hero-inner">
        <div className="hero-copy">
          <span className="eyebrow">Welcome</span>
          <h1 className="hero-title">
            Creative developer crafting interfaces of
            <span className="accent"> minimalism &amp; geometry</span>.
          </h1>
          <p className="hero-lead">
            I work with clean grids, clear typography and precise accents —
            building interfaces where form follows meaning.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              View Work
            </a>
            <a href="#contacts" className="btn btn-ghost">
              Contact
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <Cube />
          <div className="hero-grid" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
