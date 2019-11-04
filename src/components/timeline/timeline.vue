<template>
<el-col :span = "16" style="margin-left:15%;position: absolute;">
  <el-row>
    <final-upload></final-upload>
  </el-row>
  <el-col>
    <el-row style="margin-top:35px;" :key = "index" v-for ="(x,index) in pictos">
      <post-container v-if="x.type=='pic'" :post="x"></post-container>
      <text-container  v-if="x.type=='text'" :post="x"></text-container>
    </el-row>
    <!-- <el-backtop target=".page-component__scroll .el-scrollbar__wrap" :bottom="100">
      <button style='font-size:24px'><i class='fas fa-angle-double-up'></i></button>
  </el-backtop> -->
  <el-pagination
  style="padding-left:40%;"
  small
  layout="prev, pager, next"
  :total="50">
</el-pagination>
  </el-col>
</el-col>

</template>
<script>
import upload from "./uploadText/txtUplod.vue"
import postcontainer from "./postContainer/postContainer.vue"
import textcontainer from "./postContainer/textContainer.vue"
import axios from "axios"
import { mapGetters, mapActions } from 'vuex'
export default {
  data(){
    return{
      uploads:[{type:'text'},{type:"pic"},{type:'text'},{type:'text'},{type:"pic"},{type:"pic"}]
    }
  },
  computed:{
    ...mapGetters({pictos:'getTxtData'})
  },
  components:{
    finalUpload:upload,
    postContainer:postcontainer,
    textContainer:textcontainer
  },
  methods:{
    ...mapActions(['getTimeline'])
  },
  beforeMount(){
    this.getTimeline();
    console.log(this.pictos);
  }
}
</script>
<style scoped>

</style>
