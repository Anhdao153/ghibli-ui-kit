import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
import path from "path";
// https://vite.dev/config/
export default defineConfig({
  plugins: [,
    tailwindcss(),
    react()
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      styles: path.resolve(__dirname, "styles"),
    },
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "GhibliUI",
      fileName: (format) => `ghibli-ui-kit.${format}.js`,
    },
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "src/index.ts"),
        ghibli: path.resolve(__dirname, "styles/ghibli.css"),
        dark: path.resolve(__dirname, "styles/dark.css"),
      },
      output: {
        assetFileNames: "assets/[name][extname]",
      },
    },
  },
})
