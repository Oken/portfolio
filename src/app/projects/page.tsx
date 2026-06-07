"use client";
import { useState, useRef, MouseEvent } from "react";
import Link from "next/link";

const allProjects = [
  {
    year: "2024",
    title: "Multitenant Point-of-Sale System",
    category: "Health Tech",
    categoryColor: "#1a6b8a",
    desc: "A multitenant POS system that boosted client transaction speeds by 35%, increased sales by 20%, and reduced managerial costs. Built for real-world retail and clinic deployments with role-based access control.",
    stack: ["React.js", "Node.js", "MySQL", "Docker", "REST API"],
    liveUrl: "",
    githubUrl: "https://github.com/Oken/mbims-fe",
    achievement: "+35% transaction speed",
    videoSrc:
      "https://videos.pexels.com/video-files/3129671/3129671-uhd_2560_1440_30fps.mp4",
    imgSrc:
      "https://images.unsplash.com/photo-1556742393-d75f468bfcb0?w=700&q=70",
    status: "Completed",
  },
  {
    year: "2024",
    title: "Online Dinner Ticketing Platform",
    category: "Events",
    categoryColor: "#a8862e",
    desc: "A fully featured ticketing platform that enabled a students' association to reduce event planning costs by 50%. Handles payments, seating allocation, and real-time attendee management.",
    stack: ["React.js", "Firebase", "Stripe", "Tailwind CSS"],
    liveUrl: "https://fecamds-dinner.web.app/",
    githubUrl: "https://github.com/Oken",
    achievement: "-50% event planning cost",
    videoSrc:
      "https://videos.pexels.com/video-files/3129957/3129957-uhd_2560_1440_30fps.mp4",
    imgSrc:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=700&q=70",
    status: "Live",
  },
  {
    year: "2023",
    title: "Scalable SaaS Platform",
    category: "SaaS",
    categoryColor: "#2a7a4f",
    desc: "Key contributor to a SaaS platform that scaled to 10,000+ global users. Implemented microservices architecture with Python/Django, boosting scalability by 20% and improving system reliability.",
    stack: ["Python", "Django", "PostgreSQL", "AWS", "Kubernetes"],
    liveUrl: "",
    githubUrl: "https://github.com/Oken",
    achievement: "10,000+ global users",
    videoSrc:
      "https://videos.pexels.com/video-files/3191528/3191528-uhd_2560_1440_30fps.mp4",
    imgSrc:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=700&q=70",
    status: "Completed",
  },
  {
    year: "2024",
    title: "Clinical Note Summariser",
    category: "Health Tech",
    categoryColor: "#1a6b8a",
    desc: "An NLP-powered tool that extracts key clinical findings from discharge summaries and handover notes. Reduces documentation burden for junior doctors and improves handover quality.",
    stack: ["Python", "FastAPI", "OpenAI API", "React.js"],
    liveUrl: "",
    githubUrl: "https://github.com/Oken",
    achievement: "AI-powered clinical tool",
    videoSrc:
      "https://videos.pexels.com/video-files/6804065/6804065-uhd_2560_1440_25fps.mp4",
    imgSrc:
      "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=700&q=70",
    status: "In Progress",
  },
  {
    year: "2022",
    title: "CI/CD Pipeline Automation",
    category: "DevOps",
    categoryColor: "#7a3ca8",
    desc: "Implemented Jenkins-based CI/CD pipelines that reduced manual deployment errors by 60% and improved release frequency. Integrated automated testing, observability tooling and Docker containers.",
    stack: ["Jenkins", "Docker", "Kubernetes", "AWS", "Bash"],
    liveUrl: "",
    githubUrl: "https://github.com/Oken",
    achievement: "-60% deployment errors",
    videoSrc:
      "https://videos.pexels.com/video-files/3191528/3191528-uhd_2560_1440_30fps.mp4",
    imgSrc:
      "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=700&q=70",
    status: "Completed",
  },
  {
    year: "2021",
    title: "Health Informatics & API Security",
    category: "Health Tech",
    categoryColor: "#1a6b8a",
    desc: "Analysed medical data streams and network communication flows to optimise health-tech application security. Translated clinical requirements into technical workflows for hospital information systems.",
    stack: ["Python", "Java", "REST API", "Security Protocols"],
    liveUrl: "",
    githubUrl: "https://github.com/Oken",
    achievement: "-30% vulnerabilities",
    videoSrc:
      "https://videos.pexels.com/video-files/3129671/3129671-uhd_2560_1440_30fps.mp4",
    imgSrc:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=700&q=70",
    status: "Completed",
  },
];

const categories = ["All", "Health Tech", "SaaS", "Events", "DevOps"];

const statusColors: Record<
  string,
  { bg: string; color: string; border: string }
> = {
  Live: {
    bg: "rgba(42,122,79,0.15)",
    color: "#4ade80",
    border: "rgba(42,122,79,0.4)",
  },
  "In Progress": {
    bg: "rgba(251,179,36,0.12)",
    color: "#fbb324",
    border: "rgba(251,179,36,0.35)",
  },
  Completed: {
    bg: "rgba(255,255,255,0.06)",
    color: "rgba(255,255,255,0.45)",
    border: "rgba(255,255,255,0.1)",
  },
};

function ProjectCard({ project }: { project: (typeof allProjects)[0] }) {
  const vidRef = useRef<HTMLVideoElement>(null);
  const s = statusColors[project.status];

  const [videoError, setVideoError] = useState(false);

  // Track the pending play promise to prevent collision on mouse leave
  const playPromiseRef = useRef<Promise<void> | null>(null);

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handlePlay = (e: MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.borderColor = "rgba(200,160,74,0.3)";
    e.currentTarget.style.transform = "translateY(-4px)";
    e.currentTarget.style.boxShadow = "0 20px 60px rgba(0,0,0,0.4)";

    if (!videoError && vidRef.current) {
      // Clear any existing timeouts just in case
      if (timeoutRef.current) clearTimeout(timeoutRef.current);

      playPromiseRef.current = vidRef.current.play();

      // Set a 300ms watchdog timer. If the video doesn't transition out of
      // the loading state by then, assume the link is dead/stalled.
      timeoutRef.current = setTimeout(() => {
        if (vidRef.current && vidRef.current.paused) {
          console.warn(`Video stalled on load for: ${project.title}`);
          setVideoError(true);
        }
      }, 300);

      playPromiseRef.current?.catch((error) => {
        setVideoError(true);
      });
    }
  };

  const handlePause = (e: MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
    e.currentTarget.style.transform = "none";
    e.currentTarget.style.boxShadow = "none";

    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    if (vidRef.current && !videoError) {
      if (playPromiseRef.current !== null) {
        playPromiseRef.current
          .then(() => {
            // Only pause if the video successfully resolved its play state
            vidRef.current?.pause();
            if (vidRef.current) vidRef.current.currentTime = 0;
          })
          .catch(() => {
            /* Silence caught promise errors */
          });
      } else {
        vidRef.current.pause();
        vidRef.current.currentTime = 0;
      }
    }
  };

  return (
    <div
      style={{
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: 14,
        overflow: "hidden",
        transition: "border-color 0.25s, transform 0.25s, box-shadow 0.25s",
      }}
      // onMouseEnter={(e) => {
      //   e.currentTarget.style.borderColor = "rgba(200,160,74,0.3)";
      //   e.currentTarget.style.transform = "translateY(-4px)";
      //   e.currentTarget.style.boxShadow = "0 20px 60px rgba(0,0,0,0.4)";
      //   vidRef.current?.play();
      // }}
      onMouseEnter={handlePlay}
      // onMouseLeave={(e) => {
      //   e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
      //   e.currentTarget.style.transform = "none";
      //   e.currentTarget.style.boxShadow = "none";
      //   if (vidRef.current) {
      //     vidRef.current.pause();
      //     vidRef.current.currentTime = 0;
      //   }
      // }}
      onMouseLeave={handlePause}
    >
      {/* Media */}
      <div
        style={{
          position: "relative",
          height: 210,
          background: "#0b1726",
          overflow: "hidden",
        }}
      >
        <img
          src={project.imgSrc}
          alt={project.title}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 1,
          }}
        />
        {/* Video Element with Error Handling */}
        {!videoError && (
          <video
            ref={vidRef}
            muted
            loop
            playsInline
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              zIndex: 2,
              opacity: 0,
              transition: "opacity 0.5s",
            }}
            // If it actually manages to play data, clear our safety timeout
            onPlaying={(e) => {
              if (timeoutRef.current) clearTimeout(timeoutRef.current);
              e.currentTarget.style.opacity = "1";
            }}
            onPause={(e) => (e.currentTarget.style.opacity = "0")}
            // 💡 THE SECRET SAUCE: Triggers if the browser gets stuck buffering an incorrect link
            onWaiting={() => {
              // Give it a brief moment, then trip the fallback if it stays stuck
              timeoutRef.current = setTimeout(() => {
                setVideoError(true);
                console.warn(
                  `Video failed to load for project: ${project.title}`,
                );
              }, 200);
            }}
            onError={() => {
              console.warn(
                `Video failed to load for project: ${project.title}`,
              );
              setVideoError(true);
            }}
          >
            <source src={project.videoSrc} type="video/mp4" />
          </video>
        )}
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 3,
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(11,23,38,0.8) 100%)",
          }}
        />

        {/* Top badges */}
        <div
          style={{
            position: "absolute",
            top: 14,
            left: 14,
            right: 14,
            zIndex: 4,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span
            style={{
              fontSize: 10,
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              padding: "3px 10px",
              borderRadius: 100,
              background: `${project.categoryColor}33`,
              color:
                project.categoryColor === "#1a6b8a"
                  ? "#7dcfef"
                  : project.categoryColor === "#a8862e"
                    ? "#f0c060"
                    : project.categoryColor === "#2a7a4f"
                      ? "#7fcfa0"
                      : "#c4a0f0",
              border: `1px solid ${project.categoryColor}55`,
            }}
          >
            {project.category}
          </span>
          <span
            style={{
              fontSize: 10,
              fontWeight: 600,
              padding: "3px 10px",
              borderRadius: 100,
              background: s.bg,
              color: s.color,
              border: `1px solid ${s.border}`,
            }}
          >
            {project.status === "Live" ? "● " : ""}
            {project.status}
          </span>
        </div>

        {/* Achievement */}
        <div
          style={{
            position: "absolute",
            bottom: 14,
            left: 14,
            zIndex: 4,
            background: "rgba(11,23,38,0.9)",
            backdropFilter: "blur(6px)",
            borderRadius: 6,
            padding: "5px 12px",
            border: "1px solid rgba(200,160,74,0.25)",
          }}
        >
          <span style={{ fontSize: 11, color: "#c8a04a", fontWeight: 600 }}>
            {project.achievement}
          </span>
        </div>

        {/* Dynamic Hover Play Hint: Hide it if the video is broken */}
        {!videoError && (
          <div
            style={{
              position: "absolute",
              bottom: 14,
              right: 14,
              zIndex: 4,
              background: "rgba(0,0,0,0.55)",
              borderRadius: 5,
              padding: "3px 8px",
            }}
          >
            <span
              style={{
                fontSize: 9,
                color: "rgba(255,255,255,0.5)",
                letterSpacing: "0.06em",
              }}
            >
              ▶ hover
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div style={{ padding: "20px 22px 22px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginBottom: 8,
          }}
        >
          <h3
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 21,
              fontWeight: 700,
              color: "white",
              lineHeight: 1.2,
              flex: 1,
              marginRight: 12,
            }}
          >
            {project.title}
          </h3>
          <div style={{ display: "flex", gap: 10, flexShrink: 0 }}>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="Live site"
                style={{
                  color: "rgba(255,255,255,0.35)",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#c8a04a")}
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "rgba(255,255,255,0.35)")
                }
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </a>
            )}
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
              style={{
                color: "rgba(255,255,255,0.35)",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#c8a04a")}
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "rgba(255,255,255,0.35)")
              }
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
          </div>
        </div>

        <p
          style={{
            fontSize: 13,
            color: "rgba(255,255,255,0.48)",
            lineHeight: 1.75,
            marginBottom: 16,
          }}
        >
          {project.desc}
        </p>

        {/* Stack pills */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
          {project.stack.map((s) => (
            <span key={s} className="skill-pill" style={{ fontSize: 11 }}>
              {s}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ProjectsPage() {
  const [active, setActive] = useState("All");
  const filtered =
    active === "All"
      ? allProjects
      : allProjects.filter((p) => p.category === active);

  return (
    <div
      style={{
        background: "#0b1726",
        minHeight: "100vh",
        fontFamily: "'Outfit', sans-serif",
      }}
    >
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;600;700&family=Outfit:wght@300;400;500;600;700&display=swap"
        rel="stylesheet"
      />

      {/* Sticky top bar */}
      <div
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          background: "rgba(11,23,38,0.96)",
          backdropFilter: "blur(14px)",
          borderBottom: "1px solid rgba(200,160,74,0.12)",
          padding: "0 1.5rem",
          height: 62,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Link
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            textDecoration: "none",
            color: "rgba(255,255,255,0.45)",
            fontSize: 13,
            transition: "color 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#c8a04a")}
          onMouseLeave={(e) =>
            (e.currentTarget.style.color = "rgba(255,255,255,0.45)")
          }
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Back to Portfolio
        </Link>
        <span
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 19,
            color: "white",
            fontWeight: 700,
          }}
        >
          C<span style={{ color: "#c8a04a" }}>.</span>O
        </span>
      </div>

      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "clamp(48px,8vw,72px) 1.5rem clamp(64px,10vw,100px)",
        }}
      >
        {/* Header */}
        <div style={{ marginBottom: 52 }}>
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
            All Work
          </p>
          <h1
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(40px,7vw,72px)",
              fontWeight: 600,
              color: "white",
              lineHeight: 1.05,
              marginBottom: 14,
            }}
          >
            Project Archive
          </h1>
          <p
            style={{
              fontSize: 15,
              color: "rgba(255,255,255,0.4)",
              maxWidth: 520,
              lineHeight: 1.85,
              fontWeight: 300,
            }}
          >
            Software built over 6+ years — from point-of-sale systems to
            clinical AI tools.
            {/* Hover any card to watch it in action. */}
          </p>
        </div>

        {/* Filter tabs */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 8,
            marginBottom: 40,
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              style={{
                padding: "7px 18px",
                borderRadius: 100,
                fontSize: 13,
                cursor: "pointer",
                fontFamily: "'Outfit', sans-serif",
                fontWeight: active === cat ? 600 : 400,
                background:
                  active === cat ? "#c8a04a" : "rgba(255,255,255,0.05)",
                color: active === cat ? "#0b1726" : "rgba(255,255,255,0.5)",
                border:
                  active === cat ? "none" : "1px solid rgba(255,255,255,0.1)",
                transition: "all 0.2s",
              }}
            >
              {cat}
            </button>
          ))}
          <span
            style={{
              marginLeft: "auto",
              fontSize: 12,
              color: "rgba(255,255,255,0.25)",
              alignSelf: "center",
            }}
          >
            {filtered.length} project{filtered.length !== 1 ? "s" : ""}
          </span>
        </div>

        {/* Projects grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fill, minmax(min(100%, 340px), 1fr))",
            gap: 22,
          }}
        >
          {filtered.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>

        {/* Back */}
        <div style={{ marginTop: 60, textAlign: "center" }}>
          <Link
            href="/"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              color: "rgba(255,255,255,0.3)",
              textDecoration: "none",
              fontSize: 13,
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#c8a04a")}
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "rgba(255,255,255,0.3)")
            }
          >
            ← Back to main site
          </Link>
        </div>
      </div>

      <style>{`
        * { box-sizing: border-box; }
        body { margin: 0; }
        .skill-pill {
          display: inline-block; padding: 4px 11px; border-radius: 100px; font-size: 11px;
          font-weight: 500; border: 1px solid rgba(200,160,74,0.3);
          background: rgba(200,160,74,0.07); color: #c8a04a; transition: all 0.2s; cursor: default;
        }
        .skill-pill:hover { background: rgba(200,160,74,0.16); border-color: #c8a04a; }
      `}</style>
    </div>
  );
}
