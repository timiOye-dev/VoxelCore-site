const features = [
  {
    title: "Neural AI Engine",
    description:
      "Deploy production-grade models with sub-millisecond inference, automated scaling, and unified orchestration across your entire stack.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5"
        aria-hidden
      >
        <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1" />
        <circle cx="12" cy="12" r="4" />
        <path d="M12 8v4l2.5 1.5" />
      </svg>
    ),
    accent: "from-cyan-500/20 to-cyan-500/5",
    iconColor: "text-cyan-400",
    borderHover: "group-hover:border-cyan-900/55",
  },
  {
    title: "Immersive 3D Experiences",
    description:
      "Build photoreal volumetric scenes with real-time rendering, spatial audio, and cross-platform delivery from web to headset.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5"
        aria-hidden
      >
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
    accent: "from-indigo-500/20 to-indigo-500/5",
    iconColor: "text-indigo-400",
    borderHover: "group-hover:border-indigo-900/55",
  },
  {
    title: "Enterprise Innovation",
    description:
      "Ship with confidence using SOC 2 compliance, role-based access, audit trails, and dedicated infrastructure on every tier.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5"
        aria-hidden
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
    accent: "from-violet-500/20 to-violet-500/5",
    iconColor: "text-violet-400",
    borderHover: "group-hover:border-violet-900/55",
  },
  {
    title: "Intelligent Systems",
    description:
      "Connect adaptive pipelines that learn from usage patterns, optimize resource allocation, and surface actionable insights automatically.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5"
        aria-hidden
      >
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
        <path d="M10 6.5h4M6.5 10v4M17.5 10v4M10 17.5h4" />
      </svg>
    ),
    accent: "from-sky-500/20 to-sky-500/5",
    iconColor: "text-sky-400",
    borderHover: "group-hover:border-sky-900/55",
  },
];

function Features() {
  return (
    <section
      id="features"
      className="relative overflow-hidden border-b border-slate-800/70 bg-slate-950/60"
    >
      {/* Section surface — lifts content off pure black */}
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(15,23,42,0.4),rgba(2,6,23,0.85))]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(99,102,241,0.06),transparent_55%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-px w-2/3 max-w-2xl -translate-x-1/2 bg-gradient-to-r from-transparent via-slate-600/40 to-transparent"
        aria-hidden
      />

      <div className="relative mx-auto w-full max-w-7xl px-5 pb-16 pt-16 sm:px-8 sm:pb-20 sm:pt-20 lg:px-10 lg:pb-24 lg:pt-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-400">
            Platform capabilities
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Everything you need to{" "}
            <span className="bg-gradient-to-r from-cyan-300 to-indigo-300 bg-clip-text text-transparent">
              scale spatial AI
            </span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-400 sm:text-lg">
            A unified platform for teams building the next generation of
            intelligent, immersive applications—without compromising on
            security or performance.
          </p>
        </div>

        <div className="relative mt-12 sm:mt-14">
          {/* Ambient glow behind card grid */}
          <div
            className="pointer-events-none absolute -left-8 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-cyan-500/[0.07] blur-[90px] sm:h-72 sm:w-72 lg:-left-16"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -right-8 top-1/3 h-56 w-56 rounded-full bg-violet-500/[0.06] blur-[90px] sm:h-64 sm:w-64 lg:-right-12"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute left-1/2 top-1/2 h-48 w-[min(100%,36rem)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/[0.04] blur-[100px]"
            aria-hidden
          />

          <div className="relative grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:gap-6 xl:grid-cols-4">
            {features.map((feature) => (
              <article
                key={feature.title}
                className={`group relative rounded-xl border border-slate-700/50 bg-slate-900/50 p-6 shadow-[0_1px_0_0_rgba(148,163,184,0.07)_inset] backdrop-blur-sm transition-all duration-300 hover:border-slate-600/55 hover:bg-slate-900/70 hover:shadow-[0_0_0_1px_rgba(100,116,139,0.14)] ${feature.borderHover}`}
              >
                <div
                  className={`mb-5 inline-flex items-center justify-center rounded-lg border border-slate-700/45 bg-gradient-to-br ${feature.accent} p-2.5 ${feature.iconColor} transition-colors duration-300 group-hover:border-slate-600/50`}
                >
                  {feature.icon}
                </div>

                <h3 className="text-base font-semibold tracking-tight text-white sm:text-[1.0625rem]">
                  {feature.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-slate-400">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
