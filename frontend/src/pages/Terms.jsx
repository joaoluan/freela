import { useEffect, useState } from "react"
import ReactMarkdown from "react-markdown"
import { useNavigate } from "react-router-dom"

function Privacy() {
  const [content, setContent] = useState("")
  const navigate = useNavigate()

  useEffect(() => {
    fetch("/legal/privacidade.md")
      .then((res) => res.text())
      .then(setContent)
      .catch((err) => console.error("Erro ao carregar política:", err))
  }, [])

  return (
    <main
      className="
        min-h-screen 
        bg-gradient-to-br 
        from-gray-900 
        via-gray-800 
        to-teal-700 
        text-gray-300 
        pt-28 
        pb-16 
        px-6 
        flex 
        flex-col 
        items-center 
      "
    >
      <div className="max-w-4xl w-full leading-relaxed mb-12">
        <div className="prose prose-invert prose-headings:text-teal-400 prose-p:text-gray-300">
          <ReactMarkdown>{content}</ReactMarkdown>
        </div>
      </div>

      {/* 🔹 Botão Voltar ao Início */}
      <button
        onClick={() => navigate("/")}
        className="
          mt-4 
          px-6 
          py-2 
          rounded-full 
          bg-teal-500 
          hover:bg-teal-600 
          text-white 
          font-medium 
          shadow-md 
          transition-all 
          duration-300 
          hover:shadow-teal-500/30 
        "
      >
        ← Voltar ao Início
      </button>
    </main>
  )
}

export default Privacy
