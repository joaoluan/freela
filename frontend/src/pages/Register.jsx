import { useParams, useNavigate } from "react-router-dom"
import { useState } from "react"

function Register() {
  const { type } = useParams()
  const navigate = useNavigate()
  const isFreelancer = type === "freelancer"

  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    senha: "",
    ...(isFreelancer ? { especialidade: "" } : { cnpj: "" }),
  })

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value })
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Dados enviados:", formData)
  }

  return (
    <div
      className="
        min-h-screen 
        flex 
        items-center 
        justify-center 
        bg-gradient-to-br 
        from-gray-900 
        via-gray-800 
        to-teal-700 
        text-white 
        px-4
      "
    >
      <div
        className="
          w-full 
          max-w-md 
          bg-white/90 
          backdrop-blur-md 
          text-gray-800 
          rounded-2xl 
          shadow-2xl 
          p-8 
          animate-fadeIn
        "
      >
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-900">
          Cadastro de {isFreelancer ? "Freelancer" : "Restaurante"}
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="nome"
            placeholder="Nome completo"
            value={formData.nome}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-emerald-500 outline-none"
          />
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-emerald-500 outline-none"
          />
          <input
            type="password"
            name="senha"
            placeholder="Senha"
            value={formData.senha}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-emerald-500 outline-none"
          />

          {isFreelancer ? (
            <input
              type="text"
              name="especialidade"
              placeholder="Especialidade (Ex: Cozinheiro, Garçom...)"
              value={formData.especialidade}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-emerald-500 outline-none"
            />
          ) : (
            <input
              type="text"
              name="cnpj"
              placeholder="CNPJ do restaurante"
              value={formData.cnpj}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-emerald-500 outline-none"
            />
          )}

          <button
            type="submit"
            className="
              w-full 
              bg-emerald-600 
              text-white 
              py-2 
              rounded-lg 
              font-semibold 
              hover:bg-emerald-700 
              transition-all
              btn-shine
            "
          >
            Criar conta
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-6">
          Já tem uma conta?{" "}
          <button
            onClick={() => navigate("/login")}
            className="text-emerald-600 font-medium hover:underline"
          >
            Entrar
          </button>
        </p>

        <div className="mt-8 text-center">
          <button
            onClick={() => navigate("/")}
            className="text-gray-500 hover:text-gray-700 text-sm transition"
          >
            ← Voltar para a Home
          </button>
        </div>
      </div>
    </div>
  )
}

export default Register
