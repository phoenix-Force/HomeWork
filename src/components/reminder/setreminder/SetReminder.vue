<template>
  <el-row style="height:60vh;">
    <el-dialog title="Set reminder"  :visible.sync="flagFromStore">
      <el-form :model="reminderData">
        <el-form-item label="Header">
          <el-input v-model="reminderData.header"></el-input>
        </el-form-item>
        <el-form-item label="Note">
          <el-input v-model="reminderData.note"></el-input>
        </el-form-item>
        <el-form-item label="Date & Time">
          <el-date-picker type="date" v-model="reminderData.date" placeholder="Pick a date" ></el-date-picker>
          <el-time-picker type="date" v-model="reminderData.time" placeholder="Pick a time" ></el-time-picker>
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
      reminderData:{
        header:'',
        note:'',
        date:null,
        time:null,
        isActive:true,
        snooze:false
      }
    }
  },
  computed:{
    ...mapGetters({flagFromStore:'getFlag'})
  },
  methods:{
    ...mapActions(['setFlag','setReminders']),
    flagCntrl(){
      this.setFlag();
    },
    setData(){
      let x = this.reminderData;
      axios.post("https://vue-http-3aefd.firebaseio.com/reminders.json",this.reminderData).then(res=>{
        x.header='',
        x.note='',
        x.date=null,
        x.time=null,
        x.isActive=true,
        x.snooze=false
        console.log(typeof(x.date))
        console.log(typeof(x.time))
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
