<template>
  <el-container>
    <el-main class="py-0" :class="$style.container">
      <el-row :gutter="24">
        <el-col :span="12" class="flex">
          <el-image :class="$style.logoImage" src="logo.jpg" alt="log-icon" fit="cover">
            <div slot="error" class="image-slot">
              <i class="el-icon-picture-outline" />
            </div>
          </el-image>
        </el-col>
        <el-col :span="12">
          <el-dropdown class="float-right" size="medium" trigger="click" @command="$emit($event)">
            <div :class="$style.dropdown">
              <div :class="$style.nameUser">Admin User</div>
              <el-image :class="$style.logoImage" src="logo.jpg" alt="log-icon" fit="cover">
                <div slot="error" class="image-slot">
                  <i class="el-icon-picture-outline" />
                </div>
              </el-image>
            </div>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="info">Tài khoản</el-dropdown-item>
              <el-dropdown-item command="logout">Đăng xuất</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'Header',
})
</script>

<style lang="scss" module>
.container {
  padding: 0 20px;
  border-bottom: 1px solid black;
}
.logoImage {
  width: 60px;
  height: 60px;
}
.dropdown {
  display: flex;
  align-items: center;
}
.nameUser {
  margin-right: 12px;
  color: $color-poseidon;
  font-weight: $font-weight-bold;
}
</style>
