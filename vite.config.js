import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue2'
import path from 'path'

export default defineConfig({
    build: {
        manifest: true,
        outDir: path.resolve(__dirname, 'static/dist'),
        emptyOutDir: true,
    },
    base: process.env.NODE_ENV === "production" ? "/static/dist/" : "/",
    root: './src',
    plugins: [
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            }
        }),
    ]
})
