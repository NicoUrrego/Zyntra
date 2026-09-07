import { useEffect } from 'react'
import './App.css'
import Header from './componentes/Header'
import Navbar from "./componentes/Navbar";
import Personalidad from './componentes/Personalidad'
import Logotipo from './componentes/Logotipo'
import Usos from './componentes/Usos'
import Colores from './componentes/Colores'
import Tipografia from './componentes/Tipografia'
import Fotografia from './componentes/Fotografia';
import Footer from './componentes/Footer';
function App() {

  useEffect(() => {
    let lastScrollY = window.scrollY
    let isScrollingUp = false

    const handleScroll = () => {
      isScrollingUp = window.scrollY < lastScrollY
      lastScrollY = window.scrollY
    }

    const revealElements = document.querySelectorAll(
      'section, header, article, footer, img'
    )

    revealElements.forEach((element) => {
      element.classList.add('scroll-reveal')
    })

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return

          if (isScrollingUp && entry.boundingClientRect.top < window.innerHeight / 2) {
            entry.target.classList.remove('is-visible')
            entry.target.classList.add('scroll-from-top')

            requestAnimationFrame(() => {
              entry.target.classList.add('is-visible')
            })
          } else {
            entry.target.classList.remove('scroll-from-top')
            entry.target.classList.add('is-visible')
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px' }
    )

    window.addEventListener('scroll', handleScroll, { passive: true })
    revealElements.forEach((element) => observer.observe(element))

    return () => {
      window.removeEventListener('scroll', handleScroll)
      observer.disconnect()
    }
  }, [])

  return (
    <>
      <Navbar />
      <Header />
      <Personalidad />
      <Logotipo />
      <Usos />
      <Colores />
      <Tipografia />
      <Fotografia  />
      <Footer />
    </>
  )
}

export default App
