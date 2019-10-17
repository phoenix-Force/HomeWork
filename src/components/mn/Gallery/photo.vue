<template>
  <el-row gutter="6">
      <el-col :span= "6" class = "photo">
        <el-row style="height:100%;">
          <el-col :span = "24" style="height:100%">
            <el-image  class= "gphoto" style="width: 100%; height: 100%" :src="photo"></el-image>
          </el-col>
        </el-row>
        <el-row style="position:absolute;z-index:999;bottom:0;margin-left:10px;height:50px; width:100%;">
          <el-col :span= "6">
            <el-col :span= "4">
              <el-button v-if ="liked" class="btnico" @click ="fk()"><i class="fa fa-thumbs-up" style="color: mediumpurple;"></i></el-button>
              <el-button v-else @click ="fk()" class="btnico"><i  class="fa fa-thumbs-o-up" style="color: mediumpurple;"></i></el-button>
            </el-col>
            <el-col :span= "3">
              <p>{{totalLiked}}</p>
            </el-col>
            <el-col :span= "4">
              <el-button v-if ="dislike" class="btnico" @click ="dk()"><i  class="fa fa-thumbs-down" style="color: mediumpurple;"></i></el-button>
              <el-button v-else  class="btnico" @click ="dk()"><i  class="fa fa-thumbs-o-down" style="color: mediumpurple;"></i></el-button>
            </el-col>
            <el-col :span= "3">
              <p>{{totalDislike}}</p>
            </el-col>
            <el-col :span= "4">
              <el-button v-if ="comment"   class="btnico"><i  class="fa fa-comment" style="color: mediumpurple;"></i></el-button>
              <el-button v-else class="btnico"><i  class="fa fa-comment-o" style="color: mediumpurple;"></i></el-button>
            </el-col>
            <el-col :span= "3" >
              <p>12</p>
            </el-col>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span= "6" class = "photo">
        <el-row style="height:100%;">
          <el-col :span = "24" style="height:100%">
            <el-image  class= "gphoto" style="width: 100%; height: 100%" :src="photo"></el-image>
          </el-col>
        </el-row>
        <el-row style="position:absolute;z-index:999;bottom:0;margin-left:10px;height:50px; width:100%;">
          <el-col :span= "6">
            <el-col :span= "4">
              <el-button v-if ="liked" class="btnico" @click ="fk()"><i class="fa fa-thumbs-up" style="color: mediumpurple;"></i></el-button>
              <el-button v-else @click ="fk()" class="btnico"><i  class="fa fa-thumbs-o-up" style="color: mediumpurple;"></i></el-button>
            </el-col>
            <el-col :span= "3">
              <p>{{totalLiked}}</p>
            </el-col>
            <el-col :span= "4">
              <el-button v-if ="dislike" class="btnico" @click ="dk()"><i  class="fa fa-thumbs-down" style="color: mediumpurple;"></i></el-button>
              <el-button v-else  class="btnico" @click ="dk()"><i  class="fa fa-thumbs-o-down" style="color: mediumpurple;"></i></el-button>
            </el-col>
            <el-col :span= "3">
              <p>{{totalDislike}}</p>
            </el-col>
            <el-col :span= "4">
              <el-button v-if ="comment"   class="btnico"><i  class="fa fa-comment" style="color: mediumpurple;"></i></el-button>
              <el-button v-else class="btnico"><i  class="fa fa-comment-o" style="color: mediumpurple;"></i></el-button>
            </el-col>
            <el-col :span= "3" >
              <p>12</p>
            </el-col>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span= "6" class = "photo">
        <el-row style="height:100%;">
          <el-col :span = "24" style="height:100%">
            <el-image  class= "gphoto" style="width: 100%; height: 100%" :src="photo"></el-image>
          </el-col>
        </el-row>
        <el-row style="position:absolute;z-index:999;bottom:0;margin-left:10px;height:50px; width:100%;">
          <el-col :span= "6">
            <el-col :span= "4">
              <el-button v-if ="liked" class="btnico" @click ="fk()"><i class="fa fa-thumbs-up" style="color: mediumpurple;"></i></el-button>
              <el-button v-else @click ="fk()" class="btnico"><i  class="fa fa-thumbs-o-up" style="color: mediumpurple;"></i></el-button>
            </el-col>
            <el-col :span= "3">
              <p>{{totalLiked}}</p>
            </el-col>
            <el-col :span= "4">
              <el-button v-if ="dislike" class="btnico" @click ="dk()"><i  class="fa fa-thumbs-down" style="color: mediumpurple;"></i></el-button>
              <el-button v-else  class="btnico" @click ="dk()"><i  class="fa fa-thumbs-o-down" style="color: mediumpurple;"></i></el-button>
            </el-col>
            <el-col :span= "3">
              <p>{{totalDislike}}</p>
            </el-col>
            <el-col :span= "4">
              <el-button v-if ="comment"   class="btnico"><i  class="fa fa-comment" style="color: mediumpurple;"></i></el-button>
              <el-button v-else class="btnico"><i  class="fa fa-comment-o" style="color: mediumpurple;"></i></el-button>
            </el-col>
            <el-col :span= "3" >
              <p>12</p>
            </el-col>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span= "6" class = "photo">
        <el-row style="height:100%;">
          <el-col :span = "24" style="height:100%">
            <el-image  class= "gphoto" style="width: 100%; height: 100%" :src="photo"></el-image>
          </el-col>
        </el-row>
        <el-row style="position:absolute;z-index:999;bottom:0;margin-left:10px;height:50px; width:100%;">
          <el-col :span= "6">
            <el-col :span= "4">
              <el-button v-if ="liked" class="btnico" @click ="fk()"><i class="fa fa-thumbs-up" style="color: mediumpurple;"></i></el-button>
              <el-button v-else @click ="fk()" class="btnico"><i  class="fa fa-thumbs-o-up" style="color: mediumpurple;"></i></el-button>
            </el-col>
            <el-col :span= "3">
              <p>{{totalLiked}}</p>
            </el-col>
            <el-col :span= "4">
              <el-button v-if ="dislike" class="btnico" @click ="dk()"><i  class="fa fa-thumbs-down" style="color: mediumpurple;"></i></el-button>
              <el-button v-else  class="btnico" @click ="dk()"><i  class="fa fa-thumbs-o-down" style="color: mediumpurple;"></i></el-button>
            </el-col>
            <el-col :span= "3">
              <p>{{totalDislike}}</p>
            </el-col>
            <el-col :span= "4">
              <el-button v-if ="comment"   class="btnico"><i  class="fa fa-comment" style="color: mediumpurple;"></i></el-button>
              <el-button v-else class="btnico"><i  class="fa fa-comment-o" style="color: mediumpurple;"></i></el-button>
            </el-col>
            <el-col :span= "3" >
              <p>12</p>
            </el-col>
          </el-col>
        </el-row>
      </el-col>
      </el-row>
</template>

<script>
export default {
  data(){
    return{
      photo:"../../../../src/assets/s2.jpg",
      liked:true,
      dislike:true,
      comment:false,
      totalLiked : 25,
      totalDislike:20,
    }
  },
    methods:{
      fk(){
        let x = this.liked;
        if(x){
          this.totalLiked--;
          this.liked  =!x;
        }
        else{
          this.totalLiked++;
          this.liked  =!x;
        }
      },
      dk(){
        let x = this.dislike;
        if(x){
          this.totalDislike--;
          this.dislike  =!x;
        }
        else{
          this.totalDislike++;
          this.dislike  =!x;
        }

      }
    }


}
</script>
<style  scoped>
.photo{
  margin-top:15px;
  height:300px;
  box-shadow: 2px 0px 14px 2px rgba(0,0,0,0.88);
  border-radius: 25px;
  /* border:2px solid red; */
}
.photo:hover{
  -webkit-box-shadow: 50px 50px 50px -9px rgba(0,0,0,0.57);
  box-shadow: 50px 50px 50px -9px rgba(0,0,0,0.57);
}
.gphoto{
  border-radius: 25px;
  overflow: block;
}
.btnico{
  font-size: 20px;
  height:50px;
  width:50px;
  border:none;
  background-color: Transparent;
  background-repeat:no-repeat;
  border: none;
  cursor:pointer;
  margin-left:20px;
}
.btnico:hover{
  font-size: 35px;
}
.dislike{
  background-color:brown;
}
.fa-thumbs-o-up:before {
    content: "\f087";

}
</style>
