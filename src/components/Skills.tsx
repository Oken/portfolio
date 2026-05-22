'use client';
import { useReveal } from '@/lib/useReveal';

const skillGroups = [
  {
    label: 'Clinical',
    emoji: '🩺',
    color: '#1a6b8a',
    bg: '#e6f3f8',
    skills: [
      'Clinical Diagnosis', 'Patient Management', 'Medical History Taking',
      'ECG Interpretation', 'Evidence-Based Medicine', 'Clinical Research',
      'Medical Writing', 'SPSS / Data Analysis', 'Paediatrics', 'Surgery',
    ],
  },
  {
    label: 'Engineering',
    emoji: '⌨️',
    color: '#2a7a4f',
    bg: '#e6f3ec',
    skills: [
      'JavaScript / TypeScript', 'React', 'Next.js', 'Node.js',
      'Python', 'PostgreSQL', 'REST APIs', 'Git / GitHub',
      'Docker', 'FastAPI', 'Tailwind CSS',
    ],
  },
  {
    label: 'AI & Data',
    emoji: '🧠',
    color: '#7a3ca8',
    bg: '#f0e6f8',
    skills: [
      'Machine Learning', 'NLP', 'OpenAI API', 'Pandas', 'Plotly',
      'Data Visualisation', 'Prompt Engineering',
    ],
  },
  {
    label: 'Soft Skills',
    emoji: '🤝',
    color: '#a8862e',
    bg: '#fdf3e0',
    skills: [
      'Clinical Communication', 'Teamwork', 'Problem Solving',
      'Research & Analysis', 'Presentation', 'Adaptability',
    ],
  },
];

export default function Skills() {
  const ref = useReveal();

  return (
    <section
      id="skills"
      style={{ background: '#0b1726', padding: '100px 2rem' }}
    >
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        {/* Header */}
        <div ref={ref} className="reveal" style={{ marginBottom: 60 }}>
          <p style={{ fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#c8a04a', fontWeight: 600, marginBottom: 12 }}>
            Expertise
          </p>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(36px, 5vw, 52px)',
            fontWeight: 600, lineHeight: 1.1, color: 'white', marginBottom: 12,
          }}>
            Skills
          </h2>
          <div style={{ width: 40, height: 3, background: '#c8a04a', borderRadius: 2, marginBottom: 20 }} />
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.45)', maxWidth: 500, fontWeight: 300, lineHeight: 1.7 }}>
            A rare blend of clinical knowledge and technical capability.
          </p>
        </div>

        {/* Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: 24,
        }}>
          {skillGroups.map((g) => (
            <div key={g.label} style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: 14,
              padding: '28px 24px',
              transition: 'border-color 0.25s',
            }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = `${g.color}55`)}
              onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)')}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
                <span style={{
                  width: 38, height: 38, borderRadius: 10,
                  background: `${g.color}22`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 18,
                }}>
                  {g.emoji}
                </span>
                <h3 style={{ fontSize: 13, letterSpacing: '0.1em', textTransform: 'uppercase', color: g.color, fontWeight: 600 }}>
                  {g.label}
                </h3>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {g.skills.map((s) => (
                  <span key={s} style={{
                    fontSize: 13, padding: '5px 13px',
                    borderRadius: 6,
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    color: 'rgba(255,255,255,0.7)',
                    transition: 'all 0.2s',
                    cursor: 'default',
                  }}
                    onMouseEnter={e => {
                      e.currentTarget.style.background = `${g.color}22`;
                      e.currentTarget.style.borderColor = `${g.color}66`;
                      e.currentTarget.style.color = 'white';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.background = 'rgba(255,255,255,0.06)';
                      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                      e.currentTarget.style.color = 'rgba(255,255,255,0.7)';
                    }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
