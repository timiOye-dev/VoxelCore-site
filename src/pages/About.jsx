import { Link } from "react-router-dom";

const values = [
  {
    title: "Precision at scale",
    description:
      "Every system we build is engineered for production workloads—predictable latency, observable pipelines, and infrastructure that grows with your roadmap.",
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
        <path d="M3 3v18h18" />
        <path d="M7 16l4-8 4 5 5-9" />
      </svg>
    ),
    accent: "from-cyan-500/20 to-cyan-500/5",
    iconColor: "text-cyan-400",
    borderHover: "hover:border-cyan-900/55",
  },
  {
    title: "Spatial-first design",
    description:
      "We treat three-dimensional space as a first-class primitive—unifying volumetric rendering, spatial AI, and cross-device delivery in one coherent stack.",
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
    borderHover: "hover:border-indigo-900/55",
  },
  {
    title: "Security by default",
    description:
      "Enterprise governance is embedded from day one—SOC 2 compliance, granular access controls, and audit-ready infrastructure across every deployment tier.",
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
    borderHover: "hover:border-violet-900/55",
  },
  {
    title: "Relentless iteration",
    description:
      "We ship continuously with teams in the field—closing the loop between research, product, and production so breakthroughs reach users faster.",
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
        <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        <path d="M12 7v5l3 3" />
      </svg>
    ),
    accent: "from-sky-500/20 to-sky-500/5",
    iconColor: "text-sky-400",
    borderHover: "hover:border-sky-900/55",
  },
];

const capabilities = [
  {
    label: "Real-time AI inference",
    detail: "Sub-millisecond neural pipelines with automated scaling and unified orchestration.",
  },
  {
    label: "Volumetric 3D rendering",
    detail: "Photoreal scenes, spatial audio, and cross-platform delivery from web to headset.",
  },
  {
    label: "Enterprise deployment",
    detail: "Dedicated infrastructure, RBAC, audit trails, and global edge distribution.",
  },
  {
    label: "Adaptive intelligence",
    detail: "Systems that learn from usage patterns and optimize resources automatically.",
  },
];

function SectionGlow({ variant = "top" }) {
  const gradient =
    variant === "top"
      ? "bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(99,102,241,0.06),transparent_55%)]"
      : "bg-[radial-gradient(ellipse_80%_60%_at_50%_100%,rgba(99,102,241,0.07),transparent_55%)]";

  return (
    <>
      <div
        className={`pointer-events-none absolute inset-0 ${gradient}`}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-px w-2/3 max-w-2xl -translate-x-1/2 bg-gradient-to-r from-transparent via-slate-600/40 to-transparent"
        aria-hidden
      />
    </>
  );
}

function About() {
  return (
    <main>
      {/* Hero / Introduction */}
      <section className="relative overflow-hidden border-b border-white/[0.06]">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(99,102,241,0.18),transparent)]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -left-32 top-1/3 h-[380px] w-[380px] rounded-full bg-cyan-500/10 blur-[100px]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -right-24 bottom-0 h-[340px] w-[340px] rounded-full bg-indigo-500/15 blur-[100px]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,#000_70%,transparent_100%)]"
          aria-hidden
        />

        <div className="relative mx-auto w-full max-w-7xl px-5 pb-20 pt-14 sm:px-8 sm:pb-28 sm:pt-16 lg:px-10 lg:pb-32 lg:pt-20">
          <div className="hero-fade-in mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium tracking-wide text-slate-300 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
              About VoxelCore
            </div>

            <h1 className="text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-[3.25rem]">
              Engineering the{" "}
              <span className="bg-gradient-to-r from-cyan-300 via-sky-200 to-indigo-300 bg-clip-text text-transparent">
                spatial computing era
              </span>
            </h1>

            <p className="mt-6 text-base leading-relaxed text-slate-400 sm:text-lg sm:leading-relaxed">
              VoxelCore is a technology company at the intersection of artificial
              intelligence and immersive 3D. We build the infrastructure that
              lets enterprise teams deploy spatial intelligence—from neural
              inference to volumetric experiences—at production scale.
            </p>
          </div>

          <dl className="hero-fade-in-delay mx-auto mt-14 grid max-w-4xl grid-cols-2 gap-6 border-t border-white/[0.06] pt-10 sm:grid-cols-4 sm:gap-8">
            {[
              { value: "2019", label: "Founded" },
              { value: "180+", label: "Enterprise clients" },
              { value: "40+", label: "Edge regions" },
              { value: "SOC 2", label: "Type II certified" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <dt className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
                  {stat.value}
                </dt>
                <dd className="mt-1 text-xs text-slate-500 sm:text-sm">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="relative overflow-hidden border-b border-slate-800/70 bg-slate-950/60">
        <div
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(15,23,42,0.4),rgba(2,6,23,0.85))]"
          aria-hidden
        />
        <SectionGlow />

        <div className="relative mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-400">
              Mission &amp; vision
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Make spatial intelligence{" "}
              <span className="bg-gradient-to-r from-cyan-300 to-indigo-300 bg-clip-text text-transparent">
                accessible to every team
              </span>
            </h2>
          </div>

          <div className="relative mt-14 grid gap-6 lg:grid-cols-2 lg:gap-8">
            <div
              className="pointer-events-none absolute -left-8 top-1/2 hidden h-64 w-64 -translate-y-1/2 rounded-full bg-cyan-500/[0.07] blur-[90px] lg:block"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute -right-8 top-1/3 hidden h-56 w-56 rounded-full bg-indigo-500/[0.06] blur-[90px] lg:block"
              aria-hidden
            />

            <article className="relative overflow-hidden rounded-2xl border border-slate-700/50 bg-slate-900/50 p-8 shadow-[0_1px_0_0_rgba(148,163,184,0.07)_inset] backdrop-blur-sm sm:p-10">
              <div
                className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-cyan-500/[0.08] to-transparent"
                aria-hidden
              />
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-cyan-400/90">
                Our mission
              </p>
              <p className="relative mt-5 text-lg leading-relaxed text-slate-300 sm:text-xl sm:leading-relaxed">
                Democratize the tools of spatial AI and immersive 3D so any
                engineering organization can ship intelligent, volumetric
                experiences without rebuilding infrastructure from scratch.
              </p>
              <p className="relative mt-4 text-sm leading-relaxed text-slate-500">
                We remove the operational burden of inference clusters, render
                pipelines, and compliance—so teams focus on product, not
                platform plumbing.
              </p>
            </article>

            <article className="relative overflow-hidden rounded-2xl border border-slate-700/50 bg-slate-900/50 p-8 shadow-[0_1px_0_0_rgba(148,163,184,0.07)_inset] backdrop-blur-sm sm:p-10">
              <div
                className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-indigo-500/[0.08] to-transparent"
                aria-hidden
              />
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-indigo-400/90">
                Our vision
              </p>
              <p className="relative mt-5 text-lg leading-relaxed text-slate-300 sm:text-xl sm:leading-relaxed">
                A world where spatial computing is as fundamental as cloud
                compute—where AI understands space, and every interface can be
                immersive, adaptive, and intelligent by default.
              </p>
              <p className="relative mt-4 text-sm leading-relaxed text-slate-500">
                We are building the foundational layer for that transition:
                unified, secure, and built for the demands of global enterprise.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Core values */}
      <section className="relative overflow-hidden border-b border-slate-800/70">
        <div
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(2,6,23,0.5),rgba(15,23,42,0.2))]"
          aria-hidden
        />
        <SectionGlow />

        <div className="relative mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-400">
              What we stand for
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Principles that guide{" "}
              <span className="bg-gradient-to-r from-cyan-300 to-indigo-300 bg-clip-text text-transparent">
                every decision
              </span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-400 sm:text-lg">
              Our culture and product reflect the same standards we hold for
              the platforms we ship—rigorous, transparent, and built for the
              long term.
            </p>
          </div>

          <div className="relative mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:gap-6">
            <div
              className="pointer-events-none absolute left-1/2 top-1/2 h-48 w-[min(100%,36rem)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/[0.04] blur-[100px]"
              aria-hidden
            />

            {values.map((value) => (
              <article
                key={value.title}
                className={`group relative rounded-xl border border-slate-700/50 bg-slate-900/50 p-6 shadow-[0_1px_0_0_rgba(148,163,184,0.07)_inset] backdrop-blur-sm transition-colors duration-300 hover:bg-slate-900/70 ${value.borderHover}`}
              >
                <div
                  className={`mb-5 inline-flex items-center justify-center rounded-lg border border-slate-700/45 bg-gradient-to-br ${value.accent} p-2.5 ${value.iconColor}`}
                >
                  {value.icon}
                </div>
                <h3 className="text-base font-semibold tracking-tight text-white sm:text-[1.0625rem]">
                  {value.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-slate-400">
                  {value.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Core capabilities */}
      <section className="relative overflow-hidden border-b border-slate-800/70 bg-slate-950/60">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_100%,rgba(99,102,241,0.08),transparent_60%)]"
          aria-hidden
        />
        <SectionGlow variant="bottom" />

        <div className="relative mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
          <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-400">
                Core capabilities
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                One platform for{" "}
                <span className="bg-gradient-to-r from-cyan-300 to-indigo-300 bg-clip-text text-transparent">
                  spatial workloads
                </span>
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-400 sm:text-lg">
                VoxelCore unifies the full stack—from model deployment to
                volumetric delivery—so teams operate a single control plane
                instead of stitching together fragmented tools.
              </p>
            </div>

            <ul className="space-y-4">
              {capabilities.map((cap, index) => (
                <li
                  key={cap.label}
                  className="group flex gap-5 rounded-xl border border-slate-700/50 bg-slate-900/40 px-5 py-5 transition-colors duration-300 hover:border-slate-600/55 hover:bg-slate-900/60"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-slate-700/50 bg-gradient-to-br from-cyan-500/10 to-indigo-500/10 font-mono text-xs font-semibold text-cyan-300/90">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold text-white sm:text-base">
                      {cap.label}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-slate-400">
                      {cap.detail}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Innovation closing */}
      <section className="relative overflow-hidden border-b border-slate-800/70">
        <div
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(2,6,23,0.6),rgba(15,23,42,0.2))]"
          aria-hidden
        />
        <SectionGlow variant="bottom" />

        <div className="relative mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-28">
          <div className="relative mx-auto max-w-3xl">
            <div
              className="pointer-events-none absolute -left-12 top-1/2 h-56 w-56 -translate-y-1/2 rounded-full bg-cyan-500/[0.06] blur-[90px] lg:-left-20"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute -right-10 top-1/3 h-48 w-48 rounded-full bg-violet-500/[0.05] blur-[90px] lg:-right-16"
              aria-hidden
            />

            <div className="relative overflow-hidden rounded-2xl border border-slate-700/50 bg-slate-900/60 px-6 py-12 shadow-[0_1px_0_0_rgba(148,163,184,0.08)_inset,0_24px_48px_-12px_rgba(0,0,0,0.5)] backdrop-blur-md sm:px-10 sm:py-14 lg:px-14 lg:py-16">
              <div
                className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-cyan-500/[0.06] via-indigo-500/[0.03] to-transparent"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent sm:inset-x-12"
                aria-hidden
              />

              <div className="relative text-center">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-400">
                  Looking ahead
                </p>

                <h2 className="mt-5 text-3xl font-semibold leading-[1.12] tracking-tight text-white sm:text-4xl">
                  Innovation is{" "}
                  <span className="bg-gradient-to-r from-cyan-300 via-sky-200 to-indigo-300 bg-clip-text text-transparent">
                    how we operate
                  </span>
                </h2>

                <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-slate-400 sm:mt-6 sm:text-lg">
                  We invest in foundational research—neural volumetrics,
                  edge-native inference, and adaptive scene graphs—while
                  shipping pragmatic tools that land in production today. The
                  next wave of computing is spatial; we intend to power it.
                </p>

                <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:mt-12 sm:flex-row sm:gap-4">
                  <Link
                    to="/contact#contact-form"
                    className="group inline-flex w-full items-center justify-center rounded-lg bg-white px-7 py-3.5 text-sm font-semibold text-slate-950 transition-all duration-300 hover:bg-slate-100 hover:shadow-[0_0_32px_rgba(255,255,255,0.1)] sm:w-auto"
                  >
                    Talk to our team
                    <span className="ml-2 transition-transform duration-300 group-hover:translate-x-0.5">
                      →
                    </span>
                  </Link>
                  <Link
                    to="/#features"
                    className="inline-flex w-full items-center justify-center rounded-lg border border-white/10 bg-white/[0.02] px-7 py-3.5 text-sm font-medium text-slate-300 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.05] hover:text-white sm:w-auto"
                  >
                    Explore the platform
                  </Link>
                </div>

                <p className="mt-8 text-xs text-slate-500 sm:text-sm">
                  Headquartered globally · Remote-first engineering · Always hiring
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;
