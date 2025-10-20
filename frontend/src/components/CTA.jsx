import { useNavigate } from "react-router-dom"
import { useState } from "react"

function CTA() {
  const navigate = useNavigate()
  const [showRegisterMenu, setShowRegisterMenu] = useState(false)

  return (
    <section className="relative overflow-hidden py-20 md:py-28 text-center text-white">
      <div className="relative z-10 max-w-3xl mx-auto px-6">
        {/* Título */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Transforme sua rotina de trabalho. Comece agora.
        </h2>

        {/* Subtítulo */}
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 text-gray-200">
          Seja um restaurante em busca de agilidade ou um freelancer atrás de oportunidades reais, o{" "}
          <span className="font-semibold text-teal-400">FreelaFood</span> conecta você no momento certo.
        </p>

        {/* Botões principais */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 relative">
          {/* Botão com menu dinâmico */}
          <div className="relative inline-block">
            <button
              onClick={() => setShowRegisterMenu((s) => !s)}
              className="btn-shine bg-white text-teal-700 font-semibold px-8 py-3 
                rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              Criar Minha Conta
            </button>

            {/* Menu animado (fade + slide) */}
            <div
              className={`absolute left-1/2 -translate-x-1/2 mt-3 w-56 bg-gray-800 border border-gray-700 
                rounded-lg shadow-lg overflow-hidden transition-all duration-300 ease-in-out transform origin-top
                ${showRegisterMenu
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 -translate-y-2 scale-95 pointer-events-none"}`}
            >
              <button
                onClick={() => {
                  navigate("/register/restaurante")
                  setShowRegisterMenu(false)
                }}
                className="block w-full text-left px-5 py-3 text-gray-200 hover:bg-gray-700 transition"
              >
                Sou Restaurante
              </button>
              <button
                onClick={() => {
                  navigate("/register/freelancer")
                  setShowRegisterMenu(false)
                }}
                className="block w-full text-left px-5 py-3 text-gray-200 hover:bg-gray-700 transition"
              >
                Sou Freelancer
              </button>
            </div>
          </div>

          {/* Botão de login */}
          <button
            onClick={() => navigate("/login")}
            className="border border-white/40 text-white font-semibold px-8 py-3 rounded-lg 
              transition-all duration-300 hover:bg-white/10 hover:border-white/70"
          >
            Fazer Login
          </button>
        </div>
      </div>
    </section>
  )
}

export default CTA
