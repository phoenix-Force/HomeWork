<template>
  <div>
    <el-col :span="6" :key = "index" v-for="(x,index) in a" style="height:300px;margin-top:10px;padding-left:5px;">
      <s-photo @click = "fk()"></s-photo>
    </el-col>
    <!-- <s-photo  :key="index" v-for="(x,index) in a" @click = "fk()"></s-photo> -->
  </div>

</template>

<script>
import photo from "../Gallery/photo.vue"
export default {
  data(){
    return{
      a:[1,2,3,5,6]
    }
  },
  components:{
    sPhoto:photo
  },
  methods:{
    fk(){
      alert("hello");
    }
  }
}
</script>
<style  scoped>

</style>
