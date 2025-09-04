import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
})



// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';
// import tailwindcss from '@tailwindcss/vite'

// export default defineConfig({
//   plugins: [react(),tailwindcss()],
//   server: {
//     port: 3001,
//     proxy: {
//       // This is the crucial part. It tells Vite: "If you see a request
//       // starting with '/api', don't try to handle it yourself. Instead,
//       // forward it to the server running on localhost:3000."
//       '/api': {
//         target: 'http://localhost:3000', 
//         changeOrigin: true,
//       },
//     },
//   },
// });

