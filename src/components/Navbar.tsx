'use client';
import { useState, useEffect } from 'react';

const links = [
  { href: '#about', label: 'About' },
  { href: '#medicine', label: 'Medicine' },
  { href: '#engineering', label: 'Engineering' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <header
      style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        zIndex: 1000,
        transition: 'all 0.35s ease',
        background: scrolled ? 'rgba(11,23,38,0.96)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(200,160,74,0.15)' : '1px solid transparent',
      }}
    >
      <nav
        style={{
          maxWidth: 1100,
          margin: '0 auto',
          padding: '0 2rem',
          height: 68,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Logo */}
        <a
          href="#"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 22,
            fontWeight: 600,
            color: 'white',
            textDecoration: 'none',
            letterSpacing: '0.05em',
          }}
        >
          C<span style={{ color: '#c8a04a' }}>.</span>O
        </a>

        {/* Desktop Nav */}
        <ul style={{ display: 'flex', gap: '2.5rem', listStyle: 'none', alignItems: 'center' }}
          className="hidden-mobile">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="nav-link">{l.label}</a>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <a
          href="#contact"
          className="hidden-mobile"
          style={{
            background: '#c8a04a',
            color: '#0b1726',
            padding: '9px 22px',
            borderRadius: 6,
            fontSize: 13,
            fontWeight: 600,
            textDecoration: 'none',
            letterSpacing: '0.04em',
            transition: 'background 0.2s',
          }}
          onMouseEnter={e => (e.currentTarget.style.background = '#e4c06e')}
          onMouseLeave={e => (e.currentTarget.style.background = '#c8a04a')}
        >
          Let&apos;s Talk
        </a>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          style={{
            display: 'none',
            flexDirection: 'column',
            gap: 5,
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: 4,
          }}
          className="show-mobile"
          aria-label="Toggle menu"
        >
          {[0, 1, 2].map(i => (
            <span key={i} style={{
              display: 'block', width: 22, height: 2,
              background: 'white', borderRadius: 2,
              transition: 'all 0.2s',
              transform: i === 0 && open ? 'rotate(45deg) translate(4px,5px)'
                : i === 2 && open ? 'rotate(-45deg) translate(4px,-5px)'
                : 'none',
              opacity: i === 1 && open ? 0 : 1,
            }} />
          ))}
        </button>
      </nav>

      {/* Mobile Drawer */}
      {open && (
        <div style={{
          background: 'rgba(11,23,38,0.98)',
          padding: '1.5rem 2rem 2rem',
          borderTop: '1px solid rgba(200,160,74,0.15)',
        }}>
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{
                display: 'block',
                color: 'rgba(255,255,255,0.8)',
                textDecoration: 'none',
                padding: '0.75rem 0',
                fontSize: 14,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                borderBottom: '1px solid rgba(255,255,255,0.06)',
              }}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
          .hidden-mobile { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
