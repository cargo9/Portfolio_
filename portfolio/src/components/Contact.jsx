import '../styles/Contact.css';

const contacts = [
  { label: 'Email', value: 'suntsevyaroslav@gmail.com', href: 'mailto:suntsevyaroslav@gmail.com' },
  { label: 'Telegram', value: '@Carg09_09', href: 'https://t.me/Carg09_09' },
  { label: 'GitHub', value: 'github.com/cargo9', href: 'https://github.com/cargo9' },
];

export default function Contact() {
  return (
    <section className="contact section" id="contacts">
      <div className="container contact-inner">
        <span className="eyebrow">Contacts</span>
        <h2 className="contact-title">Let&apos;s build something precise together</h2>
        <p className="contact-lead">
          Open to collaboration and interesting challenges. Drop a line — let's
          discuss your project.
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
