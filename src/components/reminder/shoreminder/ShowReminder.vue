<template>
    <el-col :span="6">
      <el-card class="crd">
        <div slot="header" class="clearfix">
          <span>BirthDay</span>
          <el-button style="float: right; padding: 3px 0" type="text"><i class="fa fa-times"></i></el-button>
        </div>

          <div style="padding: 14px;">
            <span>reminder Note  Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae ut cumque possimus ea laborum modi, vel incidunt repudiandae hic optio facere! Et beatae eius exercitationem illo optio tenetur, nulla quia.</span>
            <div class="bottom clearfix">
              <!-- <time class="time">{{ currentDate }}</time> -->
              <el-button class="button" style="float:right;margin-bottom:10px;">Snooze</el-button>
            </div>
          </div>
      </el-card>
    </el-col>
</template>
<script>
export default {

  data () {
    return {
    }
  }
}
</script>
<style scoped>
.iamage{
  width:100%;
}
.crd{
  margin-top:10px;
  -webkit-box-shadow: 50px 50px 50px -9px rgba(0,0,0,0.57);
  box-shadow: 50px 50px 50px -9px rgba(0,0,0,0.57);
  border-radius: 15px;
}
.clearfix{

}
.crd:hover{
  /* -webkit-box-shadow: inset 5px 3px 50px 5px rgba(0,0,0,0.39);
box-shadow: inset 5px 3px 50px 5px rgba(0,0,0,0.39); */
/* -webkit-box-shadow: inset 0px 49px 50px 20px rgba(0,0,0,0.39);
box-shadow: inset 0px 49px 50px 20px rgba(0,0,0,0.39); */
-webkit-box-shadow: inset 0px 49px 50px -30px rgba(0,0,0,0.72);
box-shadow: inset 0px 49px 50px -30px rgba(0,0,0,0.72);
/* -webkit-box-shadow: inset 0px 49px 12px -30px #000000;
box-shadow: inset 0px 49px 12px -30px #000000; */
}

</style>
