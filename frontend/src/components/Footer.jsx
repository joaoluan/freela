import { Linkedin, Instagram, Twitter } from "lucide-react"

function Footer() {
  return (
    <footer className="relative text-gray-300 py-14 px-6 bg-gradient-to-br from-gray-900 via-gray-800 to-teal-700">
      {/* Brilho no topo */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10 text-center sm:text-left relative z-10">
        {/* Coluna 1 */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-3 tracking-tight">
            FreelaAPP
          </h2>
          <p className="text-sm text-gray-300 leading-relaxed max-w-xs mx-auto sm:mx-0">
            Conectando talentos e oportunidades no setor gastronômico.
          </p>
        </div>

        {/* Coluna 2 */}
        <div>
          <h3 className="text-sm font-semibold text-teal-400 mb-4 uppercase tracking-wider">
            Links
          </h3>
          <ul className="space-y-2">
            <li>
              <a href="#como-funciona" className="text-gray-300 hover:text-white transition duration-300">
                Como Funciona
              </a>
            </li>
            <li>
              <a href="#restaurantes" className="text-gray-300 hover:text-white transition duration-300">
                Para Restaurantes
              </a>
            </li>
            <li>
              <a href="#freelancers" className="text-gray-300 hover:text-white transition duration-300">
                Para Freelancers
              </a>
            </li>
          </ul>
        </div>

        {/* Coluna 3 */}
        <div>
          <h3 className="text-sm font-semibold text-teal-400 mb-4 uppercase tracking-wider">
            Redes
          </h3>
          <div className="flex justify-center sm:justify-start space-x-6">
            <a
              href="#"
              aria-label="LinkedIn"
              className="text-gray-300 hover:text-teal-400 transition duration-300 flex items-center gap-2"
            >
              <Linkedin size={18} />
              <span className="hidden sm:inline">LinkedIn</span>
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="text-gray-300 hover:text-teal-400 transition duration-300 flex items-center gap-2"
            >
              <Instagram size={18} />
              <span className="hidden sm:inline">Instagram</span>
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="text-gray-300 hover:text-teal-400 transition duration-300 flex items-center gap-2"
            >
              <Twitter size={18} />
              <span className="hidden sm:inline">Twitter</span>
            </a>
          </div>
        </div>
      </div>

      {/* Linha final */}
      <div className="border-t border-white/10 mt-10 pt-5 text-center text-sm text-gray-400 relative z-10">
        © {new Date().getFullYear()} FreelaAPP — Todos os direitos reservados.
      </div>
    </footer>
  )
}

export default Footer
