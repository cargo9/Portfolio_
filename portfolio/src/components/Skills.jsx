import '../styles/Skills.css';

const skills = [
  {
    name: 'React',
    desc: 'Component architectures, state, hooks and reusable UI systems.',
  },
  {
    name: 'JavaScript',
    desc: 'Modern JS, data handling, animations and interface logic.',
  },
  {
    name: 'HTML / CSS',
    desc: 'Semantics, responsive grids, typography and precise layout geometry.',
  },
];

export default function Skills() {
  return (
    <section className="skills section" id="skills">
      <div className="container">
        <div className="skills-head">
          <span className="eyebrow">Skills</span>
          <h2 className="skills-title">Core stack</h2>
        </div>

        <div className="skills-grid">
          {skills.map((s) => (
            <div className="skill" key={s.name}>
              <div className="skill-shape" aria-hidden="true" />
              <h3>{s.name}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
