import { defineConfig } from 'vite';
import Checker from 'vite-plugin-checker';

import react from '@vitejs/plugin-react-swc';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), Checker({ typescript: true })],
});
