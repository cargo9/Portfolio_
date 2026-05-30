import '../styles/About.css';

const stats = [
  { value: '04+', label: 'Years of experience' },
  { value: '30+', label: 'Completed projects' },
  { value: '12+', label: 'Happy clients' },
];

export default function About() {
  return (
    <section className="about section" id="about">
      <div className="container about-inner">
        <div className="about-copy">
          <span className="eyebrow">About</span>
          <h2 className="about-title">Design and code as a unified language</h2>
          <p>
            Несколько лет я создаю веб-продукты, соединяя инженерную точность и
            визуальную выразительность. Каждый интерфейс — это система: сетка,
            ритм, типографика и ничего лишнего.
          </p>
          <p>
            Мне близок геометричный подход — когда форма строится на простых
            фигурах и выверенных пропорциях.
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
