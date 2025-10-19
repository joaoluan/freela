import { useNavigate } from "react-router-dom"
import { useInView } from "../hooks/useInView"

const beneficiosRestaurantes = [
  { titulo: "Resolva faltas em minutos", descricao: "Um colaborador faltou de última hora? Publique uma vaga em menos de 60 segundos e receba freelancers disponíveis imediatamente na sua região — sem complicações." },
  { titulo: "Centralize tudo em um só lugar", descricao: "Chega de grupos de WhatsApp e planilhas confusas. Gerencie suas vagas, converse com candidatos e acompanhe todo o processo de contratação direto pelo seu painel." },
  { titulo: "Economize tempo e reduza esforço", descricao: "Nosso sistema encontra os perfis ideais, valida a experiência e permite contratar com apenas um clique. Você foca no seu negócio — nós cuidamos do resto." },
]

const beneficiosFreelancers = [
  { titulo: "Trabalhe com segurança e confiança", descricao: "Acesse apenas vagas de restaurantes verificados pela plataforma. Veja histórico de pagamentos, avaliações de outros profissionais e escolha onde quer trabalhar." },
  { titulo: "Mostre seu talento ao mercado", descricao: "Crie um perfil profissional moderno com fotos, especialidades (cozinha, salão, bar) e avaliações reais. Seja encontrado por gestores que valorizam o seu trabalho." },
  { titulo: "Negocie direto com quem contrata", descricao: "Envie sua candidatura com um toque e converse diretamente com o responsável pela vaga. Negocie valores, horários e aumente suas chances de ser recontratado." },
]

export function BenefitsRestaurantes() {
  const [ref, visible] = useInView({ threshold: 0.2 })
  return (
    <div ref={ref} className={`fade-in ${visible ? "show" : ""} bg-gray-100 dark:bg-gray-900 min-h-screen flex flex-col justify-center px-6`}>
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-14">Para Restaurantes</h2>
        <div className="grid md:grid-cols-3 gap-8 text-left">
          {beneficiosRestaurantes.map((b, i) => (
            <div key={i} style={{ transitionDelay: `${i * 0.2}s` }} className={`fade-item card-hover ${visible ? "show" : ""} bg-white/80 dark:bg-gray-800/90 backdrop-blur-md p-6 rounded-xl shadow`}>
              <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">{b.titulo}</h4>
              <p className="text-gray-600 dark:text-gray-300">{b.descricao}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export function BenefitsFreelancers() {
  const [ref, visible] = useInView({ threshold: 0.2 })
  return (
    <div ref={ref} className={`fade-in ${visible ? "show" : ""} bg-gray-50 dark:bg-gray-950 min-h-screen flex flex-col justify-center px-6`}>
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-14">Para Freelancers</h2>
        <div className="grid md:grid-cols-3 gap-8 text-left">
          {beneficiosFreelancers.map((b, i) => (
            <div key={i} style={{ transitionDelay: `${i * 0.2}s` }} className={`fade-item card-hover ${visible ? "show" : ""} bg-white/80 dark:bg-gray-800/90 backdrop-blur-md p-6 rounded-xl shadow`}>
              <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">{b.titulo}</h4>
              <p className="text-gray-600 dark:text-gray-300">{b.descricao}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export function BenefitsCTA() {
  const navigate = useNavigate()
  return (
    <div className="relative overflow-hidden py-20 md:py-28 text-center bg-gray-900 bg-[radial-gradient(theme(colors.gray.700)_1px,_transparent_1px)] [background-size:24px_24px]">
      <div aria-hidden="true" className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_rgba(20,184,166,0.20)_0%,_transparent_60%)] opacity-80"></div>
      <div className="relative z-10 max-w-3xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Transforme sua rotina de trabalho. Comece agora.</h2>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 text-gray-300">
          Seja um restaurante em busca de agilidade ou um freelancer atrás de oportunidades reais, o <span className="font-semibold text-teal-400">FreelaFood</span> conecta você no momento certo.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button onClick={() => navigate("/register/freelancer")} className="btn-shine bg-white text-teal-700 font-semibold px-8 py-3 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            Criar Minha Conta
          </button>
          <button onClick={() => navigate("/login")} className="border border-gray-600 text-gray-200 font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:bg-white/10 hover:border-white/50">
            Fazer Login
          </button>
        </div>
      </div>
    </div>
  )
}
export default BenefitsCTA