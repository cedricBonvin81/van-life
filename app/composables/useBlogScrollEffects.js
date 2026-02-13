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

    return { initHeroAnim }
}