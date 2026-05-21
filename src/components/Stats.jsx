const metrics = [
  {
    value: "2.4B+",
    label: "Neural inferences processed monthly",
    accent: "from-cyan-500/15 via-cyan-500/5 to-transparent",
    glow: "shadow-cyan-500/[0.08]",
    valueColor: "text-cyan-300",
  },
  {
    value: "99.99%",
    label: "SLA-backed platform availability",
    accent: "from-indigo-500/15 via-indigo-500/5 to-transparent",
    glow: "shadow-indigo-500/[0.08]",
    valueColor: "text-indigo-300",
  },
  {
    value: "180+",
    label: "Enterprise teams in production",
    accent: "from-violet-500/15 via-violet-500/5 to-transparent",
    glow: "shadow-violet-500/[0.08]",
    valueColor: "text-violet-300",
  },
  {
    value: "40+",
    label: "Global edge regions deployed",
    accent: "from-sky-500/15 via-sky-500/5 to-transparent",
    glow: "shadow-sky-500/[0.08]",
    valueColor: "text-sky-300",
  },
];

function Stats() {
  return (
    <section
      id="impact"
      className="relative overflow-hidden border-b border-slate-800/70 bg-slate-950/60"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(2,6,23,0.5),rgba(15,23,42,0.35))]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_100%,rgba(99,102,241,0.08),transparent_60%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-px w-2/3 max-w-2xl -translate-x-1/2 bg-gradient-to-r from-transparent via-slate-600/40 to-transparent"
        aria-hidden
      />

      <div className="relative mx-auto w-full max-w-7xl px-5 pb-16 pt-14 sm:px-8 sm:pb-20 sm:pt-16 lg:px-10 lg:pb-24 lg:pt-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-400">
            Platform impact
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Built for teams that{" "}
            <span className="bg-gradient-to-r from-cyan-300 to-indigo-300 bg-clip-text text-transparent">
              operate at scale
            </span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-400 sm:text-lg">
            Trusted by engineering organizations worldwide to deliver
            reliable, high-performance spatial AI—from prototype to
            production.
          </p>
        </div>

        <div className="relative mt-12 sm:mt-14">
          <div
            className="pointer-events-none absolute left-1/2 top-1/2 h-56 w-[min(100%,40rem)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/[0.05] blur-[100px]"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -left-6 top-0 h-48 w-48 rounded-full bg-cyan-500/[0.06] blur-[80px] lg:-left-12"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -right-6 bottom-0 h-44 w-44 rounded-full bg-violet-500/[0.05] blur-[80px] lg:-right-10"
            aria-hidden
          />

          <dl className="relative grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:gap-6">
            {metrics.map((metric) => (
              <div
                key={metric.label}
                className={`group relative overflow-hidden rounded-xl border border-slate-700/50 bg-slate-900/50 p-6 shadow-[0_1px_0_0_rgba(148,163,184,0.07)_inset,0_4px_24px_-4px_rgba(0,0,0,0.4)] backdrop-blur-sm transition-all duration-300 hover:border-slate-600/55 hover:bg-slate-900/70 hover:shadow-[0_0_0_1px_rgba(100,116,139,0.14),0_8px_32px_-8px_rgba(0,0,0,0.5)] ${metric.glow}`}
              >
                <div
                  className={`pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b ${metric.accent} opacity-80 transition-opacity duration-300 group-hover:opacity-100`}
                  aria-hidden
                />
                <div
                  className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"
                  aria-hidden
                />

                <div className="relative">
                  <dt
                    className={`font-mono text-3xl font-semibold tracking-tight sm:text-4xl ${metric.valueColor}`}
                  >
                    {metric.value}
                  </dt>
                  <dd className="mt-3 text-sm leading-relaxed text-slate-400">
                    {metric.label}
                  </dd>
                </div>
              </div>
            ))}
          </dl>

          <p className="relative mt-8 text-center text-xs text-slate-500 sm:text-sm">
            Independently audited infrastructure · SOC 2 Type II · ISO 27001
          </p>
        </div>
      </div>
    </section>
  );
}

export default Stats;
