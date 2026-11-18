/// <reference types="vitest/config" />
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import { defineConfig } from 'vite'

// https://vite.dev/config/
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin'
import { playwright } from '@vitest/browser-playwright'
import { resolve } from 'path'
import graphqlLoader from 'vite-plugin-graphql-loader'
import tanstackRouter from '@tanstack/router-plugin/vite'
import { VitePWA } from 'vite-plugin-pwa'

const dirname = typeof import.meta.dirname !== 'undefined' ? import.meta.dirname : path.dirname(fileURLToPath(import.meta.url));

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
export default defineConfig({
    plugins: [
        tanstackRouter({
            target: 'react',
            autoCodeSplitting: true,
        }),
        react(),
        babel({presets: [reactCompilerPreset()]}),
        graphqlLoader(),
        VitePWA({
                registerType: 'autoUpdate', // Автоматическое обновление Service Worker
                includeAssets: ['favicon.png'],
                manifest: {
                    name: 'CRM Система',
                    short_name: 'CRM',
                    description: 'Корпоративная CRM-система',
                    theme_color: '#ffffff',
                    background_color: '#ffffff',
                    display: 'standalone',
                    start_url: '/',
                    icons: [
                        {src: '/favicon.png', sizes: '192x192', type: 'image/png'},
                    ],
                },
                devOptions: {
                    enabled: false, // Отключено в dev-режиме, чтобы кэш не мешал разработке
                }
            })
    ],
    resolve: {
        alias: {
            '@': resolve(dirname, 'src'),
            '~': resolve(dirname, 'node_modules'),
            '%': resolve(dirname, 'public')
        }
    },
    test: {
        projects: [{
            extends: true,
            plugins: [
                // The plugin will run tests for the stories defined in your Storybook config
                // See options at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon#storybooktest
                storybookTest({
                    configDir: path.join(dirname, '.storybook')
                })
            ],
            test: {
                name: 'storybook',
                browser: {
                    enabled: false,
                    headless: true,
                    provider: playwright({}),
                    instances: [{
                        browser: 'chromium'
                    }]
                }
            }
        }]
    }
});