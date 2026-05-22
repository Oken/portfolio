'use client';
import Image from 'next/image';
import { useReveal } from '@/lib/useReveal';

export default function About() {
  const ref = useReveal();

  return (
    <section
      id="about"
      style={{ background: '#f8f5ef', padding: '100px 2rem' }}
    >
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div
          ref={ref}
          className="reveal"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '4rem',
            alignItems: 'center',
          }}
        >
          {/* Image column */}
          <div style={{ position: 'relative' }}>
            {/* Decorative gold border */}
            <div style={{
              position: 'absolute',
              top: -16, left: -16,
              width: '100%', height: '100%',
              border: '2px solid #c8a04a',
              borderRadius: 16,
              zIndex: 0,
            }} />
            <div style={{
              position: 'relative', zIndex: 1,
              borderRadius: 12,
              overflow: 'hidden',
              aspectRatio: '4/5',
              background: '#ddd',
            }}>
              <Image
                src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=600&q=80"
                alt="Doctor and engineer - Chinonso Oken"
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Floating tag */}
              <div style={{
                position: 'absolute', bottom: 20, left: 20, zIndex: 2,
                background: 'rgba(11,23,38,0.9)',
                backdropFilter: 'blur(8px)',
                borderRadius: 10, padding: '12px 18px',
                border: '1px solid rgba(200,160,74,0.3)',
              }}>
                <p style={{ color: '#c8a04a', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 2 }}>Based in</p>
                <p style={{ color: 'white', fontSize: 14, fontWeight: 500 }}>Nigeria 🇳🇬</p>
              </div>
            </div>
          </div>

          {/* Text column */}
          <div>
            <p style={{ fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#c8a04a', fontWeight: 600, marginBottom: 12 }}>About Me</p>
            <h2 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(36px, 5vw, 52px)',
              fontWeight: 600, lineHeight: 1.1,
              color: '#0b1726', marginBottom: 12,
            }}>
              Two worlds,<br />
              <em style={{ fontWeight: 300, color: '#6b7a99' }}>one purpose.</em>
            </h2>
            <div style={{ width: 40, height: 3, background: '#c8a04a', borderRadius: 2, marginBottom: 28 }} />

            <p style={{ fontSize: 16, lineHeight: 1.9, color: '#3a4a60', marginBottom: 18, fontWeight: 300 }}>
              I&apos;m a recently graduated medical doctor and software engineer with a deep passion for the intersection of healthcare and technology. I believe the most meaningful advances in medicine will come from those who can speak both languages fluently.
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.9, color: '#3a4a60', marginBottom: 32, fontWeight: 300 }}>
              My clinical training gave me first-hand understanding of where digital tools fail clinicians and patients alike — and my engineering background gives me the ability to build better ones.
            </p>

            {/* Stats */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
              {[
                { value: 'MBBS', label: 'Medical Degree' },
                { value: '5+', label: 'Projects Built' },
                { value: '2-in-1', label: 'Unique Expertise' },
              ].map((s) => (
                <div key={s.label} style={{
                  textAlign: 'center', padding: '18px 12px',
                  background: 'white', borderRadius: 10,
                  border: '1px solid #ede9e0',
                }}>
                  <p style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: 28, fontWeight: 700, color: '#0b1726', marginBottom: 4,
                  }}>{s.value}</p>
                  <p style={{ fontSize: 12, color: '#6b7a99', letterSpacing: '0.06em' }}>{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
