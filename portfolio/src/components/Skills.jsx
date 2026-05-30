import '../styles/Skills.css';

const skills = [
  {
    name: 'React',
    desc: 'Компонентные архитектуры, состояние, хуки и переиспользуемые UI-системы.',
  },
  {
    name: 'JavaScript',
    desc: 'Современный JS, работа с данными, анимации и логика интерфейсов.',
  },
  {
    name: 'HTML / CSS',
    desc: 'Семантика, адаптивные сетки, типографика и точная геометрия макета.',
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
