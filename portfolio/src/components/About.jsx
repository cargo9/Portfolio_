import '../styles/About.css';

const stats = [
  { value: '1+', label: 'Years of experience' },
  { value: '5+', label: 'Completed projects' },
  { value: '5+', label: 'Happy clients' },
];

export default function About() {
  return (
    <section className="about section" id="about">
      <div className="container about-inner">
        <div className="about-copy">
          <span className="eyebrow">About</span>
          <h2 className="about-title">Design and code as a unified language</h2>
          <p>
            For several years I have been building web products, combining
            engineering precision with visual expressiveness. Every interface is
            a system: grid, rhythm, typography and nothing superfluous.
          </p>
          <p>
            I'm drawn to a approach — where form is built from simple
            shapes and carefully balanced proportions.
          </p>
        </div>

        <div className="about-stats">
          {stats.map((s) => (
            <div className="stat" key={s.label}>
              <span className="stat-value">{s.value}</span>
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
