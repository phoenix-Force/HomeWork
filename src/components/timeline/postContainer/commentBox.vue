<template>
  <el-row>
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
          <el-button v-if ="comment"   class="btnico" slot="reference" @click = "cmnt()"><i  class="fa fa-comment" style="color: mediumpurple;"></i></el-button>
          <el-button v-else class="btnico" slot="reference"  @click = "cmnt()"><i  class="fa fa-comment-o" style="color: mediumpurple;"></i></el-button>
        </el-popover>
      </el-col>
      <el-col :span= "3" >
        <p>12</p>
      </el-col>
    </el-row>
    <el-row v-if="comment" style="margin-top:10px;height:479px;-webkit-box-shadow: 2px 0px 14px 2px rgba(0,0,0,0.88);box-shadow: 2px 0px 14px 2px rgba(0,0,0,0.88);border-radius: 10px;">
      <el-row style="height:100px;">
        <el-col :span="20">
          <textarea type="textarea" :rows=3 class ="txtar" style="" ></textarea>
        </el-col>
      </el-row>
      <el-row style="height:50px;"><!-- Comment Button   -->
        <el-button type="primary" style="float:right;margin-right:8%;">Comment</el-button>
      </el-row>
      <el-col :span="24" style="overflow: scroll;height: 73%;">
        <el-row :key="index" v-for="(x,index) in loop" style="margin-top:10px;-webkit-box-shadow: 2px 0px 14px 2px rgba(0,0,0,0.88);box-shadow: 2px 0px 14px 2px rgba(0,0,0,0.88);border-radius: 10px;" ><!-- Comment profile Info and do a loop here  -->
        <el-col :span="3">
          <el-avatar shape="square" :size="75" :src="url" style="margin-top:15px;margin-left:5%;"></el-avatar>
        </el-col>
          <el-col :span="20" >
            <el-row style="height:10%;" class ="mdq">
            <p>Paradox</p>
            </el-row>
            <el-row style="height:80%;" class ="mdq">
              <p>First Comments</p>
            </el-row>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </el-row>
</template>
<script>
export default {
 
  data(){
    return{
      loop:[1,2,3,4,5,6],
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
      },
      cmnt(){
        let x = this.comment;
        if(x){
          this.comment = !x;

        }else{
          this.comment = !x;
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
    margin-left:8%;
  }
}
.txtar{
  margin-left:10%;
  margin-top:10px;
  width:100%;
  height:100%;
  background-color:rgb(204,212,255);
  font-size: 15px;
  font-family:Verdana, Geneva, Tahoma, sans-serif;
}
</style>
