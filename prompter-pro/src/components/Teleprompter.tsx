import { useState, useRef, useEffect, useCallback } from 'react'

const SAMPLE_SCRIPT = `Welcome to PrompterPro — the professional AI teleprompter built for creators, coaches, and executives.

With PrompterPro, you can write your scripts in our powerful editor, then scroll through them at a perfectly controlled speed — so you always sound natural, confident, and prepared.

Our built-in AI assistant helps you draft, refine, and reformat your content in seconds. Whether you're recording a YouTube video, leading a webinar, or presenting to the board — PrompterPro keeps you on point.

Start typing your own script in the editor above, then press Play to begin scrolling. Use the speed slider to match your natural speaking pace.

Thank you for trying PrompterPro. We can't wait to see what you create.`

export default function Teleprompter() {
  const [script, setScript] = useState(SAMPLE_SCRIPT)
  const [isPlaying, setIsPlaying] = useState(false)
  const [speed, setSpeed] = useState(2)           // px per frame-tick
  const [fontSize, setFontSize] = useState(32)    // px
  const [mirrorX, setMirrorX] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)
  const rafRef = useRef<number | null>(null)

  const scroll = useCallback(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop += speed * 0.5
      // Auto-stop at bottom
      const { scrollTop, scrollHeight, clientHeight } = scrollRef.current
      if (scrollTop + clientHeight >= scrollHeight - 2) {
        setIsPlaying(false)
        return
      }
    }
    rafRef.current = requestAnimationFrame(scroll)
  }, [speed])

  useEffect(() => {
    if (isPlaying) {
      rafRef.current = requestAnimationFrame(scroll)
    } else {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [isPlaying, scroll])

  function handleReset() {
    setIsPlaying(false)
    if (scrollRef.current) scrollRef.current.scrollTop = 0
  }

  return (
    <section id="teleprompter" className="py-24 sm:py-32 bg-black/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight mb-3">
            Live <span className="text-gradient">Teleprompter</span>
          </h2>
          <p className="text-gray-400">
            Paste your script, set your speed, and start presenting.
          </p>
        </div>

        {/* Script editor */}
        <textarea
          value={script}
          onChange={(e) => setScript(e.target.value)}
          rows={6}
          placeholder="Type or paste your script here…"
          className="w-full rounded-xl bg-gray-900 border border-white/10 focus:border-brand-500 outline-none px-4 py-3 text-gray-200 text-sm resize-none mb-4 transition-colors"
        />

        {/* Controls */}
        <div className="flex flex-wrap items-center gap-4 mb-4">
          {/* Play / Pause */}
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className={`flex items-center gap-2 rounded-lg px-5 py-2.5 font-semibold text-sm transition-all ${
              isPlaying
                ? 'bg-red-600 hover:bg-red-700 text-white'
                : 'bg-brand-500 hover:bg-brand-600 text-white shadow-lg shadow-brand-500/30'
            }`}
          >
            {isPlaying ? (
              <>
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <rect x="6" y="4" width="4" height="16" rx="1"/>
                  <rect x="14" y="4" width="4" height="16" rx="1"/>
                </svg>
                Pause
              </>
            ) : (
              <>
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z"/>
                </svg>
                Play
              </>
            )}
          </button>

          {/* Reset */}
          <button
            onClick={handleReset}
            className="rounded-lg border border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 px-5 py-2.5 text-sm font-semibold text-white transition-all"
          >
            Reset
          </button>

          {/* Speed */}
          <label className="flex items-center gap-3 text-sm text-gray-400 flex-1 min-w-[180px]">
            <span className="shrink-0">Speed</span>
            <input
              type="range"
              min={0.5}
              max={8}
              step={0.5}
              value={speed}
              onChange={(e) => setSpeed(Number(e.target.value))}
              className="flex-1 accent-brand-500"
            />
            <span className="w-6 text-right text-gray-300">{speed}x</span>
          </label>

          {/* Font size */}
          <label className="flex items-center gap-3 text-sm text-gray-400 flex-1 min-w-[180px]">
            <span className="shrink-0">Size</span>
            <input
              type="range"
              min={18}
              max={72}
              step={2}
              value={fontSize}
              onChange={(e) => setFontSize(Number(e.target.value))}
              className="flex-1 accent-brand-500"
            />
            <span className="w-10 text-right text-gray-300">{fontSize}px</span>
          </label>

          {/* Mirror toggle */}
          <label className="flex items-center gap-2 text-sm text-gray-400 cursor-pointer select-none">
            <input
              type="checkbox"
              checked={mirrorX}
              onChange={(e) => setMirrorX(e.target.checked)}
              className="accent-brand-500 h-4 w-4"
            />
            Mirror
          </label>
        </div>

        {/* Teleprompter display */}
        <div
          ref={scrollRef}
          className="relative h-72 sm:h-96 overflow-hidden rounded-2xl bg-black border border-white/10 px-10 py-8"
          style={{
            transform: mirrorX ? 'scaleX(-1)' : undefined,
          }}
        >
          {/* Fade overlays */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-black to-transparent z-10" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black to-transparent z-10" />

          <p
            className="leading-relaxed font-semibold whitespace-pre-wrap text-white"
            style={{ fontSize: `${fontSize}px` }}
          >
            {script}
          </p>
        </div>

        <p className="text-center text-xs text-gray-600 mt-4">
          Scroll is GPU-accelerated via requestAnimationFrame for buttery-smooth playback.
        </p>
      </div>
    </section>
  )
}
