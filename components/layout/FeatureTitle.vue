<template>
  <el-container>
    <el-main class="py-0" :class="$style.container">
      <el-button :class="$style.btnMenu" @click="$emit('toggle-menu')">Menu</el-button>
      <div :class="$style.title">{{ title }}</div>
    </el-main>
  </el-container>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'FeatureTitle',
  props: {
    title: String,
  },
})
</script>

<style lang="scss" module>
.container {
  display: flex;
  align-items: center;
  padding: 8px;
  border-bottom: 1px solid gray;
}
.btnMenu {
  display: flex;
  align-items: center;
  position: relative;
  padding-left: 36px;
  padding-right: 18px;
  height: 34px;
  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 5px;
    width: 22px;
    height: 22px;
    background: inherit;
    border: inherit;
    border-left-color: transparent;
    border-bottom-color: transparent;
    border-radius: 0px 4px 0px 0px;
    transform: rotate(45deg);
  }
  &::before {
    left: -11px;
    background-color: white;
  }
  &::after {
    right: -11px;
    z-index: 1;
  }
}
.title {
  margin-left: 24px;
}
</style>
