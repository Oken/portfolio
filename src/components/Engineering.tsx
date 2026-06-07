"use client";
import { useRef, useState } from "react";
import { useReveal } from "@/lib/useReveal";

const projects = [
  {
    id: 1,
    tag: "Health Tech",
    tagColor: "#1a6b8a",
    tagBg: "rgba(26,107,138,0.12)",
    title: "Multitenant Point-of-Sale",
    desc: "A multitenant POS system that boosted client transaction speeds by 35%, increased sales by 20%, and reduced managerial costs. Built for real-world retail deployments.",
    stack: ["React.js", "Node.js", "MySQL", "Docker"],
    liveUrl: "",
    githubUrl: "https://github.com/Oken/mbims-fe",
    videoSrc:
      "https://videos.pexels.com/video-files/3129671/3129671-uhd_2560_1440_30fps.mp4",
    imgSrc:
      "https://images.unsplash.com/photo-1556742393-d75f468bfcb0?w=700&q=70",
    achievement: "+35% transaction speed",
  },
  {
    id: 2,
    tag: "Events Platform",
    tagColor: "#a8862e",
    tagBg: "rgba(168,134,46,0.12)",
    title: "Online Dinner Ticketing",
    desc: "A fully featured ticketing platform that enabled a students' association to reduce event planning costs by 50%. Handles payments, seating, and attendee management.",
    stack: ["React.js", "Firebase", "Stripe", "Tailwind CSS"],
    liveUrl: "https://fecamds-dinner.web.app/",
    githubUrl: "https://github.com/Oken",
    videoSrc:
      "https://videos.pexels.com/video-files/3129957/3129957-uhd_2560_1440_30fps.mp4",
    imgSrc:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=700&q=70",
    achievement: "-50% event planning cost",
  },
  {
    id: 3,
    tag: "SaaS / Enterprise",
    tagColor: "#2a7a4f",
    tagBg: "rgba(42,122,79,0.12)",
    title: "Scalable SaaS Platform",
    desc: "Key contributor to a SaaS platform that scaled to 10,000+ global users. Implemented microservices architecture with Python/Django, boosting scalability by 20% and reliability.",
    stack: ["Python", "Django", "PostgreSQL", "AWS"],
    liveUrl: "",
    githubUrl: "https://github.com/Oken",
    videoSrc:
      "https://videos.pexels.com/video-files/3191528/3191528-uhd_2560_1440_30fps.mp4",
    imgSrc:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=700&q=70",
    achievement: "10,000+ global users",
  },
  {
    id: 4,
    tag: "Health Informatics",
    tagColor: "#7a3ca8",
    tagBg: "rgba(122,60,168,0.12)",
    title: "Clinical Note Summariser",
    desc: "An NLP-powered tool that extracts key clinical findings from discharge summaries and handover notes. Reduces documentation burden for junior doctors.",
    stack: ["Python", "FastAPI", "OpenAI API", "React.js"],
    liveUrl: "",
    githubUrl: "https://github.com/Oken",
    videoSrc:
      "https://videos.pexels.com/video-files/6804065/6804065-uhd_2560_1440_25fps.mp4",
    imgSrc:
      "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=700&q=70",
    achievement: "AI-powered clinical AI",
  },
];

function VideoCard({ project }: { project: (typeof projects)[0] }) {
  const vidRef = useRef<HTMLVideoElement>(null);
  // Track if the video source breaks
  const [videoError, setVideoError] = useState(false);

  // Track the pending play promise to prevent collision on mouse leave
  const playPromiseRef = useRef<Promise<void> | null>(null);

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handlePlay = () => {
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

  const handlePause = () => {
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
      className="card-lift"
      style={{
        display: "block",
        textDecoration: "none",
        color: "inherit",
        background: "white",
        borderRadius: 14,
        border: "1px solid #ede9e0",
        overflow: "hidden",
      }}
      onMouseEnter={handlePlay}
      onMouseLeave={handlePause}
      // onClick={() => {
      //   // Arguments: (URL, target, windowFeatures)
      //   window.open(
      //     project.liveUrl || project.githubUrl,
      //     "_blank",
      //     "noopener,noreferrer",
      //   );
      // }}
    >
      {/* Invisible link overlay */}
      <a
        href={project.liveUrl || project.githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        style={{ position: "absolute", inset: 0, zIndex: 5 }}
      />
      {/* Media */}
      <div
        style={{
          position: "relative",
          height: 200,
          overflow: "hidden",
          background: "#0b1726",
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
              transition: "opacity 0.4s",
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
              "linear-gradient(to bottom, transparent 40%, rgba(11,23,38,0.75) 100%)",
          }}
        />

        {/* Achievement badge */}
        <div
          style={{
            position: "absolute",
            bottom: 14,
            left: 14,
            zIndex: 4,
            background: "rgba(11,23,38,0.88)",
            backdropFilter: "blur(6px)",
            borderRadius: 6,
            padding: "5px 12px",
            border: "1px solid rgba(200,160,74,0.3)",
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
              top: 14,
              right: 14,
              zIndex: 4,
              background: "rgba(11,23,38,0.7)",
              borderRadius: 6,
              padding: "4px 10px",
            }}
          >
            <span
              style={{
                fontSize: 10,
                color: "rgba(255,255,255,0.6)",
                letterSpacing: "0.08em",
              }}
            >
              ▶ Hover to play
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div style={{ padding: "20px 22px 22px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 8,
            flexWrap: "wrap",
            gap: 6,
          }}
        >
          <span
            style={{
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              padding: "3px 10px",
              borderRadius: 100,
              background: project.tagBg,
              color: project.tagColor,
            }}
          >
            {project.tag}
          </span>
          <div style={{ display: "flex", gap: 10 }}>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                style={{ color: "#6b7a99", transition: "color 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#c8a04a")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#6b7a99")}
                title="Live site"
              >
                <svg
                  width="15"
                  height="15"
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
              onClick={(e) => e.stopPropagation()}
              style={{ color: "#6b7a99", transition: "color 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#c8a04a")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#6b7a99")}
              title="GitHub"
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
          </div>
        </div>

        <h3
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 22,
            fontWeight: 700,
            color: "#0b1726",
            marginBottom: 8,
          }}
        >
          {project.title}
        </h3>
        <p
          style={{
            fontSize: 13,
            color: "#6b7a99",
            lineHeight: 1.7,
            marginBottom: 14,
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

export default function Engineering() {
  const ref = useReveal();
  return (
    <section
      id="engineering"
      style={{
        background: "#f8f5ef",
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
              color: "#2a7a4f",
              fontWeight: 600,
              marginBottom: 10,
            }}
          >
            Software Projects
          </p>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(32px,5vw,52px)",
              fontWeight: 600,
              color: "#0b1726",
              marginBottom: 10,
              lineHeight: 1.1,
            }}
          >
            Engineering Work
          </h2>
          <div
            style={{
              width: 40,
              height: 3,
              background: "#2a7a4f",
              borderRadius: 2,
              marginBottom: 18,
            }}
          />
          <p
            style={{
              fontSize: 15,
              color: "#6b7a99",
              maxWidth: 540,
              fontWeight: 300,
              lineHeight: 1.8,
            }}
          >
            Full-stack applications built over 6+ years — hover each card to see
            it in action.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(min(100%, 460px), 1fr))",
            gap: 22,
          }}
        >
          {projects.map((p) => (
            <VideoCard key={p.id || p.title} project={p} />
          ))}
        </div>

        <div
          style={{
            textAlign: "center",
            marginTop: 44,
            display: "flex",
            gap: 12,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <a
            href="/projects"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "#c8a04a",
              color: "#0b1726",
              padding: "13px 30px",
              borderRadius: 8,
              fontSize: 14,
              fontWeight: 700,
              textDecoration: "none",
              letterSpacing: "0.04em",
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
            View Full Archive →
          </a>
          <a
            href="https://github.com/Oken"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "white",
              color: "#0b1726",
              border: "1px solid #ddd8ce",
              padding: "13px 26px",
              borderRadius: 8,
              fontSize: 14,
              fontWeight: 500,
              textDecoration: "none",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#0b1726";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "#ddd8ce";
              e.currentTarget.style.transform = "none";
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
