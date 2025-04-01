import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    tailwindcss(),
  ], 
  server: {
    host: '192.168.0.4', // Permite acesso por IP local
    port: 5173, // Porta padrão do Vite
    strictPort: true,
  }
})