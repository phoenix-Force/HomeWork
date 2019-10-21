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
      <el-col :span="6"><el-button @click = "picFrm=!picFrm"><i class="fa fa-camera"></i></el-button></el-col>
      <el-col :span="6"><el-button><i class="	fa fa-microphone"></i></el-button></el-col>
      <el-col :span="6"><el-button><i class="fa fa-film"></i></el-button></el-col>
    </el-row>

    <el-dialog width="60%" height="60%" :visible.sync="txtfrm">
      <el-form :model="txtData">
        <el-row>
          <textarea :style="setfont" v-model="txtData.txt" style="height:150px;;width:100%;color:white;border-radius:15px;" autocomplete="off" :rows="4"></textarea>
        </el-row>
        <el-row>
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
        <el-col :span="2">
          <el-button @click = "italic()" :class="{clicked:isbold}"><i class="fa fa-italic"></i></el-button>
        </el-col>
        <el-col :span="2">
          <el-button @click = "underline()" :class="{clicked:isbold}"><i class="fa fa-underline"></i></el-button>
        </el-col>
        </el-row>
        <el-row :gutter="10">
          <el-button type="primary" style="float:right;margin-left:10px;" @click = "uploadData">Post</el-button>
          <el-button type="danger" style="float:right;" @click = "cncl()">Cancel</el-button>
        </el-row>
      </el-form>
    </el-dialog>

    <el-dialog :visible.sync="picFrm" title="Upload Picture">
      <el-row style="height:500px;" :gutter="10">
        <el-col :span="16" style="height:100%;border: 1px solid #540CBC;">
          <el-image :src ="picDta.url" style="margin-top:10px;" :style="detImg">
            <div slot="error" class="image-slot">
              <i class="el-icon-picture-outline"></i>
            </div>
          </el-image>
        </el-col>
        <el-col :span="8">
          <el-row>
            <el-upload
              class="upload-demo"
              action="https://jsonplaceholder.typicode.com/posts/"
              :on-change="handleChange"
              :file-list="fileList">
              <el-button size="small" type="primary">Click to upload</el-button>
            </el-upload>
          </el-row>
          <el-row>
            <el-input-number v-model="picDta.border" controls-position="right"></el-input-number>
          </el-row>
        </el-col>
        <h4>{{picDta.url}}</h4>
      </el-row>
    </el-dialog>
  </el-row>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  data(){
    return{
      txtId:0,
      txtfrm:false,
      picFrm:false,
      isbold:false,
      bclick:false,
      iclick:false,
      uclick:false,
      fntFamily:'verdana',
      txtData:{
        id:0,
        txt:'',
        fntSize:20,
        fntFamily:'verdana',
        fntColor:'rgba(0,0,0,1)',
        fntStyle:'',
        fntDeco:'',
        fntWeight:'',
        bckColor:'rgb(204,212,255)',
        time:'',
        like:20,
        unlike:'',
        comments:''
      },
      picDta:{
        url:'../../../../src/assets/s3.jpg',
        border:0
      }
    }
  },
  methods:{
    bold(){
      let z = this.txtData;
      if(!this.bclick){
        z.fntWeight = 'bold';
        this.bclick = !this.bclick;
      }
      else{
        z.fntWeight = '';
        this.bclick = !this.bclick;
      }

    },
    italic(){
      let z = this.txtData;
      if(!this.iclick){
        z.fntStyle = 'italic';
        this.iclick = !this.iclick;
      }
      else{
        z.fntStyle = '';
        this.iclick = !this.iclick;
      }
      // z.fntStyle = 'italic';
    },
    underline(){
      let z = this.txtData;
      if(!this.uclick){
        z.fntDeco = 'underline';
        this.uclick = !this.uclick;
      }
      else{
        z.fntDeco = '';
        this.uclick = !this.uclick;
      }
      // z.fntDeco = 'underline';
    },
    ...mapActions(['setData']),
    uploadData(){
      var d = new Date();
      let z = this.txtData;
      z.time = d;
      let idx = this.txtId ++;
      if(z.txt!=''){
        z.id = idx;
      this.setData(z);
      z.txt='';
      this.txtfrm = false;
      z.fntSize=20,
      z.fntFamily='verdana',
      z.fntColor='rgba(0,0,0,1)',
      z.fntStyle='',
      z.fntDeco='',
      z.fntWeight='',
      z.bckColor='rgb(204,212,255)'
      }else{
        this.$message.error("you have to write Something")
      }

    },
    cncl(){
      let z = this.txtData;
      this.txtfrm = false;
      z.txt='';
      z.fntSize=20,
      z.fntFamily='verdana',
      z.fntColor='rgba(0,0,0,1)',
      z.fntStyle='',
      z.fntDeco='',
      z.fntWeight='',
      z.bckColor='rgb(204,212,255)'
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
        fontWeight:z.fntWeight,
        fontStyle:z.fntStyle,
        textDecoration:z.fntDeco

      }
    },
    detImg:function(){
      let x = this.picDta;
      return{
        borderRadius:x.border+'px'
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
