import Hero from "../components/Hero"
import HowItWorks from "../components/HowItWorks"
import { BenefitsRestaurantes, BenefitsFreelancers } from "../components/Benefits"
import CTA from "../components/CTA"
import Footer from "../components/Footer"

function Home() {
  return (
    <main
      id="main-content"
      className="snap-y snap-mandatory snap-always overflow-y-scroll scroll-smooth h-screen bg-gray-50 dark:bg-gray-900"
    >
      {/* Hero */}
      <section className="snap-start" id="hero">
        <Hero />
      </section>

      {/* Como Funciona */}
      <section className="snap-start" id="como-funciona">
        <HowItWorks />
      </section>

      {/* Restaurantes */}
      <section className="snap-start" id="restaurantes">
        <BenefitsRestaurantes />
      </section>

      {/* Freelancers */}
      <section className="snap-start" id="freelancers">
        <BenefitsFreelancers />
      </section>

      {/* CTA + Footer — ocupa 100% da viewport */}
      <section
        id="cta-footer"
        className="snap-start h-screen flex flex-col bg-gradient-to-br from-gray-900 via-gray-800 to-teal-700"
      >
        {/* CTA centralizado verticalmente */}
        <div className="flex-1 flex items-center justify-center">
          <CTA />
        </div>

        {/* Footer fixado na base */}
        <Footer />
      </section>
    </main>
  )
}

export default Home
