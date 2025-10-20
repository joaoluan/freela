import { useNavigate } from "react-router-dom"

function CTA() {
  const navigate = useNavigate()

  return (
    <section
      className="relative overflow-hidden py-20 md:py-28 text-center text-white"
    >
      {/* Removido o fundo do CTA (agora ele herda o gradiente do pai) */}

      <div className="relative z-10 max-w-3xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Transforme sua rotina de trabalho. Comece agora.
        </h2>

        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 text-gray-200">
          Seja um restaurante em busca de agilidade ou um freelancer atrás de oportunidades reais, o{" "}
          <span className="font-semibold text-teal-400">FreelaFood</span> conecta você no momento certo.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={() => navigate("/register/freelancer")}
            className="btn-shine bg-white text-teal-700 font-semibold px-8 py-3 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            Criar Minha Conta
          </button>

          <button
            onClick={() => navigate("/login")}
            className="border border-white/40 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:bg-white/10 hover:border-white/70"
          >
            Fazer Login
          </button>
        </div>
      </div>
    </section>
  )
}

export default CTA
