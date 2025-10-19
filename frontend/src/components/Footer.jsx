function Footer() {
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

export default Footer
