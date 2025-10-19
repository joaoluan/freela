import { useState, useEffect } from "react"
import { Link, scroller } from "react-scroll"
import { useNavigate, useLocation } from "react-router-dom"

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

  // rola até a seção do container #main-content, mesmo vindo de outra rota
  const goToSection = (id) => {
    if (location.pathname !== "/") {
      navigate("/")
      setTimeout(() => {
        scroller.scrollTo(id, {
          containerId: "main-content",
          duration: 600,
          smooth: true,
          offset: -120,
        })
      }, 400)
    } else {
      scroller.scrollTo(id, {
        containerId: "main-content",
        duration: 600,
        smooth: true,
        offset: -120,
      })
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 dark:bg-gray-900/90 shadow-md backdrop-blur-md"
          : "bg-white/60 dark:bg-gray-900/70 backdrop-blur-md"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 py-4 flex justify-between items-center relative">
        {/* Logo */}
        <h1
          onClick={() => navigate("/")}
          className="text-2xl font-semibold tracking-tight text-teal-600 dark:text-teal-400 cursor-pointer"
        >
          FreelaFood
        </h1>

        <nav
          className={`${
            mobileMenuOpen ? "flex" : "hidden"
          } md:flex flex-col md:flex-row items-center gap-6 absolute md:static top-16 left-0 right-0 bg-white/95 dark:bg-gray-900/95 md:bg-transparent p-6 md:p-0 shadow-lg md:shadow-none rounded-xl md:rounded-none backdrop-blur-md transition-all`}
        >
          {/* Como Funciona */}
          {location.pathname === "/" ? (
            <Link
              to="como-funciona"
              containerId="main-content"
              smooth
              duration={600}
              offset={-120}
              spy
              activeClass="active-link"
              className="nav-link text-gray-700 dark:text-gray-200 text-lg md:text-base hover:text-teal-600 dark:hover:text-teal-400 transition cursor-pointer"
              onClick={handleLinkClick}
            >
              Como Funciona
            </Link>
          ) : (
            <button
              onClick={() => goToSection("como-funciona")}
              className="text-gray-700 dark:text-gray-200 text-lg md:text-base hover:text-teal-600 dark:hover:text-teal-400 transition cursor-pointer"
            >
              Como Funciona
            </button>
          )}

          {/* Para Restaurantes */}
          {location.pathname === "/" ? (
            <Link
              to="restaurantes"
              containerId="main-content"
              smooth
              duration={600}
              offset={-120}
              spy
              activeClass="active-link"
              className="nav-link text-gray-700 dark:text-gray-200 text-lg md:text-base hover:text-teal-600 dark:hover:text-teal-400 transition cursor-pointer"
              onClick={handleLinkClick}
            >
              Para Restaurantes
            </Link>
          ) : (
            <button
              onClick={() => goToSection("restaurantes")}
              className="text-gray-700 dark:text-gray-200 text-lg md:text-base hover:text-teal-600 dark:hover:text-teal-400 transition cursor-pointer"
            >
              Para Restaurantes
            </button>
          )}

          {/* Para Freelancers */}
          {location.pathname === "/" ? (
            <Link
              to="freelancers"
              containerId="main-content"
              smooth
              duration={600}
              offset={-120}
              spy
              activeClass="active-link"
              className="nav-link text-gray-700 dark:text-gray-200 text-lg md:text-base hover:text-teal-600 dark:hover:text-teal-400 transition cursor-pointer"
              onClick={handleLinkClick}
            >
              Para Freelancers
            </Link>
          ) : (
            <button
              onClick={() => goToSection("freelancers")}
              className="text-gray-700 dark:text-gray-200 text-lg md:text-base hover:text-teal-600 dark:hover:text-teal-400 transition cursor-pointer"
            >
              Para Freelancers
            </button>
          )}

          {/* Desktop: Login + Cadastrar-se */}
          <div className="hidden md:flex gap-4 items-center relative">
            <button
              onClick={() => navigate("/login")}
              className="border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
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
                <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 z-50">
                  <button
                    onClick={() => {
                      navigate("/register/restaurante")
                      setShowRegisterMenu(false)
                    }}
                    className="block w-full text-left px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    Sou Restaurante
                  </button>
                  <button
                    onClick={() => {
                      navigate("/register/freelancer")
                      setShowRegisterMenu(false)
                    }}
                    className="block w-full text-left px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
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
          <span className={`w-6 h-0.5 rounded transition-all ${scrolled ? "bg-gray-700 dark:bg-gray-200" : "bg-gray-800 dark:bg-gray-300"}`} />
          <span className={`w-6 h-0.5 rounded transition-all ${scrolled ? "bg-gray-700 dark:bg-gray-200" : "bg-gray-800 dark:bg-gray-300"}`} />
          <span className={`w-6 h-0.5 rounded transition-all ${scrolled ? "bg-gray-700 dark:bg-gray-200" : "bg-gray-800 dark:bg-gray-300"}`} />
        </button>
      </div>
    </header>
  )
}

export default Header
