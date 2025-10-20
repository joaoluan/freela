import { useInView } from "../hooks/useInView"

const beneficiosRestaurantes = [
  {
    titulo: "Resolva faltas em minutos",
    descricao:
      "Um colaborador faltou de última hora? Publique uma vaga em menos de 60 segundos e receba freelancers disponíveis imediatamente na sua região — sem complicações.",
  },
  {
    titulo: "Centralize tudo em um só lugar",
    descricao:
      "Chega de grupos de WhatsApp e planilhas confusas. Gerencie suas vagas, converse com candidatos e acompanhe todo o processo de contratação direto pelo seu painel.",
  },
  {
    titulo: "Economize tempo e reduza esforço",
    descricao:
      "Nosso sistema encontra os perfis ideais, valida a experiência e permite contratar com apenas um clique. Você foca no seu negócio — nós cuidamos do resto.",
  },
]

const beneficiosFreelancers = [
  {
    titulo: "Trabalhe com segurança e confiança",
    descricao:
      "Acesse apenas vagas de restaurantes verificados pela plataforma. Veja histórico de pagamentos, avaliações de outros profissionais e escolha onde quer trabalhar.",
  },
  {
    titulo: "Mostre seu talento ao mercado",
    descricao:
      "Crie um perfil profissional moderno com fotos, especialidades (cozinha, salão, bar) e avaliações reais. Seja encontrado por gestores que valorizam o seu trabalho.",
  },
  {
    titulo: "Negocie direto com quem contrata",
    descricao:
      "Envie sua candidatura com um toque e converse diretamente com o responsável pela vaga. Negocie valores, horários e aumente suas chances de ser recontratado.",
  },
]

// ==========================
// SEÇÃO: PARA RESTAURANTES
// ==========================
export function BenefitsRestaurantes() {
  const [ref, visible] = useInView({ threshold: 0.2 })

  return (
    <section
      ref={ref}
      id="restaurantes"
      className={`fade-in ${visible ? "show" : ""} 
      bg-gradient-to-br from-gray-900 via-gray-800 to-teal-700 text-white 
      min-h-screen flex flex-col justify-center px-6`}
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-14">
          Para Restaurantes
        </h2>

        <div className="grid md:grid-cols-3 gap-8 text-left">
          {beneficiosRestaurantes.map((b, i) => (
            <div
              key={i}
              style={{ transitionDelay: `${i * 0.2}s` }}
              className={`fade-item card-hover ${
                visible ? "show" : ""
              } bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg`}
            >
              <h4 className="text-lg font-semibold text-white mb-2">
                {b.titulo}
              </h4>
              <p className="text-gray-200">{b.descricao}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ==========================
// SEÇÃO: PARA FREELANCERS
// ==========================
export function BenefitsFreelancers() {
  const [ref, visible] = useInView({ threshold: 0.2 })

  return (
    <section
      ref={ref}
      id="freelancers"
      className={`fade-in ${visible ? "show" : ""} 
      bg-gradient-to-br from-gray-900 via-gray-800 to-teal-700 text-white 
      min-h-screen flex flex-col justify-center px-6`}
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-14">
          Para Freelancers
        </h2>

        <div className="grid md:grid-cols-3 gap-8 text-left">
          {beneficiosFreelancers.map((b, i) => (
            <div
              key={i}
              style={{ transitionDelay: `${i * 0.2}s` }}
              className={`fade-item card-hover ${
                visible ? "show" : ""
              } bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg`}
            >
              <h4 className="text-lg font-semibold text-white mb-2">
                {b.titulo}
              </h4>
              <p className="text-gray-200">{b.descricao}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
