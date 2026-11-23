import { useEffect, useRef } from "react";
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
      className="hero-section relative flex min-h-screen items-center justify-center overflow-hidden px-6 text-center"
    >
      {/* Abstract sunlight atmosphere */}
      <div className="sky-sunlight" aria-hidden="true" />
      <div className="sky-glow" aria-hidden="true" />
      <div className="sky-rays" aria-hidden="true" />

      {/* Main content */}
      <div className="relative z-10 mx-auto max-w-5xl">
        <p className="hero-label mb-6 text-xs uppercase tracking-[0.5em] text-[#174B65]/40">
          An underwater exploration
        </p>

        <h1 className="hero-title font-display text-5xl font-extrabold tracking-tight text-[#123D55] sm:text-7xl md:text-8xl">
          INTO THE
          <span className="block text-white">DEEP</span>
        </h1>

        <p className="hero-subtitle mx-auto mt-7 max-w-xl text-sm leading-7 text-[#174B65]/80 md:text-base">
          Beneath the surface lies a world we barely know. Discover the
          mysteries hidden within our oceans.
        </p>
      </div>

      {/* Scroll Indicator */}
      <div className="hero-scroll absolute bottom-8 z-10 flex flex-col items-center gap-3">
        <span className="whitespace-nowrap text-[10px] uppercase tracking-[0.4em] text-white/80">
          Scroll to descend
        </span>

        <div className="h-10 w-px bg-gradient-to-b from-[#174B65]/70 to-transparent" />
      </div>
    </section>
  );
}

function LearningObjectives() {
  const objectives = [
    {
      number: "01",
      title: "Identify",
      description:
        "Identify the major zones of the ocean based on their depth and light availability.",
    },
    {
      number: "02",
      title: "Understand",
      description:
        "Explain how light, temperature, and pressure change as ocean depth increases.",
    },
    {
      number: "03",
      title: "Discover",
      description:
        "Describe how marine organisms adapt to survive in different deep-sea environments.",
    },
  ];

  return (
    <section
      id="objectives"
      className="relative overflow-hidden bg-[#061a2b] px-6 py-28 md:px-20 md:py-40"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -right-40 top-0 h-96 w-96 rounded-full bg-cyan-400/[0.06] blur-[120px]" />

      <div className="relative mx-auto max-w-6xl">
        {/* Section heading */}
        <div data-reveal className="mb-16 max-w-2xl">
          <p className="mb-5 text-[10px] uppercase tracking-[0.45em] text-cyan-300">
            Before We Descend
          </p>

          <h2 className="font-display text-4xl font-bold leading-tight md:text-6xl">
            WHAT WILL
            <span className="block text-cyan-300">YOU DISCOVER?</span>
          </h2>

          <p className="mt-6 max-w-lg text-sm leading-8 text-white/50 md:text-base">
            Before exploring the depths of the ocean, let's understand what we
            are about to discover.
          </p>
        </div>

        {/* Learning objectives */}
        <div className="grid gap-5 md:grid-cols-3">
          {objectives.map((objective) => (
            <article
              key={objective.number}
              data-reveal
              className="group border-t border-white/15 py-8 transition-colors duration-500 hover:border-cyan-300"
            >
              <span className="text-xs tracking-[0.3em] text-cyan-300/70">
                {objective.number}
              </span>

              <h3 className="mt-8 font-display text-2xl font-semibold text-white transition-colors duration-300 group-hover:text-cyan-300">
                {objective.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-white/50">
                {objective.description}
              </p>
            </article>
          ))}
        </div>

        {/* Transition */}
        {/*<div data-reveal className="mt-24 flex flex-col items-center gap-4">
          <span className="text-[10px] uppercase tracking-[0.4em] text-white/35">
            The journey begins below
          </span>

          <a
            href="#sunlight"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-cyan-300/30 text-cyan-300 transition-all duration-300 hover:bg-cyan-300 hover:text-[#061a2b]"
            aria-label="Explore the ocean zones"
          >
            ↓
          </a>
        </div>*/}
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

          <p className="mt-6 text-lg text-cyan-100/80">{section.subtitle}</p>

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

function WaterCursor() {
  const glowRef = useRef(null);
  const rippleRef = useRef(null);

  useEffect(() => {
    const glow = glowRef.current;
    const container = rippleRef.current;

    if (!glow || !container) return;

    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;

    if (isTouchDevice) return;

    let lastX = 0;
    let lastY = 0;
    let lastTime = 0;

    const handlePointerMove = (event) => {
      const { clientX: x, clientY: y } = event;

      // Smooth cursor glow
      glow.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;

      const now = performance.now();
      const distance = Math.hypot(x - lastX, y - lastY);

      // Limit ripple frequency
      if (distance < 38 || now - lastTime < 90) return;

      lastX = x;
      lastY = y;
      lastTime = now;

      const ripple = document.createElement("span");

      ripple.className = "water-ripple";
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;

      container.appendChild(ripple);

      ripple.addEventListener(
        "animationend",
        () => {
          ripple.remove();
        },
        { once: true },
      );
    };

    window.addEventListener("pointermove", handlePointerMove, {
      passive: true,
    });

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);

  return (
    <div className="water-cursor-layer" aria-hidden="true">
      <div ref={glowRef} className="water-cursor-glow" />
      <div ref={rippleRef} className="water-ripple-container" />
    </div>
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

      // Reveal content
      gsap.utils
        .toArray("[data-reveal]", container.current)
        .forEach((element) => {
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
            },
          );
        });

      // Scroll progress
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
      // Atmospheric descent animation
      gsap.matchMedia().add("(prefers-reduced-motion: no-preference)", () => {
        gsap.to(".sky-sunlight", {
          opacity: 0,
          scale: 1.4,
          ease: "none",
          scrollTrigger: {
            trigger: ".hero-section",
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
        });

        gsap.to(".sky-rays", {
          opacity: 0,
          ease: "none",
          scrollTrigger: {
            trigger: ".hero-section",
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
        });

        gsap.to(".ocean-ambient-light", {
          opacity: 0.15,
          ease: "none",
          scrollTrigger: {
            trigger: ".hero-section",
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
        });
      });
    },
    { scope: container },
  );

  return (
    <main
      ref={container}
      className="ocean-main relative isolate overflow-hidden"
    >
      <div className="ocean-atmosphere" aria-hidden="true">
        <div className="ocean-ambient-light" />
        <div className="ocean-caustics" />
      </div>

      {/* Interactive cursor */}
      <WaterCursor />

      <div className="scroll-progress fixed left-0 top-0 z-[60] h-[2px] w-full origin-left scale-x-0 bg-cyan-300" />

      <Navbar />
      <Hero />
      <LearningObjectives />

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
