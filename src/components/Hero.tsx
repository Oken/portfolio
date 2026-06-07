"use client";
import { useEffect, useState } from "react";
import ResumeModal from "./ResumeModal";

const roles = [
  "Medical Doctor",
  "Full-Stack Engineer",
  "Health-Tech Builder",
  "Founder & CEO",
];

export default function Hero() {
  const [loaded, setLoaded] = useState(false);
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 120);
  }, []);

  // Typewriter
  useEffect(() => {
    const target = roles[roleIdx];
    let timeout: NodeJS.Timeout;
    if (!deleting && displayed.length < target.length) {
      timeout = setTimeout(
        () => setDisplayed(target.slice(0, displayed.length + 1)),
        80,
      );
    } else if (!deleting && displayed.length === target.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIdx((roleIdx + 1) % roles.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIdx]);

  return (
    <>
      <section
        id="top"
        style={{
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
          background:
            "linear-gradient(135deg, #060d1a 0%, #0b1726 40%, #0f2040 100%)",
        }}
      >
        {/* Background image */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 0,
            backgroundImage: `url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1800&q=70')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.08,
          }}
        />

        {/* Gradient */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 1,
            background:
              "linear-gradient(135deg, rgba(6,13,26,0.95) 0%, rgba(11,23,38,0.88) 60%, rgba(15,32,64,0.75) 100%)",
          }}
        />

        {/* Decorative rings */}
        {[700, 480, 280].map((size, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              zIndex: 1,
              width: size,
              height: size,
              borderRadius: "50%",
              border: `1px solid rgba(200,160,74,${0.04 + i * 0.02})`,
              top: "50%",
              right: "-5%",
              transform: "translateY(-50%)",
            }}
          />
        ))}

        {/* Floating particles */}
        {[
          { size: 8, left: "12%", top: "22%", delay: "0s", dur: "7s" },
          { size: 5, left: "78%", top: "65%", delay: "2s", dur: "9s" },
          { size: 6, left: "58%", top: "18%", delay: "4s", dur: "6s" },
          { size: 4, left: "28%", top: "72%", delay: "1s", dur: "8s" },
          { size: 7, left: "88%", top: "35%", delay: "3s", dur: "10s" },
        ].map((p, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              zIndex: 2,
              width: p.size,
              height: p.size,
              borderRadius: "50%",
              background: "rgba(200,160,74,0.25)",
              left: p.left,
              top: p.top,
              animation: `floatUp ${p.dur} ${p.delay} infinite ease-in-out`,
            }}
          />
        ))}

        {/* Content */}
        <div
          style={{
            position: "relative",
            zIndex: 3,
            maxWidth: 1100,
            margin: "0 auto",
            padding:
              "clamp(100px, 15vw, 140px) 1.5rem clamp(60px, 10vw, 100px)",
            width: "100%",
          }}
        >
          <div
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? "none" : "translateY(30px)",
              transition: "opacity 0.9s ease, transform 0.9s ease",
            }}
          >
            {/* Eyebrow */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                marginBottom: 28,
              }}
            >
              <div style={{ width: 32, height: 1, background: "#c8a04a" }} />
              <span
                style={{
                  fontSize: 11,
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "#c8a04a",
                  fontWeight: 600,
                }}
              >
                Portfolio · Ife, Nigeria
              </span>
            </div>

            {/* Name */}
            <h1
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                lineHeight: 1.0,
                marginBottom: 8,
                letterSpacing: "-0.01em",
              }}
            >
              <span
                style={{
                  display: "block",
                  fontSize: "clamp(44px, 8vw, 88px)",
                  fontWeight: 300,
                  color: "white",
                }}
              >
                Chinonso
              </span>
              <span
                style={{
                  display: "block",
                  fontSize: "clamp(44px, 8vw, 88px)",
                  fontWeight: 700,
                }}
                className="text-gradient"
              >
                Oken
              </span>
            </h1>

            {/* Typewriter role */}
            <div
              style={{
                height: 40,
                marginBottom: 28,
                display: "flex",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  fontSize: "clamp(16px, 2.5vw, 22px)",
                  color: "rgba(255,255,255,0.55)",
                  fontFamily: "'Cormorant Garamond', serif",
                  fontStyle: "italic",
                  fontWeight: 300,
                }}
              >
                {displayed}
                <span className="cursor-blink" style={{ color: "#c8a04a" }}>
                  |
                </span>
              </span>
            </div>

            {/* Tagline */}
            <p
              style={{
                fontSize: "clamp(14px, 2vw, 17px)",
                color: "rgba(255,255,255,0.5)",
                fontWeight: 300,
                maxWidth: 500,
                lineHeight: 1.8,
                marginBottom: 40,
              }}
            >
              MBBS candidate at OAU · Senior Full-Stack Engineer · Founder of
              Clivoken Systems — building at the intersection of clinical care
              and technology.
            </p>

            {/* Badges */}
            <div
              style={{
                display: "flex",
                gap: 10,
                flexWrap: "wrap",
                marginBottom: 44,
              }}
            >
              {[
                {
                  icon: "🩺",
                  label: "Medical Doctor",
                  color: "#1a6b8a",
                  border: "rgba(26,107,138,0.5)",
                  bg: "rgba(26,107,138,0.15)",
                },
                {
                  icon: "⌨️",
                  label: "Software Engineer",
                  color: "#2a7a4f",
                  border: "rgba(42,122,79,0.5)",
                  bg: "rgba(42,122,79,0.15)",
                },
                {
                  icon: "🏢",
                  label: "Founder, Clivoken Systems",
                  color: "#c8a04a",
                  border: "rgba(200,160,74,0.4)",
                  bg: "rgba(200,160,74,0.1)",
                },
              ].map((b) => (
                <span
                  key={b.label}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 7,
                    padding: "8px 16px",
                    borderRadius: 100,
                    border: `1px solid ${b.border}`,
                    background: b.bg,
                    color: "rgba(255,255,255,0.85)",
                    fontSize: 13,
                    fontWeight: 400,
                  }}
                >
                  <span>{b.icon}</span>
                  {b.label}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a
                href="#medicine"
                className="btn-shimmer"
                style={{
                  padding: "13px 30px",
                  borderRadius: 8,
                  fontSize: 14,
                  fontWeight: 700,
                  textDecoration: "none",
                  color: "#0b1726",
                  letterSpacing: "0.04em",
                  display: "inline-block",
                }}
              >
                View My Work
              </a>

              <button
                onClick={() => setResumeOpen(true)}
                style={{
                  background: "rgba(255,255,255,0.06)",
                  color: "white",
                  padding: "13px 28px",
                  borderRadius: 8,
                  fontSize: 14,
                  fontWeight: 500,
                  cursor: "pointer",
                  border: "1px solid rgba(255,255,255,0.18)",
                  fontFamily: "'Outfit', sans-serif",
                  letterSpacing: "0.04em",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(200,160,74,0.5)";
                  e.currentTarget.style.color = "#c8a04a";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.18)";
                  e.currentTarget.style.color = "white";
                }}
              >
                View Resume ↗
              </button>

              <a
                href="#contact"
                style={{
                  background: "transparent",
                  color: "rgba(255,255,255,0.6)",
                  padding: "13px 28px",
                  borderRadius: 8,
                  fontSize: 14,
                  fontWeight: 500,
                  textDecoration: "none",
                  border: "1px solid rgba(255,255,255,0.15)",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.5)";
                  e.currentTarget.style.color = "white";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)";
                  e.currentTarget.style.color = "rgba(255,255,255,0.6)";
                }}
              >
                Get in Touch
              </a>
            </div>

            {/* Social links */}
            <div
              style={{
                display: "flex",
                gap: 16,
                marginTop: 44,
                alignItems: "center",
              }}
            >
              <span
                style={{
                  fontSize: 12,
                  color: "rgba(255,255,255,0.25)",
                  letterSpacing: "0.1em",
                }}
              >
                FIND ME ON
              </span>
              {[
                {
                  href: "https://linkedin.com/in/oken",
                  label: "LinkedIn",
                  icon: (
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  ),
                },
                {
                  href: "https://github.com/Oken",
                  label: "GitHub",
                  icon: (
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                  ),
                },
                {
                  href: "mailto:okenchinonsolivinus2@gmail.com",
                  label: "Email",
                  icon: (
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  ),
                },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={s.label}
                  style={{
                    color: "rgba(255,255,255,0.35)",
                    transition: "color 0.2s, transform 0.2s",
                    display: "flex",
                    alignItems: "center",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#c8a04a";
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "rgba(255,255,255,0.35)";
                    e.currentTarget.style.transform = "none";
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll line */}
        <div
          style={{
            position: "absolute",
            bottom: 32,
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 3,
            opacity: loaded ? 0.5 : 0,
            transition: "opacity 1.2s ease 1s",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 6,
          }}
        >
          <span
            style={{
              fontSize: 10,
              letterSpacing: "0.15em",
              color: "rgba(255,255,255,0.4)",
              textTransform: "uppercase",
            }}
          >
            Scroll
          </span>
          <div
            style={{
              width: 1,
              height: 48,
              background:
                "linear-gradient(to bottom, rgba(200,160,74,0.7), transparent)",
            }}
          />
        </div>
      </section>

      <ResumeModal open={resumeOpen} onClose={() => setResumeOpen(false)} />
    </>
  );
}
