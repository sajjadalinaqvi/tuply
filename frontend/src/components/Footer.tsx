import { Link } from "react-router-dom"

export default function Footer() {
  return (
    <footer className="border-t border-hairline mt-24">
      <div className="max-w-[1280px] mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="md:col-span-1">
          <Link to="/" className="font-semibold text-ink text-lg">
            <span aria-label="tuply">tuply.</span>
          </Link>
          <p className="mt-3 text-sm text-graphite leading-relaxed">
            Technology and growth partner for skincare, real estate, and medical businesses.
          </p>
        </div>

        <div>
          <p className="text-xs font-mono uppercase tracking-widest text-graphite mb-4">Company</p>
          <ul className="space-y-2 text-sm text-graphite">
            {[["About", "/about"], ["Work", "/work"], ["Contact", "/contact"]].map(([label, href]) => (
              <li key={href}><Link to={href} className="hover:text-ink transition-colors">{label}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-mono uppercase tracking-widest text-graphite mb-4">Services</p>
          <ul className="space-y-2 text-sm text-graphite">
            {["AI Development", "Website Development", "Mobile Apps", "UI/UX Design", "Digital Marketing", "Business Development"].map((s) => (
              <li key={s}><Link to="/services" className="hover:text-ink transition-colors">{s}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-mono uppercase tracking-widest text-graphite mb-4">Industries</p>
          <ul className="space-y-2 text-sm text-graphite">
            {[["Skincare", "/industries/skincare"], ["Real Estate & Construction", "/industries/real-estate-construction"], ["Medical Clinics", "/industries/medical-clinics"]].map(([label, href]) => (
              <li key={href}><Link to={href} className="hover:text-ink transition-colors">{label}</Link></li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-hairline">
        <div className="max-w-[1280px] mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-graphite">
          <span>© 2026 tuply. All rights reserved.</span>
          <div className="flex gap-5">
            {[["Privacy", "/legal/privacy"], ["Terms", "/legal/terms"]].map(([label, href]) => (
              <Link key={href} to={href} className="hover:text-ink transition-colors">{label}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
