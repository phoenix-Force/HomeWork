<template>
<div class="header">
<div class="line"></div>
<el-menu
  :default-active="activeIndex2"
  class="el-menu-demo"
  mode="horizontal"
  @select="handleSelect"
  background-color="#545c64"
  text-color="#fff"
  active-text-color="#ffd04b">
  <el-menu-item index="1">PARADOX</el-menu-item>
  <el-menu-item index="2">Home</el-menu-item>
  <el-menu-item index="3"></el-menu-item>
  <el-submenu index="4">
    <template slot="title">Home</template>
    <el-menu-item index="4-1">item one</el-menu-item>
    <el-menu-item index="4-2">item two</el-menu-item>
    <el-menu-item index="4-3">item three</el-menu-item>
    <el-submenu index="4-4">
      <template slot="title">item four</template>
      <el-menu-item index="4-4-1">item one</el-menu-item>
      <el-menu-item index="4-4-2">item two</el-menu-item>
      <el-menu-item index="4-4-3">item three</el-menu-item>
    </el-submenu>
  </el-submenu>
  <el-menu-item index="5" >Info</el-menu-item>
  <el-menu-item index="6"><a href="https://www.ele.me" target="_blank">Orders</a></el-menu-item>
</el-menu>

</div>
</template>

<script>
  export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
