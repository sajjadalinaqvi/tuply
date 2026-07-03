import { Link } from "react-router-dom"

function Placeholder({ title }: { title: string }) {
  return (
    <main className="max-w-[1280px] mx-auto px-6 py-32">
      <p className="font-mono text-xs uppercase tracking-widest text-graphite mb-4">Coming soon</p>
      <h1 className="text-4xl md:text-6xl font-semibold text-ink tracking-tight mb-8">{title}</h1>
      <Link to="/" className="text-sm font-medium text-ink underline underline-offset-4 hover:text-graphite transition-colors">
        ← Back home
      </Link>
    </main>
  )
}

export function Services() { return <Placeholder title="Services" /> }
export function Industries() { return <Placeholder title="Industries" /> }
export function About() { return <Placeholder title="About" /> }
export function Work() { return <Placeholder title="Work" /> }
export function Contact() { return <Placeholder title="Contact" /> }
export function Legal() { return <Placeholder title="Legal" /> }
