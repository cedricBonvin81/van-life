// composables/useBlogScrollEffects.js
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export const useBlogScrollEffects = () => {
    let ctx;

    const initBlogAnimations = (sections) => {
        if (!process.client) return;
        gsap.registerPlugin(ScrollTrigger);

        // On nettoie d'abord au cas où
        if (ctx) ctx.revert();

        ctx = gsap.context(() => {
            console.log("Démarrage des animations pour", sections.length, "sections");

            sections.forEach((section, index) => {
                const img = `.${section.imageClass}`;
                const txt = `.${section.textClass}`;

                // On vérifie si l'élément existe vraiment dans le DOM
                if (document.querySelector(img)) {
                    console.log(`Élément trouvé : ${img}`);
                    gsap.from(img, {
                        opacity: 0,
                        x: section.reverse ? 100 : -100,
                        duration: 1,
                        scrollTrigger: {
                            trigger: img,
                            start: "top 85%",
                            toggleActions: "play none none none",
                            // markers: true // Décommente pour débugger visuellement
                        }
                    });
                } else {
                    console.warn(`Attention : ${img} introuvable dans le DOM`);
                }

                if (document.querySelector(txt)) {
                    gsap.from(txt, {
                        opacity: 0,
                        x: section.reverse ? -100 : 100,
                        duration: 1,
                        delay: 0.2,
                        scrollTrigger: {
                            trigger: txt,
                            start: "top 85%",
                            toggleActions: "play none none none"
                        }
                    });
                }
            });
        });
    };

    const cleanupBlogAnimations = () => {
        if (ctx) ctx.revert();
    };

    return { initBlogAnimations, cleanupBlogAnimations };
}