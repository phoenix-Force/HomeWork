<template>
  <div>
    <el-row :gutter="4">
        <s-photo  :key="index" v-for="(x,index) in a"></s-photo>
    </el-row>

  </div>

</template>

<script>
import photo from "../Gallery/photo.vue"
export default {
  data(){
    return{
      a:[1]
    }
  },
  components:{
    sPhoto:photo
  }
}
</script>
<style  scoped>

</style>
