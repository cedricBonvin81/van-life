<template>
  <article class="bg-[#FDFCFB] text-[#0f172a] overflow-x-hidden selection:bg-primary selection:text-white">
    <!-- HERO : L'IMPACT TOTAL -->
    <header class="relative h-screen w-full flex items-center justify-center overflow-hidden bg-slate-900">
      <NuxtImg src="/images/manifeste_hero.jpg"
        class="absolute inset-0 w-full h-full object-cover opacity-70 scale-105 animate-slow-zoom"
        alt="un homme debout sur le van et regarde l'horizon" fetchpriority="high" format="webp" quality="80" />

      <div class="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/70"></div>

      <div class="relative z-10 text-center px-6">
        <span class="hero-tag text-primary font-black uppercase tracking-[0.4em] text-xs mb-8 block drop-shadow-md">Le
          Manifeste du Départ</span>
        <h1
          class="text-6xl md:text-[120px] font-black text-white leading-[0.8] uppercase italic tracking-tighter drop-shadow-2xl">
          <span class="hero-title-1 block">L'Art de</span>
          <span class="hero-title-2 block text-primary italic">S'égarer</span>
        </h1>
        <p class="hero-p mt-12 text-white text-xl font-light italic max-w-2xl mx-auto leading-relaxed drop-shadow-lg">
          « Voyager, c'est naître et mourir à chaque instant. »
        </p>
      </div>
    </header>

    <!-- CORPS DE L'ARTICLE -->
    <div class="max-w-[850px] mx-auto px-6 py-24 text-justify">

      <!-- CHAPITRE 1 : LA RUPTURE -->
      <section :ref="setChapterRef" class="chapter-section mb-32">
        <h2 class="chapter-title text-4xl font-black uppercase italic mb-12 tracking-tight">
          1. La fin des <span class="text-primary">murs</span>
        </h2>
        <div class="chapter-text text-xl leading-relaxed text-slate-700 space-y-8 font-light">
          <p>
            <span class="text-7xl font-black text-primary float-left mr-4 leading-[0.8]">N</span>ous passons notre
            existence à mesurer le confort au nombre de mètres carrés. Mais qui a décrété qu'une vie réussie devait être
            sédentaire ? La van-life est une <strong>insurrection douce</strong> contre le béton. C'est réaliser que
            votre salon ne s'arrête pas au pas de votre porte, mais qu'il s'étend jusqu'aux crêtes du Valais et au-delà
            des plaines infinies.
          </p>
          <p>
            Le stress des notifications, la routine des quatre murs, le besoin de performance constante... C'est une
            réponse viscérale à une société qui sature. C'est l'envie de reprendre les commandes de sa propre vie, de
            décider chaque matin de la vue que l'on aura au petit-déjeuner. Imaginez ce moment précis, à 2300 mètres
            d'altitude, où vous réalisez que le silence n'est pas une absence de bruit, mais une présence.
          </p>
        </div>
      </section>

      <!-- IMAGE 1 : L'INTÉRIEUR -->
      <div :ref="setRevealRef"
        class="image-reveal w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] my-32 h-[70vh] overflow-hidden">
        <NuxtImg src="/images/manifeste_1.jpg" format="webp" loading="lazy"
          class="w-full h-full object-cover transition-transform duration-[3000ms] hover:scale-110"
          alt="Intérieur Van avec vu sur la mer" />
        <div class="absolute inset-0 bg-black/10"></div>
      </div>

      <!-- CHAPITRE 2 : LE CAFÉ -->
      <section :ref="setChapterRef" class="chapter-section mb-32 text-right">
        <h2 class="chapter-title text-4xl font-black uppercase italic mb-12 tracking-tight">
          2. La liturgie du <span class="text-primary">matin</span>
        </h2>
        <div class="chapter-text text-xl leading-relaxed text-slate-700 space-y-8 font-light">
          <p>
            Le moment le plus intense de la journée n'est pas le trajet, c'est l'immobilité du réveil. Faire coulisser
            la porte latérale alors que le givre brille encore sur l'herbe. Sentir l'air froid piquer vos joues alors
            que vous lancez le réchaud. Le bruit de l'eau qui bout, l'odeur du café qui envahit l'habitacle de bois...
          </p>
          <p>
            À cet instant, vous n'êtes pas un employé ou un citoyen ; vous êtes simplement un <strong>être humain face
              au monde</strong>. Ce premier café, bu assis sur le marche-pied face au brouillard qui se lève sur la
            vallée, vaut toutes les méditations du monde. C'est une reconquête du temps. Personne ne vous attend, hormis
            la route.
          </p>
        </div>
      </section>

      <!-- CHAPITRE 3 : L'HORIZON -->
      <section :ref="setChapterRef" class="chapter-section mb-32">
        <h2 class="chapter-title text-4xl font-black uppercase italic mb-12 tracking-tight">
          3. L'ivresse du <span class="text-primary">No-Planning</span>
        </h2>
        <div class="chapter-text text-xl leading-relaxed text-slate-700 space-y-8 font-light italic">
          <p>
            Pourquoi ce mode de vie fascine-t-il autant aujourd'hui ? Parce qu'il efface les étiquettes. On ne réserve
            pas, on ne planifie plus, on <strong>ressent</strong>. On suit la météo, on suit son instinct. C'est
            retrouver une forme de sauvagerie nécessaire, un retour à l'état de nomade que nous avons été pendant des
            millénaires.
          </p>
          <p>
            On ne conduit pas un van, on dérive avec lui. On réapprend la patience. La patience d'attendre que la pluie
            cesse pour sortir les chaises de camping. Et paradoxalement, dans cette restriction d'espace, on découvre
            une <strong>expansion infinie de l'esprit</strong>. On réalise que l'on n'a pas besoin de posséder le monde,
            il suffit de savoir l'habiter.
          </p>
        </div>
      </section>

      <!-- IMAGE 2 : LA ROUTE -->
      <div :ref="setRevealRef"
        class="image-reveal w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] my-32 h-[70vh] overflow-hidden">
        <NuxtImg src="/images/manifeste_2.jpg" format="webp" loading="lazy"
          class="w-full h-full object-cover transition-transform duration-[3000ms] hover:scale-110"
          alt="une route forestière avec des arbres sur les cotés." />
        <div class="absolute inset-0 bg-black/10"></div>
      </div>

      <!-- Citation -->
     
      <div class="relative my-24 md:my-48 max-w-[850px] mx-auto px-6 md:px-0">

        <!-- GUILLEMET OUVRANT : Responsive -->
        <span class="absolute z-20 text-primary pointer-events-none select-none font-serif
               top-[-30px] left-[-5px] text-[8rem] 
               md:top-[-60px] md:left-[-30px] md:text-[15rem] leading-none"
          style="filter: drop-shadow(0 10px 15px rgba(0,0,0,0.3));">
          “
        </span>

        <!-- LE BLOC : Dégradé radial & Coins arrondis -->
        <div ref="reveals"
          class="relative z-10 p-10 md:p-24 rounded-[2.5rem] md:rounded-[4rem] text-white text-center shadow-2xl border border-white/5 overflow-hidden"
          style="background: radial-gradient(circle at center, #2e3c51 0%, #111827 100%);">

          <!-- Lueur interne -->
          <div class="absolute inset-0 bg-primary/5"></div>

          <p class="text-xl md:text-4xl font-light italic leading-relaxed relative z-10 text-white px-2 md:px-12">
            "Le van est la seule machine à remonter le temps... Il nous ramène à une époque où le monde était vaste,
            mystérieux et où chaque virage était une promesse."
          </p>
        </div>

        <!-- GUILLEMET FERMANT : Responsive -->
        <span class="absolute z-20 text-primary pointer-events-none select-none font-serif
               bottom-[-40px] right-[-5px] text-[8rem] 
               md:bottom-[-80px] md:right-[-30px] md:text-[15rem] leading-none"
          style="filter: drop-shadow(0 10px 15px rgba(0,0,0,0.3));">
          ”
        </span>
      </div>


      <!-- CHAPITRE 4 : LA NUIT -->
      <section :ref="setChapterRef" class="chapter-section mb-32">
        <h2 class="chapter-title text-4xl font-black uppercase italic mb-12 tracking-tight">
          4. Dormir sous les <span class="text-primary">géants</span>
        </h2>
        <div class="chapter-text text-xl leading-relaxed text-slate-700 space-y-8 font-light">
          <p>
            Dormir en van, c'est accepter de retrouver sa place dans la chaîne du vivant. C'est écouter le vent secouer
            la carrosserie comme une caresse brutale. C'est voir la Voie Lactée à travers le lanterneau, si proche qu'on
            croirait pouvoir la toucher du doigt.
          </p>
          <p>
            On redécouvre que l'obscurité n'est pas effrayante, elle est protectrice. Dans votre cocon isolé, chauffé
            par la chaleur du bois et de la laine, vous êtes au cœur de l'élément. Cette <strong>intelligence
              sensorielle</strong>, nous l'avions perdue dans nos appartements climatisés. Le van nous la rend.
          </p>
          <p>
            Chaque craquement de la structure, chaque souffle d'air devient une information. Vous savez quand le vent
            tourne, vous sentez l'orage avant qu'il ne gronde. C'est une <strong>vulnérabilité choisie</strong> qui rend
            chaque seconde plus vibrante.
          </p>
        </div>
      </section>
    </div>

    <!-- SECTION FINALE : LE DÉPART -->
    <section class="bg-[#0f172a] py-40 text-center text-white relative overflow-hidden">
      <div class="relative z-10">
        <h2 ref="reveals" class="text-6xl text-primary md:text-[100px] font-black uppercase italic mb-12 leading-none">
          Lâcher <br> <span class="text-white underline decoration-8">Prise</span>
        </h2>
        <p ref="reveals" class="text-2xl text-slate-400 font-light mb-16 italic">"La route n'est pas entre deux points,
          elle est en vous."</p>
        <NuxtLink to="/contact"
          class="inline-block bg-primary text-white px-16 py-6 rounded-full font-black uppercase tracking-[0.2em] hover:scale-110 hover:text-white transition-transform shadow-2xl">
          Écrire mon histoire
        </NuxtLink>
      </div>
    </section>
  </article>
</template>

<script setup>
import { onMounted } from 'vue'
import gsap from 'gsap'

definePageMeta({ layout: 'blog' })

// Tableaux simples pour collecter les éléments du DOM
const chapters = []
const reveals = []

// Fonctions de collecte pour les refs
const setChapterRef = (el) => { if (el) chapters.push(el) }
const setRevealRef = (el) => { if (el) reveals.push(el) }

onMounted(() => {
  if (!process.client) return

  // 1. HERO ANIMATION (L'Art de <-> S'égarer)
  const tl = gsap.timeline({ defaults: { ease: "power4.out", duration: 2.5 } })
  tl.from(".hero-tag", { opacity: 0, y: -20 })
    .from(".hero-title-1", { x: -120, opacity: 0 }, "-=2")
    .from(".hero-title-2", { x: 120, opacity: 0 }, "-=2.5")
    .from(".hero-p", { opacity: 0, y: 20 }, "-=1.5")

  // 2. INTERSECTION OBSERVER (Moteur de détection)
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target

        if (el.classList.contains('chapter-section')) {
          const title = el.querySelector('.chapter-title')
          const text = el.querySelector('.chapter-text')
          gsap.to(title, { opacity: 1, x: 0, duration: 2, ease: "power2.out" })
          gsap.to(text, { opacity: 1, x: 0, duration: 2.2, delay: 0.3, ease: "power2.out" })
        } else {
          gsap.to(el, { opacity: 1, y: 0, duration: 2, ease: "power2.out" })
        }
        observer.unobserve(el)
      }
    })
  }, { threshold: 0.1 })

  // Initialisation des Chapitres collectés
  chapters.forEach(section => {
    const isRight = section.classList.contains('text-right')
    const title = section.querySelector('.chapter-title')
    const text = section.querySelector('.chapter-text')

    gsap.set(title, { opacity: 0, x: isRight ? 60 : -60 })
    gsap.set(text, { opacity: 0, x: isRight ? -60 : 60 })
    observer.observe(section)
  })

  // Initialisation des Reveals collectés (Images, Citations)
  reveals.forEach(el => {
    gsap.set(el, { opacity: 0, y: 30 })
    observer.observe(el)
  })
})
</script>


<style scoped>
@keyframes slow-zoom {
  0% {
    transform: scale(1.05);
  }

  100% {
    transform: scale(1.2);
  }
}

.animate-slow-zoom {
  animation: slow-zoom 20s infinite alternate ease-in-out;
}
</style>
