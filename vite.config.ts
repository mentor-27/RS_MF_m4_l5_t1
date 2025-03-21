import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@context': '/src/context',
      '@routes': '/src/routes',
      '@components': '/src/components',
      '@pages': '/src/pages',
      '@ui': '/src/components/UI',
      '@hooks': '/src/hooks',
      '@types': '/src/types',
    },
  },
  base: '/RS_MF_m4_l5_t1',
  plugins: [react()],
  build: {
    manifest: true,
    rollupOptions: {
      input: {
        main: './index.html',
      },
    },
  },
});
