import '../styles/Projects.css';

const projects = [
  {
    year: '2026',
    name: 'GoMerch Store',
    desc: 'Full-featured e-commerce store with authentication system, shopping cart, and smart search.',
    tags: ['React', 'Node.js', 'PostgreSQL'],
  },
  {
    year: '2026',
    name: 'Fast Food Restaurant',
    desc: 'A restaurant website with a wonderful menu based on React,Vite and components.',
    tags: ['React', 'Styled Components', 'Vite '],
  },
  {
    year: '2026',
    name: 'UI-Kit',
    desc: 'A mini-project that demonstrates the basic structures and capabilities of JavaScript.',
    tags: ['JavaScript', 'Motion', 'CSS'],
  },
];

export default function Projects() {
  return (
    <section className="projects section" id="projects">
      <div className="container">
        <div className="projects-head">
          <span className="eyebrow">Projects</span>
          <h2 className="projects-title">Selected work, 2026</h2>
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
