<template>
  <div class="main">
    <el-button :plain="true" @click="open">Show message</el-button>
    <el-button :plain="true" @click="openVn">VNode</el-button>
  </div>
</template>
<script>
export default {
    methods: {
      open() {
        this.$message('This is a message.');
      },
      openVn() {
        const h = this.$createElement;
        this.$message({
          message: h('p', null, [
            h('span', null, 'Message can be '),
            h('i', { style: 'color: teal' }, 'VNode')
          ])
        });
      }
    }
  }
</script>
 <style scoped>

 </style>
