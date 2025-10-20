import { Linkedin, Instagram, Twitter } from "lucide-react"
import { FaYoutube, FaTiktok, FaEnvelope, FaWhatsapp } from "react-icons/fa"

function Footer() {
  return (
    <footer className="relative bg-[#0e1111] text-gray-300 py-14 px-6 border-t border-gray-700/30 overflow-hidden">
      {/* 🔹 Linha de brilho animada */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px] 
        bg-gradient-to-r from-transparent via-teal-400 to-transparent 
        animate-border-sweep"
      ></div>

      {/* 🔹 Grid principal com 4 colunas */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-4 gap-10 text-center sm:text-left">
        {/* Coluna 1 - Descrição */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-3 tracking-tight">FreelaRS</h2>
          <p className="text-sm text-gray-400 leading-relaxed max-w-xs mx-auto sm:mx-0">
            Conectando talentos e oportunidades no setor gastronômico.
          </p>
        </div>

        {/* Coluna 2 - Links */}
        <div>
          <h3 className="text-sm font-semibold text-teal-400 mb-4 uppercase tracking-wider">Links</h3>
          <ul className="space-y-2">
            <li><a href="#como-funciona" className="hover:text-white transition duration-300">Como Funciona</a></li>
            <li><a href="#restaurantes" className="hover:text-white transition duration-300">Para Restaurantes</a></li>
            <li><a href="#freelancers" className="hover:text-white transition duration-300">Para Freelancers</a></li>
          </ul>
        </div>

        {/* Coluna 3 - Redes */}
        <div>
          <h3 className="text-sm font-semibold text-teal-400 mb-4 uppercase tracking-wider">Redes</h3>
          <div className="flex justify-center sm:justify-start flex-wrap gap-4">
            <a href="https://linkedin.com/in/joaomouradev" target="_blank" rel="noopener noreferrer"
               className="hover:text-teal-400 transition duration-300 flex items-center gap-2">
              <Linkedin size={18} /> <span className="hidden sm:inline">LinkedIn</span>
            </a>

            <a href="https://instagram.com/freela.rs" target="_blank" rel="noopener noreferrer"
               className="hover:text-teal-400 transition duration-300 flex items-center gap-2">
              <Instagram size={18} /> <span className="hidden sm:inline">Instagram</span>
            </a>

            <a href="https://x.com/Freela_rs?t=jiqPXWs5onoFtpvACjvMlQ&s=08" target="_blank" rel="noopener noreferrer"
               className="hover:text-teal-400 transition duration-300 flex items-center gap-2">
              <Twitter size={18} /> <span className="hidden sm:inline">Twitter</span>
            </a>

            <a href="https://youtube.com/@freela-rs?si=ebT-QL4l2tWGeCMp" target="_blank" rel="noopener noreferrer"
               className="hover:text-teal-400 transition duration-300 flex items-center gap-2">
              <FaYoutube size={18} /> <span className="hidden sm:inline">YouTube</span>
            </a>

            <a href="https://www.tiktok.com/@freelars5?_t=ZM-90hHX8EkkPL&_r=1" target="_blank" rel="noopener noreferrer"
               className="hover:text-teal-400 transition duration-300 flex items-center gap-2">
              <FaTiktok size={18} /> <span className="hidden sm:inline">TikTok</span>
            </a>
          </div>
        </div>

        {/* Coluna 4 - Contato */}
        <div>
          <h3 className="text-sm font-semibold text-teal-400 mb-4 uppercase tracking-wider">Contato</h3>
          <ul className="space-y-3">
            <li className="flex justify-center sm:justify-start items-center gap-2">
              <FaEnvelope className="text-teal-400" />
              <a
                href="mailto:contato@freelars.com.br"
                className="hover:text-white transition duration-300"
              >
                contato@freelars.com.br
              </a>
            </li>
            <li className="flex justify-center sm:justify-start items-center gap-2">
              <FaWhatsapp className="text-teal-400" />
              <a
                href="https://wa.me/5551984802399?text=Ol%C3%A1%2C%20quero%20saber%20mais%20sobre%20o%20FreelaRS."
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition duration-300"
              >
                (51) 98571-1759
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Linha final */}
      <div className="border-t border-gray-700/40 mt-10 pt-5 text-center text-sm text-gray-400 flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4 flex-wrap">
        <div>
          © {new Date().getFullYear()} <span className="font-semibold text-gray-300">FreelaRS</span>
          <span className="mx-1 text-gray-500">|</span>
          <span className="mx-1 text-gray-500">Desenvolvido por:</span>
          <a 
            href="https://www.joaomoura.dev.br"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-200 transition-colors duration-300"
          >
            João Moura
          </a>
        </div>

        {/* 🔹 Links legais */}
        <div className="flex items-center gap-3 text-gray-500 text-xs sm:text-sm">
          <a href="/termos" className="hover:text-teal-400 transition-colors duration-300">
            Termos de Uso
          </a>
          <span className="text-gray-600">|</span>
          <a href="/privacidade" className="hover:text-teal-400 transition-colors duration-300">
            Política de Privacidade
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
