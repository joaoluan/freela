import Hero from "../components/Hero"
import HowItWorks from "../components/HowItWorks"
import Benefits from "../components/Benefits"

function Home() {
  return (
    <main
      id="main-content" // <-- ALTERAÇÃO AQUI
      className="snap-y snap-mandatory snap-always overflow-y-scroll scroll-smooth h-screen bg-gray-50 dark:bg-gray-900"
    >
      <section className="snap-start">
        <Hero />
      </section>

      <section className="snap-start">
        <HowItWorks />
      </section>

      <section className="snap-start">
        <Benefits />
      </section>
    </main>
  )
}

export default Home