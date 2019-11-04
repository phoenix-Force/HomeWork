<template>
  <el-row :gutter = "6" style="height:25vh;">
    <el-row style="height:30px;;text-align:center;">
      <a  href="#" class="fa fa-facebook"></a>
      <a  href="#" class="fa fa-google"></a>
      <a  href="#" class="fa fa-twitter"></a>
      <a  href="#" class="fa fa-instagram"></a>
      <a  href="#" class="fa fa-linkedin"></a>
      <a  href="#" class="fa fa-youtube"></a>
    </el-row>
    <el-row :gutter = "6" style="">
      <el-col :span="8">

      </el-col>
      <el-col :span="8">

      </el-col>
      <el-col :span="8">

      </el-col>
    </el-row>
  </el-row>
</template>
<script>
export default {

}
</script>
<style scoped>
.media{
  padding-left:6%;
}
.fa {
  padding: 20px;
  font-size: 35px;
  width: 40px;
  height:100%;
  text-align: center;
  text-decoration: none;
  margin: 5px 2px;
  border-radius: 10px;
}

.fa:hover {
    opacity: 0.8;
    animation: heartBeat 2s infinite;
}

.fa-facebook {
  background: #3B5998;
  color: white;
}

.fa-twitter {
  background: #55ACEE;
  color: white;
}

.fa-google {
  background: #dd4b39;
  color: white;
}

.fa-linkedin {
  background: #007bb5;
  color: white;
}

.fa-youtube {
  background: #bb0000;
  color: white;
}

.fa-instagram {
  background: #d6249f;
  background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%);
  color: white;
}


</style>
