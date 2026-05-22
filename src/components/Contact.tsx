'use client';
import { useState } from 'react';
import { useReveal } from '@/lib/useReveal';

export default function Contact() {
  const ref = useReveal();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Encode for mailto
    const subject = encodeURIComponent(`Portfolio Inquiry from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`);
    window.location.href = `mailto:chinonso@example.com?subject=${subject}&body=${body}`;
    setSent(true);
  };

  const inputStyle = {
    width: '100%',
    background: 'rgba(255,255,255,0.06)',
    border: '1px solid rgba(255,255,255,0.12)',
    borderRadius: 8,
    padding: '14px 16px',
    color: 'white',
    fontSize: 14,
    fontFamily: "'Outfit', sans-serif",
    outline: 'none',
    transition: 'border-color 0.2s',
  };

  return (
    <section
      id="contact"
      style={{ background: '#0b1726', padding: '100px 2rem', borderTop: '1px solid rgba(200,160,74,0.15)' }}
    >
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '4rem',
          alignItems: 'start',
        }}>
          {/* Left */}
          <div ref={ref} className="reveal">
            <p style={{ fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#c8a04a', fontWeight: 600, marginBottom: 12 }}>
              Get in Touch
            </p>
            <h2 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(36px, 5vw, 52px)',
              fontWeight: 600, lineHeight: 1.1, color: 'white', marginBottom: 12,
            }}>
              Let&apos;s work<br />
              <em style={{ color: '#c8a04a', fontWeight: 300 }}>together.</em>
            </h2>
            <div style={{ width: 40, height: 3, background: '#c8a04a', borderRadius: 2, marginBottom: 28 }} />
            <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 40, fontWeight: 300 }}>
              Open to clinical roles, health-tech opportunities, software positions, and research collaborations. I&apos;d love to hear from you.
            </p>

            {/* Contact links */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[
                {
                  icon: '✉️',
                  label: 'Email',
                  value: 'okenchinonsolivinus@@gmail.com',
                  href: 'mailto:chinonso@example.com',
                },
                {
                  icon: '💼',
                  label: 'LinkedIn',
                  value: 'linkedin.com/in/oken',
                  href: 'https://linkedin.com/in/oken',
                },
                {
                  icon: '⌨️',
                  label: 'GitHub',
                  value: 'github.com/Oken',
                  href: 'https://github.com/Oken',
                },
              ].map((c) => (
                <a key={c.label} href={c.href} target="_blank" rel="noopener noreferrer"
                  style={{
                    display: 'flex', alignItems: 'center', gap: 14,
                    padding: '14px 18px', borderRadius: 10,
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    textDecoration: 'none', transition: 'border-color 0.2s, background 0.2s',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = 'rgba(200,160,74,0.4)';
                    e.currentTarget.style.background = 'rgba(200,160,74,0.06)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                    e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
                  }}
                >
                  <span style={{ fontSize: 20 }}>{c.icon}</span>
                  <div>
                    <p style={{ fontSize: 11, color: '#c8a04a', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 2 }}>{c.label}</p>
                    <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)' }}>{c.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right — Form */}
          <div style={{
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: 16, padding: '36px',
          }}>
            {sent ? (
              <div style={{ textAlign: 'center', padding: '40px 0' }}>
                <div style={{ fontSize: 48, marginBottom: 16 }}>✅</div>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 28, color: 'white', marginBottom: 10 }}>Message sent!</h3>
                <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14 }}>Your email client should have opened. I'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 24, color: 'white', marginBottom: 8 }}>
                  Send a message
                </h3>
                <div>
                  <label style={{ fontSize: 12, color: '#c8a04a', letterSpacing: '0.08em', textTransform: 'uppercase', display: 'block', marginBottom: 6 }}>Name</label>
                  <input
                    required
                    type="text"
                    placeholder="Your full name"
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    style={inputStyle}
                    onFocus={e => (e.target.style.borderColor = 'rgba(200,160,74,0.5)')}
                    onBlur={e => (e.target.style.borderColor = 'rgba(255,255,255,0.12)')}
                  />
                </div>
                <div>
                  <label style={{ fontSize: 12, color: '#c8a04a', letterSpacing: '0.08em', textTransform: 'uppercase', display: 'block', marginBottom: 6 }}>Email</label>
                  <input
                    required
                    type="email"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                    style={inputStyle}
                    onFocus={e => (e.target.style.borderColor = 'rgba(200,160,74,0.5)')}
                    onBlur={e => (e.target.style.borderColor = 'rgba(255,255,255,0.12)')}
                  />
                </div>
                <div>
                  <label style={{ fontSize: 12, color: '#c8a04a', letterSpacing: '0.08em', textTransform: 'uppercase', display: 'block', marginBottom: 6 }}>Message</label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Tell me about the opportunity..."
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    style={{ ...inputStyle, resize: 'vertical' }}
                    onFocus={e => (e.target.style.borderColor = 'rgba(200,160,74,0.5)')}
                    onBlur={e => (e.target.style.borderColor = 'rgba(255,255,255,0.12)')}
                  />
                </div>
                <button
                  type="submit"
                  style={{
                    background: '#c8a04a', color: '#0b1726',
                    padding: '14px', borderRadius: 8,
                    fontSize: 14, fontWeight: 600,
                    border: 'none', cursor: 'pointer',
                    letterSpacing: '0.04em',
                    transition: 'background 0.2s',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.background = '#e4c06e')}
                  onMouseLeave={e => (e.currentTarget.style.background = '#c8a04a')}
                >
                  Send Message →
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
