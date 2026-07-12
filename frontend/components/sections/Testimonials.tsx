"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { testimonials } from "@/lib/content"
import { AnimatedSection, SectionLabel, SectionHeading } from "@/components/ui"
import { Icon } from "@/components/ui/Icon"

export default function Testimonials() {
  const [active, setActive] = useState(0)

  const next = () => setActive((prev) => (prev + 1) % testimonials.length)
  const prev = () => setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  return (
    <section id="testimonials" className="py-32 lg:py-40 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-20">
          <SectionLabel>Testimonials</SectionLabel>
          <SectionHeading>Trusted by business leaders</SectionHeading>
        </AnimatedSection>

        <AnimatedSection>
          <div className="relative max-w-4xl mx-auto">
            <div className="p-10 lg:p-16 rounded-3xl border border-border bg-background">
              <Icon name="quote" className="w-10 h-10 text-muted mb-8" />

              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.4 }}
                >
                  <blockquote className="text-2xl md:text-3xl font-medium text-foreground leading-snug tracking-tight">
                    &ldquo;{testimonials[active].quote}&rdquo;
                  </blockquote>
                  <footer className="mt-10 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-surface border border-border flex items-center justify-center text-sm font-bold text-foreground">
                      {testimonials[active].client.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{testimonials[active].client}</p>
                      <p className="text-sm text-muted">
                        {testimonials[active].role}, {testimonials[active].company}
                      </p>
                    </div>
                  </footer>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex items-center justify-center gap-4 mt-10">
              <button
                onClick={prev}
                className="p-3 rounded-xl border border-border text-muted hover:text-foreground hover:bg-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground"
                aria-label="Previous testimonial"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                </svg>
              </button>

              <div className="flex gap-2" role="tablist" aria-label="Testimonials">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    role="tab"
                    aria-selected={i === active}
                    aria-label={`Testimonial ${i + 1}`}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === active ? "w-8 bg-foreground" : "w-2 bg-border hover:bg-muted"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="p-3 rounded-xl border border-border text-muted hover:text-foreground hover:bg-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground"
                aria-label="Next testimonial"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
              </button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
