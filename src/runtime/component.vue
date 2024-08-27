<template>
    <div>
        <v-dialog :model-value="data?.show" max-width="400">
            <v-card v-click-outside="outside">
                <v-card-title>
                    <slot name="title">                        
						{{ data?.options.title || $t('$vuetifyConfirm.title') }}
                    </slot>
                </v-card-title>
                <v-card-text>
                    <slot name="text">
						<!--eslint-disable-next-line-->
                        <div v-html="data?.options.text" />
                    </slot>
                </v-card-text>

                <v-card-actions>
                    <slot name="actions" v-bind="{ ok, cancel,loading:data?.loading }">
                        <v-spacer />
                        <v-btn v-if="data?.options.cancelBtn !== false" variant="text" color="secondary" @click="cancel">
							{{ data?.options.cancelBtn || $t('$vuetifyConfirm.cancelBtn') }}
                        </v-btn>
                        <v-btn v-if="data?.options.okBtn !== false" variant="text" color="primary" :loading="data?.loading" @click="ok">
							{{ data?.options.okBtn || $t('$vuetifyConfirm.okBtn') }}
                        </v-btn>
                    </slot>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script lang="ts" setup>
import { inject, onMounted, onUnmounted } from '#imports'
import { VuetifyConfirmDataKey } from './VuetifyConfirm.d';

defineOptions({
    name: 'VuetifyConfirm',
})

const data = inject(VuetifyConfirmDataKey)
if (!data) {
    throw new Error(`Could not resolve ${VuetifyConfirmDataKey.description}`);
}

const ok = () => {
    data.resolve('OK_BTN')
}

const cancel = () => {
    data.reject('CANCEL_BTN')
}

const outside = () => {
    data.reject('OUTSIDE_CLICK')
}

const esc = (e: KeyboardEvent) => {
    if (e.key === 'Escape' && data.show) {
        data.reject('ESC')
    }
}

// return reject when escape is pressed, start when data.show is true

onMounted(() => {
    window.addEventListener('keydown', esc)
})


onUnmounted(() => {
    window.removeEventListener('keydown', esc)
})

</script>

