import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
   server: {
    host: true,  // permite acesso externo automaticamente
    port: 5173   // porta que você já usa (opcional)
  }
  
})

