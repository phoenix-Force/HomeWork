<template>
  <div>
    <el-row :gutter="15" style=  "margin-top:10px;clear:fixed;">
      <el-col :span="10">
        <el-col :span = "24">
          <div style="height:100%;width:100%">
            <!-- <el-image class  ="profileImage" :src="profile_dtls.dp"> -->
              <img src="data:image/png;base64,aHR0cDovL2xvY2FsaG9zdDo4MDgwL2MxNjNiMzJkLTcyODUtNDNjZi05NjA4LWRjYzZlMmQ4MWQ4ZA=="/>


          </div>
        </el-col>
      </el-col>
    <el-col :span="14" >
      <el-row style="padding-left:5%;">
        <el-col :span="24">
          <h2>{{profile_dtls.name}}</h2>
        </el-col>
        <el-col>
          <h4 :xs="4" :sm="6" :md="8" :lg="9" :xl="11">{{profile_dtls.about}}</h4>
        </el-col>
      </el-row>
    </el-col>
    </el-row>
      <el-row :gutter="0" class = "profile-row">
          <el-col :span  = "10">
            <el-row class = "dlts-row">
              Gender:
            </el-row>
          </el-col>
          <el-col :span = "14">
            <el-row class = "dlts-row">
              {{profile_dtls.gender}}
            </el-row>
            <el-row class = "dlts-row"></el-row>
          </el-col>
      </el-row>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  computed:{
    ...mapGetters({
      profile_dtls:'getProfile'
    }),
    srcImg(){
      $http.get(url,{responseType: "blob"}).success((data) => {
        var file = new File([profile_dtls.dp], "sample.jpg");
        xp=file;
      });
    }
  }

}
</script>

<style scoped>
.profileImage{
  height:100%;
  width:100%;
  -webkit-box-shadow: 2px 0px 14px 2px rgba(0,0,0,0.88);
  box-shadow: 2px 0px 14px 2px rgba(0,0,0,0.88);
  border-radius: 25px;

}
h2{
  font-size: 70px;
  padding-left:20px;
  font-style: italic;
  font-weight: bold;
  align-content: right;
  font-family: 'Aclonica', sans-serif;
  text-shadow: 1px -7px 3px #B6BACE;
}
@media screen {
  h2{
  font-size: 45px;
  }
  .profile-row{
    height:40%;
  }

}
.profile-row{
    margin-top:10px;
    box-shadow: 2px 0px 14px 2px rgba(0,0,0,0.88);
    border-radius: 25px;
    padding-left:5px;
    height:50vh;
  }
  .dlts-row{
    height:5vh;
    background-color: rgba(153, 187, 255, 0.5);
  }

</style>
