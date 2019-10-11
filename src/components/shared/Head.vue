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
  <el-menu-item index="2"><router-link to="/profile">Paradox</router-link></el-menu-item>
  <el-menu-item index="1" active ><router-link to="/home">Home</router-link></el-menu-item>
  <el-menu-item index="3" ></el-menu-item>
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
  <el-menu-item style="float:right" index="5" ><el-button @click="dialogFormVisible = true" style="border-radius: 30px">Login</el-button></el-menu-item>
</el-menu>

<el-dialog width="30%" :visible.sync="dialogFormVisible">
  <span slot="header" class="dialog-header">
    <h2>Login</h2>
  </span>
  <el-form :model="form">
    <el-form-item label="User name" :label-width="formLabelWidth">
      <el-input v-model="form.user_name" autocomplete="on"></el-input>
    </el-form-item>
    <el-form-item label="Password" :label-width="formLabelWidth">
      <el-input v-model="form.name" autocomplete="on"></el-input>
    </el-form-item>
    <el-form-item class = "kk">
      <a href="" style="float:right;">forgot password?</a>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" style="width:100%;" :label-width="formLabelWidth" width="100%" @click="dialogFormVisible = false">Submit</el-button>
    </el-form-item>
    <el-form-item>
      <el-button  :label-width="formLabelWidth" style="width:100%;" @click="dialogFormVisible = false">Cancel</el-button>
    </el-form-item>

    <!-- <el-form-item label="Zones" :label-width="formLabelWidth">
      <el-select v-model="form.region" placeholder="Please select a zone">
        <el-option label="Zone No.1" value="shanghai"></el-option>
        <el-option label="Zone No.2" value="beijing"></el-option>
      </el-select>
    </el-form-item> -->
  </el-form>
</el-dialog>

</div>
</template>

<script>
  export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1',
        dialogFormVisible:false,
        form: {
          name: '',
          user_name:'',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
<style  scoped>
  a:hover{
    cursor: pointer;
    color:red;
  }
  a{
    color:white;
    margin-bottom: 5px;
  }
  .kk{
    margin-top:0px;
    height:10px;
  }
</style>
