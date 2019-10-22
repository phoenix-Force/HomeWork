<template>
<el-row style="height:30vh">
  <el-row style="heigth:10%;">
    <el-col :span = "10">
      <el-avatar shape="square" :size="100" :fit="fit" :src ="avatar"></el-avatar>
    </el-col>
  </el-row>
  <el-row style="heigth:80%;">
    <el-col>
      <el-image :src = "img_url" style="height:100%;width:100%"></el-image>
    </el-col>
  </el-row>
  <el-row>
    <el-col>

    </el-col>
    <el-col>

    </el-col>
    <el-col>

    </el-col>
    <el-col>

    </el-col>
  </el-row>
  <el-row style="heigth:10%;">
  </el-row>
</el-row>

</template>
<script>
export default {
  data(){
    return {
      img_url:"../../../../src/assets/s2.jpg",
      avatar:"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
