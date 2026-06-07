"use client";
import Image from "next/image";
import { useReveal } from "@/lib/useReveal";

const stats = [
  { value: "6+", label: "Years Engineering" },
  { value: "MBBS", label: "OAU Medicine" },
  { value: "10K+", label: "SaaS Users Served" },
  { value: "CEO", label: "Clivoken Systems" },
];

export default function About() {
  const ref = useReveal();
  return (
    <section
      id="about"
      style={{
        background: "#f8f5ef",
        padding: "clamp(60px,10vw,100px) 1.5rem",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div
          ref={ref}
          className="reveal"
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(min(100%, 320px), 1fr))",
            gap: "clamp(2rem, 5vw, 4rem)",
            alignItems: "center",
          }}
        >
          {/* Text */}
          <div>
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
              About Me
            </p>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(32px,5vw,52px)",
                fontWeight: 600,
                lineHeight: 1.1,
                color: "#0b1726",
                marginBottom: 10,
              }}
            >
              Two worlds,
              <br />
              <em style={{ fontWeight: 300, color: "#6b7a99" }}>
                one purpose.
              </em>
            </h2>
            <div
              style={{
                width: 40,
                height: 3,
                background: "#c8a04a",
                borderRadius: 2,
                marginBottom: 24,
              }}
            />
            <p
              style={{
                fontSize: 15,
                lineHeight: 1.9,
                color: "#3a4a60",
                marginBottom: 14,
                fontWeight: 300,
              }}
            >
              I&apos;m a senior full-stack engineer with 6+ years of experience
              and an MBBS candidate at Obafemi Awolowo University. As General
              Secretary of IFUMSA — representing thousands of medical students —
              I bridge leadership, clinical medicine, and software engineering
              daily.
            </p>
            <p
              style={{
                fontSize: 15,
                lineHeight: 1.9,
                color: "#3a4a60",
                marginBottom: 28,
                fontWeight: 300,
              }}
            >
              As Founder & CEO of{" "}
              <strong style={{ color: "#0b1726", fontWeight: 600 }}>
                Clivoken Systems LTD
              </strong>
              , I&apos;ve built SaaS platforms scaling to 10,000+ global users,
              led cross-functional engineering teams, and architected
              microservices that cut deployment times by 30%. My clinical
              training keeps that work grounded in what patients and doctors
              actually need.
            </p>

            {/* Stats */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))",
                gap: 12,
              }}
            >
              {stats.map((s) => (
                <div
                  key={s.label}
                  style={{
                    textAlign: "center",
                    padding: "16px 10px",
                    background: "white",
                    borderRadius: 10,
                    border: "1px solid #ede9e0",
                    transition: "border-color 0.2s, transform 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "#c8a04a";
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "#ede9e0";
                    e.currentTarget.style.transform = "none";
                  }}
                >
                  <p
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: 26,
                      fontWeight: 700,
                      color: "#0b1726",
                      marginBottom: 4,
                    }}
                  >
                    {s.value}
                  </p>
                  <p
                    style={{
                      fontSize: 11,
                      color: "#6b7a99",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div style={{ position: "relative", maxWidth: 420 }}>
            <div
              style={{
                position: "absolute",
                top: -14,
                right: -14,
                width: "100%",
                height: "100%",
                border: "2px solid #c8a04a",
                borderRadius: 14,
                zIndex: 0,
              }}
            />
            <div
              style={{
                position: "relative",
                zIndex: 1,
                borderRadius: 10,
                overflow: "hidden",
                aspectRatio: "4/5",
              }}
            >
              <Image
                src="/Dr_CHINONSO_OKEN_ed.jpg"
                // src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&q=80&auto=format&fit=crop"
                alt="DR CHINONSO OKEN"
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div
                style={{
                  position: "absolute",
                  bottom: 18,
                  left: 18,
                  zIndex: 2,
                  background: "rgba(11,23,38,0.92)",
                  backdropFilter: "blur(8px)",
                  borderRadius: 10,
                  padding: "12px 16px",
                  border: "1px solid rgba(200,160,74,0.3)",
                }}
              >
                <p
                  style={{
                    color: "#c8a04a",
                    fontSize: 10,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    marginBottom: 2,
                  }}
                >
                  Based in
                </p>
                <p style={{ color: "white", fontSize: 14, fontWeight: 500 }}>
                  Ife Central, Osun 🇳🇬
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
