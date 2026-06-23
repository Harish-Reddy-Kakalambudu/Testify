import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


export default defineConfig({
  plugins: [react(),
    tailwindcss(),
  ],
  server: {
    port: 3000,
    strictPort: true, // Optional: if true, Vite will exit if port 3000 is already in use instead of trying the next available port
  }
})
