"use client"

import { services } from "@/lib/content"
import { AnimatedSection, SectionLabel, SectionHeading } from "@/components/ui"
import { Icon } from "@/components/ui/Icon"

export default function Services() {
  return (
    <section id="services" className="py-32 lg:py-40">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimatedSection className="max-w-2xl mb-20">
          <SectionLabel>What we do</SectionLabel>
          <SectionHeading>Services built for growth</SectionHeading>
          <p className="mt-6 text-lg text-muted leading-relaxed">
            From AI-powered automation to premium digital experiences — every service is designed to move your business forward.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <AnimatedSection key={service.id} delay={i * 0.08}>
              <article className="group h-full p-8 lg:p-10 rounded-2xl border border-border bg-background hover:bg-surface hover:border-muted hover:-translate-y-1 hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-white/5 transition-all duration-500">
                <div className="w-12 h-12 rounded-xl bg-surface border border-border flex items-center justify-center text-foreground group-hover:scale-110 transition-transform duration-500">
                  <Icon name={service.icon} className="w-6 h-6" />
                </div>
                <h3 className="mt-6 text-xl font-bold text-foreground">{service.title}</h3>
                <p className="mt-3 text-sm text-muted leading-relaxed">{service.description}</p>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
