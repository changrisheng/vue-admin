<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <comp-nav ref='nav'></comp-nav>
      </el-header>
      <el-main>Main</el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<script>
//引入菜单模板
import CompNav from '@/layouts/home/menu'
import {onMounted,ref} from 'vue'
export default{
  setup(){
    //创建一个值为null的ref，实际就是引用
    //love就是h3ref的love的引用
    let nav= ref(null)
    //页面渲染完成后才能获取到对应的引用
    onMounted(()=>{
      // console.log(menu.value)//DOM对象
    })
    return{
      nav
    }
  },
  components:{
    CompNav,
  }
}
</script>

<style>
</style>
