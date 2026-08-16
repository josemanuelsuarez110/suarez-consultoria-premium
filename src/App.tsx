import React from 'react'
import { Hero } from './components/Hero'
import { Leadership } from './components/Leadership'
import { CredentialsVault } from './components/CredentialsVault'
import { ServicesMatrix } from './components/ServicesMatrix'
import { TechStack } from './components/TechStack'
import { Blog } from './components/Blog'
import { CTA } from './components/CTA'
import { Reveal } from './components/Layout'

function App() {
  return (
    <main className="min-h-screen relative">
      {/* Decorative Global Background */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute inset-0 bg-slate-950" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.05)_0%,transparent_50%)]" />
      </div>

      {/* Premium Navigation */}
<nav className="fixed left-1/2 top-4 z-50 w-[calc(100%-24px)] max-w-6xl -translate-x-1/2">
  <div className="rounded-2xl border border-white/10 bg-slate-950/75 px-4 py-3 shadow-2xl backdrop-blur-2xl md:px-5">
    <div className="flex items-center justify-between gap-4">
      
      {/* Brand */}
      <a
        href="#home"
        className="group flex items-center gap-3"
      >
        <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-400/10">
          <span className="font-black text-blue-300">S</span>
        </div>

        <div className="hidden sm:block">
          <div className="text-sm font-black tracking-[0.18em] text-white">
            SUAREZ
          </div>
          <div className="text-[7px] font-bold uppercase tracking-[0.2em] text-slate-500">
            Technology & Strategy
          </div>
        </div>
      </a>

      {/* Desktop navigation */}
      <div className="hidden items-center gap-6 lg:flex">
        {[
          ['Inicio', 'home'],
          ['Credenciales', 'credentials'],
          ['Servicios', 'services'],
          ['Stack', 'tech-stack'],
          ['Blog', 'blog'],
        ].map(([label, id]) => (
          <a
            key={id}
            href={`#${id}`}
            className="text-[11px] font-bold uppercase tracking-wider text-slate-400 transition-colors hover:text-blue-300"
          >
            {label}
          </a>
        ))}
      </div>

      {/* CTA */}
      <a
        href="#contact"
        className="group inline-flex items-center gap-2 rounded-xl border border-blue-400/20 bg-blue-400/10 px-4 py-2.5 text-[10px] font-black uppercase tracking-wider text-blue-300 transition-all hover:bg-blue-400 hover:text-slate-950"
      >
        Contacto
        <span className="transition-transform group-hover:translate-x-0.5">
          →
        </span>
      </a>
    </div>
  </div>
</nav>

      {/* Main Content Sections */}
      <Hero />
      <Leadership />
      <CredentialsVault />
      <ServicesMatrix />
      <TechStack />
      <Blog />
      <CTA />

      {/* Scroll Progress Indicator (Left Side) */}
      <div className="fixed left-8 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-4 py-8 pointer-events-none opacity-20">
        <div className="w-px h-20 bg-gradient-to-t from-corporate-blue to-transparent" />
        <span className="[writing-mode:vertical-lr] text-[10px] uppercase tracking-[0.4em] font-bold text-slate-500 rotate-180">
          Scroll for Strategy
        </span>
        <div className="w-px h-20 bg-gradient-to-b from-corporate-blue to-transparent" />
      </div>
    </main>
  )
}

export default App
