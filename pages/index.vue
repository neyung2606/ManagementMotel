<template>
  <Tutorial />
</template>

<script>
export default {
  name: 'IndexPage',
  layout: 'base',
  middleware: ['authenticated'],
}
</script>
