<template>
    <el-col :span="6">
      <el-card class="crd">
        <div slot="header" class="clearfix">
          <span >{{reminds.header}}</span>
          <el-button style="float: right; padding: 3px 0"  @click="removeItem(id)" type="text"><i class="fa fa-times"></i></el-button>
        </div>
        <span><p>{{reminds.note}}</p></span>
        <p>Active: <el-switch v-model="reminds.isActive"></el-switch><span style="float:right;">Time-left:</span></p>


          <div style="padding: 14px;">


            <div class="bottom clearfix">
              <!-- <time class="time">{{ currentDate }}</time> -->
              {{lm}}
              <el-button class="button" style="float:right;margin-bottom:10px;">Snooze</el-button>
            </div>
          </div>
      </el-card>
    </el-col>
</template>
<script>
import axios from "axios"
import {mapActions} from "vuex"
export default {
  props:['reminds','id'],
    data () {
      return {
        dtetm:'',
        lm:''
      }
    },
  computed:{
    reminders(){
      axios.get("https://vue-http-3aefd.firebaseio.com/reminders.json")
      .then(response => {
        consloe.log("hgsvxdg");
        console.log(response);
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
    },
  },
  methods:{
    ...mapActions(['dltReminds']),
    removeItem(id){
      this.dltReminds(id);
    },
    pollData (){
      var z = this.dtetm;
        this.dtetm = setInterval(() => {
          let x = new Date();
          let day = x.getDate();
          let month = x.getMonth();
          let year = x.getFullYear();
          let hour = x.getHours();
          let min=x.getMinutes();
          let sec  =x.getSeconds();
          // let mlsec  =x.getMilliseconds();
          let fdate = (`${day}/${month}/${year}   ${hour}:${min}:${sec}`);
          this.lm = fdate;
          console.log(this.lm)
        }, 1);
    }
  },
  created(){
    this.pollData();
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
