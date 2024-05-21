/// <reference path="./VuetifyConfirm.d.ts" />
import { defineNuxtPlugin, useRuntimeConfig } from '#app'
import { reactive, ref } from '#imports'
import type { ModuleOptions } from '../module'
import { VuetifyConfirmDataKey, type VuetifyConfirmData, type Confirmation, type Rejection } from './VuetifyConfirm.d'

export default defineNuxtPlugin((nuxtApp) => {
//   const { $i18n } = nuxtApp

  const configOptions = useRuntimeConfig().public.vuetifyConfirm

  const vuetifyConfirmData = reactive<VuetifyConfirmData>({
    show: false,
    locale: 'en',
    options: {
      ...configOptions
    } ,//as ModuleOptions,
    resolve: () => { },
    reject: () => { },
	loading: false
  })

  nuxtApp.vueApp.provide(VuetifyConfirmDataKey, vuetifyConfirmData)

  const hide = () => {
	vuetifyConfirmData.show = false
  }
  return {
    provide: {
      confirm: async (params?: ModuleOptions | string) => {
        let options: ModuleOptions
        if (typeof params === 'string') {
          options = { ...configOptions }
          options.text = params
        } else {
          options = { ...configOptions, ...params }
        }


        /*if (!$i18n) {
          const locale = configOptions.defaultLocale

          if (!locale) throw new Error('[VuetifyConfirm] Please set default locale in module options')

          vuetifyConfirmData.locale = locale
          const loadedLocale = (await import(`../localization/${locale}.json`)).default
          for (const key in loadedLocale) {
            options[key] = loadedLocale[key]
          }
        } else {
          // @ts-ignore
          const locale = $i18n.locale.value
          vuetifyConfirmData.locale = locale
          const loadedLocale = (await import(`../localization/${locale}.json`)).default
          for (const key in loadedLocale) {
            if (!options[key])
              // @ts-ignore
              options[key] = $i18n.te("$vuetifyConfirm." + key) ? $i18n.t("$vuetifyConfirm." + key) : configOptions[key] || loadedLocale[key]
          }

        }*/
        vuetifyConfirmData.options = options
        vuetifyConfirmData.show = true
		vuetifyConfirmData.loading = false

        return new Promise((resolve, reject) => {
          vuetifyConfirmData.resolve = (status:Confirmation) => {
            resolve(
				reactive({
					status,
					loading: vuetifyConfirmData.loading,
					hide
				})
			)
			if(!vuetifyConfirmData.options.async) {
            	hide()
			}
          }
          vuetifyConfirmData.reject = (status:Rejection) => {
            reject({status})
			hide()
          }
        })
      }
    }
  };
})



