import { defineNuxtModule, addPlugin, createResolver, addComponent, addImports } from '@nuxt/kit'
import defu from 'defu'
import { klona } from 'klona'
// Module options TypeScript interface definition
export interface ModuleOptions {
  [key: string]: any;
  defaultLocale?: string;
  minWidth?: number;
  maxWidth?: number;
  width?: number;
  title?: string;
  text?: string;
  cancelBtn?: string;
  okBtn?: string;
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'vuetify-confirm',
    configKey: 'vuetifyConfirm'
  },
  // Default configuration options of the Nuxt module
  defaults: {
    defaultLocale: 'en',
    minWidth: 300,
    maxWidth: 500,
    width: 400,
    title: '',
    text: '',
    cancelBtn: '',
    okBtn: ''
  },
  setup(options, nuxt) {

    nuxt.options.runtimeConfig.public.vuetifyConfirm = defu(nuxt.options.runtimeConfig.public.vuetifyConfirm, klona(options))

    const resolver = createResolver(import.meta.url)

    // Do not add the extension since the `.ts` will be transpiled to `.mjs` after `npm run prepack`
    addPlugin({
      src: resolver.resolve('./runtime/plugin'),
    })
    addComponent({
      name: 'VuetifyConfirm',
      pascalName: 'VuetifyConfirm', // name of the component to be used
      kebabName: 'vuetify-confirm', // name of the component to be used
      filePath: resolver.resolve('./runtime/component.vue')
    })
    addImports({
      name: 'useConfirm', // name of the composable to be used
      as: 'useConfirm',
      from: resolver.resolve('runtime/composable') // path of composable 
    })

  }
})
