'use client';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="top"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        background: '#0b1726',
      }}
    >
      {/* Background image */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0,
        backgroundImage: `url('https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1600&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: 0.18,
      }} />

      {/* Gradient overlay */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1,
        background: 'linear-gradient(135deg, #0b1726 0%, rgba(11,23,38,0.85) 50%, rgba(26,50,84,0.6) 100%)',
      }} />

      {/* Decorative circles */}
      {[
        { size: 500, top: '-120px', right: '-80px', opacity: 0.06 },
        { size: 320, top: '30%', right: '10%', opacity: 0.05 },
        { size: 200, bottom: '10%', left: '5%', opacity: 0.07 },
      ].map((c, i) => (
        <div key={i} style={{
          position: 'absolute', zIndex: 1,
          width: c.size, height: c.size,
          borderRadius: '50%',
          border: '1px solid rgba(200,160,74,0.3)',
          top: c.top, right: c.right, bottom: c.bottom, left: c.left,
          opacity: c.opacity * 10,
        }} />
      ))}

      {/* Floating particles */}
      {[
        { size: 8, left: '15%', top: '25%', delay: '0s', dur: '6s' },
        { size: 5, left: '75%', top: '60%', delay: '2s', dur: '8s' },
        { size: 6, left: '55%', top: '20%', delay: '4s', dur: '7s' },
        { size: 4, left: '30%', top: '70%', delay: '1s', dur: '9s' },
      ].map((p, i) => (
        <div key={i} className="particle" style={{
          width: p.size, height: p.size,
          left: p.left, top: p.top,
          animationDelay: p.delay,
          animationDuration: p.dur,
          zIndex: 2,
        }} />
      ))}

      {/* Content */}
      <div style={{
        position: 'relative', zIndex: 3,
        maxWidth: 1100, margin: '0 auto',
        padding: '120px 2rem 80px',
        width: '100%',
      }}>
        <div style={{
          opacity: loaded ? 1 : 0,
          transform: loaded ? 'none' : 'translateY(30px)',
          transition: 'opacity 0.8s ease, transform 0.8s ease',
        }}>
          {/* Eyebrow */}
          <div style={{
            display: 'flex', alignItems: 'center', gap: 12, marginBottom: 28,
          }}>
            <div style={{ width: 32, height: 1, background: '#c8a04a' }} />
            <span style={{
              fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase',
              color: '#c8a04a', fontWeight: 600, fontFamily: "'Outfit', sans-serif",
            }}>
              Portfolio
            </span>
          </div>

          {/* Name */}
          <h1 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(52px, 9vw, 96px)',
            fontWeight: 300,
            lineHeight: 1.0,
            color: 'white',
            marginBottom: 8,
            letterSpacing: '-0.01em',
          }}>
            Chinonso
          </h1>
          <h1 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(52px, 9vw, 96px)',
            fontWeight: 600,
            lineHeight: 1.0,
            marginBottom: 36,
            letterSpacing: '-0.01em',
          }}
            className="text-gradient"
          >
            Oken
          </h1>

          {/* Tagline */}
          <p style={{
            fontSize: 'clamp(17px, 2.5vw, 22px)',
            color: 'rgba(255,255,255,0.6)',
            fontWeight: 300,
            maxWidth: 520,
            lineHeight: 1.7,
            marginBottom: 44,
            fontFamily: "'Cormorant Garamond', serif",
            fontStyle: 'italic',
          }}>
            A medical doctor and software engineer — building at the intersection of clinical care and technology.
          </p>

          {/* Dual role badges */}
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 52 }}>
            {[
              { icon: '🩺', label: 'Medical Doctor', color: '#1a6b8a', bg: 'rgba(26,107,138,0.2)' },
              { icon: '⌨️', label: 'Software Engineer', color: '#2a7a4f', bg: 'rgba(42,122,79,0.2)' },
            ].map((b) => (
              <div key={b.label} style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '10px 20px', borderRadius: 100,
                border: `1px solid ${b.color}`,
                background: b.bg,
                color: 'white', fontSize: 14, fontWeight: 400,
              }}>
                <span>{b.icon}</span>
                {b.label}
              </div>
            ))}
          </div>

          {/* CTA buttons */}
          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <a
              href="#medicine"
              style={{
                background: '#c8a04a', color: '#0b1726',
                padding: '14px 32px', borderRadius: 8,
                fontSize: 14, fontWeight: 600, textDecoration: 'none',
                letterSpacing: '0.04em', transition: 'background 0.2s, transform 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = '#e4c06e'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = '#c8a04a'; e.currentTarget.style.transform = 'none'; }}
            >
              View My Work
            </a>
            <a
              href="#contact"
              style={{
                background: 'transparent', color: 'white',
                padding: '14px 32px', borderRadius: 8,
                fontSize: 14, fontWeight: 500, textDecoration: 'none',
                border: '1px solid rgba(255,255,255,0.25)',
                letterSpacing: '0.04em', transition: 'border-color 0.2s, transform 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.6)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)'; e.currentTarget.style.transform = 'none'; }}
            >
              Get in Touch
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{
          position: 'absolute', bottom: 40, left: '50%',
          transform: 'translateX(-50%)',
          opacity: loaded ? 0.5 : 0,
          transition: 'opacity 1.2s ease 0.8s',
        }}>
          <div style={{
            width: 1, height: 60,
            background: 'linear-gradient(to bottom, rgba(200,160,74,0.8), transparent)',
            margin: '0 auto',
          }} />
        </div>
      </div>
    </section>
  );
}
