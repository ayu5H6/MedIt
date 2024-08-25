import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:5000", // Use 'http' if your server is not using 'https'
        changeOrigin: true,
        secure: false,
        ws: true,
      },
    },
  },
});
