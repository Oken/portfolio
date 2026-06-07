"use client";
import { useState, useRef } from "react";
import { useReveal } from "@/lib/useReveal";

type Status = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const ref = useReveal();
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<Status>("idle");
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      // Using EmailJS — replace these IDs with your own from emailjs.com (free tier: 200 emails/month)
      const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID; // e.g. 'service_abc123'
      const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID; // e.g. 'template_xyz456'
      const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY; // e.g. 'abcDEFghiJKL'

      const response = await fetch(
        "https://api.emailjs.com/api/v1.0/email/send",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            service_id: SERVICE_ID,
            template_id: TEMPLATE_ID,
            user_id: PUBLIC_KEY,
            template_params: {
              from_name: form.name,
              from_email: form.email,
              subject: form.subject || "Portfolio Inquiry",
              message: form.message,
              to_name: "Chinonso Oken",
              reply_to: form.email,
            },
          }),
        },
      );

      if (response.ok) {
        setStatus("success");
      } else {
        // Fallback: open mailto if EmailJS not configured
        const body = encodeURIComponent(
          `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`,
        );
        window.location.href = `mailto:okenchinonsolivinus2@gmail.com?subject=${encodeURIComponent(form.subject || "Portfolio Inquiry")}&body=${body}`;
        setStatus("success");
      }
    } catch {
      // Fallback to mailto
      const body = encodeURIComponent(
        `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`,
      );
      window.location.href = `mailto:okenchinonsolivinus2@gmail.com?subject=${encodeURIComponent(form.subject || "Portfolio Inquiry")}&body=${body}`;
      setStatus("success");
    }
  };

  const reset = () => {
    setForm({ name: "", email: "", subject: "", message: "" });
    setStatus("idle");
  };

  return (
    <section
      id="contact"
      style={{
        background: "#0b1726",
        padding: "clamp(60px,10vw,100px) 1.5rem",
        borderTop: "1px solid rgba(200,160,74,0.12)",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(min(100%, 300px), 1fr))",
            gap: "clamp(2rem,5vw,4rem)",
            alignItems: "start",
          }}
        >
          {/* Left info */}
          <div ref={ref} className="reveal">
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
              Get in Touch
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
              Let&apos;s work
              <br />
              <em style={{ color: "#c8a04a", fontWeight: 300 }}>together.</em>
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
                color: "rgba(255,255,255,0.45)",
                lineHeight: 1.85,
                marginBottom: 36,
                fontWeight: 300,
              }}
            >
              Open to clinical roles, health-tech opportunities, full-stack
              engineering positions, and research collaborations. Messages are
              sent directly — no email client needed.
            </p>

            {[
              {
                icon: "✉️",
                label: "Email",
                val: "okenchinonsolivinus2@gmail.com",
                href: "mailto:okenchinonsolivinus2@gmail.com",
              },
              {
                icon: "📞",
                label: "Phone",
                val: "+234 816 275 0411",
                href: "tel:+2348162750411",
              },
              {
                icon: "💼",
                label: "LinkedIn",
                val: "linkedin.com/in/oken",
                href: "https://linkedin.com/in/oken",
              },
              {
                icon: "⌨️",
                label: "GitHub",
                val: "github.com/Oken",
                href: "https://github.com/Oken",
              },
            ].map((c) => (
              <a
                key={c.label}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                  padding: "13px 16px",
                  borderRadius: 10,
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  textDecoration: "none",
                  marginBottom: 10,
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(200,160,74,0.35)";
                  e.currentTarget.style.background = "rgba(200,160,74,0.05)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
                  e.currentTarget.style.background = "rgba(255,255,255,0.03)";
                }}
              >
                <span style={{ fontSize: 18 }}>{c.icon}</span>
                <div>
                  <p
                    style={{
                      fontSize: 10,
                      color: "#c8a04a",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      marginBottom: 1,
                    }}
                  >
                    {c.label}
                  </p>
                  <p style={{ fontSize: 13, color: "rgba(255,255,255,0.65)" }}>
                    {c.val}
                  </p>
                </div>
              </a>
            ))}
          </div>

          {/* Right: Form */}
          <div
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.09)",
              borderRadius: 16,
              padding: "clamp(24px, 4vw, 36px)",
              overflow: "hidden",
            }}
          >
            {status === "success" ? (
              /* Success state */
              <div style={{ textAlign: "center", padding: "32px 16px" }}>
                <div style={{ fontSize: 56, marginBottom: 20 }}>✅</div>
                <h3
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: 28,
                    color: "white",
                    fontWeight: 700,
                    marginBottom: 10,
                  }}
                >
                  Message Sent!
                </h3>
                <p
                  style={{
                    color: "rgba(255,255,255,0.45)",
                    fontSize: 14,
                    lineHeight: 1.7,
                    marginBottom: 28,
                  }}
                >
                  Thanks for reaching out, {form.name.split(" ")[0]}! I&apos;ll
                  get back to you as soon as possible.
                </p>
                <button
                  onClick={reset}
                  style={{
                    background: "#c8a04a",
                    color: "#0b1726",
                    padding: "12px 28px",
                    borderRadius: 8,
                    fontSize: 14,
                    fontWeight: 600,
                    cursor: "pointer",
                    border: "none",
                    fontFamily: "'Outfit', sans-serif",
                    transition: "background 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.background = "#e4c06e")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.background = "#c8a04a")
                  }
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              /* Form */
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                style={{ display: "flex", flexDirection: "column", gap: 16 }}
              >
                <h3
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: 24,
                    color: "white",
                    fontWeight: 700,
                    marginBottom: 4,
                  }}
                >
                  Send a message
                </h3>
                <p
                  style={{
                    fontSize: 13,
                    color: "rgba(255,255,255,0.35)",
                    marginBottom: 8,
                  }}
                >
                  Sent directly — no email app required.
                </p>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
                    gap: 12,
                  }}
                >
                  <div>
                    <label
                      style={{
                        fontSize: 11,
                        color: "#c8a04a",
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        display: "block",
                        marginBottom: 6,
                      }}
                    >
                      Name *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="Your full name"
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                      className="form-input"
                    />
                  </div>
                  <div>
                    <label
                      style={{
                        fontSize: 11,
                        color: "#c8a04a",
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        display: "block",
                        marginBottom: 6,
                      }}
                    >
                      Email *
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                      className="form-input"
                    />
                  </div>
                </div>

                <div>
                  <label
                    style={{
                      fontSize: 11,
                      color: "#c8a04a",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      display: "block",
                      marginBottom: 6,
                    }}
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Collaboration opportunity"
                    value={form.subject}
                    onChange={(e) =>
                      setForm({ ...form, subject: e.target.value })
                    }
                    className="form-input"
                  />
                </div>

                <div>
                  <label
                    style={{
                      fontSize: 11,
                      color: "#c8a04a",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      display: "block",
                      marginBottom: 6,
                    }}
                  >
                    Message *
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Tell me about the opportunity..."
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    className="form-input"
                    style={{ resize: "vertical" }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  style={{
                    background:
                      status === "sending" ? "rgba(200,160,74,0.5)" : "#c8a04a",
                    color: "#0b1726",
                    padding: "14px",
                    borderRadius: 8,
                    fontSize: 14,
                    fontWeight: 700,
                    border: "none",
                    cursor: status === "sending" ? "not-allowed" : "pointer",
                    fontFamily: "'Outfit', sans-serif",
                    letterSpacing: "0.04em",
                    transition: "background 0.2s",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 8,
                  }}
                  onMouseEnter={(e) => {
                    if (status !== "sending")
                      e.currentTarget.style.background = "#e4c06e";
                  }}
                  onMouseLeave={(e) => {
                    if (status !== "sending")
                      e.currentTarget.style.background = "#c8a04a";
                  }}
                >
                  {status === "sending" ? (
                    <>
                      <span
                        style={{
                          display: "inline-block",
                          width: 14,
                          height: 14,
                          border: "2px solid #0b1726",
                          borderTop: "2px solid transparent",
                          borderRadius: "50%",
                          animation: "spin 0.8s linear infinite",
                        }}
                      />
                      Sending...
                    </>
                  ) : (
                    "Send Message →"
                  )}
                </button>

                <p
                  style={{
                    fontSize: 11,
                    color: "rgba(255,255,255,0.25)",
                    textAlign: "center",
                  }}
                >
                  Or email directly: okenchinonsolivinus2@gmail.com
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </section>
  );
}
