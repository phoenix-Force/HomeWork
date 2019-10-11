<template>
<div>
  <el-row>
  <el-col :span="10">
    <el-image class  ="profileImage" :src="profile_pic">
    </el-image>

  </el-col>
  <el-col :span="14">
    <h2>{{profile_name}}</h2>
  </el-col>
</el-row>
</div>

</template>
<script>
export default {
  data(){
    return{
      profile_pic:"../../../src/assets/s5.jpg",
      profile_name:"Joussonara Khatun"
    }
  }

}
</script>
<style scoped>
.profileImage{
  height:500px;
  width:500px;
  margin-top:20px;
  margin-left:15px;
  -webkit-box-shadow: 2px 0px 14px 2px rgba(0,0,0,0.88);
  box-shadow: 2px 0px 14px 2px rgba(0,0,0,0.88);

}
h2{
  font-size: 70px;
  font-style: italic;
  font-weight: bold;
  align-content: right;
  font-family: 'Aclonica', sans-serif;
  text-shadow: 1px -7px 3px #B6BACE;
}

</style>
