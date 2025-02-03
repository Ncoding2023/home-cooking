import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://openapi.foodsafetykorea.go.kr/api/keyId/serviceId/dataType/startIdx/endIdx', // 실제 API URL
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''), // /api 경로를 실제 API 경로로 변환
      },
    },
  },
})
