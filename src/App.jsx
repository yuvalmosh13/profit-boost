import Hero from './components/Hero'
import Problem from './components/Problem'
import Reframe from './components/Reframe'
import Calculator from './components/Calculator'
import Curriculum from './components/Curriculum'
import HowItWorks from './components/HowItWorks'
import AboutYuval from './components/AboutYuval'
import Testimonials from './components/Testimonials'
import Offer from './components/Offer'
import LeadForm from './components/LeadForm'
import FAQ from './components/FAQ'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
import StickyCTA from './components/StickyCTA'
import { CONVERSION_MODE, hasLeadEmbed } from './config/integration'

export default function App() {
  // Show the Rav Messer form section in 'lead' mode, or whenever a real
  // embed has been pasted. Pure 'checkout' pages skip the empty placeholder.
  const showLeadForm = CONVERSION_MODE === 'lead' || hasLeadEmbed

  return (
    <>
      <main>
        <Hero />
        <Problem />
        <Reframe />
        <Curriculum />
        <Calculator />
        <HowItWorks />
        <AboutYuval />
        <Testimonials />
        <Offer />
        {showLeadForm && <LeadForm />}
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <StickyCTA />
    </>
  )
}
