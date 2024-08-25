/// <reference types="vitest" />


import { fileURLToPath, URL } from 'node:url'
import viteVueRouter from 'unplugin-vue-router/vite'
import viteAutoImport from 'unplugin-auto-import/vite'
import { VueRouterAutoImports } from 'unplugin-vue-router'
import viteComponents from 'unplugin-vue-components/vite'
import viteCssTailwind from 'tailwindcss'
import viteCssAutoPrefixer from 'autoprefixer'

import { defineConfig, loadEnv } from 'vite'
import viteVue from '@vitejs/plugin-vue'

export default defineConfig(({ mode }) => {
  const env = loadViteEnv(mode);

  return {
    define: {
      "process.env": JSON.stringify(env),
    },
    plugins: [
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
      })
    ],
    css: {
      postcss: {
        plugins: [viteCssTailwind(), viteCssAutoPrefixer()]
      }
    },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    test: {
      environment: "jsdom",
      exclude: ["./__test__/benchmark/**/*"],
      setupFiles: ["./vitest.setup.ts"],
    },
    server: {
      port: +(process.env.PORT || '') || 3000,
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
