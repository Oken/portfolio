'use client';
export default function Footer() {
  return (
    <footer style={{
      background: '#080f1e',
      borderTop: '1px solid rgba(200,160,74,0.12)',
      padding: '32px 2rem',
    }}>
      <div style={{
        maxWidth: 1100, margin: '0 auto',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        flexWrap: 'wrap', gap: 16,
      }}>
        <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 20, color: 'rgba(255,255,255,0.7)', fontWeight: 600 }}>
          C<span style={{ color: '#c8a04a' }}>.</span>O
        </p>
        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.3)' }}>
          © {new Date().getFullYear()} Chinonso Oken · Doctor & Software Engineer
        </p>
        <div style={{ display: 'flex', gap: 20 }}>
          {[
            { href: 'https://linkedin.com/in/oken', label: 'LinkedIn' },
            { href: 'https://github.com/Oken', label: 'GitHub' },
          ].map((l) => (
            <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer"
              style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#c8a04a')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.4)')}
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
