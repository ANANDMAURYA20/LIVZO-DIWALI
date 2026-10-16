import React, { useEffect, useRef } from 'react';
import './FirecrackerCanvas.css';

const PALETTES = [
  ['#FFD700', '#FFA500', '#FF4500', '#FFF8DC', '#FFE4B5'], // Royal Gold & Amber
  ['#FF1493', '#FFD700', '#00FFFF', '#FF4500', '#FFFFFF'], // Vibrant Celebration
  ['#FF7B00', '#FFD000', '#E5A93C', '#FFF3DD', '#FF3E3E'], // Saffron & Marigold
  ['#00E5FF', '#76FF03', '#FFD600', '#FF1744', '#FFFFFF'], // Sparkling Jewels
];

const FirecrackerCanvas = () => {
  const canvasRef = useRef(null);
  const animFrameRef = useRef(null);
  const particlesRef = useRef([]);
  const rocketsRef = useRef([]);
  const lastScrollYRef = useRef(0);
  const lastBurstTimeRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const handleResize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.scale(dpr, dpr);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    // Create explosion at (x, y)
    const createExplosion = (x, y, paletteOverride) => {
      const palette = paletteOverride || PALETTES[Math.floor(Math.random() * PALETTES.length)];
      const particleCount = 45 + Math.floor(Math.random() * 35);
      const isWillow = Math.random() > 0.5;

      for (let i = 0; i < particleCount; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 5 + 1.8;
        const color = palette[Math.floor(Math.random() * palette.length)];

        particlesRef.current.push({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          color,
          alpha: 1,
          decay: isWillow ? 0.012 + Math.random() * 0.008 : 0.02 + Math.random() * 0.015,
          gravity: isWillow ? 0.08 : 0.04,
          size: Math.random() * 2.8 + 1.2,
          flicker: Math.random() > 0.4,
          trail: [],
        });
      }
    };

    // Launch rocket from bottom to target height
    const launchRocket = (targetX, targetY) => {
      const startX = targetX + (Math.random() - 0.5) * 80;
      const startY = window.innerHeight + 10;
      const palette = PALETTES[Math.floor(Math.random() * PALETTES.length)];

      rocketsRef.current.push({
        x: startX,
        y: startY,
        targetY,
        vx: (targetX - startX) / 22,
        vy: -Math.sqrt(2 * 0.25 * (startY - targetY)), // Physics: reach targetY
        color: palette[0],
        palette,
        trail: [],
      });
    };

    // Trigger bursts on scroll
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDelta = Math.abs(currentScrollY - lastScrollYRef.current);
      const now = performance.now();

      // If scrolling vigorously or passing through top 1200px (intro & hero transition)
      if (scrollDelta > 15 && now - lastBurstTimeRef.current > 180) {
        lastBurstTimeRef.current = now;
        
        // Launch 2-3 rockets across the screen
        const count = Math.min(Math.floor(scrollDelta / 30) + 1, 3);
        for (let i = 0; i < count; i++) {
          const targetX = Math.random() * (window.innerWidth * 0.8) + window.innerWidth * 0.1;
          const targetY = Math.random() * (window.innerHeight * 0.6) + window.innerHeight * 0.1;
          setTimeout(() => launchRocket(targetX, targetY), i * 100);
        }
      }

      lastScrollYRef.current = currentScrollY;
    };

    // Allow user to click anywhere to trigger a firework burst
    const handleClick = (e) => {
      // Don't burst if clicking on links or buttons
      if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.closest('a, button')) {
        return;
      }
      createExplosion(e.clientX, e.clientY);
    };

    const handleCustomBurst = (e) => {
      const count = e.detail?.count || 4;
      for (let i = 0; i < count; i++) {
        const targetX = Math.random() * (window.innerWidth * 0.8) + window.innerWidth * 0.1;
        const targetY = Math.random() * (window.innerHeight * 0.5) + window.innerHeight * 0.15;
        setTimeout(() => launchRocket(targetX, targetY), i * 130);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('click', handleClick);
    window.addEventListener('trigger-fireworks', handleCustomBurst);

    // Initial celebratory bursts when page first loads
    const initialBursts = [
      setTimeout(() => launchRocket(window.innerWidth * 0.25, window.innerHeight * 0.28), 600),
      setTimeout(() => launchRocket(window.innerWidth * 0.75, window.innerHeight * 0.24), 1100),
      setTimeout(() => launchRocket(window.innerWidth * 0.5, window.innerHeight * 0.18), 1700),
    ];

    // Animation Loop
    const render = () => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      // Update & draw rockets
      for (let i = rocketsRef.current.length - 1; i >= 0; i--) {
        const r = rocketsRef.current[i];
        r.x += r.vx;
        r.y += r.vy;
        r.vy += 0.25; // gravity

        // Rocket sparkler trail
        r.trail.push({ x: r.x, y: r.y, alpha: 1 });
        if (r.trail.length > 7) r.trail.shift();

        // Draw trail
        for (let t = 0; t < r.trail.length; t++) {
          const pt = r.trail[t];
          ctx.beginPath();
          ctx.arc(pt.x, pt.y, 1.8 * (t / r.trail.length), 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 200, 50, ${pt.alpha * 0.7})`;
          ctx.fill();
        }

        // Draw rocket head
        ctx.beginPath();
        ctx.arc(r.x, r.y, 2.8, 0, Math.PI * 2);
        ctx.fillStyle = '#FFF8E7';
        ctx.shadowBlur = 12;
        ctx.shadowColor = '#FFB300';
        ctx.fill();
        ctx.shadowBlur = 0;

        // Explode condition: reached target height or velocity turning down
        if (r.y <= r.targetY || r.vy >= 0) {
          createExplosion(r.x, r.y, r.palette);
          rocketsRef.current.splice(i, 1);
        }
      }

      // Update & draw explosion particles
      for (let i = particlesRef.current.length - 1; i >= 0; i--) {
        const p = particlesRef.current[i];
        p.x += p.vx;
        p.y += p.vy;
        p.vy += p.gravity;
        p.vx *= 0.97;
        p.vy *= 0.97;
        p.alpha -= p.decay;

        if (p.alpha <= 0) {
          particlesRef.current.splice(i, 1);
          continue;
        }

        // Particle rendering
        ctx.save();
        ctx.globalAlpha = p.flicker ? Math.max(0, p.alpha * (0.6 + Math.random() * 0.4)) : p.alpha;
        ctx.fillStyle = p.color;
        ctx.shadowBlur = 8;
        ctx.shadowColor = p.color;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      animFrameRef.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('click', handleClick);
      window.removeEventListener('trigger-fireworks', handleCustomBurst);
      initialBursts.forEach(clearTimeout);
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, []);

  return <canvas ref={canvasRef} className="firecracker-canvas" aria-hidden="true" />;
};

export default FirecrackerCanvas;
