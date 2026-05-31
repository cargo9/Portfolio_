import { useState, useEffect } from 'react';
import '../styles/Navbar.css';

const links = [
  { href: '#welcome', label: 'Welcome' },
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contacts', label: 'Contacts' },
];

function getInitialTheme() {
  if (typeof window === 'undefined') return 'light';
  const saved = window.localStorage.getItem('theme');
  if (saved === 'light' || saved === 'dark') return saved;
  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';
}

export default function Navbar() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    window.localStorage.setItem('theme', theme);
  }, [theme]);

  const isDark = theme === 'dark';
  const toggle = () => setTheme(isDark ? 'light' : 'dark');

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

        <button
          type="button"
          className={`theme-toggle${isDark ? ' is-dark' : ''}`}
          onClick={toggle}
          role="switch"
          aria-checked={isDark}
          aria-label="Toggle dark theme"
          title={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
        >
          <span className="theme-toggle-icon sun" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="14" height="14">
              <circle cx="12" cy="12" r="4.5" fill="currentColor" />
              <g
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <line x1="12" y1="1.5" x2="12" y2="4" />
                <line x1="12" y1="20" x2="12" y2="22.5" />
                <line x1="1.5" y1="12" x2="4" y2="12" />
                <line x1="20" y1="12" x2="22.5" y2="12" />
                <line x1="4.2" y1="4.2" x2="6" y2="6" />
                <line x1="18" y1="18" x2="19.8" y2="19.8" />
                <line x1="19.8" y1="4.2" x2="18" y2="6" />
                <line x1="6" y1="18" x2="4.2" y2="19.8" />
              </g>
            </svg>
          </span>
          <span className="theme-toggle-icon moon" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="13" height="13">
              <path
                d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"
                fill="currentColor"
              />
            </svg>
          </span>
          <span className="theme-toggle-thumb" aria-hidden="true" />
        </button>
      </div>
    </header>
  );
}
