<template>
<el-col :span = "16" style="margin-left:15%;position: absolute;">
  <el-row>
    <final-upload></final-upload>
  </el-row>
  <el-col>
    <el-row style="margin-top:35px;" :key = "index" v-for ="(x,index) in 6">
      <post-container></post-container>
    </el-row>
  </el-col>
</el-col>

</template>
<script>
import upload from "./uploadText/txtUplod.vue"
import postcontainer from "./postContainer/postContainer.vue"
export default {
  components:{
    finalUpload:upload,
    postContainer:postcontainer
  }
}
</script>
<style scoped>

</style>
