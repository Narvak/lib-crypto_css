import { defineConfig } from 'jquery';
import jquery from 'jquery';

export default defineConfig({
    plugins: [jquery()],
    build: {
        minify: false,
        target: 'esnext',
        polyfillDynamImport: false,
    },
});