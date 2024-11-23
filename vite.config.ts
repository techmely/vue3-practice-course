/// <reference types="vitest" />

import viteVue from '@vitejs/plugin-vue'
import viteCssAutoPrefixer from 'autoprefixer'
import { visualizer as viteVisualizer } from 'rollup-plugin-visualizer'
import viteCssTailwind from 'tailwindcss'
import viteAutoImport from 'unplugin-auto-import/vite'
import viteComponents from 'unplugin-vue-components/vite'
import { VueRouterAutoImports } from 'unplugin-vue-router'
import viteVueRouter from 'unplugin-vue-router/vite'
import { fileURLToPath } from 'node:url'
import { defineConfig, loadEnv } from 'vite'
import viteCompress from 'vite-plugin-compression2'
import vueDevTools from 'vite-plugin-vue-devtools'


export default defineConfig(({ mode }) => {
  const env = loadViteEnv(mode)
  const isProd = mode === 'production'

  const plugins = [
    viteVueRouter(),
    viteComponents({
      dirs: ['src/shared/components']
    }),
    viteAutoImport({
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/ // .vue
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
      dirs: ['src/modules/account/store', 'src/modules/global/store', 'src/modules/user/store']
    }),
    viteVue({
      template: {
        compilerOptions: {
          isCustomElement: (element) => element.startsWith('iconify-icon')
        }
      }
    }),
    vueDevTools()
  ]

  if (isProd) {
    plugins.push(
      viteCompress({
        algorithm: 'brotliCompress',
        deleteOriginalAssets: false,
        exclude: [/\.(png|avif|webp|jpe?g|gif)$/i, /\.map$/, /\.br$/]
      }),
      viteVisualizer()
    )
  }

  return {
    define: {
      'process.env': JSON.stringify(env)
    },
    plugins,
    css: {
      postcss: {
        plugins: [viteCssTailwind(), viteCssAutoPrefixer()]
      }
    },
    test: {
      environment: 'jsdom',
      exclude: ['./__test__/benchmark/**/*', 'node_modules'],
      setupFiles: ['./vitest.setup.ts'],
      coverage: {
        reporter: ['text', 'html', 'json']
      }
    },
    server: {
      port: +(process.env.PORT || '') || 3000
    },
    build: {
      cssMinify: 'lightningcss'
    },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    }
  }
})

function loadViteEnv(mode: string) {
  const env = loadEnv(mode, process.cwd())
  const viteEnvs = Object.entries(env).reduce(
    (acc, [key, value]) => {
      if (key.startsWith('VITE_')) {
        acc[key] = value
      }
      return acc
    },
    {} as Record<string, string>
  )

  return viteEnvs
}
