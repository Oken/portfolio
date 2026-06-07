"use client";
import { useState, useEffect } from "react";

interface Props {
  open: boolean;
  onClose: () => void;
}

const resumes = [
  {
    id: "health",
    label: "Medical CV",
    subtitle: "Clinical & Research",
    emoji: "🩺",
    color: "#1a6b8a",
    bg: "rgba(26,107,138,0.15)",
    border: "rgba(26,107,138,0.4)",
    file: "/resumes/health.pdf",
    desc: "MBBS · Clinical Rotations · Research · Leadership at OAU",
  },
  {
    id: "software",
    label: "Engineering CV",
    subtitle: "Software & Tech",
    emoji: "⌨️",
    color: "#2a7a4f",
    bg: "rgba(42,122,79,0.15)",
    border: "rgba(42,122,79,0.4)",
    file: "/resumes/software-engineering.pdf",
    desc: "6+ Years · Full-Stack · Founder of Clivoken Systems",
  },
];

export default function ResumeModal({ open, onClose }: Props) {
  const [viewing, setViewing] = useState<string | null>(null);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else {
      document.body.style.overflow = "";
      setViewing(null);
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  const activeResume = resumes.find((r) => r.id === viewing);

  return (
    <div
      className="modal-overlay"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        style={{
          background: "#0f1e35",
          borderRadius: 16,
          width: "100%",
          maxWidth: viewing ? 900 : 620,
          maxHeight: "92vh",
          overflow: "hidden",
          border: "1px solid rgba(200,160,74,0.2)",
          boxShadow: "0 40px 120px rgba(0,0,0,0.6)",
          display: "flex",
          flexDirection: "column",
          transition: "max-width 0.3s ease",
        }}
      >
        {/* Header */}
        <div
          style={{
            padding: "20px 24px",
            borderBottom: "1px solid rgba(255,255,255,0.08)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexShrink: 0,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            {viewing && (
              <button
                onClick={() => setViewing(null)}
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: 6,
                  color: "rgba(255,255,255,0.6)",
                  cursor: "pointer",
                  padding: "5px 12px",
                  fontSize: 13,
                  fontFamily: "'Outfit', sans-serif",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "rgba(255,255,255,0.6)")
                }
              >
                ← Back
              </button>
            )}
            <div>
              <h3
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 22,
                  color: "white",
                  fontWeight: 700,
                }}
              >
                {viewing ? activeResume?.label : "My Resumes"}
              </h3>
              {!viewing && (
                <p
                  style={{
                    fontSize: 13,
                    color: "rgba(255,255,255,0.4)",
                    marginTop: 2,
                  }}
                >
                  Select which CV to view
                </p>
              )}
            </div>
          </div>
          <button
            onClick={onClose}
            style={{
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 8,
              width: 34,
              height: 34,
              cursor: "pointer",
              color: "rgba(255,255,255,0.5)",
              fontSize: 18,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(255,255,255,0.12)";
              e.currentTarget.style.color = "white";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(255,255,255,0.06)";
              e.currentTarget.style.color = "rgba(255,255,255,0.5)";
            }}
          >
            ×
          </button>
        </div>

        {/* Body */}
        {!viewing ? (
          /* Selection view */
          <div
            style={{
              padding: "28px 24px",
              display: "flex",
              flexDirection: "column",
              gap: 16,
            }}
          >
            <p
              style={{
                fontSize: 14,
                color: "rgba(255,255,255,0.45)",
                lineHeight: 1.7,
                marginBottom: 8,
              }}
            >
              Chinonso Oken holds dual expertise — choose the CV that matches
              your interest:
            </p>
            {resumes.map((r) => (
              <div
                key={r.id}
                style={{
                  background: r.bg,
                  border: `1px solid ${r.border}`,
                  borderRadius: 12,
                  padding: "20px 22px",
                  cursor: "pointer",
                  transition: "all 0.22s",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
                onClick={() => setViewing(r.id)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow = `0 12px 32px ${r.color}22`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "none";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                  <span
                    style={{
                      fontSize: 32,
                      width: 56,
                      height: 56,
                      borderRadius: 12,
                      background: `${r.color}22`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {r.emoji}
                  </span>
                  <div>
                    <p
                      style={{
                        color: r.color,
                        fontSize: 11,
                        fontWeight: 600,
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        marginBottom: 4,
                      }}
                    >
                      {r.subtitle}
                    </p>
                    <h4
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: 22,
                        color: "white",
                        fontWeight: 700,
                        marginBottom: 4,
                      }}
                    >
                      {r.label}
                    </h4>
                    <p style={{ fontSize: 13, color: "rgba(255,255,255,0.5)" }}>
                      {r.desc}
                    </p>
                  </div>
                </div>
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 8,
                    background: `${r.color}22`,
                    border: `1px solid ${r.border}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: r.color,
                    fontSize: 16,
                    flexShrink: 0,
                  }}
                >
                  →
                </div>
              </div>
            ))}

            <p
              style={{
                fontSize: 12,
                color: "rgba(255,255,255,0.25)",
                textAlign: "center",
                marginTop: 8,
              }}
            >
              Click a CV to preview it · Download available inside
            </p>
          </div>
        ) : (
          /* PDF Viewer */
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              flex: 1,
              overflow: "hidden",
            }}
          >
            {/* Toolbar */}
            <div
              style={{
                padding: "12px 20px",
                background: "rgba(0,0,0,0.3)",
                borderBottom: "1px solid rgba(255,255,255,0.06)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexShrink: 0,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ fontSize: 13, color: "rgba(255,255,255,0.4)" }}>
                  {activeResume?.label} — Chinonso Oken
                </span>
              </div>
              <div style={{ display: "flex", gap: 8 }}>
                <a
                  href={activeResume?.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    color: "rgba(255,255,255,0.7)",
                    padding: "6px 14px",
                    borderRadius: 6,
                    fontSize: 12,
                    textDecoration: "none",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(255,255,255,0.12)";
                    e.currentTarget.style.color = "white";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(255,255,255,0.06)";
                    e.currentTarget.style.color = "rgba(255,255,255,0.7)";
                  }}
                >
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                  Open Full
                </a>
                <a
                  href={activeResume?.file}
                  download
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    background: "#c8a04a",
                    color: "#0b1726",
                    padding: "6px 14px",
                    borderRadius: 6,
                    fontSize: 12,
                    fontWeight: 600,
                    textDecoration: "none",
                    transition: "background 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.background = "#e4c06e")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.background = "#c8a04a")
                  }
                >
                  ↓ Download
                </a>
              </div>
            </div>

            {/* PDF iframe */}
            <div style={{ flex: 1, overflow: "hidden", minHeight: 500 }}>
              <iframe
                src={`${activeResume?.file}#toolbar=1&navpanes=0&scrollbar=1`}
                style={{
                  width: "100%",
                  height: "100%",
                  border: "none",
                  minHeight: 500,
                }}
                title={activeResume?.label}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
