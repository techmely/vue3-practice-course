/// <reference types="vitest" />

import viteVueRouter from 'unplugin-vue-router/vite'
import viteAutoImport from 'unplugin-auto-import/vite'
import { VueRouterAutoImports } from 'unplugin-vue-router'
import viteComponents from 'unplugin-vue-components/vite'
import viteCssTailwind from 'tailwindcss'
import viteCssAutoPrefixer from 'autoprefixer'
import { visualizer as viteVisualizer } from "rollup-plugin-visualizer";
import viteCompress from "vite-plugin-compression2";


import { defineConfig, loadEnv } from 'vite'
import viteVue from '@vitejs/plugin-vue'
import { fileURLToPath } from 'url'

export default defineConfig(({ mode }) => {
  const env = loadViteEnv(mode);
  const isProd = mode === "production";

  const plugins = [
    viteVueRouter(),
    viteComponents({
      dirs: ['src/shared/components'],
    }),
    viteAutoImport({
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/, // .vue
      ],
      imports: [
        'vue',
        VueRouterAutoImports,
        {
          pinia: ['defineStore', 'storeToRefs', 'acceptHMRUpdate']
        }
      ],
      dts: true,
      viteOptimizeDeps: true,
      dirs: ['src/stores']
    }),
    viteVue({
      template: {
        compilerOptions: {
          isCustomElement: (element) => element.startsWith('iconify-icon')
        }
      }
    }),
  ]

  if (isProd) {
    plugins.push(
      viteCompress({
        algorithm: "brotliCompress",
        deleteOriginalAssets: false,
        exclude: [/\.(png|avif|webp|jpe?g|gif)$/i, /\.map$/, /\.br$/],
      }),
      viteVisualizer({ template: "sunburst" }),
    );
  }


  return {
    define: {
      "process.env": JSON.stringify(env),
    },
    plugins,
    css: {
      postcss: {
        plugins: [viteCssTailwind(), viteCssAutoPrefixer()]
      }
    },
    test: {
      environment: "jsdom",
      exclude: ["./__test__/benchmark/**/*"],
      setupFiles: ["./vitest.setup.ts"],
    },
    server: {
      port: +(process.env.PORT || '') || 3000,
    },
    build: {
      cssMinify: "lightningcss",
    },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
  }
})


function loadViteEnv(mode: string) {
  const env = loadEnv(mode, process.cwd());
  const viteEnvs = Object.entries(env).reduce(
    (acc, [key, value]) => {
      if (key.startsWith("VITE_")) {
        acc[key] = value;
      }
      return acc;
    },
    {} as Record<string, string>,
  );

  return viteEnvs;
}
