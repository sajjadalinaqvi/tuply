"use client"

import { useState, type FormEvent } from "react"
import { CONTACT_EMAIL } from "@/lib/content"
import { AnimatedSection, SectionLabel, SectionHeading, Button } from "@/components/ui"
import { Icon } from "@/components/ui/Icon"

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000"

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" })

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus("loading")

    try {
      const res = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })

      if (!res.ok) throw new Error("Failed to send")
      setStatus("success")
      setForm({ name: "", email: "", company: "", message: "" })
    } catch {
      setStatus("error")
    }
  }

  const inputClass =
    "w-full px-5 py-4 rounded-xl border border-border bg-background text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-foreground focus:border-transparent transition-all duration-300"

  return (
    <section id="contact" className="py-32 lg:py-40">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <AnimatedSection>
            <SectionLabel>Get in touch</SectionLabel>
            <SectionHeading>Let&apos;s build something great</SectionHeading>
            <p className="mt-6 text-lg text-muted leading-relaxed">
              Tell us about your business and what you&apos;re looking to achieve.
              We&apos;ll respond within one business day.
            </p>

            <div className="mt-12 space-y-6">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="flex items-center gap-4 text-foreground hover:opacity-70 transition-opacity duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl border border-border flex items-center justify-center group-hover:bg-surface transition-colors duration-300">
                  <Icon name="mail" className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted">Email</p>
                  <p className="font-medium">{CONTACT_EMAIL}</p>
                </div>
              </a>

              <a
                href="https://linkedin.com/company/tuplydot"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-foreground hover:opacity-70 transition-opacity duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl border border-border flex items-center justify-center group-hover:bg-surface transition-colors duration-300">
                  <Icon name="linkedin" className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted">LinkedIn</p>
                  <p className="font-medium">linkedin.com/company/tuplydot</p>
                </div>
              </a>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="sr-only">Name</label>
                <input
                  id="name"
                  type="text"
                  required
                  placeholder="Name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">Email</label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="Email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="company" className="sr-only">Company</label>
                <input
                  id="company"
                  type="text"
                  required
                  placeholder="Company"
                  value={form.company}
                  onChange={(e) => setForm({ ...form, company: e.target.value })}
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">Message</label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  placeholder="Tell us about your project..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className={`${inputClass} resize-none`}
                />
              </div>

              <Button type="submit" variant="primary" disabled={status === "loading"} className="w-full">
                {status === "loading" ? "Sending..." : "Send Message"}
              </Button>

              {status === "success" && (
                <p className="text-sm text-foreground text-center" role="status">
                  Message sent. We&apos;ll be in touch soon.
                </p>
              )}
              {status === "error" && (
                <p className="text-sm text-muted text-center" role="alert">
                  Something went wrong. Please email us directly at {CONTACT_EMAIL}.
                </p>
              )}
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
