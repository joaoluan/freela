import Hero from "../components/Hero"
import HowItWorks from "../components/HowItWorks"
import Benefits from "../components/Benefits"

function Home() {
  return (
    <main className="snap-y snap-mandatory snap-always overflow-y-scroll scroll-smooth h-screen bg-gray-50 dark:bg-gray-900">
      <Hero />
      <HowItWorks />
      <Benefits />
    </main>
  )
}

export default Home
