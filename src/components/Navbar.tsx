"use client";
import { useState, useEffect } from "react";
import ResumeModal from "./ResumeModal";

const links = [
  { href: "#about", label: "About" },
  { href: "#medicine", label: "Medicine" },
  { href: "#engineering", label: "Engineering" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 500,
          transition: "all 0.3s ease",
          background: scrolled ? "rgba(11,23,38,0.96)" : "transparent",
          backdropFilter: scrolled ? "blur(14px)" : "none",
          borderBottom: scrolled
            ? "1px solid rgba(200,160,74,0.15)"
            : "1px solid transparent",
        }}
      >
        <nav
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            padding: "0 1.5rem",
            height: 66,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <a
            href="#"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 22,
              fontWeight: 700,
              color: "white",
              textDecoration: "none",
              letterSpacing: "0.04em",
            }}
          >
            C<span style={{ color: "#c8a04a" }}>.</span>O
          </a>

          {/* Desktop links */}
          <ul
            style={{
              display: "flex",
              gap: "2rem",
              listStyle: "none",
              alignItems: "center",
            }}
            className="hide-mobile"
          >
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="nav-link">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop right buttons */}
          <div
            style={{ display: "flex", gap: 10, alignItems: "center" }}
            className="hide-mobile"
          >
            <button
              onClick={() => setResumeOpen(true)}
              style={{
                background: "transparent",
                color: "rgba(255,255,255,0.7)",
                border: "1px solid rgba(255,255,255,0.2)",
                padding: "8px 18px",
                borderRadius: 6,
                fontSize: 13,
                fontWeight: 500,
                cursor: "pointer",
                fontFamily: "'Outfit', sans-serif",
                letterSpacing: "0.04em",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#c8a04a";
                e.currentTarget.style.color = "#c8a04a";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
                e.currentTarget.style.color = "rgba(255,255,255,0.7)";
              }}
            >
              View Resume
            </button>
            <a
              href="#contact"
              style={{
                background: "#c8a04a",
                color: "#0b1726",
                padding: "8px 20px",
                borderRadius: 6,
                fontSize: 13,
                fontWeight: 600,
                textDecoration: "none",
                letterSpacing: "0.04em",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "#e4c06e")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "#c8a04a")
              }
            >
              Let&apos;s Talk
            </a>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="hide-desktop"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 6,
              display: "flex",
              flexDirection: "column",
              gap: 5,
            }}
            aria-label="Menu"
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                style={{
                  display: "block",
                  width: 22,
                  height: 2,
                  background: "white",
                  borderRadius: 2,
                  transition: "all 0.22s",
                  transform:
                    i === 0 && menuOpen
                      ? "rotate(45deg) translate(5px,5px)"
                      : i === 2 && menuOpen
                        ? "rotate(-45deg) translate(5px,-5px)"
                        : "none",
                  opacity: i === 1 && menuOpen ? 0 : 1,
                }}
              />
            ))}
          </button>
        </nav>

        {/* Mobile drawer */}
        {menuOpen && (
          <div
            style={{
              background: "rgba(11,23,38,0.98)",
              padding: "1.25rem 1.5rem 1.75rem",
              borderTop: "1px solid rgba(200,160,74,0.12)",
            }}
          >
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  display: "block",
                  color: "rgba(255,255,255,0.75)",
                  textDecoration: "none",
                  padding: "0.8rem 0",
                  fontSize: 14,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  borderBottom: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                {l.label}
              </a>
            ))}
            <div style={{ display: "flex", gap: 10, marginTop: 16 }}>
              <button
                onClick={() => {
                  setResumeOpen(true);
                  setMenuOpen(false);
                }}
                style={{
                  flex: 1,
                  background: "transparent",
                  color: "rgba(255,255,255,0.7)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  padding: "10px",
                  borderRadius: 6,
                  fontSize: 13,
                  cursor: "pointer",
                  fontFamily: "'Outfit', sans-serif",
                }}
              >
                View Resume
              </button>
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                style={{
                  flex: 1,
                  background: "#c8a04a",
                  color: "#0b1726",
                  padding: "10px",
                  borderRadius: 6,
                  fontSize: 13,
                  fontWeight: 600,
                  textDecoration: "none",
                  textAlign: "center",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                Let&apos;s Talk
              </a>
            </div>
          </div>
        )}
      </header>

      <ResumeModal open={resumeOpen} onClose={() => setResumeOpen(false)} />
    </>
  );
}
