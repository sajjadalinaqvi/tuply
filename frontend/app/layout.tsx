import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import { ThemeProvider } from "@/components/providers/ThemeProvider"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import "./globals.css"

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
})

export const metadata: Metadata = {
  title: "tuply. — AI, Software & Digital Growth Partner",
  description:
    "tuply. helps founders and business owners grow through AI development, premium software, and digital solutions. Trusted by skincare, real estate, and medical businesses.",
  keywords: ["AI development", "software development", "digital agency", "web development", "mobile apps", "UI/UX design"],
  openGraph: {
    title: "tuply. — AI, Software & Digital Growth Partner",
    description: "Premium AI, software, and digital solutions for business growth.",
    type: "website",
    siteName: "tuply.",
  },
  robots: { index: true, follow: true },
  icons: {
    icon: "/favicon.svg",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("tuply-theme");if(t==="dark"||(t!=="light"&&window.matchMedia("(prefers-color-scheme: dark)").matches)){document.documentElement.classList.add("dark")}}catch(e){}})()`,
          }}
        />
      </head>
      <body className={`${montserrat.variable} font-sans antialiased`}>
        <ThemeProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
