import '../styles/Contact.css';

const contacts = [
  { label: 'Email', value: 'hello@portfolio.dev', href: 'mailto:hello@portfolio.dev' },
  { label: 'Telegram', value: '@developer', href: 'https://t.me/developer' },
  { label: 'GitHub', value: 'github.com/dev', href: 'https://github.com/dev' },
];

export default function Contact() {
  return (
    <section className="contact section" id="contacts">
      <div className="container contact-inner">
        <span className="eyebrow">Contacts</span>
        <h2 className="contact-title">Let&apos;s build something precise together</h2>
        <p className="contact-lead">
          Открыт к сотрудничеству и интересным задачам. Напишите — обсудим проект.
        </p>

        <div className="contact-list">
          {contacts.map((c) => (
            <a
              className="contact-card"
              key={c.label}
              href={c.href}
              target="_blank"
              rel="noreferrer"
            >
              <span className="contact-label">{c.label}</span>
              <span className="contact-value">{c.value}</span>
              <span className="contact-arrow" aria-hidden="true">→</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
