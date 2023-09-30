import { defineConfig } from 'vite';
import fg from 'fast-glob';

export default defineConfig({
    build: {
      outDir: './theme/assets',
      emptyOutDir: false,
      rollupOptions: {
        input: 'src/**/*.{js,css}',
        output: {
          dir: './theme/assets',
          entryFileNames: '[name].js',
          assetFileNames: '[name].[ext]',
        },
        plugins: [
            {
                name: 'glob-input',
                options(options) {
                  const inputs = typeof options.input === 'string' ? [options.input] : options.input;
      
                  return Array.isArray(inputs) ? { ...options, input: inputs.flatMap((input) => fg.sync(input)) } : null;
                },
            },
        ],
      },
    },
    plugins: [],
});