import { useState } from "react";
import { Link } from "react-router-dom";

const contactChannels = [
  {
    label: "General inquiries",
    value: "hello@voxelcore.io",
    href: "mailto:hello@voxelcore.io",
    description: "Partnerships, press, and general questions",
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
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <path d="M22 6l-10 7L2 6" />
      </svg>
    ),
    accent: "from-cyan-500/20 to-cyan-500/5",
    iconColor: "text-cyan-400",
  },
  {
    label: "Enterprise sales",
    value: "sales@voxelcore.io",
    href: "mailto:sales@voxelcore.io",
    description: "Demos, pricing, and deployment planning",
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
        <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    accent: "from-indigo-500/20 to-indigo-500/5",
    iconColor: "text-indigo-400",
  },
  {
    label: "Technical support",
    value: "support@voxelcore.io",
    href: "mailto:support@voxelcore.io",
    description: "Existing customers and production issues",
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
        <circle cx="12" cy="12" r="10" />
        <path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3M12 17h.01" />
      </svg>
    ),
    accent: "from-sky-500/20 to-sky-500/5",
    iconColor: "text-sky-400",
  },
];

const offices = [
  { city: "San Francisco", region: "HQ · Americas" },
  { city: "London", region: "EMEA" },
  { city: "Singapore", region: "APAC" },
];

const inputClassName =
  "mt-2 w-full rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none transition-colors duration-300 placeholder:text-slate-500 focus:border-cyan-500/25 focus:bg-white/[0.05] focus:ring-1 focus:ring-cyan-500/15";

const labelClassName =
  "block text-xs font-medium uppercase tracking-[0.14em] text-slate-400";

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

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <main>
      {/* Introduction */}
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

        <div className="relative mx-auto w-full max-w-7xl px-5 pb-16 pt-14 sm:px-8 sm:pb-20 sm:pt-16 lg:px-10 lg:pb-24 lg:pt-20">
          <div className="hero-fade-in mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium tracking-wide text-slate-300 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
              Contact
            </div>

            <h1 className="text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-[3.25rem]">
              Let&apos;s build{" "}
              <span className="bg-gradient-to-r from-cyan-300 via-sky-200 to-indigo-300 bg-clip-text text-transparent">
                what&apos;s next
              </span>
            </h1>

            <p className="mt-6 text-base leading-relaxed text-slate-400 sm:text-lg sm:leading-relaxed">
              Reach out to discuss enterprise deployments, platform demos, or
              partnership opportunities. Our team typically responds within one
              business day.
            </p>
          </div>

          <dl className="hero-fade-in-delay mx-auto mt-12 grid max-w-2xl grid-cols-3 gap-6 border-t border-white/[0.06] pt-8 sm:gap-8">
            {[
              { value: "<24h", label: "Response time" },
              { value: "180+", label: "Enterprise clients" },
              { value: "Global", label: "Support coverage" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
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
      </section>

      {/* Form & contact information */}
      <section
        id="contact-form"
        className="relative scroll-mt-24 overflow-hidden border-b border-slate-800/70 bg-slate-950/60"
      >
        <div
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(15,23,42,0.4),rgba(2,6,23,0.85))]"
          aria-hidden
        />
        <SectionGlow />

        <div className="relative mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
          <div className="mx-auto max-w-2xl text-center lg:max-w-none lg:text-left">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-400">
              Get in touch
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Start a{" "}
              <span className="bg-gradient-to-r from-cyan-300 to-indigo-300 bg-clip-text text-transparent">
                conversation
              </span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-400 sm:text-lg lg:max-w-xl">
              Tell us about your use case and we&apos;ll connect you with the
              right team—whether you&apos;re evaluating the platform or scaling
              an existing deployment.
            </p>
          </div>

          <div className="relative mt-14 grid gap-10 lg:grid-cols-5 lg:gap-12 xl:gap-16">
            <div
              className="pointer-events-none absolute -left-8 top-1/4 hidden h-64 w-64 rounded-full bg-cyan-500/[0.06] blur-[90px] lg:block"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute -right-8 bottom-1/4 hidden h-56 w-56 rounded-full bg-indigo-500/[0.05] blur-[90px] lg:block"
              aria-hidden
            />

            {/* Contact form */}
            <div className="hero-fade-in-delay lg:col-span-3">
              <form
                onSubmit={handleSubmit}
                className="relative overflow-hidden rounded-2xl border border-slate-700/50 bg-slate-900/50 p-6 shadow-[0_1px_0_0_rgba(148,163,184,0.07)_inset,0_24px_48px_-12px_rgba(0,0,0,0.35)] backdrop-blur-sm sm:p-8 lg:p-10"
              >
                <div
                  className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-cyan-500/[0.06] via-indigo-500/[0.02] to-transparent"
                  aria-hidden
                />
                <div
                  className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent sm:inset-x-8"
                  aria-hidden
                />

                {submitted ? (
                  <div className="relative py-8 text-center sm:py-12">
                    <div className="mx-auto mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full border border-cyan-500/25 bg-gradient-to-br from-cyan-500/15 to-indigo-500/10 text-cyan-400">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-6 w-6"
                        aria-hidden
                      >
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold tracking-tight text-white">
                      Message received
                    </h3>
                    <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-slate-400">
                      Thanks for reaching out. A member of our team will get back
                      to you within one business day.
                    </p>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="mt-8 text-sm font-medium text-slate-400 transition-colors duration-300 hover:text-white"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <div className="relative space-y-5">
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label htmlFor="name" className={labelClassName}>
                          Name
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          autoComplete="name"
                          className={inputClassName}
                          placeholder="Jane Smith"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className={labelClassName}>
                          Email
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          autoComplete="email"
                          className={inputClassName}
                          placeholder="you@company.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="company" className={labelClassName}>
                        Company{" "}
                        <span className="normal-case tracking-normal text-slate-500">
                          (optional)
                        </span>
                      </label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        autoComplete="organization"
                        className={inputClassName}
                        placeholder="Acme Corp"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className={labelClassName}>
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        required
                        className={`${inputClassName} resize-none`}
                        placeholder="Tell us about your project, timeline, and team size..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="group inline-flex w-full items-center justify-center rounded-lg bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 transition-all duration-300 hover:bg-slate-100 hover:shadow-[0_0_32px_rgba(255,255,255,0.1)] sm:w-auto sm:min-w-[200px]"
                    >
                      Send message
                      <span className="ml-2 transition-transform duration-300 group-hover:translate-x-0.5">
                        →
                      </span>
                    </button>

                    <p className="text-xs leading-relaxed text-slate-500">
                      By submitting, you agree to be contacted about VoxelCore
                      products and services. We respect your privacy and never
                      share your information.
                    </p>
                  </div>
                )}
              </form>
            </div>

            {/* Company & contact information */}
            <aside className="lg:col-span-2">
              <div className="space-y-4">
                {contactChannels.map((channel) => (
                  <a
                    key={channel.label}
                    href={channel.href}
                    className="group flex gap-4 rounded-xl border border-slate-700/50 bg-slate-900/50 p-5 shadow-[0_1px_0_0_rgba(148,163,184,0.07)_inset] backdrop-blur-sm transition-colors duration-300 hover:border-slate-600/55 hover:bg-slate-900/70"
                  >
                    <div
                      className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-slate-700/45 bg-gradient-to-br ${channel.accent} ${channel.iconColor}`}
                    >
                      {channel.icon}
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-medium uppercase tracking-[0.14em] text-slate-500">
                        {channel.label}
                      </p>
                      <p className="mt-1 truncate text-sm font-semibold text-white transition-colors duration-300 group-hover:text-cyan-200">
                        {channel.value}
                      </p>
                      <p className="mt-1 text-xs leading-relaxed text-slate-500">
                        {channel.description}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

              <div className="mt-6 overflow-hidden rounded-2xl border border-slate-700/50 bg-slate-900/50 p-6 shadow-[0_1px_0_0_rgba(148,163,184,0.07)_inset] backdrop-blur-sm sm:p-7">
                <div
                  className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-indigo-500/[0.06] to-transparent"
                  aria-hidden
                />
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-indigo-400/90">
                  Global offices
                </p>
                <ul className="relative mt-5 space-y-4">
                  {offices.map((office) => (
                    <li
                      key={office.city}
                      className="flex items-baseline justify-between gap-4 border-b border-white/[0.04] pb-4 last:border-0 last:pb-0"
                    >
                      <span className="text-sm font-semibold text-white">
                        {office.city}
                      </span>
                      <span className="text-xs text-slate-500">
                        {office.region}
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="relative mt-5 text-xs leading-relaxed text-slate-500">
                  Remote-first engineering across all regions. Enterprise
                  support available 24/7 for production deployments.
                </p>
              </div>

              <p className="mt-6 text-center text-xs text-slate-500 lg:text-left">
                <Link
                  to="/about"
                  className="text-slate-400 transition-colors duration-300 hover:text-white"
                >
                  Learn about VoxelCore
                </Link>
                {" · "}
                <Link
                  to="/#features"
                  className="text-slate-400 transition-colors duration-300 hover:text-white"
                >
                  Explore the platform
                </Link>
              </p>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Contact;
