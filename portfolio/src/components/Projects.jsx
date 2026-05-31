import '../styles/Projects.css';

const projects = [
  {
    year: '2026',
    name: 'Aurora Dashboard',
    desc: 'Web app: an analytics panel with interactive charts and a dark theme.',
    tags: ['React', 'Charts', 'Dark UI'],
  },
  {
    year: '2025',
    name: 'Mono Commerce',
    desc: 'E-commerce focused on minimalism, typography and a strict grid structure.',
    tags: ['Storefront', 'Grid', 'Typography'],
  },
  {
    year: '2024',
    name: 'Pulse Landing',
    desc: 'A marketing landing page for SaaS with geometric graphics and animations.',
    tags: ['Landing', 'Motion', 'SaaS'],
  },
];

export default function Projects() {
  return (
    <section className="projects section" id="projects">
      <div className="container">
        <div className="projects-head">
          <span className="eyebrow">Projects</span>
          <h2 className="projects-title">Selected work, 2024 — 2026</h2>
        </div>

        <div className="projects-list">
          {projects.map((p, i) => (
            <article className="project" key={p.name}>
              <span className="project-index">{String(i + 1).padStart(2, '0')}</span>
              <div className="project-main">
                <h3>{p.name}</h3>
                <p>{p.desc}</p>
                <div className="project-tags">
                  {p.tags.map((t) => (
                    <span className="tag" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <span className="project-year">{p.year}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
