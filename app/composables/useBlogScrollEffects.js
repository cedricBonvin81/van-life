import gsap from 'gsap'

export const useBlogAnimations = () => {

    // ANIMATION HERO
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
        }, "-=0.8") // Démarre un peu avant la fin du titre pour plus de fluidité
    }

    // ANIMATION SCROLL
    const initScrollAnim = (el, direction = 'left') => {
        // On définit le point de départ selon la direction
        const xOffset = direction === 'left' ? -100 : 100

        gsap.from(el, {
            opacity: 0,
            x: xOffset,
            duration: 1.2,
            ease: "power2.out",
            scrollTrigger: {
                trigger: el,      // L'élément qui déclenche l'anim
                start: "top 85%", // Déclenche quand le haut de l'élément atteint 85% de la hauteur de l'écran
                toggleActions: "play none none none" // Joue une seule fois
            }
        })
    }

    // ANIMATION OUTRO
   
    const initOutroAnim = (selector) => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: selector,
                start: "top 80%",
            }
        })

        tl.from(`${selector} h2`, {
            x: -100,
            opacity: 0,
            duration: 1,
            ease: "power2.out"
        })
            .from(`${selector} .outro-text`, {
                x: 100,
                opacity: 0,
                duration: 1,
                ease: "power2.out"
            }, "-=0.8")
            .from(`${selector} .btn-gsap`, {
                y: 50,
                opacity: 0,
                duration: 1,
                ease: "back.out(1.7)"
            }, "-=0.6")
    }

    return { initHeroAnim, initScrollAnim, initOutroAnim }
}