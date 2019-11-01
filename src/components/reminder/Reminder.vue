<template>
  <div>
    <el-col :span="24">
      <el-row :gutter="10">
        <show-reminder :key="index" v-for="(x,index) in reminders" :reminds="x" :id="index"></show-reminder>

      </el-row>
      <el-row style="margin-top:15px;">
        <el-button class="addico" @click = "flagCntrl()"><i class="fa fa-plus"></i></el-button>
      </el-row>
      <set-reminder v-bind:flag="reminderFlag"></set-reminder>
    </el-col>
  </div>
</template>
<script>
import showremindercard from "./shoreminder/ShowReminder.vue"
import setreminder from "./setreminder/SetReminder.vue"
import {mapActions} from "vuex"
import { mapGetters } from 'vuex'
import axios from "axios"
export default {

  data(){

    return{
      reminderFlag:false,
    }
  },
  components:{
    showReminder:showremindercard,
    setReminder:setreminder
  },
  computed:{
    ...mapGetters(['getFlag','reminders'])
  },
  methods:{
    ...mapActions(['setFlag','loaddb']),
    flagCntrl(){
      this.setFlag();
    },

  },
  beforeMount(){
    this.loaddb();
  //   axios.get("https://vue-http-3aefd.firebaseio.com/reminders.json")
  //   .then(response=>{
  //     let reminders= []
  //     const data = response.data;
  //     for(let key in data){
  //       const reminds =data[key];
  //       var d = new Date(reminds.date );
  //       reminds.id = key;
  //       reminds.date = d.toLocaleString();
  //       reminders.push(reminds);
  //       this.reminders = reminders
  //     }

  //   }).catch(error=>console.log(error))
  }

}
</script>
<style scoped>
  .addico{
    float:right;
    height: 80px;
    width:80px;
    border-radius: 80px;
    text-align: center;
    font-size: 43px;
    margin-right:20px;
    -webkit-box-shadow: 50px 50px 50px -9px rgba(0,0,0,0.57);
  box-shadow: 50px 50px 50px -9px rgba(0,0,0,0.57);
  }
  .addico:hover{
  transform: rotate(125deg);
  transition:.7s;

}
@keyframes colortran {
  from{
    color:white;
  }
  to{
    color:red;
  }
}
  .slide-enter-active{
    animation: slide-in .5s ease-out forwards;
    transition: opacity .5s;
  }

  .slide-leave-active{
    animation: slide-out .5s ease-out forwards;
    transition: opacity .5s;
    opacity: 0;
  }
  @keyframes slide-in {
    from{
      transform: translateY(100px);
    }
    to{
      transform: translateY(0);
    }

  }
  @keyframes slide-out {
    from{
      transform: translateY(0);
    }
    to{
      transform: translateY(-100px);
    }
  }

</style>
