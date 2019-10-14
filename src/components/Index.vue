<template>
<div class="main">
  <nav-head></nav-head>
  <router-view></router-view>

</div>

</template>
<script>

import navad from "./shared/Head.vue"
export default {
  components:{
    navHead:navad
  }
}
</script>
<style scoped>

</style>
