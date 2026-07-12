import { footerServices, socialLinks, CONTACT_EMAIL } from "@/lib/content"

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background transition-colors duration-400">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          <div className="lg:col-span-1">
            <a href="#" className="text-xl font-bold tracking-tight text-foreground" aria-label="tuply home">
              tuply.
            </a>
            <p className="mt-4 text-sm text-muted leading-relaxed max-w-xs">
              Premium AI, software, and digital solutions for founders and business owners who demand excellence.
            </p>
            <div className="mt-6 flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted hover:text-foreground transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted mb-5">Navigation</p>
            <ul className="space-y-3">
              {[
                ["Services", "#services"],
                ["Industries", "#industries"],
                ["Work", "#portfolio"],
                ["Process", "#process"],
                ["Contact", "#contact"],
              ].map(([label, href]) => (
                <li key={href}>
                  <a href={href} className="text-sm text-muted hover:text-foreground transition-colors duration-300">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted mb-5">Services</p>
            <ul className="space-y-3">
              {footerServices.map((service) => (
                <li key={service}>
                  <a href="#services" className="text-sm text-muted hover:text-foreground transition-colors duration-300">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted mb-5">Contact</p>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-sm text-muted hover:text-foreground transition-colors duration-300"
                >
                  {CONTACT_EMAIL}
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/company/tuplydot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted hover:text-foreground transition-colors duration-300"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted">&copy; {new Date().getFullYear()} tuply. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="/legal/privacy" className="text-xs text-muted hover:text-foreground transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="/legal/terms" className="text-xs text-muted hover:text-foreground transition-colors duration-300">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
