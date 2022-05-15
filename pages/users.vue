<template>
  <div>
    <feature-title title="Users" />
    <el-table :data="listUser">
      <template v-for="(column, key) in columnConfig">
        <el-table-column
          :key="key"
          :prop="column.id"
          :label="column.label"
          :min-width="column.minWidth"
        />
      </template>
    </el-table>
  </div>
</template>

<script>
import { defineComponent, reactive, toRefs } from '@nuxtjs/composition-api'
import FeatureTitle from '@components/layout/FeatureTitle.vue'
import { COLUMN_TABLE_USER } from '../constants/users'

export default defineComponent({
  components: { FeatureTitle },
  layout: 'base',
  setup() {
    const data = reactive({
      listUser: [],
      columnConfig: COLUMN_TABLE_USER,
    })

    return {
      ...toRefs(data),
    }
  },
})
</script>
