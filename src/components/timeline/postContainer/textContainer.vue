<template>
<el-row style="height:30vh">
  <el-row style="heigth:10%;-webkit-box-shadow: 2px 0px 14px 2px rgba(0,0,0,0.88);box-shadow: 2px 0px 14px 2px rgba(0,0,0,0.88);border-radius: 25px;">
    <el-col :span="3">
      <el-avatar shape="circle" :size="100"  :src ="avatar"></el-avatar>
    </el-col>
    <el-col :span="20">
      <el-row style="height:30%;padding-top:2px;top:0;">
      <p class="mdq">Paradox</p>
      </el-row>
      <el-row style="height:30%;">
        <p  class="mdq">Uploaded at:</p>
      </el-row>
    </el-col>
  </el-row>
  <el-row style="height:10%">

  </el-row>
  <el-row style="heigth:70%;-webkit-box-shadow: 2px 0px 14px 2px rgba(0,0,0,0.88);box-shadow: 2px 0px 14px 2px rgba(0,0,0,0.88);border-radius: 25px;">
    <el-col>
      <!-- <div :style="{background:post.bckColor}"  style="height:100%;width:100%;margin-top:3px;margin-left:5px;overflow:hidden;border-radius:15px;">
        <h1>{{post.txt}}</h1>
      </div> -->
      <canvas id="myCanvas" :style="{background:post.bckColor}" style="height:95%;width:99%;margin-top:3px;margin-left:5px;overflow:hidden;border-radius:15px;" ></canvas>
    </el-col>
  </el-row>
  <el-row style="margin-top:5px;">
    <comment-box></comment-box>
  </el-row>
  <el-row style="heigth:10%;">
  </el-row>
</el-row>

</template>
<script>
import cmntbx from "./commentBox.vue"
export default {
  props:['post'],
  components:{
    commentBox:cmntbx
  },
  methods:{
    updateCanvas: function (){
      let x = this.post;
      var canvas = document.getElementById('myCanvas'),
        ctx = canvas.getContext('2d');
        ctx.fillStyle =`${x.fntColor}`;
        ctx.font=`${x.fntSize}px ${x.fntFamily}`;
        ctx.fillText(x.txt,10,50);
    }
  },
  mounted(){
  this.updateCanvas();
  }
}
</script>
<style scoped>
@media screen and (max-width: 1240px) {
  .mdq{
    margin-left:10%;
  }
}
</style>
