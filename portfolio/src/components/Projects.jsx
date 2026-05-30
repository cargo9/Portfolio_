import '../styles/Projects.css';

const projects = [
  {
    year: '2026',
    name: 'Aurora Dashboard',
    desc: 'Веб-приложение: аналитическая панель с интерактивными графиками и тёмной темой.',
    tags: ['React', 'Charts', 'Dark UI'],
  },
  {
    year: '2025',
    name: 'Mono Commerce',
    desc: 'E-commerce с акцентом на минимализм, типографику и строгую сеточную структуру.',
    tags: ['Storefront', 'Grid', 'Typography'],
  },
  {
    year: '2024',
    name: 'Pulse Landing',
    desc: 'Маркетинговый лендинг для SaaS с геометричной графикой и анимациями.',
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
