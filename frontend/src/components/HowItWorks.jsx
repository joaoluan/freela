import { useInView } from "../hooks/useInView"

function HowItWorks() {
  const [ref, isVisible] = useInView({ threshold: 0.2 })

  const steps = [
    { passo: 1, titulo: "Crie sua conta", descricao: "Cadastre-se gratuitamente." },
    { passo: 2, titulo: "Publique ou busque vagas", descricao: "Conecte talentos e oportunidades." },
    { passo: 3, titulo: "Conecte-se e trabalhe", descricao: "Combine os detalhes e comece." },
  ]

  return (
    <section
      id="como-funciona"
      ref={ref}
      className={`snap-start fade-in ${isVisible ? "show" : ""} bg-gray-50 dark:bg-gray-900 h-screen flex flex-col justify-center px-4`}
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-14">
          Como funciona
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {steps.map((step, index) => (
            <div
              key={step.passo}
              style={{ transitionDelay: `${index * 0.2}s` }}
              className={`fade-item card-hover ${
                isVisible ? "show" : ""
              } flex flex-col items-center text-center bg-white/80 dark:bg-gray-800/90 backdrop-blur-md p-8 rounded-2xl shadow-md`}
            >
              <div className="w-12 h-12 flex items-center justify-center bg-teal-600 text-white text-xl font-bold rounded-full mb-4">
                {step.passo}
              </div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">
                {step.titulo}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">{step.descricao}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
