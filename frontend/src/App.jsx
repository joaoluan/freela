import AppRoutes from './routes/AppRoutes'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-800">
      {/* Cabeçalho fixo */}
      <Header />

      {/* Conteúdo principal (rotas) */}
      <main className="flex-grow">
        <AppRoutes />
      </main>

      {/* Rodapé fixo */}
      <Footer />
    </div>
  )
}

export default App
