'use client';
import Image from 'next/image';
import { useReveal } from '@/lib/useReveal';

const timeline = [
  {
    date: '2019 – 2025',
    title: 'MBBS — Bachelor of Medicine, Bachelor of Surgery',
    institution: 'University (Please update)',
    desc: 'Completed six years of rigorous medical training with clinical rotations across internal medicine, surgery, obstetrics & gynaecology, paediatrics, psychiatry, and community health.',
  },
  {
    date: '2024',
    title: 'Clinical Rotation — Internal Medicine',
    institution: 'Teaching Hospital (Please update)',
    desc: 'Managed inpatient care for complex cardiovascular, respiratory and metabolic conditions. Conducted daily ward rounds and participated in multidisciplinary team reviews.',
  },
  {
    date: '2024',
    title: 'Clinical Rotation — Surgery',
    institution: 'Teaching Hospital (Please update)',
    desc: 'Assisted in elective and emergency surgical procedures. Gained experience in pre- and post-operative patient management and surgical techniques.',
  },
  {
    date: '2023',
    title: 'Paediatrics & Obstetrics Rotation',
    institution: 'Teaching Hospital (Please update)',
    desc: 'Managed paediatric and obstetric emergencies. Developed clinical reasoning skills in neonatal care and maternal health.',
  },
  {
    date: '2022',
    title: 'Clinical Research Project',
    institution: 'Department (Please update)',
    desc: 'Conducted a clinical audit or research study. Analysed patient data and presented findings to departmental faculty.',
  },
];

const medImages = [
  'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=400&q=80',
  'https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=400&q=80',
  'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&q=80',
];

export default function Medicine() {
  const ref = useReveal();

  return (
    <section
      id="medicine"
      style={{ background: '#0f1e35', padding: '100px 2rem', position: 'relative', overflow: 'hidden' }}
    >
      {/* Background texture */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0,
        backgroundImage: `url('https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=1600&q=30')`,
        backgroundSize: 'cover', backgroundPosition: 'center',
        opacity: 0.06,
      }} />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: 1100, margin: '0 auto' }}>
        {/* Header */}
        <div ref={ref} className="reveal" style={{ marginBottom: 60 }}>
          <p style={{ fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#1a6b8a', fontWeight: 600, marginBottom: 12 }}>
            Clinical Experience
          </p>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(36px, 5vw, 52px)',
            fontWeight: 600, lineHeight: 1.1, color: 'white', marginBottom: 12,
          }}>
            Medical Career
          </h2>
          <div style={{ width: 40, height: 3, background: '#1a6b8a', borderRadius: 2, marginBottom: 20 }} />
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.5)', maxWidth: 560, fontWeight: 300, lineHeight: 1.7 }}>
            Six years of clinical training across major specialties, building the foundation of a practising physician.
          </p>
        </div>

        {/* Image strip */}
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 16, marginBottom: 60, borderRadius: 12, overflow: 'hidden',
        }}>
          {medImages.map((src, i) => (
            <div key={i} style={{ aspectRatio: '16/9', position: 'relative', overflow: 'hidden' }}>
              <Image src={src} alt="Medical" fill style={{ objectFit: 'cover', transition: 'transform 0.4s' }} sizes="33vw"
                onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
                onMouseLeave={e => (e.currentTarget.style.transform = 'none')}
              />
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div style={{ borderLeft: '2px solid rgba(26,107,138,0.4)', paddingLeft: 32, display: 'flex', flexDirection: 'column', gap: 36 }}>
          {timeline.map((item, i) => (
            <div key={i} style={{ position: 'relative' }}>
              {/* Dot */}
              <div style={{
                position: 'absolute', left: -41,
                width: 12, height: 12, borderRadius: '50%',
                background: i === 0 ? '#1a6b8a' : 'rgba(26,107,138,0.5)',
                border: '2px solid #0f1e35',
                outline: i === 0 ? '2px solid rgba(26,107,138,0.4)' : 'none',
                top: 4,
              }} />
              <p style={{ fontSize: 12, color: '#1a6b8a', letterSpacing: '0.08em', fontWeight: 500, marginBottom: 6 }}>
                {item.date}
              </p>
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 22, fontWeight: 600, color: 'white', marginBottom: 4 }}>
                {item.title}
              </h3>
              <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', marginBottom: 8, fontStyle: 'italic' }}>
                {item.institution}
              </p>
              <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.55)', lineHeight: 1.75, maxWidth: 640 }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
