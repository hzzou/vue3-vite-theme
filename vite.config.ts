import vue from '@vitejs/plugin-vue';
import path from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src') 
    }
  },
  plugins: [
    vue(),
    dts()
  ],
  pages:{
    index:{
      entry: 'src/main.ts'
    }
  },
  optimizeDeps: {
    include: ["mockjs", "axios"]
  }
})
