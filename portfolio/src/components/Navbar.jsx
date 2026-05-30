import '../styles/Navbar.css';

const links = [
  { href: '#welcome', label: 'Welcome' },
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contacts', label: 'Contacts' },
];

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <a href="#welcome" className="brand">
          <span className="brand-mark" />
          Portfolio
        </a>

        <nav className="nav-links">
          {links.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>

        <div className="nav-meta">
          <span className="nav-dot" />
          Based in Remote · Available 2026
        </div>
      </div>
    </header>
  );
}
