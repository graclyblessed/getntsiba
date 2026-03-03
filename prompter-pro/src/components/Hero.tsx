export default function Hero() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 pointer-events-none"
      >
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[800px] h-[500px] rounded-full bg-brand-600/20 blur-[120px]" />
        <div className="absolute right-0 bottom-0 w-[400px] h-[400px] rounded-full bg-purple-700/20 blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-brand-500/40 bg-brand-500/10 px-4 py-1.5 text-sm font-medium text-brand-300 mb-8">
          <span className="h-2 w-2 rounded-full bg-brand-400 animate-pulse" />
          Now in public beta — free to try
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] mb-6">
          The AI Teleprompter <br />
          <span className="text-gradient">Built for Professionals</span>
        </h1>

        {/* Sub-headline */}
        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-gray-400 mb-10">
          Write, manage, and scroll your prompts with perfect precision.
          PrompterPro combines a powerful script editor with an intelligent
          AI assistant — so you always know what to say next.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#teleprompter"
            className="w-full sm:w-auto rounded-xl bg-brand-500 hover:bg-brand-600 px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-brand-500/30 transition-all hover:shadow-brand-500/50"
          >
            Try the Teleprompter
          </a>
          <a
            href="#features"
            className="w-full sm:w-auto rounded-xl border border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 px-8 py-3.5 text-base font-semibold text-white transition-all"
          >
            See all features →
          </a>
        </div>

        {/* Social proof */}
        <p className="mt-10 text-sm text-gray-500">
          Trusted by <span className="text-gray-300 font-semibold">5,000+</span> creators, coaches &amp; executives
        </p>
      </div>
    </section>
  )
}
