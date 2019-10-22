<template>
<el-col :span = "16" style="margin-left:15%;position: absolute;">
  <final-upload></final-upload>
  <post-container></post-container>
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
