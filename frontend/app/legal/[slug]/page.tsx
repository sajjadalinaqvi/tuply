import type { Metadata } from "next"
import Link from "next/link"

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const title = slug === "privacy" ? "Privacy Policy" : "Terms of Service"
  return { title: `${title} — tuply.` }
}

export default async function LegalPage({ params }: Props) {
  const { slug } = await params
  const isPrivacy = slug === "privacy"

  return (
    <article className="max-w-3xl mx-auto px-6 lg:px-8 py-32">
      <Link href="/" className="text-sm text-muted hover:text-foreground transition-colors">
        &larr; Back to home
      </Link>
      <h1 className="mt-8 text-4xl font-bold text-foreground">
        {isPrivacy ? "Privacy Policy" : "Terms of Service"}
      </h1>
      <p className="mt-4 text-muted">Last updated: July 2026</p>
      <div className="mt-12 prose prose-neutral dark:prose-invert max-w-none space-y-6 text-muted leading-relaxed">
        {isPrivacy ? (
          <>
            <p>
              tuply. (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) respects your privacy. This policy describes how we collect,
              use, and protect information when you visit our website or contact us.
            </p>
            <h2 className="text-xl font-bold text-foreground">Information we collect</h2>
            <p>
              When you submit our contact form, we collect your name, email address, company name, and message content
              to respond to your enquiry.
            </p>
            <h2 className="text-xl font-bold text-foreground">How we use your information</h2>
            <p>
              We use the information you provide solely to respond to your enquiry and communicate about potential
              projects. We do not sell or share your personal information with third parties for marketing purposes.
            </p>
            <h2 className="text-xl font-bold text-foreground">Contact</h2>
            <p>
              For privacy-related questions, contact us at{" "}
              <a href="mailto:hello@tuply.co" className="text-foreground underline">hello@tuply.co</a>.
            </p>
          </>
        ) : (
          <>
            <p>
              By accessing and using the tuply. website, you agree to these Terms of Service. If you do not agree,
              please do not use our website.
            </p>
            <h2 className="text-xl font-bold text-foreground">Services</h2>
            <p>
              tuply. provides AI development, software development, design, and digital marketing services.
              Specific terms for client engagements are outlined in individual project agreements.
            </p>
            <h2 className="text-xl font-bold text-foreground">Intellectual property</h2>
            <p>
              All content on this website — including text, design, and code — is the property of tuply. unless
              otherwise stated. You may not reproduce or distribute our content without written permission.
            </p>
            <h2 className="text-xl font-bold text-foreground">Contact</h2>
            <p>
              Questions about these terms? Email{" "}
              <a href="mailto:hello@tuply.co" className="text-foreground underline">hello@tuply.co</a>.
            </p>
          </>
        )}
      </div>
    </article>
  )
}
