<template>
  <div class="app-wrapper">
    <header-page />
    <Nuxt />
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'
import Header from '@components/layout/Header.vue'

export default defineComponent({
  name: 'BaseLayout',
  components: { 'header-page': Header },
})
</script>
