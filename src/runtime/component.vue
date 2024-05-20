<template>
    <div>
        <v-dialog :model-value="data?.show" max-width="400">
            <v-card v-click-outside="outside">
                <v-card-title>
                    <slot name="title">
                        {{ data?.options.title }}
                    </slot>
                </v-card-title>
                <v-card-text>
                    <slot name="text">
                        <div v-html="data?.options.text" />
                    </slot>
                </v-card-text>

                <v-card-actions>
                    <slot name="actions" v-bind="{ ok, cancel }">
                        <v-spacer />
                        <v-btn variant="text" @click="cancel">
                            {{ data?.options.cancelBtn }}
                        </v-btn>
                        <v-btn variant="text" @click="ok">
                            {{ data?.options.okBtn }}
                        </v-btn>
                    </slot>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script lang="ts" setup>
import { inject, onMounted, onUnmounted } from '#imports'
import { VuetifyConfirmDataKey } from './VuetifyConfirm';


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

