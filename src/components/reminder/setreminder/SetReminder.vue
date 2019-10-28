<template>
  <el-row style="height:60vh;">
    <el-dialog title="Shipping address"  :visible.sync="flagCntrl">
      <el-form :model="reminderData">
        <el-form-item label="Promotion name" :label-width="formLabelWidth">
          <el-input  autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="Zones" :label-width="formLabelWidth">
          <el-selec placeholder="Please select a zone">
            <el-option label="Zone No.1" value="shanghai"></el-option>
            <el-option label="Zone No.2" value="beijing"></el-option>
          </el-selec>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click = "flagCntrl()" >Cancel</el-button>
        <el-button type="primary" >Confirm</el-button>
      </span>
    </el-dialog>
  </el-row>

</template>
<style>

</style>
<script>
import {mapActions} from "vuex"
import { mapGetters } from 'vuex'

let x = document.querySelector(".el-dialog__headerbtn");

export default {




  props: ['flag'],
  data(){
    return{
      reminderData:{

      }
    }
  },
  computed:{
    ...mapGetters({flagFromStore:'getFlag'})
  },
  methods:{
    ...mapActions(['setFlag']),
    flagCntrl(){
      this.setFlag();
    }
  }
}

</script>
