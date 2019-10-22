<template>
  <el-row :gutter="6" style="height:400px;">
    <el-row style="height:350;" :gutter="6">
      <el-col :span="19" style="height:300px;">

      </el-col>
      <el-col :span="5" style="height:300px;">

      </el-col>
      <el-row style="height:50;">
      <el-col :span="6"><el-button @click = "txtfrm=!txtfrm" ><i class="	fa fa-font"></i></el-button></el-col>
      <el-col :span="6"><el-button @click = "picFrm=!picFrm"><i class="fa fa-camera"></i></el-button></el-col>
      <el-col :span="6"><el-button><i class="	fa fa-microphone"></i></el-button></el-col>
      <el-col :span="6"><el-button><i class="fa fa-film"></i></el-button></el-col>
    </el-row>
    </el-row>


    <el-dialog width="60%" height="60%" :visible.sync="txtfrm" title="Upload Text">
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
      <el-row style="height:40vh;">
        <el-col  style="height:100%;width:60%;border: 1px solid #540CBC;">
          <el-image
            style="width: 100%; height: 100%"
            :src="picDta.url" :style="detImg">
          </el-image>
        </el-col>
        <el-col style="margin-left:25px;width:30%">
          <el-row>
            <input style="width:100%;" type="file"  multiple accept="image/*" @change="onFileChange" />
          </el-row>
          <el-row>
            <el-input-number v-model="picDta.border" controls-position="right" style="width:100%;margin-top:25px;"></el-input-number>
          </el-row>
          <el-row>
            <el-button type="primary" style="width:100%;margin-top:25px;" @click = "postOnDb()">Post</el-button>
          </el-row>
          <el-row>
            <el-button style="width:100%;margin-top:25px;" type="default">Cancel</el-button>
          </el-row>
        </el-col>

      </el-row>
    </el-dialog>
  </el-row>
</template>
<script>
import axios from "axios"
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
        type:'',
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
        type:'',
        url:null,
        border:'',
        file:null
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
        alert(z.txt)
      this.setData(z);
      axios.post("https://vue-http-3aefd.firebaseio.com/uploads.json",this.txtData).then(res=>console.log(res)).catch(error=>console.log(error));
      }else{
        this.$message.error("you have to write Something")
      }
      z.txt='';
      this.txtfrm = false;
      z.fntSize=20,
      z.fntFamily='verdana',
      z.fntColor='rgba(0,0,0,1)',
      z.fntStyle='',
      z.fntDeco='',
      z.fntWeight='',
      z.bckColor='rgb(204,212,255)'

    },
    onFileChange(e) {
      let x = this.picDta;
      const file = e.target.files[0];
      x.url = URL.createObjectURL(file);
      x.file = file;
      console.log(file)
      console.log(x.url)
    },
    postOnDb(){
      let x = this.picDta;
      if(x.url!=null){
        axios.post("https://vue-http-3aefd.firebaseio.com/uploads.json",this.picDta).then(res=>console.log(res)).catch(error=>console.log(error));
      }else{
        this.$message.error("choose a picture first")
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
