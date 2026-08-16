import React from 'react'
import { motion } from 'framer-motion'
import {
  ArrowDown,
  ArrowUpRight,
  ShieldCheck,
  Sparkles,
  Terminal,
} from 'lucide-react'
import { SectionContainer, Reveal } from './Layout'

const stats = [
  { value: '10+', label: 'Años de experiencia' },
  { value: '40+', label: 'Credenciales' },
  { value: 'ISO 27001', label: 'Security & Compliance' },
  { value: 'AI + QA', label: 'Engineering Stack' },
]

export const Hero = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#050914] text-white"
    >
      {/* Technical grid */}
      <div className="absolute inset-0 opacity-[0.12] [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:70px_70px]" />

      {/* Ambient lights */}
      <div className="absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[120px]" />
      <div className="absolute -right-40 bottom-0 h-[600px] w-[600px] rounded-full bg-amber-500/10 blur-[140px]" />

      {/* Decorative lines */}
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute right-[12%] top-[20%] hidden h-40 w-px bg-gradient-to-b from-transparent via-blue-400/40 to-transparent lg:block"
      />

      <motion.div
        animate={{ y: [0, -25, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute left-[8%] bottom-[20%] hidden h-32 w-px bg-gradient-to-b from-transparent via-amber-400/30 to-transparent lg:block"
      />

      <SectionContainer className="relative z-10 flex min-h-screen items-center !max-w-[1500px]">
        <div className="w-full pt-24 pb-12">
          <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
            
            {/* LEFT SIDE */}
            <div>
              <Reveal>
                <div className="mb-7 flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/5 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.22em] text-blue-300 backdrop-blur-xl">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-blue-400" />
                    Systems • Cybersecurity • AI
                  </span>

                  <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-[11px] uppercase tracking-[0.18em] text-slate-400">
                    Dominican Republic
                  </span>
                </div>
              </Reveal>

              <Reveal delay={0.08}>
                <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-slate-500">
                  ING. JOSÉ MANUEL SUÁREZ
                </p>
              </Reveal>

              <Reveal delay={0.12}>
                <h1 className="max-w-5xl text-5xl font-black leading-[0.92] tracking-[-0.055em] sm:text-6xl md:text-7xl xl:text-[88px]">
                  ENGINEERING
                  <br />
                  <span className="text-slate-500">WITH</span>{' '}
                  <span className="bg-gradient-to-r from-blue-300 via-blue-400 to-blue-700 bg-clip-text text-transparent">
                    STRATEGIC
                  </span>
                  <br />
                  INTELLIGENCE.
                </h1>
              </Reveal>

              <Reveal delay={0.2}>
                <p className="mt-8 max-w-2xl text-base leading-8 text-slate-400 md:text-lg">
                  Ingeniería de sistemas, ciberseguridad, inteligencia artificial,
                  QA y estrategia financiera integradas para construir
                  soluciones digitales seguras, eficientes y orientadas a
                  resultados.
                </p>
              </Reveal>

              <Reveal delay={0.28}>
                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <button
                    onClick={() => scrollTo('services')}
                    className="group inline-flex items-center justify-center gap-3 rounded-xl bg-blue-400 px-7 py-4 text-sm font-black uppercase tracking-wider text-slate-950 transition-all duration-300 hover:scale-[1.03] hover:bg-blue-300 hover:shadow-[0_0_45px_rgba(34,211,238,0.25)]"
                  >
                    Explorar capacidades
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </button>

                  <button
                    onClick={() => scrollTo('credentials')}
                    className="inline-flex items-center justify-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-7 py-4 text-sm font-bold uppercase tracking-wider text-white backdrop-blur-xl transition-all duration-300 hover:border-blue-400/30 hover:bg-white/[0.06]"
                  >
                    Ver credenciales
                    <ShieldCheck className="h-4 w-4 text-blue-400" />
                  </button>
                </div>
              </Reveal>

              {/* Stats */}
              <Reveal delay={0.35}>
                <div className="mt-14 grid max-w-3xl grid-cols-2 border-t border-white/10 pt-7 md:grid-cols-4">
                  {stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="border-white/10 py-3 md:border-r md:px-5 first:md:pl-0 last:md:border-r-0"
                    >
                      <div className="text-xl font-black tracking-tight text-white md:text-2xl">
                        {stat.value}
                      </div>
                      <div className="mt-1 text-[9px] font-bold uppercase tracking-[0.16em] text-slate-500">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

            {/* RIGHT SIDE */}
            <Reveal delay={0.25}>
              <div className="relative mx-auto w-full max-w-[580px]">
                
                {/* Orbital ring */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                  className="absolute -inset-8 rounded-full border border-blue-400/10 border-dashed"
                />

                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{
                    duration: 45,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                  className="absolute -inset-16 rounded-full border border-amber-400/[0.08]"
                />

                {/* Main card */}
                <div className="relative overflow-hidden rounded-[30px] border border-white/10 bg-slate-900/70 p-3 shadow-2xl backdrop-blur-xl">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-[22px]">
                    <img
                      src="/images/jose_suit.jpg"
                      alt="José Manuel Suárez"
                      className="h-full w-full object-cover object-center grayscale transition-all duration-1000 hover:scale-105 hover:grayscale-0"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#050914] via-transparent to-transparent" />

                    {/* Scan line */}
                    <motion.div
                      animate={{ y: ['0%', '100%', '0%'] }}
                      transition={{
                        duration: 7,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                      className="absolute left-0 top-0 h-px w-full bg-blue-300/40 shadow-[0_0_15px_rgba(34,211,238,0.8)]"
                    />

                    {/* Image label */}
                    <div className="absolute left-5 top-5 flex items-center gap-2 rounded-lg border border-white/10 bg-black/30 px-3 py-2 font-mono text-[9px] uppercase tracking-[0.2em] text-blue-300 backdrop-blur-md">
                      <Terminal className="h-3 w-3" />
                      Executive Profile
                    </div>

                    {/* Bottom identity */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="flex items-end justify-between gap-4">
                        <div>
                          <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-blue-300">
                            SYSTEMS ENGINEER
                          </p>
                          <h2 className="mt-1 text-2xl font-black">
                            JOSÉ MANUEL SUÁREZ
                          </h2>
                        </div>

                        <div className="hidden rounded-lg border border-amber-400/20 bg-amber-400/10 px-3 py-2 text-right sm:block">
                          <div className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-wider text-amber-300">
                            <span className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse" />
                            Available
                          </div>
                          <div className="mt-1 text-[8px] text-slate-500">
                            Consulting
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating expertise card */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="absolute -bottom-6 -left-5 hidden rounded-2xl border border-white/10 bg-slate-900/90 p-4 shadow-2xl backdrop-blur-xl sm:block"
                >
                  <div className="flex items-center gap-3">
                    <div className="rounded-xl bg-blue-400/10 p-3">
                      <Sparkles className="h-5 w-5 text-blue-300" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white">
                        AI + Cybersecurity
                      </div>
                      <div className="text-[9px] uppercase tracking-widest text-slate-500">
                        Strategic Technology
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Scroll indicator */}
                <button
                  onClick={() => scrollTo('credentials')}
                  className="absolute -bottom-5 -right-5 hidden h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-slate-900 text-slate-400 shadow-xl transition-colors hover:border-blue-400/30 hover:text-blue-300 sm:flex"
                  aria-label="Ver credenciales"
                >
                  <ArrowDown className="h-4 w-4" />
                </button>
              </div>
            </Reveal>
          </div>
        </div>
      </SectionContainer>
    </section>
  )
}
