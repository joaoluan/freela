import Hero from "../components/Hero"
import HowItWorks from "../components/HowItWorks"
import { BenefitsRestaurantes, BenefitsFreelancers, BenefitsCTA } from "../components/Benefits"

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

      {/* Como Funciona (id no wrapper!) */}
      <section className="snap-start" id="como-funciona">
        <HowItWorks />
      </section>

      {/* Restaurantes (id no wrapper, filho direto do container) */}
      <section className="snap-start" id="restaurantes">
        <BenefitsRestaurantes />
      </section>

      {/* Freelancers (id no wrapper, filho direto do container) */}
      <section className="snap-start" id="freelancers">
        <BenefitsFreelancers />
      </section>

      {/* CTA final (snap opcional) */}
      <section className="snap-start">
        <BenefitsCTA />
      </section>
    </main>
  )
}

export default Home
