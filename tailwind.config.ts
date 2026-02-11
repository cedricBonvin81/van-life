import type { Config } from 'tailwindcss'

export default <Partial<Config>> {
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#f97316', // Ton orange
          hover: '#0f172a',   // Ton slate-900
        },
        'van-dark': '#0f172a', // Pour les titres (Slate-900)
        content: '#334155',    // Pour le texte de base (Slate-700)
      }
    }
  }
}