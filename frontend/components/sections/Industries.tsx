"use client"

import { industries } from "@/lib/content"
import { AnimatedSection, SectionLabel, SectionHeading } from "@/components/ui"
import { Icon } from "@/components/ui/Icon"

export default function Industries() {
  return (
    <section id="industries" className="py-32 lg:py-40 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimatedSection className="max-w-2xl mb-20">
          <SectionLabel>Who we serve</SectionLabel>
          <SectionHeading>Industries we specialize in</SectionHeading>
          <p className="mt-6 text-lg text-muted leading-relaxed">
            Deep domain expertise where technology creates the biggest competitive advantage.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {industries.map((industry, i) => (
            <AnimatedSection key={industry.id} delay={i * 0.1}>
              <article className="group h-full p-8 lg:p-10 rounded-2xl border border-border bg-background hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5 dark:hover:shadow-white/5 transition-all duration-500">
                <div className="w-14 h-14 rounded-2xl bg-surface border border-border flex items-center justify-center text-foreground group-hover:bg-foreground group-hover:text-background transition-all duration-500">
                  <Icon name={industry.icon} className="w-7 h-7" />
                </div>
                <h3 className="mt-8 text-2xl font-bold text-foreground">{industry.title}</h3>
                <p className="mt-4 text-muted leading-relaxed">{industry.description}</p>
                <a
                  href="#contact"
                  className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-foreground group-hover:gap-3 transition-all duration-300"
                >
                  {industry.cta}
                  <Icon name="arrow" className="w-4 h-4" />
                </a>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
