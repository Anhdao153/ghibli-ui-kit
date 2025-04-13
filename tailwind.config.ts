// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './src/**/*.{js,ts,jsx,tsx}', // Quan trọng để tailwind quét đúng
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--color-background)",
                text: "var(--color-text)",
                primary: "var(--color-primary)",
                secondary: "var(--color-secondary)",
                accent: "var(--color-accent)",
            },
            borderRadius: {
                DEFAULT: 'var(--radius)',
            },
            fontFamily: {
                sans: 'var(--font-sans)',
            },
            // spacing: {
            //     'safe': 'env(safe-area-inset)',
            // },
            // Các config khác cho kit của bạn
        },
    },
    plugins: [
    ],
}

export default config
