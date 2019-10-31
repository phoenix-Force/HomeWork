<template>
<el-col :span = "16" style="margin-left:15%;position: absolute;">
  <el-row>
    <final-upload></final-upload>
  </el-row>
  <el-col>
    <el-row style="margin-top:35px;" :key = "index" v-for ="(x,index) in uploads">
      <post-container v-if="x.type=='pic'"></post-container>
      <text-container  v-if="x.type=='text'"></text-container>
    </el-row>
    <!-- <el-backtop target=".page-component__scroll .el-scrollbar__wrap" :bottom="100">
      <button style='font-size:24px'><i class='fas fa-angle-double-up'></i></button>
  </el-backtop> -->
  </el-col>
</el-col>

</template>
<script>
import upload from "./uploadText/txtUplod.vue"
import postcontainer from "./postContainer/postContainer.vue"
import textcontainer from "./postContainer/textContainer.vue"
export default {
  data(){
    return{
      uploads:[{type:'text'},{type:"pic"},{type:'text'},{type:'text'},{type:"pic"},{type:"pic"}]
    }
  },
  components:{
    finalUpload:upload,
    postContainer:postcontainer,
    textContainer:textcontainer
  }
}
</script>
<style scoped>

</style>
