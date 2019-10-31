<template>
  <el-row style="height:60vh;">
    <el-dialog title="Set reminder"  :visible.sync="nm">
      <el-form :model="reminderData">
        <el-form-item label="Title">
          <el-input v-model="reminderData.header" placeholder="Your reminders title"></el-input>
        </el-form-item>
        <el-form-item label="Note">
          <el-input v-model="reminderData.note" placeholder="Your reminders note"></el-input>
        </el-form-item>
        <el-form-item label="Date & Time">
          <el-date-picker type="datetime"
            placeholder="Select date and time"
            default-time="12:00:00" v-model="dte">
          </el-date-picker>
          <!-- <el-time-picker type="time" v-model="reminderData.time" placeholder="Pick a time" ></el-time-picker> -->
        </el-form-item>
        <el-form-item label="Active">
          <el-switch v-model="reminderData.isActive"></el-switch>
        </el-form-item>
        <!-- <el-form-item label="Date">
          <el-date-picker
            v-model="reminderData.date"
            type="datetime"
            clearable="true"
            placeholder="Select date and time"
            :picker-options="pickerOptions">
          </el-date-picker>
        </el-form-item> -->
        <!-- <el-form-item label="Time">
          <el-time-select
          v-model="reminderData.time"
          :picker-options="{
            start: '08:30',
            step: '00:15',
            end: '18:30'
          }"
          placeholder="Select time"> -->
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click = "flagCntrl()" >Cancel</el-button>
        <el-button type="primary" @click= "setData()" >Confirm</el-button>
      </span>
    </el-dialog>
  </el-row>

</template>
<style>

</style>
<script>
import {mapActions} from "vuex"
import { mapGetters } from 'vuex'
import axios from "axios"

export default {
  props: ['flag'],

  data(){
    return{
      dte:'',
      reminderData:{
        header:'',
        note:'',
        date:null,
        isActive:true,
        snooze:false
      }
    }
  },
  computed:{
    ...mapGetters({flagFromStore:'getFlag'}),
    nm: {
          get(){
            return this.flagFromStore
          }
          // set(){
          //   ren this.flagFromStore = false;
          // }

    }
  },
  methods:{
    ...mapActions(['setFlag','setReminders']),
    flagCntrl(){
      this.setFlag();
    },
    setData(){
      let x = this.reminderData;
      x.date = Math.abs(this.dte);

// what's left is seconds
      // dte = x.getDate();
      // month = x.getMonth();
      // year = x.getFullYear();
      // hour = x.getHours();
      // min=x.getMinutes();
      // x.getsec();
      axios.post("https://vue-http-3aefd.firebaseio.com/reminders.json",this.reminderData).then(response=>{
        // this.setReminders(this.reminderData);
        x.header='';
        x.note='';
        x.date=null;
        x.timeLeft=null;
        x.isActive=true;
        x.snooze=false;
      }).catch(error=>console.log(error));
      this.setReminders(this.reminderData);
      this.flagCntrl();
    },
    close(){
      this.setFlag();
    }
  }
}

</script>
