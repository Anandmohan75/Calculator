import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })
export default defineConfig({
  plugins: [react()],
  base: "/", // Ensure correct base path
  build: {
    outDir: "dist", // Make sure Vercel finds the correct build folder
  }
});