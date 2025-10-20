import { useState, useEffect } from "react"
import { Link, scroller } from "react-scroll"
import { useNavigate, useLocation } from "react-router-dom"
import rsFlag from "../assets/rs-flag.svg" 

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [showRegisterMenu, setShowRegisterMenu] = useState(false)

  const navigate = useNavigate()
  const location = useLocation()

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen)
  const handleLinkClick = () => setMobileMenuOpen(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const goToSection = async (id) => {
    const scrollOptions = {
      containerId: "main-content",
      duration: 1500,
      smooth: "easeInOutCubic",
      offset: -100,
    }

    if (location.pathname !== "/") {
      navigate("/")
      await new Promise((resolve) => {
        const observer = new MutationObserver(() => {
          const container = document.getElementById("main-content")
          if (container) {
            observer.disconnect()
            resolve()
          }
        })
        observer.observe(document.body, { childList: true, subtree: true })
      })
      await new Promise((r) => setTimeout(r, 300))
    }

    scroller.scrollTo(id, scrollOptions)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-gray-900 shadow-md"
          : "bg-gray-900"
      }`}
    >
      {/* 🔹 Linha de brilho teal animada no topo */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-teal-400 to-transparent animate-border-sweep"></div>

      <div className="max-w-6xl mx-auto px-5 py-4 flex justify-between items-center relative">
        {/* Logo */}
        <h1
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-2xl font-semibold tracking-tight text-teal-400 cursor-pointer"
        >
          {/* Bandeira do RS */}
          <img
            src={rsFlag}
            alt="Bandeira do Rio Grande do Sul"
            className="w-8 h-5 rounded-sm shadow-md hover:scale-110 transition-transform duration-300"
          />

          {/* Nome da plataforma */}
          <span className="text-shine-rs">FreelaRS</span>
        </h1>

        <nav
          className={`${
            mobileMenuOpen ? "flex" : "hidden"
          } md:flex flex-col md:flex-row items-center gap-6 absolute md:static top-16 left-0 right-0 bg-gray-900/95 md:bg-transparent p-6 md:p-0 shadow-lg md:shadow-none rounded-xl md:rounded-none backdrop-blur-md transition-all`}
        >
          {/* Links principais */}
          {location.pathname === "/" ? (
            <>
              <Link
                to="como-funciona"
                containerId="main-content"
                smooth
                duration={600}
                offset={-120}
                spy
                activeClass="active-link"
                className="nav-link-animate text-gray-200 hover:text-teal-400 cursor-pointer"
                onClick={handleLinkClick}
              >
                Como Funciona
              </Link>

              <Link
                to="restaurantes"
                containerId="main-content"
                smooth
                duration={600}
                offset={-120}
                spy
                activeClass="active-link"
                className="nav-link-animate text-gray-200 hover:text-teal-400 cursor-pointer"
                onClick={handleLinkClick}
              >
                Para Restaurantes
              </Link>

              <Link
                to="freelancers"
                containerId="main-content"
                smooth
                duration={600}
                offset={-120}
                spy
                activeClass="active-link"
                className="nav-link-animate text-gray-200 hover:text-teal-400 cursor-pointer"
                onClick={handleLinkClick}
              >
                Para Freelancers
              </Link>
            </>
          ) : (
            <>
              <button
                onClick={() => goToSection("como-funciona")}
                className="nav-link-animate text-gray-200 hover:text-teal-400 cursor-pointer"
              >
                Como Funciona
              </button>
              <button
                onClick={() => goToSection("restaurantes")}
                className="nav-link-animate text-gray-200 hover:text-teal-400 cursor-pointer"
              >
                Para Restaurantes
              </button>
              <button
                onClick={() => goToSection("freelancers")}
                className="nav-link-animate text-gray-200 hover:text-teal-400 cursor-pointer"
              >
                Para Freelancers
              </button>
            </>
          )}

          {/* Login + Cadastrar-se */}
          <div className="hidden md:flex gap-4 items-center relative">
            <button
              onClick={() => navigate("/login")}
              className="border border-gray-600 text-gray-200 px-4 py-2 rounded-lg hover:bg-gray-800 transition"
            >
              Login
            </button>

            <div className="relative">
              <button
                onClick={() => setShowRegisterMenu((s) => !s)}
                className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition"
              >
                Cadastrar-se
              </button>

              {showRegisterMenu && (
                <div className="absolute right-0 mt-2 w-48 bg-gray-800 shadow-lg rounded-lg overflow-hidden border border-gray-700 z-50">
                  <button
                    onClick={() => {
                      navigate("/register/restaurante")
                      setShowRegisterMenu(false)
                    }}
                    className="block w-full text-left px-4 py-2 text-gray-200 hover:bg-gray-700"
                  >
                    Sou Restaurante
                  </button>
                  <button
                    onClick={() => {
                      navigate("/register/freelancer")
                      setShowRegisterMenu(false)
                    }}
                    className="block w-full text-left px-4 py-2 text-gray-200 hover:bg-gray-700"
                  >
                    Sou Freelancer
                  </button>
                </div>
              )}
            </div>
          </div>
        </nav>

        {/* Menu Mobile */}
        <button
          className="md:hidden flex flex-col gap-1 focus:outline-none"
          onClick={toggleMobileMenu}
        >
          <span className="w-6 h-0.5 bg-gray-200 rounded" />
          <span className="w-6 h-0.5 bg-gray-200 rounded" />
          <span className="w-6 h-0.5 bg-gray-200 rounded" />
        </button>
      </div>
    </header>
  )
}

export default Header
