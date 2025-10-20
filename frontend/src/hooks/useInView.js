import { useState, useEffect, useRef, useMemo } from "react"

export function useInView(userOptions = {}) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  // ✅ Garante que o objeto options seja o mesmo entre renders
  const options = useMemo(() => ({ threshold: 0.2, ...userOptions }), [userOptions])

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true)
        // 🔹 Descomente abaixo se quiser que ele "desative" ao sair da tela
        // } else {
        //   setIsVisible(false)
      }
    }, options)

    const current = ref.current
    if (current) observer.observe(current)

    return () => {
      if (current) observer.unobserve(current)
      observer.disconnect()
    }
  }, [options])

  return [ref, isVisible]
}
