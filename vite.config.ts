import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === 'production' ? '/home-cooking/' : '/',
  // base: '/home-cooking/', ///https://Ncoding2023.github.io GitHub Pages에 맞춰 경로 설정
  server: {
    proxy: {
      '/api': {
        // target: 'http://openapi.foodsafetykorea.go.kr/api/keyId/serviceId/dataType/startIdx/endIdx', // 실제 API URL
        target: "http://openapi.foodsafetykorea.go.kr", // 루트 도메인만 설정
        changeOrigin: true,
        // rewrite: (path) => path.replace(/^\/api/, ''), // /api 경로를 실제 API 경로로 변환
        rewrite: (path) => path.replace(/^\/api/, "/api"), // '/api'를 유지
      },
    },
  },
})
