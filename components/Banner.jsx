"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const slides = [
  {
    tag: "Babysitting Services",
    title: "Trusted Care for\nYour Little Ones",
    subtitle: "Professional, certified babysitters available around the clock — so you can have peace of mind.",
    cta: "Book a Babysitter",
    href: "/service/baby-care",
    accent: "teal",
  },
  {
    tag: "Elderly Care",
    title: "Compassionate Care\nfor Your Parents",
    subtitle: "Dignified support, companionship, and daily assistance for your senior family members at home.",
    cta: "Book Elderly Care",
    href: "/service/elderly-care",
    accent: "blue",
  },
  {
    tag: "Sick Care",
    title: "Expert Home Care\nfor the Sick",
    subtitle: "Skilled caregivers to help your loved ones recover safely and comfortably at home.",
    cta: "Book Sick Care",
    href: "/service/sick-care",
    accent: "emerald",
  },
];

export default function Banner() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setCurrent((c) => (c + 1) % slides.length);
        setAnimating(false);
      }, 300);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goTo = (i) => {
    setAnimating(true);
    setTimeout(() => { setCurrent(i); setAnimating(false); }, 300);
  };

  const slide = slides[current];

  return (
    <section className="relative bg-slate-900 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "40px 40px"
        }}></div>
      </div>

      {/* Gradient blob */}
      <div className={`absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-3xl opacity-20 transition-all duration-1000 ${
        slide.accent === "teal" ? "bg-teal-500" :
        slide.accent === "blue" ? "bg-blue-500" : "bg-emerald-500"
      }`}></div>

      <div className={`relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 transition-opacity duration-300 ${animating ? "opacity-0" : "opacity-100"}`}>
        <div className="max-w-2xl">
          {/* Tag */}
          <span className={`inline-block text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6 ${
            slide.accent === "teal" ? "bg-teal-500/20 text-teal-400" :
            slide.accent === "blue" ? "bg-blue-500/20 text-blue-400" : "bg-emerald-500/20 text-emerald-400"
          }`}>
            {slide.tag}
          </span>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6 whitespace-pre-line">
            {slide.title}
          </h1>

          {/* Subtitle */}
          <p className="text-lg text-slate-400 mb-10 max-w-xl leading-relaxed">
            {slide.subtitle}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <Link href={slide.href}
              className={`inline-flex items-center gap-2 font-semibold px-7 py-3.5 rounded-xl text-white shadow-lg transition hover:scale-105 ${
                slide.accent === "teal" ? "bg-teal-500 hover:bg-teal-400 shadow-teal-900/40" :
                slide.accent === "blue" ? "bg-blue-500 hover:bg-blue-400 shadow-blue-900/40" :
                "bg-emerald-500 hover:bg-emerald-400 shadow-emerald-900/40"
              }`}>
              {slide.cta}
              <span>→</span>
            </Link>
            <Link href="/#services"
              className="inline-flex items-center gap-2 font-semibold px-7 py-3.5 rounded-xl text-white/80 border border-white/20 hover:bg-white/10 transition">
              View All Services
            </Link>
          </div>
        </div>

        {/* Slide indicators */}
        <div className="flex items-center gap-3 mt-16">
          {slides.map((_, i) => (
            <button key={i} onClick={() => goTo(i)}
              className={`transition-all duration-300 rounded-full ${
                i === current ? "w-8 h-2 bg-teal-400" : "w-2 h-2 bg-white/30 hover:bg-white/50"
              }`}
            />
          ))}
          <span className="text-white/30 text-xs ml-2">{current + 1} / {slides.length}</span>
        </div>
      </div>
    </section>
  );
}
