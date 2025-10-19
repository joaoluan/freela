import { useInView } from "../hooks/useInView"

function Benefits() {
  const [ref, isVisible] = useInView({ threshold: 0.2 })

  const beneficiosRestaurantes = [
    {
      titulo: "Contrate com agilidade",
      descricao:
        "Publique vagas temporárias e encontre profissionais disponíveis rapidamente.",
    },
    {
      titulo: "Gerencie suas vagas",
      descricao:
        "Controle completo sobre candidaturas e contratações em um só lugar.",
    },
    {
      titulo: "Economize tempo",
      descricao:
        "Automatize o processo de contratação e foque no que importa: o seu negócio.",
    },
  ]

  const beneficiosFreelancers = [
    {
      titulo: "Oportunidades reais",
      descricao:
        "Acesse vagas confiáveis de restaurantes que valorizam o seu talento.",
    },
    {
      titulo: "Perfis profissionais",
      descricao:
        "Mostre suas habilidades e experiências de forma clara e moderna.",
    },
    {
      titulo: "Conexões diretas",
      descricao:
        "Fale diretamente com gestores e aumente suas chances de novos contratos.",
    },
  ]

  return (
    <section
      id="restaurantes"
      ref={ref}
      className={`snap-start fade-in ${isVisible ? "show" : ""} bg-gray-100 dark:bg-gray-900 h-screen flex flex-col justify-center px-6`}
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-14">
          Por que escolher nossa plataforma?
        </h2>

        <div className="grid md:grid-cols-2 gap-10 text-left">
          <div>
            <h3 className="text-2xl font-semibold text-teal-600 mb-6 text-center">
              Para Restaurantes
            </h3>
            <div className="space-y-6">
              {beneficiosRestaurantes.map((beneficio, index) => (
                <div
                  key={index}
                  style={{ transitionDelay: `${index * 0.2}s` }}
                  className={`fade-item card-hover ${
                    isVisible ? "show" : ""
                  } bg-white/80 dark:bg-gray-800/90 backdrop-blur-md p-6 rounded-xl shadow`}
                >
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">
                    {beneficio.titulo}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    {beneficio.descricao}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div id="freelancers">
            <h3 className="text-2xl font-semibold text-teal-600 mb-6 text-center">
              Para Freelancers
            </h3>
            <div className="space-y-6">
              {beneficiosFreelancers.map((beneficio, index) => (
                <div
                  key={index}
                  style={{ transitionDelay: `${0.4 + index * 0.2}s` }}
                  className={`fade-item card-hover ${
                    isVisible ? "show" : ""
                  } bg-white/80 dark:bg-gray-800/90 backdrop-blur-md p-6 rounded-xl shadow`}
                >
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">
                    {beneficio.titulo}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    {beneficio.descricao}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Benefits
