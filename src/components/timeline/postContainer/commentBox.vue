<template>
  <el-row style="height:100%;-webkit-box-shadow: 2px 0px 14px 2px rgba(0,0,0,0.88);box-shadow: 2px 0px 14px 2px rgba(0,0,0,0.88);border-radius: 10px;">
    <el-col :span= "4">
      <el-popover
        placement="top-start"
        title="Likes"
        width="200"
        trigger="hover">
        <p :key = "index" v-for = "(x,index) in likes">{{x}}</p>
        <el-button v-if ="liked" class="btnico" @click ="fk()"  slot="reference"><i class="fa fa-thumbs-up" style="color: mediumpurple;"></i></el-button>
        <el-button v-else @click ="fk()" class="btnico"  slot="reference"><i  class="fa fa-thumbs-o-up" style="color: mediumpurple;"></i></el-button>
      </el-popover>

    </el-col>
    <el-col :span= "3">
      <p>{{50}}</p>
    </el-col>
    <el-col :span= "4">
      <el-popover
        placement="top-start"
        title="Dislikes"
        width="200"
        trigger="hover">
        <p :key = "index" v-for = "(x,index) in dislikes">{{x}}</p>
        <el-button v-if ="dislike" class="btnico" @click ="dk()" slot="reference"><i  class="fa fa-thumbs-down" style="color: mediumpurple;"></i></el-button>
        <el-button v-else  class="btnico" @click ="dk()" slot="reference"><i  class="fa fa-thumbs-o-down" style="color: mediumpurple;"></i></el-button>
      </el-popover>

    </el-col>
    <el-col :span= "3">
      <p>15</p>
      </el-col>
    <el-col :span= "4">
      <el-popover
        placement="top-start"
        title="Title"
        width="200"
        trigger="hover"
        content="<p>hello</p>">
        <el-button v-if ="comment"   class="btnico" slot="reference"><i  class="fa fa-comment" style="color: mediumpurple;"></i></el-button>
        <el-button v-else class="btnico" slot="reference"><i  class="fa fa-comment-o" style="color: mediumpurple;"></i></el-button>
      </el-popover>

    </el-col>
    <el-col :span= "3" >
      <p>12</p>
    </el-col>
  </el-row>
</template>
<script>
export default {
  data(){
    return{
      liked:true,
      dislike:false,
      comment:false,
      likes:['manja','paradox','Vishnu','dox'],
      dislikes:['manja','paradox','Vishnu','dox'],
      comments:[{name:"manja",comment:"Love this is picture"},{name:"dox",comment:"Wow picture"},{name:"Tufan",comment:"Thts REality Stone"}],
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
<style lang="scss" scoped>
.btnico{
  font-size: 20px;
  height:50px;
  width:50px;
  border:none;
  background-color: Transparent;
  background-repeat:no-repeat;
  border: none;
  cursor:pointer;
  margin-left:1%;
}
.btnico:hover{
  font-size: 35px;
  animation: heartBeat 2s infinite;
}
.dislike{
  background-color:brown;
}
.fa-thumbs-o-up:before {
    content: "\f087";

}
.btnico:active{
  animation: 	swing 2s infinite;
}
@media screen and (max-width: 1240px) {
  .mdq{
    margin-left:10%;
  }
}
</style>
