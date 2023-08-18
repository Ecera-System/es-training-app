import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  build: {

    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: {
          // Define your manual chunks here
          // For example, split dependencies into a separate chunk
         
          react: ['react', 'react-dom'],
          dependencies: ['axios'],
        },
      },

      external: ["react-google-recaptcha"],
    },
  },



  
})
