`import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes'; // Otomatis membaca index.jsx di dalam folder routes

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);`


import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const sections = [
  {
    id: "sunlight",
    number: "01",
    depth: "0 — 200 M",
    title: "SUNLIGHT ZONE",
    subtitle: "Where sunlight meets life.",
    description:
      "The ocean's upper layer is filled with sunlight, allowing marine plants and microscopic organisms to thrive.",
    className: "ocean-sunlight",
  },
  {
    id: "twilight",
    number: "02",
    depth: "200 — 1,000 M",
    title: "TWILIGHT ZONE",
    subtitle: "As sunlight fades, another world emerges.",
    description:
      "Light becomes scarce. Strange creatures adapt to a world where darkness slowly takes over.",
    className: "ocean-twilight",
  },
  {
    id: "midnight",
    number: "03",
    depth: "1,000 — 4,000 M",
    title: "MIDNIGHT ZONE",
    subtitle: "In eternal darkness, life finds its own light.",
    description:
      "No sunlight reaches this region. Some creatures produce their own light through bioluminescence.",
    className: "ocean-midnight",
  },
  {
    id: "abyss",
    number: "04",
    depth: "4,000 — 6,000 M",
    title: "THE ABYSS",
    subtitle: "Life survives where we once thought it impossible.",
    description:
      "Under immense pressure and near-total darkness, specialized organisms continue to survive.",
    className: "ocean-abyss",
  },
  {
    id: "threat",
    number: "05",
    depth: "ABOVE AND BELOW",
    title: "THE THREAT",
    subtitle: "But this world is not beyond our reach.",
    description:
      "Plastic pollution, destructive fishing practices, and climate change threaten marine ecosystems.",
    className: "ocean-threat",
  },
  {
    id: "responsibility",
    number: "06",
    depth: "OUR FUTURE",
    title: "OUR RESPONSIBILITY",
    subtitle: "The ocean's future is also in our hands.",
    description:
      "Understanding the ocean is the first step. Protecting it is a responsibility we share.",
    className: "ocean-responsibility",
  },
];

function Navbar() {
  return (
    <nav className="fixed left-0 top-0 z-50 flex w-full items-center justify-between px-6 py-5 md:px-12">
      <a
        href="#home"
        className="font-display text-sm font-extrabold tracking-[0.2em]"
      >
        INTO THE DEEP<span className="text-cyan-300">.</span>
      </a>

      <a
        href="#sunlight"
        className="text-xs uppercase tracking-[0.2em] text-white/60 transition hover:text-cyan-300"
      >
        Begin the journey ↓
      </a>
    </nav>
  );
}

function Hero() {
  return (
    <section
      id="home"
      className="ocean-hero relative flex min-h-screen items-center justify-center overflow-hidden px-6 text-center"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_100%,rgba(56,184,210,0.15),transparent_55%)]" />

      <div className="relative z-10 mx-auto max-w-5xl">
        <p className="hero-label mb-6 text-xs uppercase tracking-[0.5em] text-cyan-200">
          An underwater exploration
        </p>

        <h1 className="hero-title font-display text-5xl font-extrabold tracking-tight sm:text-7xl md:text-8xl">
          INTO THE
          <span className="block text-cyan-300">DEEP</span>
        </h1>

        <p className="hero-subtitle mx-auto mt-7 max-w-xl text-sm leading-7 text-white/65 md:text-base">
          Beneath the surface lies a world we barely know.
          Discover the mysteries hidden within our oceans.
        </p>

        <a
          href="#sunlight"
          className="mt-12 inline-flex items-center gap-3 border border-white/30 px-7 py-4 text-xs uppercase tracking-[0.25em] transition hover:border-cyan-300 hover:bg-cyan-300 hover:text-slate-950"
        >
          Start exploring <span>↓</span>
        </a>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.4em] text-white/40">
        Scroll to descend
      </div>
    </section>
  );
}

function OceanSection({ section }) {
  return (
    <section
      id={section.id}
      className={`${section.className} relative flex min-h-[90vh] items-center overflow-hidden px-6 py-32 md:px-20`}
    >
      <div className="mx-auto grid w-full max-w-6xl gap-12 md:grid-cols-2 md:items-center">
        <div data-reveal>
          <p className="mb-5 text-xs tracking-[0.35em] text-cyan-300">
            {section.number} / {section.depth}
          </p>

          <h2 className="font-display text-4xl font-bold leading-tight md:text-6xl">
            {section.title}
          </h2>

          <p className="mt-6 text-lg text-cyan-100/80">
            {section.subtitle}
          </p>

          <p className="mt-5 max-w-lg text-sm leading-8 text-white/55">
            {section.description}
          </p>
        </div>

        <div
          data-reveal
          className="relative flex aspect-[4/5] items-center justify-center overflow-hidden rounded-sm border border-white/10 bg-white/[0.03]"
        >
          <div className="absolute h-48 w-48 rounded-full bg-cyan-300/10 blur-3xl" />
          <span className="relative text-center text-xs uppercase tracking-[0.3em] text-white/35">
            Visual asset
            <br />
            coming soon
          </span>
        </div>
      </div>
    </section>
  );
}

function App() {
  const container = useRef(null);

  useGSAP(
    () => {
      // Opening animation
      gsap.from(".hero-label", {
        y: 20,
        autoAlpha: 0,
        duration: 1,
        delay: 0.2,
      });

      gsap.from(".hero-title", {
        y: 60,
        autoAlpha: 0,
        duration: 1.2,
        delay: 0.35,
        ease: "power3.out",
      });

      gsap.from(".hero-subtitle", {
        y: 20,
        autoAlpha: 0,
        duration: 1,
        delay: 0.8,
      });

      // Reveal content when entering the viewport
      gsap.utils.toArray("[data-reveal]", container.current).forEach((element) => {
        gsap.fromTo(
          element,
          {
            y: 45,
            autoAlpha: 0,
          },
          {
            y: 0,
            autoAlpha: 1,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: element,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      // Scroll progress indicator
      gsap.to(".scroll-progress", {
        scaleX: 1,
        ease: "none",
        scrollTrigger: {
          trigger: document.documentElement,
          start: "top top",
          end: () => ScrollTrigger.maxScroll(window),
          scrub: true,
        },
      });
    },
    { scope: container }
  );

  return (
    <main ref={container} className="overflow-hidden">
      <div className="scroll-progress fixed left-0 top-0 z-[60] h-[2px] w-full origin-left scale-x-0 bg-cyan-300" />

      <Navbar />
      <Hero />

      {sections.map((section) => (
        <OceanSection key={section.id} section={section} />
      ))}

      <footer className="bg-[#020812] px-6 py-10 text-center text-xs tracking-widest text-white/40">
        INTO THE DEEP — A JOURNEY BENEATH THE OCEAN
      </footer>
    </main>
  );
}

export default App;

