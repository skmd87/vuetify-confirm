/// <reference path="./VuetifyConfirm.d.ts" />
import { defineNuxtPlugin, useRuntimeConfig } from '#app'
import { reactive, ref, watch, type Ref } from '#imports'
import type { ModuleOptions } from '../module'
import { VuetifyConfirmDataKey, type VuetifyConfirmData, type Confirmation, type Rejection } from './VuetifyConfirm.d'

export default defineNuxtPlugin((nuxtApp) => {
//   const { $i18n } = nuxtApp

  const configOptions = useRuntimeConfig().public.vuetifyConfirm

  const vuetifyConfirmData = reactive<VuetifyConfirmData>({
    show: false,
	loading: false,
    locale: 'en',
    options: {
      ...configOptions
    } ,//as ModuleOptions,
    resolve: () => { },
    reject: () => { },
  })

  const isLoading = ref(false)

  watch(()=>isLoading.value, (val) => {
	vuetifyConfirmData.loading = val
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

        vuetifyConfirmData.options = options
        vuetifyConfirmData.show = true
		vuetifyConfirmData.loading = false

        return new Promise((resolve, reject) => {
          vuetifyConfirmData.resolve = (status:Confirmation) => {
            resolve({
					status,
					loading:isLoading,
					hide
				})
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



