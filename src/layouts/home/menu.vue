<template>
  <div class="nav">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      router
    >
      <el-menu-item index="/home">首页</el-menu-item>
      <el-menu-item index="/admin">后台</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import {ref} from 'vue'

// const activeIndex = ref('1')
// const activeIndex2 = ref('1')
// const handleSelect = (key: string, keyPath: string[]) => {
//   console.log(key, keyPath)
// }

export default {
  setup() {
    let nav = ref(null)
    return {
      nav,
    }
  }
}
</script>

<style>
.el-menu--horizontal{
  justify-content: flex-end;
}
</style>
