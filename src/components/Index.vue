<template>
<div class="main">
   <nav-head></nav-head>
   <main-contain></main-contain>

</div>

</template>
<script>
import contain from "./mn/Main.vue"
import navad from "./shared/Head.vue"
export default {
  components:{
    mainContain:contain,
    navHead:navad
  }
}
</script>
<style scoped>

</style>
