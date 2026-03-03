interface Feature {
  icon: string
  title: string
  description: string
}

const features: Feature[] = [
  {
    icon: '🎙️',
    title: 'Smooth Auto-Scroll',
    description:
      'Variable-speed scrolling that matches your natural speaking pace — never lose your place again.',
  },
  {
    icon: '🤖',
    title: 'AI Script Assistant',
    description:
      'Generate, refine, and restructure your scripts with a built-in GPT-powered writing assistant.',
  },
  {
    icon: '📁',
    title: 'Prompt Library',
    description:
      'Organise all your scripts in one searchable library with tags, folders, and version history.',
  },
  {
    icon: '🎨',
    title: 'Custom Themes',
    description:
      'Choose from light, dark, and high-contrast modes. Adjust font size and line spacing on the fly.',
  },
  {
    icon: '🔗',
    title: 'Share & Collaborate',
    description:
      'Share read-only or editable script links with your team or clients instantly.',
  },
  {
    icon: '📱',
    title: 'Cross-Device Sync',
    description:
      'Start on desktop, continue on mobile. Your scripts are always up to date across every device.',
  },
]

export default function SEOPanels() {
  return (
    <section id="features" className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight mb-4">
            Everything you need to{' '}
            <span className="text-gradient">speak with confidence</span>
          </h2>
          <p className="max-w-xl mx-auto text-gray-400 text-lg">
            PrompterPro is the all-in-one platform for presenters, podcasters,
            and professionals who rely on precision communication.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feat) => (
            <div
              key={feat.title}
              className="glass rounded-2xl p-6 flex flex-col gap-3 hover:border-brand-500/40 transition-colors"
            >
              <span className="text-3xl">{feat.icon}</span>
              <h3 className="text-lg font-bold text-white">{feat.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{feat.description}</p>
            </div>
          ))}
        </div>

        {/* Stats strip */}
        <div className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
          {[
            { value: '5K+', label: 'Active users' },
            { value: '2M+', label: 'Scripts created' },
            { value: '99.9%', label: 'Uptime SLA' },
            { value: '< 80ms', label: 'Scroll latency' },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-4xl font-black text-gradient">{stat.value}</p>
              <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
