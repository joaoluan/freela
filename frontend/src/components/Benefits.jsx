import { useInView } from "../hooks/useInView"

function Benefits() {
  const [ref, isVisible] = useInView({ threshold: 0.2 })

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

  return (
    <>
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

      {/* --- Seção CTA --- */}
<section 
  className="
    snap-start 
    relative           {/* Necessário para o 'glow' e o 'z-index' */}
    overflow-hidden    {/* Garante que o 'glow' não vaze */}
    py-20 md:py-28     {/* Mais preenchimento vertical */}
    text-center 
    bg-gray-900        {/* 1. Cor base (Combina com seu Footer) */}
    
    {/* 2. Padrão de grade sutil (CSS moderno) */}
    bg-[radial-gradient(theme(colors.gray.700)_1px,_transparent_1px)] 
    [background-size:24px_24px]
  "
>
  {/* 3. Efeito "Glow" (O que "salta aos olhos") */}
  {/* Este é um gradiente radial da sua cor primária, posicionado atrás do conteúdo */}
  <div 
    aria-hidden="true" 
    className="
      absolute 
      inset-0 
      z-0 
      bg-[radial-gradient(ellipse_at_center,_rgba(20,184,166,0.20)_0%,_transparent_60%)]
      opacity-80
    "
  ></div>

  {/* Conteúdo do CTA (Precisa de z-index para ficar acima do 'glow') */}
  <div className="relative z-10 max-w-3xl mx-auto px-6">
    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
      Transforme sua rotina de trabalho. Comece agora.
    </h2>
    <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 text-gray-300">
      Seja um restaurante em busca de agilidade ou um freelancer 
      atrás de oportunidades reais, o <span className="font-semibold text-teal-400">FreelaFood</span> conecta 
      você no momento certo.
    </p>
    
    <div className="flex flex-col sm:flex-row justify-center gap-4">
      {/* Botão Primário: Mais destaque e usando seu efeito 'btn-shine' */}
      <a
        href="/cadastro"
        className="
          btn-shine  {/* Sua classe personalizada de index.css */}
          bg-white 
          text-teal-700 
          font-semibold 
          px-8 py-3 
          rounded-lg 
          shadow-lg 
          transform 
          transition-all 
          duration-300 
          hover:scale-105 
          hover:shadow-2xl
        "
      >
        Criar Minha Conta
      </a>
      
      {/* Botão Secundário: Estilo "ghost" mais sutil */}
      <a
        href="/login"
        className="
          border 
          border-gray-600 
          text-gray-200 
          font-semibold 
          px-8 py-3 
          rounded-lg 
          transition-all
          duration-300
          hover:bg-white/10
          hover:border-white/50
        "
      >
        Fazer Login
      </a>
    </div>
  </div>
</section>

{function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center sm:text-left">
        {/* Coluna 1 */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-3">FreelaAPP</h2>
          <p className="text-sm text-gray-400 leading-relaxed">
            Conectando talentos e oportunidades no setor gastronômico.
          </p>
        </div>

        {/* Coluna 2 */}
        <div>
          <h3 className="text-sm font-semibold text-white mb-3 uppercase">Links</h3>
          <ul className="space-y-2">
            <li><a href="#como-funciona" className="hover:text-white transition">Como Funciona</a></li>
            <li><a href="#beneficios" className="hover:text-white transition">Benefícios</a></li>
            <li><a href="#contato" className="hover:text-white transition">Contato</a></li>
          </ul>
        </div>

        {/* Coluna 3 */}
        <div>
          <h3 className="text-sm font-semibold text-white mb-3 uppercase">Redes</h3>
          <div className="flex justify-center sm:justify-start space-x-4">
            <a href="#" className="hover:text-blue-400 transition">LinkedIn</a>
            <a href="#" className="hover:text-pink-400 transition">Instagram</a>
            <a href="#" className="hover:text-sky-400 transition">Twitter</a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} FreelaAPP — Todos os direitos reservados.
      </div>
    </footer>
  )
}



/* O seu Footer viria aqui, logo abaixo, sem margem entre eles */
}
    </>
  )
}

export default Benefits
