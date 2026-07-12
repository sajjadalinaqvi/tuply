"use client"

import { valueProps } from "@/lib/content"
import { AnimatedSection, SectionLabel, SectionHeading } from "@/components/ui"

export default function WhyChoose() {
  return (
    <section id="why" className="py-32 lg:py-40">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-20">
          <SectionLabel>Why tuply.</SectionLabel>
          <SectionHeading>Built different, by design</SectionHeading>
          <p className="mt-6 text-lg text-muted leading-relaxed">
            We combine technical excellence with business acumen — so every project delivers real, measurable impact.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {valueProps.map((prop, i) => (
            <AnimatedSection key={prop.title} delay={i * 0.08}>
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-border text-sm font-bold text-foreground mb-5">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="text-xl font-bold text-foreground">{prop.title}</h3>
                <p className="mt-3 text-sm text-muted leading-relaxed">{prop.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
