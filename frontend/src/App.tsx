import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import { Services, Industries, About, Work, Contact, Legal } from "./pages/Placeholders"

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-paper text-ink font-sans">
        <Header />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/industries/:slug" element={<Industries />} />
            <Route path="/about" element={<About />} />
            <Route path="/work" element={<Work />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/legal/:slug" element={<Legal />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
