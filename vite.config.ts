import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
 plugins: [react()],
   server: {
     proxy: {
     // Target is your backend API
       '/api': {
           target: 'https://ds.reconnaissancetechnologies.com', 
           changeOrigin: true,
           rewrite: (path) => path,
     },
   },
 },
})