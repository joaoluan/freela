import { useState, useEffect } from "react"
import { Link } from "react-scroll"

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen)
  const handleLinkClick = () => setMobileMenuOpen(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const linkProps = {
    smooth: true,
    duration: 600,
    offset: -80, // Corrige o deslocamento por causa do header fixo
    spy: true,
    activeClass: "active-link",
    className:
      "nav-link text-gray-700 dark:text-gray-200 text-lg md:text-base hover:text-teal-600 dark:hover:text-teal-400 transition",
    onClick: handleLinkClick,
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 dark:bg-gray-900/90 shadow-md backdrop-blur-md"
          : "bg-white/60 dark:bg-gray-900/70 backdrop-blur-md"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-semibold tracking-tight text-teal-600 dark:text-teal-400 cursor-pointer">
          FreelaFood
        </h1>

        {/* Navegação principal */}
        <nav
          className={`${
            mobileMenuOpen ? "flex" : "hidden"
          } md:flex flex-col md:flex-row items-center gap-6 absolute md:static top-16 left-0 right-0 bg-white/95 dark:bg-gray-900/95 md:bg-transparent p-6 md:p-0 shadow-lg md:shadow-none rounded-xl md:rounded-none backdrop-blur-md transition-all`}
        >
          <Link to="como-funciona" {...linkProps}>
            Como Funciona
          </Link>
          <Link to="restaurantes" {...linkProps}>
            Para Restaurantes
          </Link>
          <Link to="freelancers" {...linkProps}>
            Para Freelancers
          </Link>

          {/* Botões Mobile */}
          <div className="flex flex-col md:hidden gap-3 mt-4">
            <button className="border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition">
              Login
            </button>
            <button className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition">
              Cadastrar-se
            </button>
          </div>
        </nav>

        {/* Botões Desktop */}
        <div className="hidden md:flex gap-4">
          <button className="border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition">
            Login
          </button>
          <button className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition">
            Cadastrar-se
          </button>
        </div>

        {/* Botão Menu Mobile */}
        <button
          className="md:hidden flex flex-col gap-1 focus:outline-none"
          onClick={toggleMobileMenu}
        >
          <span
            className={`w-6 h-0.5 rounded transition-all ${
              scrolled ? "bg-gray-700 dark:bg-gray-200" : "bg-gray-800 dark:bg-gray-300"
            }`}
          ></span>
          <span
            className={`w-6 h-0.5 rounded transition-all ${
              scrolled ? "bg-gray-700 dark:bg-gray-200" : "bg-gray-800 dark:bg-gray-300"
            }`}
          ></span>
          <span
            className={`w-6 h-0.5 rounded transition-all ${
              scrolled ? "bg-gray-700 dark:bg-gray-200" : "bg-gray-800 dark:bg-gray-300"
            }`}
          ></span>
        </button>
      </div>
    </header>
  )
}

export default Header
