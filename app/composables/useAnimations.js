// app/composables/useAnimations.js
import { useNuxtApp } from '#app'

export const useAnimations = () => {
    const { $gsap } = useNuxtApp()

    // Dans app/composables/useAnimations.js
    const home = {
        hero: () => {
            let tl = $gsap.timeline({ defaults: { ease: "expo.out", duration: 2 } })

            tl.add("start")
                .from(".hero-title", {
                    x: -30,
                    opacity: 0,
                    filter: "blur(10px)",
                }, "start")
                .from(".img-main", {
                    y: 60,
                    opacity: 0,
                    scale: 0.5,
                    duration: 2.5
                }, "start")
                .from(".img-new-left", {
                    y: 30,
                    opacity: 0,
                    scale: 0.5,
                }, "start+=0.2")
                .from(".img-detail-1", {
                    y: 100,
                    opacity: 0,
                    scale: 0.5,
                }, "start+=0.4")

            if (window.innerWidth >= 1280) {
                tl.from(".img-detail-2", {
                    y: -200,
                    opacity: 0,
                    scale: 0.5,
                }, "start+=0.3")
            }

            // Parallaxe
            $gsap.to(".img-detail-1", {
                y: window.innerWidth > 768 ? -100 : -20,
                scrollTrigger: {
                    trigger: ".img-main",
                    start: "top bottom",
                    scrub: 1.5
                }
            })
        },

        manifesteApercu: () => {

            // 1. Animation du TITRE (On utilise la classe directement)
            $gsap.fromTo(".manifeste-text",
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1.2,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: ".manifeste-text",
                        start: "top 85%",
                        toggleActions: "play none none none"
                    }
                }
            )

            // 2. Animation des autres éléments (badge, paragraphes, bouton)
            const reveals = $gsap.utils.toArray('.ManifesteReveal')
            reveals.forEach((el) => {
                $gsap.from(el, {
                    opacity: 0,
                    y: 30,
                    duration: 1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: el,
                        start: "top 90%",
                        toggleActions: "play none none none"
                    }
                })
            })
        },

        sections: (selector) => {
            const { $gsap } = useNuxtApp()

            // 1. Reveal à l'entrée (Apparition)
            const items = $gsap.utils.toArray(`${selector} [class^="anim-v"]`)

            items.forEach((item) => {
                $gsap.from(item, {
                    y: 40,
                    opacity: 0,
                    duration: 1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: item,
                        start: "top 90%",
                        toggleActions: "play none none none"
                    }
                })
            })

            // 2. Parallaxe (Uniquement Desktop)
            if (process.client && window.innerWidth >= 768) {
                $gsap.to(`${selector} .anim-v1`, { y: -40, scrollTrigger: { trigger: `${selector}`, scrub: 1 } })
                $gsap.to(`${selector} .anim-v2`, { y: 30, scrollTrigger: { trigger: `${selector}`, scrub: 1 } })
                $gsap.to(`${selector} .anim-v3`, { y: -50, scrollTrigger: { trigger: `${selector}`, scrub: 1 } })
                $gsap.to(`${selector} .anim-v4`, { y: -70, x: -10, scrollTrigger: { trigger: `${selector}`, scrub: 1.2 } })
            }
        },

        pourquoi: () => {

            // 1. Le bloc de gauche (Titre + Services)
            $gsap.from(".reveal-left", {
                x: -40,
                opacity: 0,
                duration: 1.2,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: ".reveal-left",
                    start: "top 85%",
                    toggleActions: "play none none none"
                }
            })

            // 2. La ligne verticale qui s'étire au scroll (Scrub)
            $gsap.from(".line-life", {
                scaleY: 0,
                transformOrigin: "top center",
                ease: "none",
                scrollTrigger: {
                    trigger: ".line-life",
                    start: "top 75%",
                    end: "bottom 80%",
                    scrub: true
                }
            })

            // 3. Les items de raison (Stagger ou individuel)
            const items = $gsap.utils.toArray(".reason-item")
            items.forEach((item) => {
                $gsap.from(item, {
                    y: 40,
                    opacity: 0,
                    duration: 1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: item,
                        start: "top 90%",
                        toggleActions: "play none none none"
                    }
                })
            })
        },

        galerie2: () => {

            // 1. Parallaxe de l'image de fond (Scrub)
            $gsap.to(".gallery-2 .divider-img-container", {
                yPercent: -20,
                ease: "none",
                scrollTrigger: {
                    trigger: ".gallery-2",
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true
                }
            })

            // 2. Reveal des textes centraux (Stagger)
            $gsap.from(".gallery-2 .reveal-up", {
                y: 60,
                opacity: 0,
                duration: 1.2,
                stagger: 0.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".gallery-2 .reveal-up",
                    start: "top 90%",
                    toggleActions: "play none none none"
                }
            })

            // 3. Éléments flottants sur les côtés
            $gsap.from(".gallery-2 .float-element", {
                x: -20,
                opacity: 0,
                duration: 2,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: ".gallery-2",
                    start: "top 60%",
                    toggleActions: "play none none none"
                }
            })
        },

        // Dans ton objet home = { ... }
        expertise: () => {
            const { $gsap } = useNuxtApp()

            // 1. Apparition du bloc texte par la gauche
            $gsap.from(".expertise-content", {
                x: -50,
                opacity: 0,
                duration: 1.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".expertise-content",
                    start: "top 85%",
                    toggleActions: "play none none none"
                }
            })

            // 2. Animation de la liste (un par un)
            $gsap.from(".tech-list-item", {
                y: 20,
                opacity: 0,
                stagger: 0.2,
                duration: 0.8,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: ".expertise-content",
                    start: "top 80%",
                }
            })

            // 3. Apparition de l'image par la droite + zoom progressif
            $gsap.from(".expertise-visual", {
                x: 50,
                opacity: 0,
                duration: 1.5,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".expertise-visual",
                    start: "top 85%",
                }
            })

            // 4. Petit effet sur le badge certification
            $gsap.from(".tech-badge", {
                scale: 0.8,
                opacity: 0,
                duration: 1,
                delay: 0.5,
                ease: "back.out(1.7)",
                scrollTrigger: {
                    trigger: ".expertise-visual",
                    start: "top 70%",
                }
            })
        },

        // Dans ton objet home = { ... }
        cta: () => {
            const { $gsap } = useNuxtApp()

            $gsap.from(".reveal-cta", {
                y: 30,
                opacity: 0,
                duration: 1.2,
                stagger: 0.2, // Délai entre chaque élément
                ease: "power2.out",
                scrollTrigger: {
                    trigger: ".action-section", // On déclenche quand la section entière arrive
                    start: "top 85%",
                    toggleActions: "play none none none"
                }
            })
        }
    }

    // --------------------------
    // PAGE CONTACT
    // --------------------------
    const contact = {
        heroForm: () => {
            const tl = $gsap.timeline({ defaults: { ease: 'power3.out', duration: 1.2 } })
            tl.from('.header-anim', { y: 100, opacity: 0, stagger: 0.1 })
                .from('.card-anim', { y: 40, opacity: 0 }, '-=1')
                .from('.form-item', { y: 20, opacity: 0, stagger: 0.1 }, '-=0.8')
        },
        faq: () => {
            $gsap.from('.faq-item', {
                scrollTrigger: {
                    trigger: '.faq-section',
                    start: 'top 85%',
                },
                y: 30,
                opacity: 0,
                stagger: 0.2,
                duration: 1,
                ease: 'power2.out',
            })
        }
    }

    // --------------------------
    // PAGE BLOG / INDEX
    // --------------------------
    const blog = {
        hero: () => {
            const tl = $gsap.timeline({ defaults: { ease: 'power4.out', duration: 2.5 } })
            // Animation du Hero
            tl.from('.hero-tag', { opacity: 0, y: -20 })
                .from('.hero-title-1', { x: -120, opacity: 0 }, '-=2')
                .from('.hero-title-2', { x: 120, opacity: 0 }, '-=2.5')
                .from('.hero-p', { opacity: 0, y: 20 }, '-=1.5')
        },
        chapters: (chaptersRefs) => {
            // IntersectionObserver pour les chapitres
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const el = entry.target
                        if (el.classList.contains('chapter-section')) {
                            const title = el.querySelector('.chapter-title')
                            const text = el.querySelector('.chapter-text')
                            $gsap.to(title, { opacity: 1, x: 0, duration: 2, ease: 'power2.out' })
                            $gsap.to(text, { opacity: 1, x: 0, duration: 2.2, delay: 0.3, ease: 'power2.out' })
                        } else {
                            $gsap.to(el, { opacity: 1, y: 0, duration: 2, ease: 'power2.out' })
                        }
                        observer.unobserve(el)
                    }
                })
            }, { threshold: 0.1 })

            // Initialisation des chapitres
            chaptersRefs.forEach(section => {
                const isRight = section.classList.contains('text-right')
                const title = section.querySelector('.chapter-title')
                const text = section.querySelector('.chapter-text')

                $gsap.set(title, { opacity: 0, x: isRight ? 60 : -60 })
                $gsap.set(text, { opacity: 0, x: isRight ? -60 : 60 })
                observer.observe(section)
            })
        },
        reveals: (revealRefs) => {
            // Animation des images et citations
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        $gsap.to(entry.target, { opacity: 1, y: 0, duration: 2, ease: 'power2.out' })
                        observer.unobserve(entry.target)
                    }
                })
            }, { threshold: 0.1 })

            revealRefs.forEach(el => {
                $gsap.set(el, { opacity: 0, y: 30 })
                observer.observe(el)
            })
        }
    }

    // --------------------------
    // PAGE BLOG / ARTICLE
    // --------------------------
    const blogPage = {
        // HERO : animation du titre et du sous-titre
        hero: () => {
            const tl = $gsap.timeline({ defaults: { ease: "power4.out", duration: 1.2 } })
            tl.from(".hero-title", { opacity: 0, y: 50 })
                .from(".hero-subtitle", { opacity: 0, y: 30 }, "-=0.8")
        },

        // SECTIONS : animation à l'apparition au scroll
        sections: (selector, direction = 'left') => {
            const xOffset = direction === 'left' ? -100 : 100

            $gsap.from(selector, {
                opacity: 0,
                x: xOffset,
                duration: 1.2,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: selector,
                    start: "top 90%",
                    toggleActions: "play none none none",
                    invalidateOnRefresh: true,
                    fastScrollEnd: true
                }
            })
        },

        // OUTRO : animation du call-to-action en fin de page
        outro: (selector) => {
            if (!document.querySelector(selector)) return

            const tl = $gsap.timeline({
                scrollTrigger: {
                    trigger: selector,
                    start: "top 85%",
                    invalidateOnRefresh: true
                }
            })

            tl.from(`${selector} h2`, { x: -50, opacity: 0, duration: 1, ease: "power2.out" })
                .from(`${selector} .outro-text`, { x: 50, opacity: 0, duration: 1, ease: "power2.out" }, "-=0.8")
                .from(`${selector} .btn-gsap`, { y: 30, opacity: 0, duration: 0.8, ease: "back.out(1.7)" }, "-=0.6")
        }
    }

    return { contact, blog, blogPage, home }
}