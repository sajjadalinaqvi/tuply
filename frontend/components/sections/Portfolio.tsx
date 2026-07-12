"use client"

import { portfolio } from "@/lib/content"
import { AnimatedSection, SectionLabel, SectionHeading } from "@/components/ui"
import { Icon } from "@/components/ui/Icon"

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-32 lg:py-40 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimatedSection className="max-w-2xl mb-20">
          <SectionLabel>Our work</SectionLabel>
          <SectionHeading>Projects that deliver results</SectionHeading>
          <p className="mt-6 text-lg text-muted leading-relaxed">
            A selection of recent engagements where strategy, design, and technology came together to drive growth.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {portfolio.map((project, i) => (
            <AnimatedSection key={project.id} delay={i * 0.1}>
              <article className="group rounded-2xl overflow-hidden border border-border bg-background hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/10 dark:hover:shadow-white/5 transition-all duration-500">
                <div className={`relative h-64 bg-gradient-to-br ${project.gradient} overflow-hidden`}>
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-50" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-6xl font-bold text-foreground/10 dark:text-white/10 select-none">
                      {project.title.charAt(0)}
                    </span>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-background/90 backdrop-blur rounded-full text-foreground">
                      {project.industry}
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-foreground">{project.title}</h3>
                  <p className="mt-3 text-sm text-muted leading-relaxed">{project.description}</p>
                  <a
                    href="#contact"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-foreground opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300"
                  >
                    View case study
                    <Icon name="arrow" className="w-4 h-4" />
                  </a>
                </div>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
