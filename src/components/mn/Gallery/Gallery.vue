<template>
  <div>
    <s-photo  :key="index" v-for="(x,index) in a" @click = "fk()"></s-photo>
  </div>

</template>

<script>
import photo from "../Gallery/photo.vue"
export default {
  data(){
    return{
      a:[1,5,6]
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
