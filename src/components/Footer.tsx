"use client";

export default function Footer() {
  return (
    <footer
      style={{
        background: "#060e1a",
        borderTop: "1px solid rgba(200,160,74,0.1)",
        fontFamily: "'Outfit', sans-serif",
      }}
    >
      {/* Upsell */}
      <div
        style={{
          background: "linear-gradient(135deg,#0f1e35,#132039,#0f1e35)",
          borderBottom: "1px solid rgba(200,160,74,0.09)",
          padding: "clamp(48px,8vw,72px) 1.5rem",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontSize: 11,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#c8a04a",
            fontWeight: 600,
            marginBottom: 12,
          }}
        >
          Open to Opportunities
        </p>
        <h3
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(26px,4vw,44px)",
            fontWeight: 600,
            color: "white",
            lineHeight: 1.2,
            maxWidth: 620,
            margin: "0 auto 16px",
          }}
        >
          Need a doctor who can also{" "}
          <em style={{ color: "#c8a04a", fontWeight: 300 }}>
            build your product?
          </em>
        </h3>
        <p
          style={{
            fontSize: 14,
            color: "rgba(255,255,255,0.4)",
            maxWidth: 500,
            margin: "0 auto 32px",
            lineHeight: 1.85,
            fontWeight: 300,
          }}
        >
          6+ years of full-stack engineering. An MBBS from OAU. The founder of a
          software company. I bring a rare combination to health-tech teams,
          digital health startups, and research projects.
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: 8,
            marginBottom: 32,
          }}
        >
          {[
            "🩺 Clinical expertise",
            "⌨️ Full-stack dev",
            "🏢 Startup founder",
            "🔬 Health informatics",
            "🤝 Consultation",
          ].map((item) => (
            <span
              key={item}
              style={{
                fontSize: 12,
                padding: "7px 14px",
                borderRadius: 100,
                background: "rgba(200,160,74,0.07)",
                border: "1px solid rgba(200,160,74,0.18)",
                color: "rgba(255,255,255,0.6)",
              }}
            >
              {item}
            </span>
          ))}
        </div>
        <div
          style={{
            display: "flex",
            gap: 10,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <a
            href="mailto:okenchinonsolivinus2@gmail.com"
            style={{
              background: "#c8a04a",
              color: "#0b1726",
              padding: "12px 28px",
              borderRadius: 8,
              fontSize: 13,
              fontWeight: 700,
              textDecoration: "none",
              transition: "background 0.2s, transform 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#e4c06e";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#c8a04a";
              e.currentTarget.style.transform = "none";
            }}
          >
            Work with me →
          </a>
          <a
            href="https://linkedin.com/in/oken"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: "transparent",
              color: "rgba(255,255,255,0.55)",
              padding: "12px 24px",
              borderRadius: 8,
              fontSize: 13,
              fontWeight: 500,
              textDecoration: "none",
              border: "1px solid rgba(255,255,255,0.13)",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.4)";
              e.currentTarget.style.color = "white";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.13)";
              e.currentTarget.style.color = "rgba(255,255,255,0.55)";
            }}
          >
            Connect on LinkedIn
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "24px 1.5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 16,
        }}
      >
        <a
          href="#"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 20,
            color: "rgba(255,255,255,0.5)",
            fontWeight: 700,
            textDecoration: "none",
          }}
        >
          C<span style={{ color: "#c8a04a" }}>.</span>O
        </a>
        <p
          style={{
            fontSize: 11,
            color: "rgba(255,255,255,0.2)",
            textAlign: "center",
            lineHeight: 1.9,
          }}
        >
          Designed &amp; built by Chinonso Oken &middot;{" "}
          {[
            { label: "Next.js 14", href: "https://nextjs.org" },
            { label: "TypeScript", href: "https://typescriptlang.org" },
            { label: "Tailwind CSS", href: "https://tailwindcss.com" },
          ].map((t, i) => (
            <span key={t.label}>
              <a
                href={t.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "rgba(200,160,74,0.5)",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#c8a04a")}
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "rgba(200,160,74,0.5)")
                }
              >
                {t.label}
              </a>
              {i < 2 ? " · " : ""}
            </span>
          ))}{" "}
          &middot; Deployed on{" "}
          <a
            href="https://vercel.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "rgba(200,160,74,0.5)",
              textDecoration: "none",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#c8a04a")}
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "rgba(200,160,74,0.5)")
            }
          >
            Vercel
          </a>
        </p>
        <div style={{ display: "flex", gap: 18, alignItems: "center" }}>
          <span style={{ fontSize: 11, color: "rgba(255,255,255,0.15)" }}>
            © {new Date().getFullYear()}
          </span>
          {[
            { href: "https://linkedin.com/in/oken", label: "LinkedIn" },
            { href: "https://github.com/Oken", label: "GitHub" },
          ].map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: 12,
                color: "rgba(255,255,255,0.25)",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#c8a04a")}
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "rgba(255,255,255,0.25)")
              }
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
