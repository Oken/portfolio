'use client';
import Image from 'next/image';
import { useReveal } from '@/lib/useReveal';

const projects = [
  {
    tag: 'Health Tech',
    tagColor: '#1a6b8a',
    tagBg: 'rgba(26,107,138,0.12)',
    title: 'Patient Triage System',
    desc: 'A web application to streamline outpatient triage in low-resource clinic settings — reducing wait times and improving documentation accuracy.',
    stack: ['React', 'Node.js', 'PostgreSQL', 'Tailwind'],
    img: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&q=80',
    link: 'https://github.com/Oken',
  },
  {
    tag: 'AI / NLP',
    tagColor: '#a8862e',
    tagBg: 'rgba(168,134,46,0.12)',
    title: 'Clinical Note Summariser',
    desc: 'An NLP-powered tool that extracts key clinical findings from discharge summaries to assist in handover and documentation workflows.',
    stack: ['Python', 'OpenAI API', 'FastAPI', 'React'],
    img: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&q=80',
    link: 'https://github.com/Oken',
  },
  {
    tag: 'Mobile Web',
    tagColor: '#2a7a4f',
    tagBg: 'rgba(42,122,79,0.12)',
    title: 'Bedside Drug Reference',
    desc: 'A mobile-first drug reference tool for junior doctors to quickly check dosing, interactions and contraindications at the point of care.',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    img: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80',
    link: 'https://github.com/Oken',
  },
  {
    tag: 'Data Viz',
    tagColor: '#7a3ca8',
    tagBg: 'rgba(122,60,168,0.12)',
    title: 'Clinical Research Dashboard',
    desc: 'An interactive data visualisation dashboard for clinical researchers to explore, filter and export patient cohort data with ease.',
    stack: ['Python', 'Pandas', 'Plotly', 'Streamlit'],
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80',
    link: 'https://github.com/Oken',
  },
];

export default function Engineering() {
  const ref = useReveal();

  return (
    <section
      id="engineering"
      style={{ background: '#f8f5ef', padding: '100px 2rem' }}
    >
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        {/* Header */}
        <div ref={ref} className="reveal" style={{ marginBottom: 60 }}>
          <p style={{ fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#2a7a4f', fontWeight: 600, marginBottom: 12 }}>
            Software Projects
          </p>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(36px, 5vw, 52px)',
            fontWeight: 600, lineHeight: 1.1, color: '#0b1726', marginBottom: 12,
          }}>
            Engineering Work
          </h2>
          <div style={{ width: 40, height: 3, background: '#2a7a4f', borderRadius: 2, marginBottom: 20 }} />
          <p style={{ fontSize: 16, color: '#6b7a99', maxWidth: 560, fontWeight: 300, lineHeight: 1.7 }}>
            Full-stack applications and health-tech tools built to solve real clinical problems.
          </p>
        </div>

        {/* Project grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(480px, 1fr))',
          gap: 24,
        }}>
          {projects.map((p) => (
            <a
              key={p.title}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="card-hover"
              style={{
                background: 'white',
                border: '1px solid #ede9e0',
                borderRadius: 14,
                overflow: 'hidden',
                textDecoration: 'none',
                color: 'inherit',
                display: 'block',
              }}
            >
              {/* Image */}
              <div style={{ position: 'relative', height: 200, overflow: 'hidden' }}>
                <Image
                  src={p.img}
                  alt={p.title}
                  fill
                  style={{ objectFit: 'cover', transition: 'transform 0.4s' }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(to bottom, transparent 40%, rgba(11,23,38,0.5) 100%)',
                }} />
              </div>

              {/* Content */}
              <div style={{ padding: '24px 28px 28px' }}>
                <span style={{
                  display: 'inline-block', fontSize: 11, fontWeight: 600,
                  letterSpacing: '0.1em', textTransform: 'uppercase',
                  padding: '4px 12px', borderRadius: 100,
                  background: p.tagBg, color: p.tagColor,
                  marginBottom: 12,
                }}>
                  {p.tag}
                </span>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 24, fontWeight: 700, color: '#0b1726', marginBottom: 10 }}>
                  {p.title}
                </h3>
                <p style={{ fontSize: 14, color: '#6b7a99', lineHeight: 1.7, marginBottom: 20 }}>
                  {p.desc}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {p.stack.map((s) => (
                    <span key={s} className="skill-pill" style={{ fontSize: 12 }}>{s}</span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* GitHub CTA */}
        <div style={{ textAlign: 'center', marginTop: 48 }}>
          <a
            href="https://github.com/Oken"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              background: '#0b1726', color: 'white',
              padding: '14px 32px', borderRadius: 8,
              fontSize: 14, fontWeight: 500, textDecoration: 'none',
              transition: 'background 0.2s, transform 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = '#1e3254'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = '#0b1726'; e.currentTarget.style.transform = 'none'; }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
