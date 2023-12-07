<template>
  <v-app theme="dark">
    <v-locale-provider :rtl="$i18n.locale === 'ar'">
      <v-container>
        <h1 class="mb-8">
          Vuetify Confirm playground! 
        </h1>
        <v-switch label="Locale" v-model="$i18n.locale" true-value="ar" false-value="en">
          </v-switch> {{ $i18n.locale }}
        <v-row>
          <v-col>
            <v-btn color="primary"
              @click="$confirm('Are you sure?').then((v) => result1 = v).catch((v) => result1 = v)">
              Test (useNuxtApp) {{ result1 }}
            </v-btn>
          </v-col>
          <v-col>
            <v-btn color="primary"
              @click="confirm({ text: 'This is an object param, confirm?' }).then((v) => result2 = v).catch((v) => result2 = v)">
              Test (useConfirm) {{ result2 }}
            </v-btn>
          </v-col>
          <v-col />
        </v-row>
        <VuetifyConfirm />
      </v-container>
    </v-locale-provider>
  </v-app>
</template>

<script setup>
const result1 = ref(null)
const result2 = ref(null)
const { $confirm, } = useNuxtApp()

const confirm = useConfirm()
</script>
