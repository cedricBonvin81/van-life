import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export const useBlogAnimations = () => {
    // On enregistre le plugin ici aussi par sécurité
    gsap.registerPlugin(ScrollTrigger)

    const initHeroAnim = () => {
        const tl = gsap.timeline()
        tl.from(".hero-title", {
            opacity: 0,
            y: 50,
            duration: 1.2,
            ease: "power4.out"
        })
            .from(".hero-subtitle", {
                opacity: 0,
                y: 30,
                duration: 1,
                ease: "power2.out"
            }, "-=0.8")
    }

    const initScrollAnim = (el, direction = 'left') => {
        const xOffset = direction === 'left' ? -100 : 100

        gsap.from(el, {
            opacity: 0,
            x: xOffset,
            duration: 1.2,
            ease: "power2.out",
            scrollTrigger: {
                trigger: el,
                start: "top 90%", // Un peu plus bas pour laisser de la marge
                toggleActions: "play none none none",
                // On ajoute ceci pour éviter les sauts :
                invalidateOnRefresh: true,
                fastScrollEnd: true
            }
        })
    }

    const initOutroAnim = (selector) => {
        // On vérifie si l'élément existe avant de lancer
        if (!document.querySelector(selector)) return

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: selector,
                start: "top 85%",
                invalidateOnRefresh: true
            }
        })

        tl.from(`${selector} h2`, {
            x: -50, // Moins violent que 100 pour éviter les bugs de largeur
            opacity: 0,
            duration: 1,
            ease: "power2.out"
        })
            .from(`${selector} .outro-text`, {
                x: 50,
                opacity: 0,
                duration: 1,
                ease: "power2.out"
            }, "-=0.8")
            .from(`${selector} .btn-gsap`, {
                y: 30,
                opacity: 0,
                duration: 0.8,
                ease: "back.out(1.7)"
            }, "-=0.6")
    }

    return { initHeroAnim, initScrollAnim, initOutroAnim }
}