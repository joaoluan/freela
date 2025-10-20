import { useInView } from "../hooks/useInView"
import { useNavigate } from "react-router-dom"

function Hero() {
  const [ref, isVisible] = useInView({ threshold: 0.2 })
  const navigate = useNavigate()

  return (
    <section
      id="hero"
      ref={ref}
      className={`snap-start fade-in ${isVisible ? "show" : ""} 
        bg-gradient-to-br from-gray-900 via-gray-800 to-teal-700 text-white h-screen flex flex-col items-center justify-center text-center px-6`}
    >
      <div className="max-w-3xl">
        <h1 className="fade-item text-4xl md:text-5xl font-bold mb-6 leading-tight">
          Conecte restaurantes e freelancers com eficiência e estilo
        </h1>

        <p className="fade-item text-lg md:text-xl text-gray-300 mb-10">
          Uma plataforma moderna para oportunidades temporárias na gastronomia.
        </p>

        <div className="fade-item flex flex-col md:flex-row gap-4 justify-center">
          <button
            onClick={() => navigate("/register/restaurante")}
            className="btn-shine bg-white text-gray-900 font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-gray-100 transition"
          >
            Sou Restaurante
          </button>
          <button
            onClick={() => navigate("/register/freelancer")}
            className="btn-shine bg-teal-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-teal-700 transition"
          >
            Sou Freelancer
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero
