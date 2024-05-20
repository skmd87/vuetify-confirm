import { defineNuxtModule, addPlugin, createResolver, addComponent, addImports} from '@nuxt/kit'
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
	  
	//   addTemplate({
	// 	  filename: 'my-types.ts',
	// 	  src: resolver.resolve('./my-types.ts'),
	// 	  getContents: (src) => {
	// 		  //return src
	// 		  return `import type { ModuleOptions } from "./module";
	// 		  import type { InjectionKey } from 'vue';
			  
			  
	// 		  export type Rejection = 'OUTSIDE_CLICK' | 'ESC' | 'CANCEL_BTN';
			  
	// 		  export type Confirmation = 'OK_BTN'
			  
	// 		  export type VuetifyConfirmData = {
	// 			  show: boolean;
	// 			  locale: string;
	// 			  options: ModuleOptions;
	// 			  resolve: (arg: Confirmation) => void;
	// 			  reject: (arg: Rejection) => void;
	// 		  }
			  
			  
	// 		  export const VuetifyConfirmDataKey: InjectionKey<VuetifyConfirmData> = Symbol('VuetifyConfirmData');`
	// 	  }
	//   })
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
