"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { personalInfo } from "@/data/portfolio";

function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();

    window.addEventListener("resize", resize);

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      alpha: number;
      color: string;
    }> = [];

    const colors = ["167,139,250", "103,232,249", "244,114,182"];

    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 1.5 + 0.5,
        alpha: Math.random() * 0.4 + 0.1,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    let animId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color},${p.alpha})`;
        ctx.fill();
      });

      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach((p2) => {
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            ctx.beginPath();

            ctx.strokeStyle = `rgba(167,139,250,${
              0.06 * (1 - dist / 120)
            })`;

            ctx.lineWidth = 0.5;

            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        });
      });

      animId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full opacity-60"
    />
  );
}

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollY } = useScroll();

  const y = useTransform(scrollY, [0, 600], [0, 120]);

  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  const nameVariants = {
    hidden: {},

    visible: {
      transition: {
        staggerChildren: 0.03,
        delayChildren: 0.25,
      },
    },
  };

  const letterVariant = {
    hidden: {
      opacity: 0,
      y: 28,
      filter: "blur(8px)",
    },

    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",

      transition: {
        duration: 0.65,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const firstName = "Atrima";

  const lastName = "Bhattacharyya";

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative min-h-screen overflow-hidden flex items-center"
    >
      <ParticleCanvas />

      {/* Background overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0e0e0f] via-transparent to-[#0e0e0f] pointer-events-none z-10" />

      <div className="absolute inset-0 bg-gradient-to-r from-[#0e0e0f] via-transparent to-[#0e0e0f] pointer-events-none z-10" />

      {/* Glow blobs */}
      <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-[#a78bfa]/5 blur-[100px] pointer-events-none z-10" />

      <div className="absolute bottom-1/3 right-1/4 h-80 w-80 rounded-full bg-[#67e8f9]/4 blur-[100px] pointer-events-none z-10" />

      {/* Main Content */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-20 mx-auto grid w-full max-w-7xl items-center gap-12 px-6 pt-24 pb-16 lg:grid-cols-2 lg:gap-20"
      >
        {/* LEFT CONTENT */}
        <div className="text-center lg:text-left">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.1,
            }}
            className="mb-8 flex items-center justify-center gap-2 lg:justify-start"
          >
            <span className="h-px w-10 bg-[#a78bfa]/60" />

            <span className="font-mono text-[10px] tracking-[0.35em] text-[#a78bfa] uppercase">
              Portfolio · 2026
            </span>

            <span className="h-px w-10 bg-[#a78bfa]/60" />
          </motion.div>

          {/* NAME */}
          <motion.h1
            variants={nameVariants}
            initial="hidden"
            animate="visible"
            aria-label={personalInfo.name}
            className="font-display font-light leading-[0.88] tracking-[-0.05em] mb-8"
          >
            <motion.span
              variants={letterVariant}
              className="block whitespace-nowrap text-[clamp(3.5rem,7vw,6.5rem)] text-[#f0ede8]"
            >
              Atrima
            </motion.span>

            <motion.span
              variants={letterVariant}
              className="block mt-1 whitespace-nowrap text-[clamp(3rem,6vw,5.8rem)] bg-gradient-to-r from-[#c4b5fd] via-[#a78bfa] to-[#67e8f9] bg-clip-text text-transparent"
            >
              Bhattacharyya
            </motion.span>
          </motion.h1>

          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.95,
            }}
            className="mt-8 flex items-center justify-center lg:justify-start gap-3 text-[#9a9898]"
          >
            <span className="text-base md:text-xl font-light tracking-wide">
              Software Engineer
            </span>

            <span className="text-[#a78bfa]">•</span>

            <span className="text-base md:text-xl font-light tracking-wide">
              AI/ML
            </span>

            <span className="text-[#a78bfa]">•</span>

            <span className="text-base md:text-xl font-light tracking-wide">
              Data
            </span>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.75,
              delay: 1.05,
            }}
            className="mx-auto mt-6 max-w-xl text-base leading-8 text-[#9a9898] font-light lg:mx-0"
          >
            {personalInfo.headline}
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.75,
              delay: 1.18,
            }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4 lg:justify-start"
          >
            <a
              href="#projects"
              className="rounded-full border border-[#a78bfa]/30 bg-[#a78bfa]/10 px-7 py-3.5 text-sm tracking-wide text-[#c4b5fd] transition-all duration-300 hover:border-[#a78bfa]/60 hover:bg-[#a78bfa]/20"
            >
              View My Work
            </a>

            <a
              href="#contact"
              className="rounded-full border border-white/10 px-7 py-3.5 text-sm tracking-wide text-[#9a9898] transition-all duration-300 hover:border-white/25 hover:text-[#f0ede8]"
            >
              Get In Touch
            </a>
          </motion.div>
        </div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.9,
            delay: 0.45,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative h-[430px] w-[320px] overflow-hidden rounded-[2rem] border border-white/10 shadow-[0_0_0_1px_rgba(167,139,250,0.15)] md:h-[540px] md:w-[430px]">
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#0e0e0f]/55 via-transparent to-transparent" />

            <Image
              src="/profile.jpg"
                  
              alt="Atrima Bhattacharyya"
              fill
              priority
              className="object-cover object-center"
            />
          </div>

          <div className="absolute -z-10 h-[420px] w-[420px] rounded-full bg-[#a78bfa]/10 blur-[120px]" />
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1,
          delay: 1.7,
        }}
        className="absolute bottom-10 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-2"
      >
        <span className="font-mono text-[10px] tracking-[0.3em] text-[#5a5858] uppercase">
          Scroll
        </span>

        <div className="relative flex h-8 w-5 items-start justify-center rounded-full border border-[#2a2a2e] pt-1.5">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="h-1.5 w-1 rounded-full bg-[#a78bfa]"
          />
        </div>
      </motion.div>
    </section>
  );
}