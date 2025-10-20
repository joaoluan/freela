import { Linkedin, Instagram, Twitter } from "lucide-react"

function Footer() {
  return (
    <footer className="relative bg-[#0e1111] text-gray-300 py-14 px-6 border-t border-gray-700/30 overflow-hidden">
      {/* 🔹 Linha de brilho com efeito de luz em movimento */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px] 
        bg-gradient-to-r from-transparent via-teal-400 to-transparent 
        animate-border-sweep"
      ></div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10 text-center sm:text-left">
        {/* Coluna 1 */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-3 tracking-tight">FreelaRS</h2>
          <p className="text-sm text-gray-400 leading-relaxed max-w-xs mx-auto sm:mx-0">
            Conectando talentos e oportunidades no setor gastronômico.
          </p>
        </div>

        {/* Coluna 2 */}
        <div>
          <h3 className="text-sm font-semibold text-teal-400 mb-4 uppercase tracking-wider">Links</h3>
          <ul className="space-y-2">
            <li><a href="#como-funciona" className="hover:text-white transition duration-300">Como Funciona</a></li>
            <li><a href="#restaurantes" className="hover:text-white transition duration-300">Para Restaurantes</a></li>
            <li><a href="#freelancers" className="hover:text-white transition duration-300">Para Freelancers</a></li>
          </ul>
        </div>

        {/* Coluna 3 */}
        <div>
          <h3 className="text-sm font-semibold text-teal-400 mb-4 uppercase tracking-wider">Redes</h3>
          <div className="flex justify-center sm:justify-start space-x-6">
            <a href="#" className="hover:text-teal-400 transition duration-300 flex items-center gap-2">
              <Linkedin size={18} /> <span className="hidden sm:inline">LinkedIn</span>
            </a>
            <a href="#" className="hover:text-teal-400 transition duration-300 flex items-center gap-2">
              <Instagram size={18} /> <span className="hidden sm:inline">Instagram</span>
            </a>
            <a href="#" className="hover:text-teal-400 transition duration-300 flex items-center gap-2">
              <Twitter size={18} /> <span className="hidden sm:inline">Twitter</span>
            </a>
          </div>
        </div>
      </div>

      {/* Linha final */}
      <div className="border-t border-gray-700/30 mt-10 pt-5 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} FreelaRS — Desenvolvido por:{' '}
  <a 
    href="https://www.joaomoura.dev.br" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    João Moura
  </a>.
</div>
    </footer>
  )
}

export default Footer
