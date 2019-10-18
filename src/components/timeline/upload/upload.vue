<template>
  <el-row :gutter="6" style="height:400px;">
    <el-row style="height:350;" :gutter="6">
      <el-col :span="19" style="height:300px;">

      </el-col>
      <el-col :span="5" style="height:300px;">

      </el-col>
      <!-- <el-col :span="4">
        <el-upload>upload</el-upload>
      </el-col>--->
    </el-row>
    <el-row style="height:50;">
      <el-col :span="6"><el-button @click = "txtfrm=!txtfrm" ><i class="	fa fa-font"></i></el-button></el-col>
      <el-col :span="6"><el-button><i class="fa fa-camera"></i></el-button></el-col>
      <el-col :span="6"><el-button><i class="	fa fa-microphone"></i></el-button></el-col>
      <el-col :span="6"><el-button><i class="fa fa-film"></i></el-button></el-col>
    </el-row>
    <el-dialog width="60%" height="60%" :visible.sync="txtfrm">
      <el-form :model="txtData">
        <textarea :style="setfont" v-model="txtData.txt" style="height:150px;;width:100%;color:white;border-radius:15px;" autocomplete="off" :rows="4"></textarea>
        <el-col :span="4">
          <el-select v-model="txtData.fntFamily" placeholder="please select your zone">
          <el-option label="Butterfly Kids" style="font-family: Butterfly Kids;" value="shanghai"></el-option>
          <el-option label="Cabin Sketch" style="font-family: Cabin Sketch;" value="shanghai"></el-option>
          <el-option label="Sacramento" style="font-family: Sacramento;" value="Sacramento"></el-option>
          <el-option label="Zone two" value="beijing"></el-option>
        </el-select>
        </el-col>
        <el-col :span="4">
          <el-input-number v-model="txtData.fntSize" controls-position="right" :min="20" :max="200"></el-input-number>
        </el-col>
        <el-col :span="2">
          <el-color-picker v-model="txtData.fntColor" color-format = "rgb" show-alpha></el-color-picker>
        </el-col>
        <el-col :span="2">
          <el-color-picker v-model="txtData.bckColor" color-format = "rgb" show-alpha></el-color-picker>
        </el-col>
        <el-col :span="2">
          <el-button @click = "bold()" :class="{clicked:isbold}"><i class="fa fa-bold"></i></el-button>
        </el-col>

        <h2>{{txtData.fntWeight}}</h2>
      </el-form>
    </el-dialog>
  </el-row>
</template>
<script>
export default {
  data(){
    return{
      txtfrm:false,
      isbold:false,
      fntFamily:'verdana',
      txtData:{
        txt:'',
        fntSize:20,
        fntFamily:'verdana',
        fntColor:'rgba(0,0,0,1)',
        fntStyle:'',
        fntWeight:'',
        bckColor:'rgb(204,212,255)'
      }
    }
  },
  methods:{
    bold(){
      let z = this.txtData;
      z.fntWeight = 'bold';
    }

  },
  computed:{
    setfont: function() {
      let z = this.txtData;
      return {
        fontFamily:z.fntFamily,
        fontSize:z.fntSize+'px',
        color:z.fntColor,
        backgroundColor: z.bckColor,
        fontWeight:z.fntWeight

      }
    }
  }
}
</script>
<style scoped>
.clicked{
  background-color:rgb(51,119,255)

}
</style>
