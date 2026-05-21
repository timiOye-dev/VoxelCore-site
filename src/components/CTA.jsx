import { Link } from "react-router-dom";

function CTA() {
  return (
    <section
      id="get-started"
      className="relative overflow-hidden border-b border-slate-800/70"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(2,6,23,0.6),rgba(15,23,42,0.2))]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_100%,rgba(99,102,241,0.07),transparent_55%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-px w-2/3 max-w-2xl -translate-x-1/2 bg-gradient-to-r from-transparent via-slate-600/40 to-transparent"
        aria-hidden
      />

      <div className="relative mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-28">
        <div className="relative mx-auto max-w-3xl">
          {/* Ambient glow behind card */}
          <div
            className="pointer-events-none absolute -left-12 top-1/2 h-56 w-56 -translate-y-1/2 rounded-full bg-cyan-500/[0.06] blur-[90px] sm:h-64 sm:w-64 lg:-left-20"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -right-10 top-1/3 h-48 w-48 rounded-full bg-violet-500/[0.05] blur-[90px] sm:h-56 sm:w-56 lg:-right-16"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute left-1/2 top-1/2 h-40 w-[min(100%,28rem)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/[0.04] blur-[100px]"
            aria-hidden
          />

          {/* Elevated surface */}
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
                Get started
              </p>

              <h2 className="mt-5 text-3xl font-semibold leading-[1.12] tracking-tight text-white sm:text-4xl lg:text-[2.75rem]">
                Ready to deploy{" "}
                <span className="bg-gradient-to-r from-cyan-300 via-sky-200 to-indigo-300 bg-clip-text text-transparent">
                  spatial intelligence
                </span>{" "}
                at scale?
              </h2>

              <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-slate-400 sm:mt-6 sm:text-lg">
                Join engineering teams shipping production-grade AI and 3D
                experiences on VoxelCore. Talk to our team or explore the
                platform on your own timeline.
              </p>

              <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:mt-12 sm:flex-row sm:gap-4">
                <Link
                  to="/contact"
                  className="group inline-flex w-full items-center justify-center rounded-lg bg-white px-7 py-3.5 text-sm font-semibold text-slate-950 transition-all duration-300 hover:bg-slate-100 hover:shadow-[0_0_32px_rgba(255,255,255,0.1)] sm:w-auto"
                >
                  Request a demo
                  <span className="ml-2 transition-transform duration-300 group-hover:translate-x-0.5">
                    →
                  </span>
                </Link>
                <a
                  href="#features"
                  className="inline-flex w-full items-center justify-center rounded-lg border border-white/10 bg-white/[0.02] px-7 py-3.5 text-sm font-medium text-slate-300 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.05] hover:text-white sm:w-auto"
                >
                  View platform overview
                </a>
              </div>

              <p className="mt-8 text-xs text-slate-500 sm:text-sm">
                No credit card required · Enterprise onboarding in under 48 hours
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTA;
