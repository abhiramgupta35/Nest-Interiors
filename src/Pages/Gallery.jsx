import React, { useRef, useEffect, useState, useCallback } from "react";
import { reels } from "../data/reels";
import "./Gallery.css";
import { FiArrowLeft, FiVolume2, FiVolumeX, FiX } from "react-icons/fi";
import { FaPlay, FaPause } from "react-icons/fa";

const cardMeta = [
  {
    title: "Living Room Elegance",
    description:
      "A stunning modern living room with warm tones and curated decor pieces.",
    tags: ["Premium", "2 Week Project"],
  },
  {
    title: "Bedroom Retreat",
    description:
      "Cozy bedroom interior featuring soft textures and ambient lighting design.",
    tags: ["Top Rated", "10 Days"],
  },
  {
    title: "Office Space",
    description:
      "Sleek contemporary office interior designed for productivity and style.",
    tags: ["Corporate", "3 Week Project"],
  },
  {
    title: "Kitchen Design",
    description:
      "Minimalist kitchen with premium finishes and smart storage solutions.",
    tags: ["Best Seller", "12 Days"],
  },
  {
    title: "Art Studio",
    description:
      "Creative studio space blending functionality with aesthetic brilliance.",
    tags: ["Unique", "Custom Build"],
  },
];

const Gallery = () => {
  const [playingStates, setPlayingStates] = useState({});
  const [modalReel, setModalReel] = useState(null); // { reel, meta }
  const [modalMuted, setModalMuted] = useState(true);
  const [modalPlaying, setModalPlaying] = useState(true);
  const [modalProgress, setModalProgress] = useState(0);
  const videoRefs = useRef({});
  const modalVideoRef = useRef(null);
  const progressInterval = useRef(null);

  // Intersection Observer — autoplay card videos (muted, no sound)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target;
          const id = parseInt(video.dataset.id);
          if (entry.isIntersecting) {
            video.play().catch(() => {});
            setPlayingStates((prev) => ({ ...prev, [id]: true }));
          } else {
            video.pause();
            setPlayingStates((prev) => ({ ...prev, [id]: false }));
          }
        });
      },
      { threshold: 0.4 }
    );

    const timer = setTimeout(() => {
      document
        .querySelectorAll(".gallery-video")
        .forEach((v) => observer.observe(v));
    }, 200);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  // ── Modal logic ──
  const openModal = useCallback((reel, meta) => {
    setModalReel({ reel, meta });
    setModalMuted(true);
    setModalPlaying(true);
    setModalProgress(0);
    document.body.style.overflow = "hidden";
  }, []);

  const closeModal = useCallback(() => {
    if (modalVideoRef.current) modalVideoRef.current.pause();
    clearInterval(progressInterval.current);
    setModalReel(null);
    setModalProgress(0);
    document.body.style.overflow = "";
  }, []);

  // autoplay modal video and track progress
  useEffect(() => {
    if (!modalReel) return;

    const video = modalVideoRef.current;
    if (!video) return;

    video.currentTime = 0;
    video.muted = true;
    video.play().catch(() => {});

    progressInterval.current = setInterval(() => {
      if (video.duration) {
        setModalProgress((video.currentTime / video.duration) * 100);
      }
    }, 80);

    return () => clearInterval(progressInterval.current);
  }, [modalReel]);

  const toggleModalPlay = useCallback(() => {
    const video = modalVideoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play().catch(() => {});
      setModalPlaying(true);
    } else {
      video.pause();
      setModalPlaying(false);
    }
  }, []);

  const toggleModalMute = useCallback(() => {
    const video = modalVideoRef.current;
    if (!video) return;
    const next = !video.muted;
    video.muted = next;
    setModalMuted(next);
  }, []);

  const handleProgressClick = useCallback((e) => {
    const video = modalVideoRef.current;
    if (!video || !video.duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const pct = x / rect.width;
    video.currentTime = pct * video.duration;
    setModalProgress(pct * 100);
  }, []);

  // close on Escape
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [closeModal]);

  return (
    <div className="gallery-page">
      {/* ── Header ── */}
      <header className="gallery-header">
        <a href="/" className="gallery-back">
          <FiArrowLeft />
          <span>Home</span>
        </a>
        <h1 className="gallery-title">Our Gallery</h1>
        <div style={{ width: "2.5rem" }} /> {/* spacer for centering */}
      </header>

      {/* ── Card Grid ── */}
      <main className="gallery-grid-wrapper">
        <div className="gallery-grid">
          {reels.map((reel, i) => {
            const meta = cardMeta[i] || cardMeta[0];
            const playing = playingStates[reel.id];

            return (
              <div key={reel.id} className="gallery-card">
                {/* Video Area — click opens modal */}
                <div
                  className="gallery-card-media"
                  onClick={() => openModal(reel, meta)}
                >
                  <video
                    ref={(el) => (videoRefs.current[reel.id] = el)}
                    data-id={reel.id}
                    className="gallery-video"
                    src={reel.src}
                    muted
                    loop
                    playsInline
                    preload="metadata"
                  />

                  {/* play overlay hint */}
                  <div
                    className="gallery-card-play"
                    style={{ opacity: playing ? 0 : 1 }}
                  >
                    <FaPlay className="play-icon" />
                  </div>

                  {/* three-dot indicator */}
                  <div className="gallery-card-dots">
                    <span />
                    <span />
                    <span />
                  </div>
                </div>

                {/* Info Area */}
                <div className="gallery-card-info">
                  <div className="gallery-card-info-top">
                    <h3 className="gallery-card-name">{meta.title}</h3>
                  </div>
                  <p className="gallery-card-desc">{meta.description}</p>
                  <div className="gallery-card-tags">
                    {meta.tags.map((tag) => (
                      <span key={tag} className="gallery-card-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a href="/contactus" className="gallery-card-cta">
                    Book Now
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </main>

      {/* ══════════ Modal ══════════ */}
      {modalReel && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-container" onClick={(e) => e.stopPropagation()}>
            {/* Close */}
            <button className="modal-close" onClick={closeModal}>
              <FiX />
            </button>

            {/* Video */}
            <div className="modal-video-wrap" onClick={toggleModalPlay}>
              <video
                ref={modalVideoRef}
                className="modal-video"
                src={modalReel.reel.src}
                muted={modalMuted}
                loop
                playsInline
              />

              {/* play/pause indicator */}
              <div
                className="modal-play-indicator"
                style={{ opacity: modalPlaying ? 0 : 1 }}
              >
                {modalPlaying ? <FaPause /> : <FaPlay className="play-icon" />}
              </div>
            </div>

            {/* Controls bar */}
            <div className="modal-controls">
              {/* Progress bar */}
              <div className="modal-progress-track" onClick={handleProgressClick}>
                <div
                  className="modal-progress-fill"
                  style={{ width: `${modalProgress}%` }}
                />
              </div>

              <div className="modal-controls-row">
                {/* Play / Pause */}
                <button className="modal-ctrl-btn" onClick={toggleModalPlay}>
                  {modalPlaying ? (
                    <FaPause className="text-sm" />
                  ) : (
                    <FaPlay className="text-sm play-icon" />
                  )}
                </button>

                {/* Title */}
                <div className="modal-info">
                  <span className="modal-info-title">
                    {modalReel.meta.title}
                  </span>
                  <span className="modal-info-sub">Nest Interior</span>
                </div>

                {/* Mute */}
                <button className="modal-ctrl-btn" onClick={toggleModalMute}>
                  {modalMuted ? <FiVolumeX /> : <FiVolume2 />}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
