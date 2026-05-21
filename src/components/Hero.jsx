import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-white/[0.06]">
      {/* Ambient background */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(99,102,241,0.18),transparent)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-32 top-1/4 h-[420px] w-[420px] rounded-full bg-cyan-500/10 blur-[100px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-24 bottom-0 h-[380px] w-[380px] rounded-full bg-indigo-500/15 blur-[100px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,#000_70%,transparent_100%)]"
        aria-hidden
      />

      <div className="relative mx-auto w-full max-w-7xl px-5 pb-20 pt-16 sm:px-8 sm:pb-24 sm:pt-20 lg:px-10 lg:pb-28 lg:pt-24">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-10 xl:gap-14">
          {/* Copy */}
          <div className="hero-fade-in max-w-xl lg:max-w-none">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium tracking-wide text-slate-300 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
              </span>
              Enterprise AI &amp; Immersive 3D Platform
            </div>

            <h1 className="text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[3.25rem] xl:text-6xl">
              Build the future with{" "}
              <span className="bg-gradient-to-r from-cyan-300 via-sky-200 to-indigo-300 bg-clip-text text-transparent">
                spatial intelligence
              </span>
            </h1>

            <p className="mt-6 text-base leading-relaxed text-slate-400 sm:text-lg sm:leading-relaxed">
              VoxelCore unifies real-time AI inference, volumetric rendering, and
              enterprise-grade deployment—so your teams ship immersive 3D
              experiences at production scale.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition-all duration-300 hover:bg-slate-100 hover:shadow-[0_0_32px_rgba(255,255,255,0.12)]"
              >
                Request a demo
                <span className="ml-2 transition-transform duration-300 group-hover:translate-x-0.5">
                  →
                </span>
              </Link>
              <a
                href="#features"
                className="inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/[0.03] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-white/25 hover:bg-white/[0.06]"
              >
                Explore the platform
              </a>
            </div>

            <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-white/[0.06] pt-8 sm:gap-8">
              {[
                { value: "99.9%", label: "Uptime SLA" },
                { value: "<12ms", label: "Edge latency" },
                { value: "SOC 2", label: "Compliant" },
              ].map((stat) => (
                <div key={stat.label}>
                  <dt className="text-lg font-semibold tracking-tight text-white sm:text-xl">
                    {stat.value}
                  </dt>
                  <dd className="mt-1 text-xs text-slate-500 sm:text-sm">
                    {stat.label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Visual */}
          <div className="hero-fade-in-delay relative mx-auto w-full max-w-lg lg:mx-0 lg:max-w-none">
            <div className="relative aspect-[4/3] w-full sm:aspect-[5/4]">
              {/* Outer glow frame */}
              <div
                className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/20 via-indigo-500/10 to-violet-600/20 opacity-80 blur-xl"
                aria-hidden
              />

              <div className="relative h-full overflow-hidden rounded-2xl border border-white/10 bg-slate-950/80 shadow-2xl shadow-indigo-950/50 backdrop-blur-xl">
                {/* Top bar */}
                <div className="flex items-center justify-between border-b border-white/[0.06] px-4 py-3">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-slate-500">
                    voxelcore.studio
                  </span>
                  <div className="flex h-2 w-2">
                    <span className="inline-flex h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                  </div>
                </div>

                <div className="relative p-4 sm:p-5">
                  {/* Central 3D voxel cluster */}
                  <div className="relative mx-auto flex h-36 items-center justify-center sm:h-44">
                    <div
                      className="hero-float absolute h-28 w-28 rounded-xl border border-cyan-400/30 bg-gradient-to-br from-cyan-500/20 to-indigo-600/20 shadow-[0_0_40px_rgba(34,211,238,0.15)] sm:h-32 sm:w-32"
                      style={{ transform: "rotateX(12deg) rotateY(-18deg)" }}
                      aria-hidden
                    />
                    <div
                      className="hero-float-delay absolute h-20 w-20 -translate-x-10 -translate-y-6 rounded-lg border border-indigo-400/25 bg-indigo-500/15 sm:h-24 sm:w-24"
                      style={{ transform: "rotateX(8deg) rotateY(24deg)" }}
                      aria-hidden
                    />
                    <div
                      className="hero-float absolute h-16 w-16 translate-x-12 translate-y-4 rounded-lg border border-violet-400/25 bg-violet-500/15 sm:h-20 sm:w-20"
                      style={{ transform: "rotateX(-6deg) rotateY(12deg)" }}
                      aria-hidden
                    />
                    <div className="relative z-10 flex h-24 w-24 items-center justify-center rounded-xl border border-white/20 bg-gradient-to-br from-slate-800/90 to-slate-900/90 shadow-inner sm:h-28 sm:w-28">
                      <div className="grid grid-cols-3 gap-1 p-2">
                        {Array.from({ length: 9 }).map((_, i) => (
                          <div
                            key={i}
                            className={`h-4 w-4 rounded-sm sm:h-5 sm:w-5 ${
                              i % 3 === 1
                                ? "bg-cyan-400/70 shadow-[0_0_12px_rgba(34,211,238,0.5)]"
                                : "bg-white/10"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Metric cards */}
                  <div className="mt-4 grid grid-cols-2 gap-3">
                    <div className="rounded-lg border border-white/[0.06] bg-white/[0.03] p-3">
                      <p className="text-[10px] font-medium uppercase tracking-wider text-slate-500">
                        Neural throughput
                      </p>
                      <p className="mt-1 font-mono text-lg font-semibold text-cyan-300">
                        2.4M
                        <span className="text-xs text-slate-500"> ops/s</span>
                      </p>
                      <div className="mt-2 h-1 overflow-hidden rounded-full bg-white/5">
                        <div className="h-full w-[78%] rounded-full bg-gradient-to-r from-cyan-500 to-indigo-500" />
                      </div>
                    </div>
                    <div className="rounded-lg border border-white/[0.06] bg-white/[0.03] p-3">
                      <p className="text-[10px] font-medium uppercase tracking-wider text-slate-500">
                        Scene fidelity
                      </p>
                      <p className="mt-1 font-mono text-lg font-semibold text-indigo-300">
                        8K
                        <span className="text-xs text-slate-500"> volumetric</span>
                      </p>
                      <div className="mt-2 flex gap-1">
                        {[40, 65, 85, 100].map((w) => (
                          <div
                            key={w}
                            className="h-6 flex-1 rounded-sm bg-gradient-to-t from-indigo-600/40 to-indigo-400/60"
                            style={{ height: `${w * 0.24}rem` }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Status row */}
                  <div className="mt-3 flex items-center justify-between rounded-lg border border-white/[0.06] bg-black/30 px-3 py-2 font-mono text-[11px] text-slate-400">
                    <span className="text-emerald-400/90">● pipeline.synced</span>
                    <span className="hidden text-slate-500 sm:inline">
                      render_queue: 0
                    </span>
                    <span className="text-cyan-400/80">GPU cluster active</span>
                  </div>
                </div>
              </div>

              {/* Floating accent cards */}
              <div className="absolute -left-3 top-1/4 hidden rounded-lg border border-white/10 bg-slate-900/90 px-3 py-2 shadow-lg backdrop-blur-md sm:block lg:-left-6">
                <p className="text-[10px] text-slate-500">Inference</p>
                <p className="text-sm font-semibold text-white">Live</p>
              </div>
              <div className="absolute -right-2 bottom-1/4 hidden rounded-lg border border-cyan-500/20 bg-slate-900/90 px-3 py-2 shadow-lg shadow-cyan-500/10 backdrop-blur-md sm:block lg:-right-4">
                <p className="text-[10px] text-slate-500">3D mesh</p>
                <p className="text-sm font-semibold text-cyan-300">Optimized</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
