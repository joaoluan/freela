import { BrowserRouter } from "react-router-dom"
import AppRoutes from "./routes/AppRoutes"
import Header from "./components/Header"
import Footer from "./components/Footer"

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen bg-gray-50 text-gray-800">
        <Header />
        <main className="flex-grow">
          <AppRoutes />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
