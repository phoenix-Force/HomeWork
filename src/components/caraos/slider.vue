<template>
<div>
    <el-carousel :interval="4000" type="card" height="550px" loop>
    <el-carousel-item v-for="(item,index) in img" :key="index">
      <el-image
      style="width: 100%; height: 100%"
      :src="item"
      ></el-image>

    </el-carousel-item>
  </el-carousel>
    <foot-set></foot-set>
</div>
</template>
<script>
import footer from "../shared/Footer.vue"
export default {
  data(){
    return{
      img: [
        '../../../src/assets/s.jpg',
        '../../../src/assets/s1.jpg',
        '../../../src/assets/s3.jpg',
        '../../../src/assets/s4.jpeg',
        '../../../src/assets/s5.jpg'
      ]
    }
  },
  components:{
    footSet:footer
  }
}
</script>

<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 40vh;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
