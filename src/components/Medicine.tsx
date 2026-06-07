"use client";
import Image from "next/image";
import { useReveal } from "@/lib/useReveal";

const timeline = [
  {
    date: "2018 – 2026",
    title: "MBBS — Obafemi Awolowo University",
    institution: "OAU, Ife Central, Osun",
    desc: "Six-year medical programme covering Internal Medicine, Surgery, Paediatrics, Obstetrics & Gynaecology, Psychiatry and Community Health. Expected graduation: April 2026.",
    current: true,
  },
  {
    date: "2024 - 2026",
    title: "General Secretary — IFUMSA",
    institution: "OAU Medical Students Association",
    desc: "Represent the student body in formal engagements with the Provost and Faculty Deans. Plan and execute large-scale medical seminars, coordinate cross-functional teams, and serve as liaison resolving complex organisational issues.",
    current: true,
  },
  {
    date: "2022 - 2026",
    title: "Clinical Trainee / Intern",
    institution: "OAUTHC — OAU Teaching Hospital",
    desc: "Performed patient triage and preliminary examinations under senior physician supervision across Internal Medicine, Surgery, Paediatrics, and O&G. Streamlined clinical documentation workflows to improve departmental efficiency.",
    current: false,
  },
  {
    date: "2025 - 2026",
    title: "Clinical Research Assistant & Methodologist",
    institution: "Academic / Clinical Study",
    desc: "Designed research protocols compliant with Good Clinical Practice (GCP) and ethical standards. Conducted systematic literature reviews and synthesised complex datasets to support evidence-based medicine.",
    current: false,
  },
  {
    date: "2021 - 2026",
    title: "Health Informatics & API Security Project",
    institution: "Independent / Clinical",
    desc: "Analysed medical data streams and network communication flows to optimise health-tech application security. Translated clinical requirements into technical data workflows for hospital information systems.",
    current: false,
  },
];

export default function Medicine() {
  const ref = useReveal();
  return (
    <section
      id="medicine"
      style={{
        background: "#0f1e35",
        padding: "clamp(60px,10vw,100px) 1.5rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          backgroundImage: `url('https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=1600&q=20')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.05,
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: 1100,
          margin: "0 auto",
        }}
      >
        <div ref={ref} className="reveal" style={{ marginBottom: 48 }}>
          <p
            style={{
              fontSize: 11,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#1a6b8a",
              fontWeight: 600,
              marginBottom: 10,
            }}
          >
            Clinical Experience
          </p>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(32px,5vw,52px)",
              fontWeight: 600,
              color: "white",
              marginBottom: 10,
              lineHeight: 1.1,
            }}
          >
            Medical Career
          </h2>
          <div
            style={{
              width: 40,
              height: 3,
              background: "#1a6b8a",
              borderRadius: 2,
              marginBottom: 18,
            }}
          />
          <p
            style={{
              fontSize: 15,
              color: "rgba(255,255,255,0.45)",
              maxWidth: 540,
              fontWeight: 300,
              lineHeight: 1.8,
            }}
          >
            Six years of clinical training at OAU, leadership at IFUMSA, and
            hands-on experience at OAUTHC — building the dual foundation of a
            doctor-engineer.
          </p>
        </div>

        {/* Image strip */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 12,
            marginBottom: 52,
            borderRadius: 12,
            overflow: "hidden",
          }}
        >
          {[
            "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=500&q=70",
            "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=500&q=70",
            "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=500&q=70",
          ].map((src, i) => (
            <div
              key={i}
              style={{
                aspectRatio: "16/9",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <Image
                src={src}
                alt="Medical"
                fill
                style={{ objectFit: "cover", transition: "transform 0.5s" }}
                sizes="33vw"
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "scale(1.07)")
                }
                onMouseLeave={(e) => (e.currentTarget.style.transform = "none")}
              />
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div
          style={{
            borderLeft: "2px solid rgba(26,107,138,0.35)",
            paddingLeft: "clamp(1.5rem, 4vw, 2.5rem)",
            display: "flex",
            flexDirection: "column",
            gap: 36,
          }}
        >
          {timeline.map((item, i) => (
            <div key={i} style={{ position: "relative" }}>
              <div
                style={{
                  position: "absolute",
                  left: "clamp(-2.4rem, -3.5vw, -2.9rem)",
                  width: 12,
                  height: 12,
                  borderRadius: "50%",
                  background: item.current ? "#1a6b8a" : "rgba(26,107,138,0.4)",
                  outline: item.current
                    ? "3px solid rgba(26,107,138,0.25)"
                    : "none",
                  top: 5,
                }}
              />
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  marginBottom: 5,
                  flexWrap: "wrap",
                }}
              >
                <p
                  style={{
                    fontSize: 12,
                    color: "#1a6b8a",
                    letterSpacing: "0.08em",
                    fontWeight: 500,
                  }}
                >
                  {item.date}
                </p>
                {item.current && (
                  <span
                    className="pulse-dot"
                    style={{
                      fontSize: 10,
                      color: "#fbb324",
                      background: "rgba(251,179,36,0.12)",
                      border: "1px solid rgba(251,179,36,0.3)",
                      padding: "2px 8px",
                      borderRadius: 100,
                    }}
                  >
                    ● Active
                  </span>
                )}
              </div>
              <h3
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(18px, 2.5vw, 22px)",
                  fontWeight: 700,
                  color: "white",
                  marginBottom: 3,
                }}
              >
                {item.title}
              </h3>
              <p
                style={{
                  fontSize: 13,
                  color: "rgba(255,255,255,0.38)",
                  marginBottom: 8,
                  fontStyle: "italic",
                }}
              >
                {item.institution}
              </p>
              <p
                style={{
                  fontSize: 14,
                  color: "rgba(255,255,255,0.52)",
                  lineHeight: 1.75,
                  maxWidth: 660,
                }}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
