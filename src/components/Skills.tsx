"use client";
import { useReveal } from "@/lib/useReveal";

const skillGroups = [
  {
    label: "Clinical",
    emoji: "🩺",
    color: "#1a6b8a",
    bg: "rgba(26,107,138,0.12)",
    skills: [
      "Clinical Diagnosis",
      "Patient Management",
      "Emergency Triage",
      "Pharmacology",
      "ECG Interpretation",
      "Public Health",
      "Research Methodology (GCP)",
      "Systematic Reviews",
      "Medical Documentation",
      "SPSS / Data Analysis",
    ],
  },
  {
    label: "Engineering",
    emoji: "⌨️",
    color: "#2a7a4f",
    bg: "rgba(42,122,79,0.12)",
    skills: [
      "React.js",
      "Next.js",
      "Vue.js",
      "Node.js",
      "Python / Django",
      "Java / Spring Boot",
      "PHP",
      "MERN Stack",
      "REST APIs",
      "Microservices",
      "MySQL",
      "PostgreSQL",
      "Git Workflow",
    ],
  },
  {
    label: "DevOps & Cloud",
    emoji: "☁️",
    color: "#7a3ca8",
    bg: "rgba(122,60,168,0.12)",
    skills: [
      "Docker",
      "Kubernetes",
      "AWS",
      "GCP",
      "Azure",
      "CI/CD (Jenkins)",
      "WordPress / WooCommerce",
    ],
  },
  {
    label: "Leadership",
    emoji: "🤝",
    color: "#c8a04a",
    bg: "rgba(200,160,74,0.1)",
    skills: [
      "Strategic Planning",
      "Stakeholder Relations",
      "Team Management",
      "Crisis Communication",
      "Mentoring",
      "Cross-functional Collaboration",
      "Problem-Solving",
    ],
  },
];

export default function Skills() {
  const ref = useReveal();
  return (
    <section
      id="skills"
      style={{
        background: "#0b1726",
        padding: "clamp(60px,10vw,100px) 1.5rem",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div ref={ref} className="reveal" style={{ marginBottom: 48 }}>
          <p
            style={{
              fontSize: 11,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#c8a04a",
              fontWeight: 600,
              marginBottom: 10,
            }}
          >
            Expertise
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
            Skills
          </h2>
          <div
            style={{
              width: 40,
              height: 3,
              background: "#c8a04a",
              borderRadius: 2,
              marginBottom: 18,
            }}
          />
          <p
            style={{
              fontSize: 15,
              color: "rgba(255,255,255,0.4)",
              maxWidth: 500,
              fontWeight: 300,
              lineHeight: 1.8,
            }}
          >
            A rare blend of clinical knowledge and battle-tested engineering
            capability.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(min(100%, 260px), 1fr))",
            gap: 20,
          }}
        >
          {skillGroups.map((g) => (
            <div
              key={g.label}
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: 14,
                padding: "24px 20px",
                transition: "border-color 0.25s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.borderColor = `${g.color}55`)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)")
              }
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  marginBottom: 18,
                }}
              >
                <span
                  style={{
                    width: 38,
                    height: 38,
                    borderRadius: 10,
                    background: g.bg,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 18,
                  }}
                >
                  {g.emoji}
                </span>
                <h3
                  style={{
                    fontSize: 13,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: g.color,
                    fontWeight: 600,
                  }}
                >
                  {g.label}
                </h3>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
                {g.skills.map((s) => (
                  <span
                    key={s}
                    style={{
                      fontSize: 12,
                      padding: "4px 11px",
                      borderRadius: 6,
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.09)",
                      color: "rgba(255,255,255,0.65)",
                      transition: "all 0.2s",
                      cursor: "default",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = `${g.color}22`;
                      e.currentTarget.style.borderColor = `${g.color}55`;
                      e.currentTarget.style.color = "white";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background =
                        "rgba(255,255,255,0.05)";
                      e.currentTarget.style.borderColor =
                        "rgba(255,255,255,0.09)";
                      e.currentTarget.style.color = "rgba(255,255,255,0.65)";
                    }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications strip */}
        <div
          style={{
            marginTop: 40,
            padding: "24px",
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.07)",
            borderRadius: 12,
          }}
        >
          <p
            style={{
              fontSize: 11,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#c8a04a",
              fontWeight: 600,
              marginBottom: 14,
            }}
          >
            Certifications
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
            {[
              {
                name: "JavaScript: Complete Guide",
                issuer: "Udemy · Aug 2020",
                id: "UC-89a83cc5",
              },
              {
                name: "Python: Scratch to Application",
                issuer: "Udemy · Aug 2020",
                id: "UC-bbeae395",
              },
            ].map((c) => (
              <div
                key={c.name}
                style={{
                  padding: "12px 16px",
                  background: "rgba(200,160,74,0.06)",
                  border: "1px solid rgba(200,160,74,0.18)",
                  borderRadius: 8,
                  flex: "1 1 240px",
                }}
              >
                <p
                  style={{
                    fontSize: 14,
                    color: "white",
                    fontWeight: 500,
                    marginBottom: 3,
                  }}
                >
                  {c.name}
                </p>
                <p style={{ fontSize: 12, color: "rgba(255,255,255,0.4)" }}>
                  {c.issuer}
                </p>
                <p
                  style={{
                    fontSize: 10,
                    color: "rgba(200,160,74,0.6)",
                    marginTop: 4,
                    letterSpacing: "0.06em",
                  }}
                >
                  {c.id}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
