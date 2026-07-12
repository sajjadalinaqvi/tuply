"use client"

import { processSteps } from "@/lib/content"
import { AnimatedSection, SectionLabel, SectionHeading } from "@/components/ui"

export default function Process() {
  return (
    <section id="process" className="py-32 lg:py-40">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimatedSection className="max-w-2xl mb-20">
          <SectionLabel>How we work</SectionLabel>
          <SectionHeading>From discovery to growth</SectionHeading>
          <p className="mt-6 text-lg text-muted leading-relaxed">
            A proven process that keeps you informed, involved, and confident at every stage.
          </p>
        </AnimatedSection>

        <div className="relative">
          <div className="hidden lg:block absolute left-[27px] top-0 bottom-0 w-px bg-border" aria-hidden="true" />

          <div className="space-y-8 lg:space-y-0">
            {processSteps.map((step, i) => (
              <AnimatedSection key={step.step} delay={i * 0.08}>
                <div className="lg:flex lg:gap-12 lg:items-start lg:pb-16 last:lg:pb-0">
                  <div className="flex items-center gap-6 lg:flex-col lg:items-center lg:gap-0 lg:w-14 lg:flex-shrink-0">
                    <div className="relative z-10 w-14 h-14 rounded-2xl border border-border bg-background flex items-center justify-center">
                      <span className="text-sm font-bold text-foreground">{step.step}</span>
                    </div>
                    {i < processSteps.length - 1 && (
                      <div className="lg:hidden flex-1 h-px bg-border" aria-hidden="true" />
                    )}
                  </div>
                  <div className="mt-4 lg:mt-0 lg:pt-2 flex-1 pb-8 lg:pb-0 border-b border-border lg:border-b-0 last:border-b-0">
                    <h3 className="text-2xl font-bold text-foreground">{step.title}</h3>
                    <p className="mt-3 text-muted leading-relaxed max-w-xl">{step.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
