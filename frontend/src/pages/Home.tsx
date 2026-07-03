import { useState } from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { services, industries, faqs } from "../content/data"

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <main>
      {/* Hero */}
      <section className="max-w-[1280px] mx-auto px-6 pt-24 pb-20 md:pt-36 md:pb-28">
        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-widest text-graphite mb-6">
            Technology &amp; Growth Partner
          </p>
          <h1 className="text-5xl md:text-7xl font-semibold text-ink leading-[1.05] tracking-tight mb-6">
            Build systems that make your business grow
            <span className="inline-block w-3 h-3 rounded-full bg-ink ml-2 animate-pulse" aria-hidden="true" />
          </h1>
          <p className="text-lg text-graphite leading-relaxed max-w-xl mb-10">
            tuply. combines AI development, web and mobile builds, and growth strategy for skincare, real estate, and medical businesses.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/contact" className="px-6 py-3 bg-ink text-paper text-sm font-medium rounded-md hover:bg-graphite transition-colors">
              Start a project
            </Link>
            <Link to="/work" className="px-6 py-3 border border-hairline text-ink text-sm font-medium rounded-md hover:border-graphite transition-colors">
              See our work
            </Link>
          </div>
        </motion.div>
      </section>

      <div className="border-t border-hairline" />

      {/* Trust strip */}
      <section className="max-w-[1280px] mx-auto px-6 py-8">
        <p className="text-sm text-graphite text-center">
          A technology and growth partner — not a web agency. Every engagement is tied to a measurable business outcome.
        </p>
      </section>

      <div className="border-t border-hairline" />

      {/* Services grid */}
      <section className="max-w-[1280px] mx-auto px-6 py-20">
        <p className="font-mono text-xs uppercase tracking-widest text-graphite mb-3">What we build</p>
        <h2 className="text-3xl md:text-4xl font-semibold text-ink tracking-tight mb-12">Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-hairline border border-hairline">
          {services.map((s) => (
            <div key={s.id} className="bg-paper p-8">
              <h3 className="text-base font-semibold text-ink mb-2">{s.title}</h3>
              <p className="text-sm text-graphite leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <Link to="/services" className="text-sm font-medium text-ink underline underline-offset-4 hover:text-graphite transition-colors">
            View all services →
          </Link>
        </div>
      </section>

      <div className="border-t border-hairline" />

      {/* Industries strip */}
      <section className="max-w-[1280px] mx-auto px-6 py-20">
        <p className="font-mono text-xs uppercase tracking-widest text-graphite mb-3">Who we work with</p>
        <h2 className="text-3xl md:text-4xl font-semibold text-ink tracking-tight mb-12">Industries</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-hairline border border-hairline">
          {industries.map((ind) => (
            <Link key={ind.id} to={ind.href} className="bg-paper p-8 group block">
              <h3 className="text-base font-semibold text-ink mb-2 group-hover:underline underline-offset-4">{ind.title}</h3>
              <p className="text-sm text-graphite leading-relaxed">{ind.description}</p>
              <span className="mt-4 inline-block text-xs font-mono text-graphite group-hover:text-ink transition-colors">See what we build →</span>
            </Link>
          ))}
        </div>
      </section>

      <div className="border-t border-hairline" />

      {/* How we work */}
      <section className="max-w-[1280px] mx-auto px-6 py-20">
        <p className="font-mono text-xs uppercase tracking-widest text-graphite mb-3">The process</p>
        <h2 className="text-3xl md:text-4xl font-semibold text-ink tracking-tight mb-12">How we work</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-hairline border border-hairline">
          {[
            { step: "01", title: "Discover", body: "We start with your business goals, not a feature list. One focused call to understand what's actually blocking growth." },
            { step: "02", title: "Build", body: "Scoped, time-boxed delivery. You see progress weekly — no black-box development cycles." },
            { step: "03", title: "Grow", body: "Launch is the start, not the end. We measure outcomes and iterate until the numbers move." },
          ].map((item) => (
            <div key={item.step} className="bg-paper p-8">
              <span className="font-mono text-xs text-graphite">{item.step}</span>
              <h3 className="text-xl font-semibold text-ink mt-2 mb-3">{item.title}</h3>
              <p className="text-sm text-graphite leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="border-t border-hairline" />

      {/* Philosophy block */}
      <section className="max-w-[1280px] mx-auto px-6 py-20">
        <blockquote className="max-w-2xl">
          <p className="text-2xl md:text-3xl font-semibold text-ink leading-snug tracking-tight">
            "Every system we build has one job: make your business more money, save your team time, or improve the experience for your customers."
          </p>
          <footer className="mt-6 text-sm text-graphite font-mono">— tuply.</footer>
        </blockquote>
      </section>

      <div className="border-t border-hairline" />

      {/* FAQ */}
      <section className="max-w-[1280px] mx-auto px-6 py-20">
        <p className="font-mono text-xs uppercase tracking-widest text-graphite mb-3">Common questions</p>
        <h2 className="text-3xl md:text-4xl font-semibold text-ink tracking-tight mb-12">FAQ</h2>
        <div className="max-w-2xl divide-y divide-hairline border-y border-hairline">
          {faqs.map((faq, i) => (
            <div key={i}>
              <button
                className="w-full text-left py-5 flex justify-between items-center gap-4 text-sm font-medium text-ink"
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                aria-expanded={openFaq === i}
              >
                {faq.q}
                <span className="text-graphite text-lg leading-none flex-shrink-0">{openFaq === i ? "−" : "+"}</span>
              </button>
              {openFaq === i && (
                <p className="pb-5 text-sm text-graphite leading-relaxed">{faq.a}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      <div className="border-t border-hairline" />

      {/* Final CTA */}
      <section className="max-w-[1280px] mx-auto px-6 py-24 text-center">
        <h2 className="text-3xl md:text-5xl font-semibold text-ink tracking-tight mb-6">
          Ready to build something that works?
        </h2>
        <p className="text-graphite text-lg mb-10 max-w-md mx-auto">
          Tell us about your business. We'll tell you what's worth building first.
        </p>
        <Link to="/contact" className="px-8 py-4 bg-ink text-paper text-sm font-medium rounded-md hover:bg-graphite transition-colors">
          Start a project
        </Link>
      </section>
    </main>
  )
}
