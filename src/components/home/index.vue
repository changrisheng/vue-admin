<template>
  <div class="common-layout">
    <el-container>
      <el-header ref="root" >111</el-header>
      <div class="common-layout">
        <el-container>
          <el-aside width="200px">Aside</el-aside>
          <el-main>Main</el-main>
        </el-container>
      </div>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<script>
import compManu from '../../'
import {ref, onMounted} from 'vue'

export default {
  setup() {
    const root = ref(null)

    onMounted(() => {
      // DOM 元素将在初始渲染后分配给 ref
      console.log(root.value) // <div>This is a root element</div>
    })
    return {
      root
    }
  },
  components:{
    compManu,
  }
}

</script>

<style scoped>

</style>
